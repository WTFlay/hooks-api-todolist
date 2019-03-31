import React from 'react';
import TodoItem from "./TodoItem";
import TodoLeft from "./TodoLeft";

const TodoList = () => {

  const todos = [
    "Take out the trash",
    "Buy bread",
    "Teach penguins to fly"
  ];

  return (
    <div className="todolist not-done">
      <h1>Todos</h1>
      <input type="text" className="form-control add-todo" placeholder="Add todo"/>
      <button id="checkAll" className="btn btn-success">Mark all as done</button>
      <hr/>
      <ul id="sortable" className="list-unstyled">
        {todos.map((item, index) => (
          <li key={index} className="ui-state-default">
            <TodoItem text={item} />
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        <TodoLeft />
      </div>
    </div>
  );
};

export default TodoList;
