import Head from "next/head";
import { useState } from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

import Hero from "../components/Home/Hero";
import DawnOfGleeTales from "../components/Home/DawnOfGleeTales/DawnOfGleeTales";
import Roadmap from "../components/Home/Roadmap/Roadmap";
import Team from "../components/Home/Team/Team";
import FAQ from "../components/Home/FAQ/FAQ";
import Footer from "../components/Home/Footer/Footer";

export default function Home() {
    const [didVideoPlay, setDidVideoPlay] = useState(true);

    return (
        <>
            <Head>
                <title>Crypto Glee Club</title>
                <meta
                    name="description"
                    content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SwitchTransition>
                <CSSTransition
                    key={didVideoPlay ? "true" : "false"}
                    timeout={500}
                    classNames="fade"
                >
                    {didVideoPlay ? (
                        <div className="flex flex-col items-center w-full min-h-screen">
                            <Hero />
                            <DawnOfGleeTales />
                            <Roadmap />
                            <Team />
                            <FAQ />
                            <Footer />
                        </div>
                    ) : (
                        <LoadingScreen
                            didVideoPlay={didVideoPlay}
                            setDidVideoPlay={setDidVideoPlay}
                        />
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    );
}
