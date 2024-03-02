import "./Time.css";
import { useState, useEffect } from "react";
const Time = ({ username }) => {
    const [hours, setHours] = useState(new Date().getHours());
    const [mins, setMins] = useState(new Date().getMinutes());
    const [indicator, setIndicator] = useState(hours >= 12 ? "PM" : "AM");
    const [greet, setGreet] = useState("");

    const handleGreet = () => {
        // good morning --> 0 - 12
        // good afternon --> 12 - 17
        // good evening --> 17 - 0
        if (hours >= 12 && hours < 17) {
            setGreet("Good Afternoon,");
        } else if (hours >= 17 && hours <= 23) {
            setGreet("Good Evening,");
        } else {
            setGreet("Goog Morning,");
        }
    };

    useEffect(() => {
        const getTime = setInterval(() => {
            setHours(new Date().getHours());
            setMins(new Date().getMinutes());
            setIndicator(hours >= 12 ? "PM" : "AM");
            handleGreet();
        }, 1000);
        return () => clearInterval(getTime);
    }, [hours, mins]);

    return (
        <div className="Time">
            <h1>
                {String(hours % 12 === 0 ? 12 : hours % 12).padStart(2, "0")}:
                {String(mins).padStart(2, "0")} {indicator}
            </h1>
            <p>
                {greet} {username}
            </p>
            <small>Hello Kity</small>
        </div>
    );
};

export default Time;
