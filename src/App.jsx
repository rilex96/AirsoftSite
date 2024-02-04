import "./App.css";
import Navbar from "./components/Navbar";
import "./mobileApp.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Navbar />
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
