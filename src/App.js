import "./App.css";
import imagentareas from "./images/imagentareas.png";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  return (
    <div className="mi-app">
      <div className="logo-container">
        <img src={imagentareas} className="imagentareas-logo" />
      </div>
      <div className="tasks-list">
        <h1>Mis tareas</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
