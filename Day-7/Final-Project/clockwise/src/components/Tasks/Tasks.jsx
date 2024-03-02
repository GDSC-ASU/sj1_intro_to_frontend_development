import "./Tasks.css";

// assets
import addIcon from "../../assets/icons/add-icon.png";

// componenets
import TaskCard from "../TaskCard/TaskCard";
const Tasks = ({ tasks, openAddTask, deleteTask }) => {
    return (
        <div className="Tasks">
            {tasks.length > 0 ? (
                <div className="load-tasks">
                    <div className="intro-load-tasks">
                        <p>Your Tasks</p>
                        <div>
                            <img
                                src={addIcon}
                                alt="add-icon"
                                onClick={openAddTask}
                            />
                        </div>
                    </div>
                    {tasks.map((t) => {
                        return (
                            <TaskCard
                                key={t.taskId}
                                task={t}
                                deleteTask={deleteTask}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="empty-tasks">
                    <p>Let the productivity begins!</p>
                    <button className="btn-lg" onClick={openAddTask}>
                        New Task
                    </button>
                </div>
            )}
        </div>
    );
};

export default Tasks;
