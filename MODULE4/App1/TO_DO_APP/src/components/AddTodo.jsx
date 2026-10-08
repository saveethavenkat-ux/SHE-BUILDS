import { useState } from "react";

function AddTodo({ onAdd, onClose }) {

  const [taskTitle, setTaskTitle] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();

    // Don't add empty task
    if (taskTitle.trim() === "") {
      return;
    }

    // Send task to App.jsx
    onAdd(taskTitle);

    // Clear input
    setTaskTitle("");
  };


  return (

    <div className="modal-overlay">

      <div className="add-todo-modal">

        <h2>Add New Task</h2>


        <form onSubmit={handleSubmit}>

          <label>
            Task Name
          </label>


          <input
            type="text"
            placeholder="Enter your task"
            value={taskTitle}
            onChange={(event) =>
              setTaskTitle(event.target.value)
            }
          />


          <div className="form-buttons">

            <button
              type="submit"
              className="submit-btn"
            >
              Add Task
            </button>


            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddTodo;