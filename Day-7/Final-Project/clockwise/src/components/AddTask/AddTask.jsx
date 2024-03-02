import "./AddTask.css";
import { useState } from "react";

// assets
import closeIcon from "../../assets/icons/close-icon.png";
const AddTask = ({ closeSection, addNewTask }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTask(inputValue);
    };
    return (
        <div className="AddTask">
            <form onSubmit={handleSubmit}>
                <div className="add-task-section">
                    <input
                        type="text"
                        required
                        className="txt-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div>
                        <img
                            src={closeIcon}
                            alt="close-ikcon"
                            onClick={closeSection}
                        />
                    </div>
                </div>
                <button className="btn-lg">Add Taks</button>
            </form>
        </div>
    );
};

export default AddTask;
