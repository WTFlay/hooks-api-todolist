import React, { createContext, useReducer } from 'react';
import { todoReducer } from "../reducers/TodoReducer";
import { ADD_TODO, DONE_TODO, REMOVE_TODO } from "../actions/TodoActions";

export const TodoContext = createContext({});

const initialState = [
  { id: 1, text: "Take out the trash", done: false },
  { id: 2, text: "Buy bread", done: false },
  { id: 3, text: "Teach penguins to fly", done: false }
];

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{
      todos: todos.filter(item => !item.done),
      doneTodos: todos.filter(item => item.done),
      addTodo: (todo) => dispatch({ type: ADD_TODO, todo }),
      removeTodo: (todoId) => dispatch({ type: REMOVE_TODO, todoId }),
      doneTodo: (todoId) => dispatch({ type: DONE_TODO, todoId })
    }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
