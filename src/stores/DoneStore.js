import React, { createContext, useReducer } from 'react';
import { todoReducer } from "../reducers/TodoReducer";
import { ADD_TODO, REMOVE_TODO } from "../actions/TodoActions";

export const DoneContext = createContext({});

const initialState = [];

const DoneStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <DoneContext.Provider value={{
      todos,
      addTodo: (todo) => dispatch({ type: ADD_TODO, todo }),
      removeTodo: (todoId) => dispatch({ type: REMOVE_TODO, todoId }),
    }}>
      {props.children}
    </DoneContext.Provider>
  );
};

export default DoneStore;
