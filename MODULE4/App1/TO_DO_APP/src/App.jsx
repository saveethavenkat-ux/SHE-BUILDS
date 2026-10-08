import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {

  // Get saved tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todoTasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [showAddTodo, setShowAddTodo] = useState(false);


  // Add new task
  const addTask = (taskTitle) => {

    const newTask = {
      id: Date.now(),
      title: taskTitle
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    // Save tasks in browser
    localStorage.setItem(
      "todoTasks",
      JSON.stringify(updatedTasks)
    );

    // Close popup
    setShowAddTodo(false);
  };


  // Delete task
  const deleteTask = (id) => {

    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);

    // Update localStorage
    localStorage.setItem(
      "todoTasks",
      JSON.stringify(updatedTasks)
    );
  };


  return (
    <div className="app">

      <h1>To Do List</h1>

      <h2>To Do List Dashboard</h2>


      {/* Todo List */}

      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
      />


      {/* Add Todo Button */}

      <button
        className="add-todo-button"
        onClick={() => setShowAddTodo(true)}
      >
        Add Todolist
      </button>


      {/* Add Todo Popup */}

      {showAddTodo && (
        <AddTodo
          onAdd={addTask}
          onClose={() => setShowAddTodo(false)}
        />
      )}

    </div>
  );
}

export default App;