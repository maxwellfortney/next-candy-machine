/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function DawnOfGleeTales() {
    return (
        <div
            id="DawnOfGleeTales"
            className="flex items-center justify-center w-full bg-[#e4c177] h-screen relative bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage:
                    "url(" + `https://i.ibb.co/MRspbhb/Coverpage.png` + ")",
            }}
        >
            <div className="absolute w-full h-screen bg-[#e4c177] opacity-90"></div>
            <img
                src="/assets/branch.png"
                alt="branch"
                className="absolute top-0 w-72 lg:w-80 -right-1"
            />
            <div className="z-10 flex items-center justify-center w-11/12">
                <div className="flex flex-col items-center justify-center w-1/2">
                    <img
                        src="/assets/dawnOfGleeTales.gif"
                        alt="Dawn of Glee Tales"
                        className="w-4/5"
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2">
                    <h2 className="self-start mb-8 text-5xl text-black font-fredoka">{`Dawn of 'Glee Tales'`}</h2>
                    <p className="text-2xl font-evolveSans">{`In a faraway legendary land of 'Hemland' a never seen arcadia, on one star stuck night our 'Hercules' was lost her home forever and found her way into an unexpected adventure and met a trickster yet a saviour and a hero 'Dino' `}</p>
                    <div className="flex flex-col items-center text-2xl mt-7 font-evolveSans">
                        <p>"Then it all Begins"</p>
                        <p className="leading-none">&</p>
                        <p>creates</p>
                        <p>World of Glee</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
