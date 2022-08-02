import React from "react";
import { useState } from "react";
import Task from "./Task";
import "../style-sheets/TaskList.css";

function TaskList() {
  const [tasks, setTasks] = useState([
    { completed: false, text: "pasear al perro" },
  ]);
  const [editMode, setEditMode] = useState([false]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTask = [task, ...tasks];
      setTasks(updatedTask);
    }
  };

  const removeTask = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  };

  const completeTask = (id) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const editTask = (id) => {
    setEditMode(true);
  };

  return (
    <>
      <div className="tasks-list-container">
        {tasks.map((task, i) => (
          <Task
            key={i}
            id={task.id}
            text={task.text}
            editTask={editTask}
            addTask={addTask}
            completed={task.completed}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
