import { useState } from "react";

const PCNav = () => {
    const [dropped, setDropped] = useState(false);
    return (
        <>
            <nav className="pc-nav">
                <a className="link" href="#home">
                    Početna
                </a>
                <div className="dropdown">
                    <button
                        className="link"
                        onClick={() => {
                            setDropped(!dropped);
                        }}
                    >
                        Šta Nudimo ▼
                    </button>
                    <div
                        className={`dropdown-menu ${dropped ? "dropped" : ""}`}
                    >
                        <a
                            className="link"
                            onClick={() => {
                                setDropped(false);
                            }}
                            href="#oprema"
                        >
                            Oprema
                        </a>
                        <a
                            className="link"
                            onClick={() => {
                                setDropped(false);
                            }}
                            href="#mod"
                        >
                            Modovi Igre
                        </a>
                    </div>
                </div>
                <a className="link" href="#kontakt">
                    Kontakt
                </a>
            </nav>
        </>
    );
};

export default PCNav;
