import TodoItem from "./TodoItem";

function TodoList({ tasks, onDelete }) {

  return (
    <div className="table-container">

      <table>

        <thead>
          <tr>
            <th>ToDo</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

          {tasks.map((task) => (

            <TodoItem
              key={task.id}
              task={task}
              onDelete={onDelete}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TodoList;