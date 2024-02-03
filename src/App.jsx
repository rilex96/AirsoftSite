import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
        </>
    );
}

export default App;
