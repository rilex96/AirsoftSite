import { useState } from "react";

const MobileNav = () => {
    const [pressed, setPressed] = useState(false);
    const [mobDropped, setMobDropped] = useState(false);

    const handleMobDrop = () => {
        setMobDropped(!mobDropped);
    };

    const handlePressed = () => {
        setPressed(!pressed);
    };

    const handleMobClosing = () => {
        handleMobDrop();
        handlePressed();
    };
    return (
        <>
            <div className="barbtn" onClick={handlePressed}>
                <span className={pressed ? "pressed" : ""}></span>
                <span></span>
                <span className={pressed ? "pressed" : ""}></span>
                <span></span>
            </div>
            <div className={`mobile-nav ${pressed ? "mob-active" : ""}`}>
                <a
                    href="#home"
                    className="mobile-link"
                    onClick={() => {
                        setPressed(false);
                    }}
                >
                    Početna
                </a>
                <div className="dropdown">
                    <button className="mobile-link" onClick={handleMobDrop}>
                        Šta nudimo ▼
                    </button>
                    <div className={`mob-drop ${mobDropped ? "mob-open" : ""}`}>
                        <a
                            href="#oprema"
                            className="mobile-link"
                            onClick={handleMobClosing}
                        >
                            Oprema
                        </a>
                        <a
                            href="#mod"
                            className="mobile-link"
                            onClick={handleMobClosing}
                        >
                            Modovi Igre
                        </a>
                    </div>
                </div>
                <a
                    href="#contact"
                    className="mobile-link"
                    onClick={() => {
                        setPressed(false);
                    }}
                >
                    Kontakt
                </a>
            </div>
        </>
    );
};

export default MobileNav;
