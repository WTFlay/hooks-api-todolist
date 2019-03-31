import React, { useContext } from 'react';
import { TodoContext } from "../stores/TodoStore";
import { DoneContext } from "../stores/DoneStore";

const AllDoneButton = () => {
  const { todos, removeTodo } = useContext(TodoContext);
  const { addTodo } = useContext(DoneContext);

  const handleDoneAll = () => {
    [...todos].forEach(item => {
      addTodo(item);
      removeTodo(item.id);
    });
  };

  return (
    <button
      id="checkAll"
      className="btn btn-success"
      onClick={handleDoneAll}
    >
      Mark all as done
    </button>
  );
};

export default AllDoneButton;
