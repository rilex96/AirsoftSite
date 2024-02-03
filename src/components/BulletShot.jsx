import PropType from "prop-types";
import bullet from "../assets/images/bullet.png";

const BulletShot = ({ shots }) => {
    return (
        <>
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
        </>
    );
};

export default BulletShot;

BulletShot.propTypes = {
    shots: PropType.array,
};
