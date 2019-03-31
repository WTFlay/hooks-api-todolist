import React, { useContext } from 'react';
import TodoDoneItem from "./TodoDoneItem";
import { TodoContext } from "../stores/TodoStore";

const TodoDoneList = () => {
  const { doneTodos } = useContext(TodoContext);

  return (
    <div className="todolist">
      <h1>Already Done</h1>
      <ul id="done-items" className="list-unstyled">
        {doneTodos.map(item => (
          <li key={item.id}>
            <TodoDoneItem todo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDoneList;
