import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function FAQ() {
    return (
        <div
            id="FAQ"
            className="flex flex-col items-center w-full py-10 bg-[#d6ec94]"
        >
            <h2 className="text-5xl font-fredoka">Got anything to ask?</h2>

            <div className="flex flex-col items-center w-11/12 mt-20">
                <AQuestion
                    q="Where to mint? and how?"
                    a={`10K Glee NFT will be available directly on the site on the release date. You will have to connect to the site with the "Connect Wallet" button and then, you can mint.`}
                />
                <AQuestion
                    q="How much is each Glee NFT and how many I can mint?"
                    a={`The Minting cost in the Glee NFT will be 2 SOL. However, we'll keep a close look at the SOL price before the launch to make the necessary adjustments.`}
                />
                <AQuestion
                    q="What is my glee wearing and how rare is it?"
                    a={`Upon completion of the mint period, our team will release the rarity table on the website.`}
                />
                <AQuestion
                    q={`What is the "Early Influencer" badge and how can I get one?`}
                    a={`Early Influencers role is an attempt by the crypto glee club to encourage social media Influencers to be a part of our community. Benefits include royalty distribution and Free drops for more details check our medium article.`}
                />
                <AQuestion
                    q="What is Glee NFT and What is Gleecom?"
                    a={`Glee NFT represents avatar or character in our comic whereas Gleecoms NFT represents our actual digital comic version.`}
                />
                <AQuestion
                    q="Want to talk to Glee wiz? or any of Glee Team member?"
                    a={`Our team is active in Discord and Twitter.`}
                />
            </div>
        </div>
    );
}

function AQuestion({ q, a }: any) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className={`flex flex-col w-full ${isHovering ? "" : ""}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <p className="text-3xl font-mansalva">{q}</p>
            {/* <CSSTransition
                in={isHovering}
                unmountOnExit
                timeout={600}
                classNames="fade"
            >
                <p className="mt-2 mb-1 text-xl font-evolveSans">{a}</p>
            </CSSTransition> */}

            <p
                className={`${
                    isHovering ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 mt-2 mb-3 text-xl font-evolveSans`}
            >
                {a}
            </p>
        </div>
    );
}
