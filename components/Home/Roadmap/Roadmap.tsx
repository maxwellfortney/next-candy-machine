/* eslint-disable @next/next/no-img-element */
export default function Roadmap() {
    return (
        <div
            id="Roadmap"
            className="flex py-10 flex-col w-full text-black overflow-hidden  min-h-screen bg-[#ceeb78] items-center relative"
        >
            <img
                src="/assets/roadmapImage.png"
                alt="Roadmap Image"
                className="absolute w-1/4 right-4 top-1/2 hidden lg:flex max-w-[375px]"
            />

            <img
                src="/assets/antpath.png"
                alt="Ant Path"
                className="absolute h-full opacity-50"
            />

            <h2 className="text-5xl font-fredoka">Road Map</h2>

            <div className="z-10 flex flex-col items-start w-11/12 mt-10">
                <h3 className="text-4xl font-fredoka">Phase - 1</h3>
                <p className="text-2xl font-evolveSans">Oct - Dec 2021</p>
                <div className="flex ml-[10%] flex-col mt-2 font-evolveSans text-lg">
                    <p className="font-bold">Pre sale</p>
                    <ul className="ml-4 list-disc">
                        <li>Say hi to Solana ecosystem, howrare.is</li>
                        <li>Distribute 45 free Glees to 45 lucky humans</li>
                        <li>
                            {`Pick early Glee friends and give them "Early
                            influencers" badge.`}
                        </li>
                        <li>Collaborate with secondary market places.</li>
                    </ul>

                    <p className="mt-6 font-bold">Glee day</p>
                    <ul className="ml-4 list-disc">
                        <li>Mint our 10,000 Glees</li>
                    </ul>

                    <p className="mt-6 font-bold">Post 100% mint</p>
                    <ul className="ml-4 list-disc">
                        <li>Release rarity chart</li>
                        <li>Royalty distribution</li>
                        <li>Get surprise merch drops to glee holders</li>
                    </ul>
                </div>

                <h3 className="mt-10 text-4xl font-fredoka">Phase - 2</h3>
                <p className="text-2xl font-evolveSans">Jan - Mar 2022</p>
                <div className="flex ml-[10%] flex-col mt-2 font-evolveSans text-lg">
                    <p className="font-bold">Comic day</p>
                    <ul className="ml-4 list-disc">
                        <li>Release 2500 GleeComs - Glee Comics</li>
                        <li>Early access to Gleecom sale for Glee holders</li>
                    </ul>

                    <p className="mt-6 font-bold">Post 100% mint</p>
                    <ul className="ml-4 list-disc">
                        <li>
                            Royalty distribution to Glee NFT and GleeComs
                            holders
                        </li>
                        <li>
                            Free physical copy Gleecom distribution to our
                            lovely Glee holders
                        </li>
                        <li>Surprise merch drop.</li>
                    </ul>
                </div>

                <h3 className="mt-10 text-4xl font-fredoka">Phase - 3</h3>
                <p className="text-2xl font-evolveSans">Jul - Oct 2022</p>
                <div className="flex ml-[10%] flex-col mt-2 font-evolveSans text-lg">
                    <p className="font-bold">Limited Edition Comic Series</p>
                    <ul className="ml-4 list-disc">
                        <li>
                            Free Limited Comic series distribution to random
                            Glee NFT holders.
                        </li>
                    </ul>

                    <p className="mt-6 font-bold">Gamification</p>
                    <ul className="ml-4 list-disc">
                        <li>Pre - Alpha game launch to Glee NFT holders</li>
                        <li>
                            Special roles and items will awarded to Glee NF T
                            holders based on traits.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
