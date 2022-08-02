import React from "react";
import "../style-sheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({
  id,
  task,
  text,
  completed,
  completeTask,
  removeTask,
  editTask,
}) {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
      <div className="task-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="task-icons-container" onClick={() => removeTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
      <button className="edit-button" onClick={() => editTask(task.id)}>
        Editar tarea
      </button>
    </div>
  );
}

export default Task;
