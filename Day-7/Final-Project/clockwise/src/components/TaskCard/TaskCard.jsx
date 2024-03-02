import "./TaskCard.css";
import { useState } from "react";

// assets
import trashIcon from "../../assets/icons/trash-icon.png";
const TaskCard = ({ task, deleteTask }) => {
    const [isChecked, setIsCheked] = useState(false);
    return (
        <div className="TaskCard">
            <li className={isChecked ? `checked` : `unChecked`}>
                {task.taskValue}
            </li>
            <div className="controls">
                <div>
                    <img
                        src={trashIcon}
                        alt="trash-icon"
                        onClick={() => deleteTask(task.taskId)}
                    />
                </div>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsCheked(!isChecked)}
                />
            </div>
        </div>
    );
};

export default TaskCard;
