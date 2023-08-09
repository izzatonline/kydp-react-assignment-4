// import logo from "./logo.svg";
import "./App.css";
// import Welcome from "./components/Welcome";
import Clock from "./components/Clock";

function App() {
    //     const userInfo = {
    //         firstname: "Izzat Afifi",
    //         lastname: "Jamalul Lail",
    //     };
    // const element = <h1>Hello, World and Welcome to React</h1>;
    return (
        <>
            <div>
                <h1>Hello! The Time Now is:</h1>
                <Clock />

                {/* <Welcome user="Izzat" />
            <Welcome user="Afifi" />
            <Welcome user="Jamalul" /> */}
            </div>
        </>
    );
}

export default App;
