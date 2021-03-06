import React, { createContext, useReducer } from 'react';
import { todoReducer } from "../reducers/TodoReducer";
import { ADD_TODO, REMOVE_TODO } from "../actions/TodoActions";

export const TodoContext = createContext({});

const initialState = [
  { id: 1, text: "Take out the trash" },
  { id: 2, text: "Buy bread" },
  { id: 3, text: "Teach penguins to fly" }
];

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo: (todo) => dispatch({ type: ADD_TODO, todo }),
      removeTodo: (todoId) => dispatch({ type: REMOVE_TODO, todoId }),
    }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoStore;
