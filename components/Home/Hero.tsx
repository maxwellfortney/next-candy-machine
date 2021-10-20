import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    useWalletModal,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import useCandyMachine from "../../hooks/useCandyMachine";
import Navbar from "../Navbar/Navbar";

export default function Home() {
    const { isSoldOut, mintStartDate, isMinting, startMint, nftsData } =
        useCandyMachine();
    const { setVisible, visible } = useWalletModal();
    const { connected, connecting, wallet, ready, publicKey, disconnect } =
        useWallet();

    const [isMintLive, setIsMintLive] = useState(false);

    async function handleClick() {
        if (!wallet) {
            setVisible(true);
        } else if (!connecting && !connected && !ready) {
            (window as any).open(wallet.url, "_blank").focus();
            await disconnect();
        } else if (connected && ready && publicKey) {
            startMint();
        } else {
            console.log("Clicked");
        }
    }

    useEffect(() => {
        if (new Date(mintStartDate).getTime() < Date.now()) {
            setIsMintLive(true);
        }
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-start w-full h-screen bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage:
                    "url(" + `https://i.ibb.co/MRspbhb/Coverpage.png` + ")",
            }}
        >
            <Navbar />
            <div className="flex flex-col items-center justify-center flex-1 w-11/12 text-white">
                <h1 className="text-5xl text-center lg:text-6xl font-fredoka">
                    Welcome to Crypto Glee Club
                </h1>

                <p className="w-11/12 mt-8 text-3xl text-center md:w-3/4 font-evolveSans">
                    Glees are a set of 10,000, unique, hand-drawn, 2-character
                    NFTs in the Solana comic world. Our Glee comics will take
                    you on a fun ride you have never been on before, bundled
                    with royalties, merch drops and free physical copies of our
                    comics.
                </p>

                <button
                    onClick={handleClick}
                    className="px-5 font-fredoka text-2xl py-2.5 mt-10 font-bold text-[#b2df3e] transition-colors rounded-lg hover:bg-[#1c0904] bg-[#2d1508]"
                >
                    {isMintLive ? (
                        <>
                            {wallet ? (
                                <>
                                    {connecting ? (
                                        <p>CONNECTING</p>
                                    ) : (
                                        <>
                                            {connected && ready && publicKey ? (
                                                <p>MINT</p>
                                            ) : (
                                                <p>INSTALL {wallet.name}</p>
                                            )}
                                        </>
                                    )}
                                </>
                            ) : (
                                <p>CONNECT</p>
                            )}
                        </>
                    ) : (
                        <Countdown
                            date={mintStartDate}
                            onMount={({ completed }) =>
                                completed && setIsMintLive(true)
                            }
                            onComplete={() => setIsMintLive(true)}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
