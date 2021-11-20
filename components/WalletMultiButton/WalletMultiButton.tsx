import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useEffect, useMemo, useState } from "react";
import Countdown from "react-countdown";
import useCandyMachine from "../../hooks/useCandyMachine";

import { CSSTransition } from "react-transition-group";

export default function WalletMultiButton() {
    const { mintStartDate } = useCandyMachine();
    const { wallet, connected, connecting, connect, publicKey } = useWallet();

    const { visible, setVisible } = useWalletModal();

    const [isMintLive, setIsMintLive] = useState(false);

    useEffect(() => {
        if (new Date().getTime() > new Date(mintStartDate).getTime()) {
            setIsMintLive(true);
        }
    }, []);

    async function handleClick() {
        console.log("click");

        if (isMintLive) {
            if (!connected && !wallet) {
                setVisible(!visible);
            }

            if (wallet && !connected) {
                window.open(wallet.url, "_blank");
            }
        }
    }

    const content = useMemo(() => {
        if (!isMintLive)
            return (
                <Countdown
                    date={mintStartDate}
                    onComplete={() => setIsMintLive(true)}
                />
            );
        if (connecting) return "Connecting ...";
        if (connected && publicKey)
            return `${publicKey?.toString().slice(0, 10)}...`;
        if (wallet) return `Install ${wallet.name} Wallet`;
        return "Choose Wallet";
    }, [connecting, connected, wallet, isMintLive, mintStartDate, publicKey]);

    return (
        <div className="flex items-center self-start mt-6">
            <button
                onClick={handleClick}
                disabled={!isMintLive}
                className={`bg-gradient-to-br from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF] px-4 py-3 font-bold text-white transition-opacity duration-200 rounded-lg solana-gradient ${
                    isMintLive ? "hover:opacity-60" : "cursor-default"
                }`}
            >
                {content}
            </button>

            <CSSTransition
                in={wallet !== null}
                timeout={200}
                classNames="fade"
                unmountOnExit
            >
                <svg
                    onClick={() => setVisible(!visible)}
                    className="w-5 h-5 ml-4 transition-all duration-300 cursor-pointer hover:rotate-180 tranform hover:opacity-60"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                    />
                </svg>
            </CSSTransition>
        </div>
    );
}
