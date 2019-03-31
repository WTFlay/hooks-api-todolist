import React, { useContext } from 'react';
import { TodoContext } from "../stores/TodoStore";
import { DoneContext } from "../stores/DoneStore";

const TodoItem = ({ todo }) => {
  const { addTodo } = useContext(DoneContext);
  const { removeTodo } = useContext(TodoContext);

  const handleChange = () => {
    addTodo(todo);
    removeTodo(todo.id);
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
