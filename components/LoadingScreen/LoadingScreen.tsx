import ReactTypingEffect from "react-typing-effect";

export default function LoadingScreen({ didVideoPlay, setDidVideoPlay }: any) {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-black">
            <video
                autoPlay
                muted
                controls={false}
                playsInline
                src="/assets/loadingVideo.mp4"
                className="w-3/4 md:w-full max-w-[500px]"
                style={{ aspectRatio: "1" }}
                onEnded={() => setDidVideoPlay(true)}
            />
            <div className="flex items-center mt-7">
                <p className="flex mr-2 text-2xl text-white font-fredoka">
                    Loading
                </p>
                <Loader />
            </div>
        </div>
    );
}

function Loader() {
    let circleCommonClasses = "h-2 w-2 bg-white rounded-full";

    return (
        <div className="flex">
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
}
