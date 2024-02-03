import OpremeCards from "../components/OpremeCards";
import PropTypes from "prop-types";
import puska from "../assets/images/guns.jpg";
import puskaPng from "../assets/images/gunPng.png";
import tactical from "../assets/images/tactical.jpg";
import tacticalPng from "../assets/images/tacticalPng.png";
import equipment from "../assets/images/equipment.jpg";
import equipmentPng from "../assets/images/eqipmentPng.png";
import ammo from "../assets/images/ammo.jpg";
import ammoPng from "../assets/images/ammo.png";
import scope from "../assets/images/scope.jpg";
import scopePng from "../assets/images/scopePng.png";

const Oprema = () => {
    return (
        <>
            <div className="oprema-wrapper">
                {oprema.map((o) => (
                    <div key={o.id}>
                        <OpremeCards
                            slika={o.bgImage}
                            png={o.png}
                            naslov={o.naslov}
                            tekst={o.tekst}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Oprema;

const oprema = [
    {
        id: 1,
        naslov: "Airsoft Puške i Pištolji",
        png: puskaPng,
        tekst: "Raznovrsne replike stvarnog oružja koje koriste kuglice od plastike kao streljivo",
        bgImage: puska,
    },
    {
        id: 2,
        naslov: "Taktička Oprema",
        png: tacticalPng,
        tekst: "Pojasovi, prsluci, futrole za spremnike i druge taktičke opreme za nošenje dodatne opreme tokom igre",
        bgImage: tactical,
    },
    {
        id: 3,
        naslov: "Zaštitna Oprema",
        png: equipmentPng,
        tekst: "Maskirne maske, naočare, rukavice i druge zaštitne opreme za sigurnost igrača",
        bgImage: equipment,
    },
    {
        id: 4,
        naslov: "Baterije i Gasovi",
        png: ammoPng,
        tekst: "Za napajanje električnih ili gasnih airsoft replika",
        bgImage: ammo,
    },
    {
        id: 5,
        naslov: "Optički Dodaci",
        png: scopePng,
        tekst: "Optički nišani, red dot prikazi i drugi dodaci za poboljšanje preciznosti",
        bgImage: scope,
    },
];

OpremeCards.propTypes = {
    slika: PropTypes.string,
    png: PropTypes.string,
    naslov: PropTypes.string,
    tekst: PropTypes.string,
};
