import "./App.css";
import { useState } from "react";
import Student from "./Student";
import HeroCard from "./HeroCard";

const App = () => {
    // create a number state
    const [num, setNum] = useState(12345);
    const heros = [
        { id: 0, name: "spider-man", company: "marvel" },
        { id: 1, name: "bat-man", company: "DC-movies" },
        { id: 2, name: "iron-man", company: "marvel" },
        { id: 3, name: "super-man", company: "DC-movies" },
    ];
    return (
        <div className="App">
            <h1>Ahmad says hello to react</h1>
            <Student name={"Azmi"} id={555} graduate={true} />
            <br />
            <br />
            {heros.map((h) => {
                return <HeroCard name={h.name} company={h.company} />;
            })}
            <br />
            <br />
            <button onClick={() => setNum(Math.round(Math.random() * 100))}>
                Hello Kity 🐈
            </button>
            <p>Num state is: {num}</p>
        </div>
    );
};
export default App;
