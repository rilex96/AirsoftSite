import PropType from "prop-types";
import flag from "../assets/images/modovi/flag.jpg";
import map from "../assets/images/modovi/map.jpg";
import rpg from "../assets/images/modovi/rpg.jpg";
import sim from "../assets/images/modovi/simulation.jpg";
import snipe from "../assets/images/modovi/sniper.jpg";
import watch from "../assets/images/modovi/watch.jpg";
import GameModeCard from "../components/GameModeCard";

const GameMode = () => {
    return (
        <>
            <div className="mode-wrapper">
                {gameMode.map((m) => (
                    <div key={m.id}>
                        <GameModeCard
                            naslov={m.naslov}
                            tekst={m.tekst}
                            slika={m.image}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default GameMode;

const gameMode = [
    {
        id: 1,
        naslov: "Milsim (Military Simulation)",
        tekst: "Igrači se ponašaju poput stvarnih vojnika, pridržavajući se vojničkih protokola i scenarija",
        image: sim,
    },
    {
        id: 2,
        naslov: "Skirmish",
        tekst: "Osnovni mod u kojem se igrači bore jedni protiv drugih, često u kratkim rundama",
        image: watch,
    },
    {
        id: 3,
        naslov: "Scenario Igre",
        tekst: "Igre bazirane na scenarijima ili temama, koje mogu uključivati osvajanje teritorija, spasavanje talaca ili druge zadatke",
        image: map,
    },
    {
        id: 4,
        naslov: "Capture the Flag",
        tekst: " Klasik gdje igrači pokušavaju osvojiti zastavu suparničkog tima",
        image: flag,
    },
    {
        id: 5,
        naslov: "Team Deathmatch",
        tekst: "Cilj je eliminirati što više igrača suparničkog tima",
        image: snipe,
    },
    {
        id: 6,
        naslov: "Role-playing Games (RPG)",
        tekst: "Igre koje uključuju elemente priče i likova",
        image: rpg,
    },
];

GameModeCard.propTypes = {
    naslov: PropType.string,
    tekst: PropType.string,
    slika: PropType.string,
};
