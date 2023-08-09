// import { useState } from "react";
import "./App.css";
// import Clock from "./components/Clock";
import ClockSwitch from "./components/ClockSwitch";

function App() {
    // const [flag, setFlag] = useState(true);

    return (
        <>
            <div>
                <h1>Hello! The Time Now is:</h1>
                <ClockSwitch />
            </div>
        </>
    );
}

export default App;
