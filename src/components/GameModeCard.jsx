import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import bullet from "../assets/images/bullet.png";

const GameModeCard = ({ naslov, tekst, slika }) => {
    const [shoot, setShoot] = useState(false);
    const [shots, setShots] = useState([]);

    const handleMouseDown = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setShoot(true);

        const newShot = {
            id: Date.now(),
            x,
            y,
        };
        setShots((prevShots) => [...prevShots, newShot]);
    };

    useEffect(() => {
        if (shoot) {
            const timer = setTimeout(() => {
                setShots([]);
                setShoot(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [shoot, shots]);

    return (
        <>
            <div className="scene">
                <div
                    className={`gamemode-card ${shoot ? "shot" : ""}`}
                    onMouseDown={handleMouseDown}
                    style={{
                        backgroundImage: `url(${slika})`,
                    }}
                >
                    {shots.map((shot) => (
                        <img
                            key={shot.id}
                            src={bullet}
                            style={{
                                position: "fixed",
                                top: `${shot.y}px`,
                                left: `${shot.x}px`,
                                width: "50px",
                                height: "50px",
                                zIndex: 99,
                            }}
                        />
                    ))}
                    <div className="gamemode-text">
                        <p className="mode-naslov">{naslov}</p>
                        <p className="mode-text">{tekst}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

GameModeCard.propTypes = {
    naslov: PropTypes.string,
    tekst: PropTypes.string,
    slika: PropTypes.string,
};

export default GameModeCard;
