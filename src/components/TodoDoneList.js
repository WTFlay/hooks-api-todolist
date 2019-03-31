import React, { useContext } from 'react';
import TodoDoneItem from "./TodoDoneItem";
import {DoneContext} from "../stores/DoneStore";

const TodoDoneList = () => {
  console.log('TodoDoneList render');

  const { todos } = useContext(DoneContext);

  return (
    <div className="todolist">
      <h1>Already Done</h1>
      <ul id="done-items" className="list-unstyled">
        {todos.map(item => (
          <li key={item.id}>
            <TodoDoneItem todo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDoneList;
