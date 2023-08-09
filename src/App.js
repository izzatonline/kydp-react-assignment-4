// import { useState } from "react";
import "./App.css";
import ClockControl from "./components/ClockControl";
// import Clock from "./components/Clock";

function App() {
    // const [flag, setFlag] = useState(true);

    return (
        <>
            <div>
                <h1>Hello! The Time Now is:</h1>
                <ClockControl />
            </div>
        </>
    );
}

export default App;
