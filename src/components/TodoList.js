import React, { useContext } from 'react';
import { TodoContext } from "../stores/TodoStore";
import TodoItem from "./TodoItem";
import TodoLeft from "./TodoLeft";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const { todos, doneTodo } = useContext(TodoContext);

  const handleDoneAll = () => {
    [...todos].forEach(item => {
      doneTodo(item.id);
    });
  };

  return (
    <div className="todolist not-done">
      <h1>Todos</h1>
      <AddTodo />
      <button
        id="checkAll"
        className="btn btn-success"
        onClick={handleDoneAll}
      >
        Mark all as done
      </button>
      <hr/>
      <ul id="sortable" className="list-unstyled">
        {todos.map(item => (
          <li key={item.id} className="ui-state-default">
            <TodoItem todo={item} />
          </li>
        ))}
      </ul>
      <div className="todo-footer">
        <TodoLeft total={todos.length} />
      </div>
    </div>
  );
};

export default TodoList;
