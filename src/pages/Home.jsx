import airsoftVideo from "../assets/videos/airsoftVideo.mp4";

const Home = () => {
    return (
        <>
            <div className="welcome-wrapper">
                <div className="video-wrapper">
                    <video autoPlay loop muted>
                        <source src={airsoftVideo} />
                    </video>
                </div>

                <div className="welcome-text">
                    <h1>Takticko uzbuđenje</h1>
                    <p>Vaša prva stanica za Airsoft Avanture</p>
                </div>
            </div>
        </>
    );
};

export default Home;
