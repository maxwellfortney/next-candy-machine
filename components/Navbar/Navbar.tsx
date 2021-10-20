/* eslint-disable @next/next/no-img-element */
import Hamburger from "hamburger-react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";

import { CSSTransition } from "react-transition-group";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    async function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className="flex items-center justify-between w-full h-20 px-5 mt-7">
                <img
                    src="/assets/logo.png"
                    alt="Crypto Glee Club Logo"
                    className="h-20"
                />
                <div className="flex items-center">
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

                    <div
                        className={`z-10 flex items-center ${
                            menuOpen ? "text-white" : "text-white"
                        }`}
                    >
                        <Hamburger
                            toggled={menuOpen}
                            toggle={toggleMenu}
                            size={40}
                        />
                    </div>
                </div>
            </div>

            <CSSTransition
                in={menuOpen}
                classNames="fade"
                timeout={500}
                unmountOnExit
            >
                <div className="absolute items-center justify-center bg-opacity-90 right-0 flex w-full h-screen bg-[#b2df3e] md:w-80">
                    <div className="flex flex-col text-3xl font-medium text-white gap-y-3 font-evolveSans">
                        <Link href="/#DawnOfGleeTales">
                            <a
                                onClick={toggleMenu}
                                className="transition-opacity duration-300 hover:opacity-70"
                            >{`Dawn of 'Glee Tales'`}</a>
                        </Link>
                        <Link href="/#Roadmap">
                            <a
                                onClick={toggleMenu}
                                className="transition-opacity duration-300 hover:opacity-70"
                            >
                                Roadmap
                            </a>
                        </Link>
                        <Link href="/#Team">
                            <a
                                onClick={toggleMenu}
                                className="transition-opacity duration-300 hover:opacity-70"
                            >
                                Team
                            </a>
                        </Link>
                        <Link href="/#FAQ">
                            <a
                                onClick={toggleMenu}
                                className="transition-opacity duration-300 hover:opacity-70"
                            >
                                FAQ
                            </a>
                        </Link>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
}
