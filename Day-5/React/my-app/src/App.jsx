import "./App.css";
import { useState, useEffect } from "react";

import Student from "./Student";
import HeroCard from "./HeroCard";
import Signup from "./signup/Signup";

const App = () => {
    // create a number state
    const [num, setNum] = useState(12345);
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([
        {
            name: "Ahmad",
            gpa: 90,
            graduate: false,
        },
        {
            name: "Khalid",
            gpa: 95,
            graduate: true,
        },
        {
            name: "Omar",
            gpa: 80,
            graduate: true,
        },
        {
            name: "Sami",
            gpa: 85,
            graduate: false,
        },
    ]);
    const [names, setNames] = useState([]);
    const [studentsInfo, setStudentsInfo] = useState([]);
    const handleNewStudent = (student) => {
        setStudentsInfo([...studentsInfo, student]);
    };
    useEffect(() => {
        console.log("num state has changed", num);
    }, [num]);
    const heros = [
        { id: 0, name: "spider-man", company: "marvel" },
        { id: 1, name: "bat-man", company: "DC-movies" },
        { id: 2, name: "iron-man", company: "marvel" },
        { id: 3, name: "super-man", company: "DC-movies" },
    ];
    const handleClick = () => {
        setNames([...names, studentName]);
    };
    return (
        <div className="App">
            <h1>Ahmad says hello to react</h1>
            {students.map((s, idx) => {
                return (
                    <Student
                        key={idx}
                        name={s.name}
                        gpa={s.gpa}
                        graduate={s.graduate}
                    />
                );
            })}
            <br />
            <br />
            {heros.map((h) => {
                return (
                    <HeroCard key={h.id} name={h.name} company={h.company} />
                );
            })}
            <br />
            <br />
            <button onClick={() => setNum(Math.round(Math.random() * 100))}>
                Hello Kity 🐈
            </button>
            <p>Num state is: {num}</p>
            <div>
                <div>
                    <p>Student Name is: {studentName} </p>
                    <input
                        type="text"
                        value={studentName}
                        placeholder="your name in here"
                        onChange={(e) => setStudentName(e.target.value)}
                    />
                    <br />
                    <button onClick={handleClick}>Add New Name</button>
                </div>
                <div>
                    {/* Display names in here */}
                    {names.length > 0 ? (
                        names.map((n, idx) => {
                            return <p key={idx}>{n}</p>;
                        })
                    ) : (
                        <p>The names list is empty</p>
                    )}
                </div>
            </div>
            <div>
                {/* Sign up component */}
                <Signup handleNewStudent={handleNewStudent} />
                <p>Logged in Students</p>
                {studentsInfo.length > 0 ? (
                    studentsInfo.map((s, idx) => {
                        return (
                            <Student
                                key={idx}
                                name={s.name}
                                gpa={s.gpa}
                                graduate={s.graduate}
                            />
                        );
                    })
                ) : (
                    <p>The students list is empty</p>
                )}
            </div>
        </div>
    );
};
export default App;
