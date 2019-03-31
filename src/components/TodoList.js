import React, { useContext } from 'react';
import { TodoContext } from "../stores/TodoStore";
import TodoItem from "./TodoItem";
import TodoLeft from "./TodoLeft";
import AddTodoInput from "./AddTodoInput";
import AllDoneButton from "./AllDoneButton";

const TodoList = () => {
  console.log('TodoList render');

  const { todos } = useContext(TodoContext);

  return (
    <div className="todolist not-done">
      <h1>Todos</h1>
      <AddTodoInput />
      <AllDoneButton />
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
