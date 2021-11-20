import WalletMultiButton from "../WalletMultiButton/WalletMultiButton";

export default function Navbar() {
    return (
        <div className="flex justify-between w-full mt-10 px-7">
            <div className="flex items-center text-5xl">
                <p className="bg-gradient-to-br from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF] text-transparent bg-clip-text font-black mr-4">
                    SOL
                </p>
                <p className="font-black text-white">Luck</p>
            </div>

            <div className="flex items-center">
                <WalletMultiButton />
            </div>
        </div>
    );
}
