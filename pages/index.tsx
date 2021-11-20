import { useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle";
import { NUM_TICKETS, TICKET_PRICE } from "../consts";
import useCandyMachine from "../hooks/useCandyMachine";

export default function Home() {
    const { nftsData, startMint, isMinting, mintStartDate } = useCandyMachine();
    const { wallet, connected, publicKey } = useWallet();

    const buttonContent = useMemo(() => {
        if (isMinting) return "Minting ticket...";
        return "Buy a ticket";
    }, [isMinting]);

    async function handleClick() {
        if (
            wallet &&
            connected &&
            publicKey &&
            new Date().getTime() > new Date(mintStartDate).getTime()
        ) {
            console.log("Starting mint");
            await startMint();
        }
    }

    return (
        <div className="flex flex-col items-center w-full h-screen bg-gradient-to-tr from-[#585858] to-[#1E1E1E]">
            <Navbar />
            <div className="relative flex flex-col items-center justify-center flex-1 text-white">
                <div className="z-20 flex flex-col items-center">
                    <h1 className="text-5xl font-black lg:text-7xl">
                        Feeling lucky?
                    </h1>
                    <p className="mt-5 font-medium">
                        The current payout is{" "}
                        <span className="text-[#0CFF07]">
                            {(
                                (NUM_TICKETS * TICKET_PRICE * 0.9) /
                                TICKET_PRICE
                            ).toFixed(2)}
                            x
                        </span>
                    </p>

                    <button
                        disabled={
                            new Date().getTime() >
                                new Date(mintStartDate).getTime() || !publicKey
                        }
                        onClick={handleClick}
                        className={`transition-opacity duration-200 bg-gradient-to-br from-[#05FF00] to-[#03AB00] px-5 py-3 mt-10 font-black rounded-lg ${
                            new Date().getTime() >
                                new Date(mintStartDate).getTime() &&
                            publicKey &&
                            wallet
                                ? "hover:opacity-70"
                                : "cursor-default"
                        }`}
                    >
                        {buttonContent}
                    </button>
                    <p className="mt-2 font-medium">{TICKET_PRICE}/ticket</p>

                    <p className="mt-4 font-medium">
                        {nftsData.itemsRemaining} tickets remaining
                    </p>
                </div>

                <ProgressCircle />
            </div>
        </div>
    );
}
