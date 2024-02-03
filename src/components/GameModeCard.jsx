import PropType from "prop-types";
import { useState } from "react";

const GameModeCard = ({ naslov, tekst, slika }) => {
    const [shoot, setShoot] = useState(false);

    const handleShoot = () => {
        setShoot(true);
    };

    setTimeout(() => {
        setShoot(false);
    }, 3000);

    return (
        <>
            <div className="scene">
                <div
                    className={`gamemode-card ${shoot ? "shot" : ""}`}
                    onClick={handleShoot}
                    style={{
                        backgroundImage: `url(${slika})`,
                    }}
                >
                    <div className="gamemode-text">
                        <p className="mode-naslov">{naslov}</p>
                        <p className="mode-text">{tekst}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameModeCard;

GameModeCard.propTypes = {
    naslov: PropType.string,
    tekst: PropType.string,
    slika: PropType.string,
};
