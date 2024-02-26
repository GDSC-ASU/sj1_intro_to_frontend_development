import { useState } from "react";

const Signup = ({ handleNewStudent }) => {
    const [name, setName] = useState("");
    const [gpa, setGpa] = useState(0);
    const [graduate, setGraduate] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        let newStudent = { name, gpa, graduate };
        handleNewStudent(newStudent);
    };
    return (
        <div>
            <h3>Hello Student Enter you information</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="student-name">
                    Enter your name
                    <input
                        id="student-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="student-gpa">
                    Enter your gpa
                    <input
                        id="student-gpa"
                        type="number"
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)}
                    />
                </label>
                <p>Are you a graduate student?</p>
                <label htmlFor="garaduate-yes">
                    Yes
                    <input
                        type="radio"
                        name="graduate-radio"
                        id="graduate-yes"
                        onChange={() => setGraduate(true)}
                    />
                </label>
                <label htmlFor="garaduate-no">
                    No
                    <input
                        type="radio"
                        name="graduate-radio"
                        id="graduate-no"
                        onChange={() => setGraduate(false)}
                    />
                </label>
                <br />
                <button>Sign up</button>
            </form>
        </div>
    );
};

export default Signup;
