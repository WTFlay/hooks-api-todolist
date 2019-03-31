import React, { useContext } from 'react';
import { DoneContext } from "../stores/DoneStore";

const TodoDoneItem = ({ todo }) => {
  const { removeTodo } = useContext(DoneContext);

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      {todo.text}
      <button
        className="remove-item btn btn-default btn-xs pull-right"
        onClick={handleRemove}
      >
        <span className="glyphicon glyphicon-remove" />
      </button>
    </div>
  );
};

export default TodoDoneItem;
