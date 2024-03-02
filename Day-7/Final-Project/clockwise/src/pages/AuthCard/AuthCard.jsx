import "./AuthCard.css";
import { useState } from "react";

// components
import AddTask from "../../components/AddTask/AddTask";
import Tasks from "../../components/Tasks/Tasks";
import Time from "../../components/Time/Time";

const AuthCard = ({ username }) => {
    const [addTask, setAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [id, setId] = useState(0);

    const addNewTask = (taskValue) => {
        let newTask = { taskId: id, taskValue: taskValue };
        setId(id + 1);
        setTasks([...tasks, newTask]);
        switchAddTask();
    };
    const deleteTask = (id) => {
        let newArr = tasks.filter((t) => {
            return t.taskId != id;
        });
        setTasks(newArr);
    };

    const switchAddTask = () => {
        setAddTask(!addTask);
    };

    return (
        <div className="container">
            <div className="time-section">
                <Time username={username} />
            </div>
            <div className="tasks-section">
                {addTask ? (
                    <AddTask
                        closeSection={switchAddTask}
                        addNewTask={addNewTask}
                    />
                ) : (
                    <Tasks
                        tasks={tasks}
                        openAddTask={switchAddTask}
                        deleteTask={deleteTask}
                    />
                )}
            </div>
        </div>
    );
};

export default AuthCard;
