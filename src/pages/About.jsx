import GameMode from "../layouts/GameMode";
import Oprema from "../layouts/Oprema";

const About = () => {
    return (
        <>
            <div className="about-wrapper">
                <div className="about-headline">
                    <h2>
                        Airsoft je dinamičan hobi koji pruža širok spektar
                        opreme, terena i modova igre
                    </h2>
                </div>
                <div className="about-column">
                    <h2>Oprema</h2>
                    <Oprema />
                </div>
                <div className="about-column">
                    <h2>Modovi Igre</h2>
                    <GameMode />
                </div>
            </div>
        </>
    );
};

export default About;
