import React, { useContext } from 'react';
import { TodoContext } from "../stores/TodoStore";

const TodoItem = ({ todo }) => {
  const { doneTodo } = useContext(TodoContext);

  const handleChange = () => {
    doneTodo(todo.id);
  };

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
        />
        {todo.text}
      </label>
    </div>
  );
};

export default TodoItem;
