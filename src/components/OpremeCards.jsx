import PropTypes from "prop-types";

const OpremeCards = ({ slika, png, naslov, tekst }) => {
    return (
        <>
            <div
                className="oprema-card"
                style={{ backgroundImage: `url(${slika})` }}
            >
                <div className="oprema-content">
                    <div className="oprema-image">
                        <img src={png} alt={naslov} />
                    </div>
                    <div className="oprema-text">
                        <div className="oprema-naslov">
                            <p>{naslov}</p>
                        </div>
                        <div className="oprema-desc">
                            <p>{tekst}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpremeCards;

OpremeCards.propTypes = {
    slika: PropTypes.string,
    png: PropTypes.string,
    naslov: PropTypes.string,
    tekst: PropTypes.string,
};
