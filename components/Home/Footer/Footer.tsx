import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <div className="flex px-4 items-center w-full py-10 bg-[#e4c177] justify-between">
            <h2 className="text-4xl font-mansalva">
                For More details check our article Roadmap
            </h2>

            <div className="flex flex-col items-center">
                <div className="flex">
                    <SocialIcon
                        url="https://twitter.com/cryptogleeclub"
                        target="_blank"
                        network="twitter"
                        fgColor="#FFFFFF"
                        style={{ height: 40, width: 40 }}
                        className="ml-2 transition-opacity duration-300 hover:opacity-70"
                    />
                    <SocialIcon
                        url="http://discord.gg/qTJbmtcRt5"
                        target="_blank"
                        network="discord"
                        fgColor="#FFFFFF"
                        className="ml-2 transition-opacity duration-300 hover:opacity-70"
                        style={{ height: 40, width: 40 }}
                    />
                    <SocialIcon
                        url="https://cryptogleeclub.medium.com/"
                        target="_blank"
                        network="medium"
                        fgColor="#FFFFFF"
                        className="ml-2 transition-opacity duration-300 mr-7 hover:opacity-70"
                        style={{ height: 40, width: 40 }}
                    />
                </div>
                <p className="mt-3 font-mansalva">
                    @2021 All rights reserved Crypto Glee Club, Inc.
                </p>
            </div>
        </div>
    );
}
