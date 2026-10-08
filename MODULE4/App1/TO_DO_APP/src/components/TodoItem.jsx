function TodoItem({ task, onDelete }) {

  return (
    <tr>

      <td>
        {task.title}
      </td>

      <td>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </td>

    </tr>
  );
}

export default TodoItem;