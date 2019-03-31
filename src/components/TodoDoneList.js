import React from 'react';
import TodoDoneItem from "./TodoDoneItem";

const TodoDoneList = () => {

  const todos = [
    "Some item"
  ];

  return (
    <div className="todolist">
      <h1>Already Done</h1>
      <ul id="done-items" className="list-unstyled">
        {todos.map((item, index) => (
          <li key={index}>
            <TodoDoneItem text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDoneList;
