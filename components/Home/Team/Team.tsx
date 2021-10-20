/* eslint-disable @next/next/no-img-element */
export default function Team() {
    return (
        <div
            id="Team"
            className="flex w-full bg-[#e4c177] py-10 min-h-screen flex-col items-center text-black"
        >
            <h2 className="text-5xl font-fredoka">Our Team</h2>

            <div className="items-center justify-center flex-1 hidden w-full md:flex">
                <div className="grid w-11/12 grid-cols-5 gap-x-4">
                    <TeamMember
                        href="https://twitter.com/LuckySaturnSE"
                        src="/assets/team/whiz.png"
                        name="Glee Whiz"
                    />
                    <TeamMember
                        href="https://twitter.com/HuntMegalodon"
                        src="/assets/team/codec.png"
                        name="Glee Codec"
                    />
                    <TeamMember
                        href="https://twitter.com/juttu_949"
                        src="/assets/team/champ.png"
                        name="Glee Champ"
                    />
                    <TeamMember
                        href="https://twitter.com/Alone9Art"
                        src="/assets/team/painter.png"
                        name="Glee Painter"
                    />
                    <TeamMember
                        href="https://twitter.com/solminer7"
                        src="/assets/team/booster.png"
                        name="Glee booster"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-11/12 mt-10 gap-y-10 md:hidden">
                <TeamMember
                    href="https://twitter.com/LuckySaturnSE"
                    src="/assets/team/whiz.png"
                    name="Glee Whiz"
                />
                <TeamMember
                    href="https://twitter.com/HuntMegalodon"
                    src="/assets/team/codec.png"
                    name="Glee Codec"
                    reverse={true}
                />
                <TeamMember
                    href="https://twitter.com/juttu_949"
                    src="/assets/team/champ.png"
                    name="Glee Champ"
                />
                <TeamMember
                    href="https://twitter.com/Alone9Art"
                    src="/assets/team/painter.png"
                    name="Glee Painter"
                    reverse={true}
                />
                <TeamMember
                    href="https://twitter.com/solminer7"
                    src="/assets/team/booster.png"
                    name="Glee booster"
                />
            </div>
        </div>
    );
}

function TeamMember({ href, src, name, reverse = false }: any) {
    return (
        <>
            <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="flex-row items-center hidden w-full md:flex md:flex-col"
            >
                <img src={src} alt={name} className="w-2/5 md:w-full" />
                <h3 className="mt-6 text-3xl lg:text-4xl font-mansalva">
                    {name}
                </h3>
            </a>
            <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className={`flex md:hidden items-center ${
                    reverse ? "flex-row-reverse" : "flex-row"
                } justify-between`}
            >
                <img src={src} alt={name} className="w-2/5 md:w-full" />
                <div className="flex items-center justify-center flex-1">
                    <h3 className="mt-6 text-3xl lg:text-4xl font-mansalva">
                        {name}
                    </h3>
                </div>
            </a>
        </>
    );
}
