import { useState } from "react";
import Clock from "./Clock";

function ClockControl() {
    const [isTurnedOn, setIsTurnedOn] = useState(true);
    const handleTurnonClick = () => {
        setIsTurnedOn(true);
    };
    const handleTurnoffClick = () => {
        setIsTurnedOn(false);
    };

    let button;
    if (isTurnedOn) {
        button = <TurnoffButton onClick={handleTurnoffClick} />;
    } else {
        button = <TurnonButton onClick={handleTurnonClick} />;
    }

    return <div>{button}</div>;
}

function TurnonButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>Turn on Clock</button>
            <h1>Clock is Off</h1>
        </div>
    );
}

function TurnoffButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>Turn off Clock</button>
            <Clock />
        </div>
    );
}

export default ClockControl;
