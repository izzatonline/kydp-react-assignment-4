import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("component mounted or updated");
        const interval = setInterval(showDate, 1000);

        return () => {
            console.log("cleanup of Interval");
            clearInterval(interval);
        };
    }, [time]);

    function showDate() {
        // console.log(new Date().toLocaleTimeString());
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(showDate, 1000);

    return <h2>{time}</h2>;
}

export default Clock;
