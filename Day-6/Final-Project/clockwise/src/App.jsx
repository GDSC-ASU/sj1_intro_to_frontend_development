import "./App.css";
import { useState } from "react";

// assets
import bgImage from "./assets/images/bg-1.jpg";

// pages
import NotAuthCard from "./pages/NotAuthCard/NotAuthCard";

const App = () => {
    const [name, setName] = useState("");
    const handleNewName = (n) => {
        setName(n);
    };
    return (
        <div className="App">
            <div
                style={{ backgroundImage: `url(${bgImage})` }}
                className="bg-img"></div>

            <div>
                <NotAuthCard handleNewName={handleNewName} />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default App;
