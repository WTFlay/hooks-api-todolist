import { mongoObjectId } from "../utils";
import {ADD_TODO, DONE_TODO, REMOVE_TODO} from "../actions/TodoActions";

const addTodo = (todos = [], todo = { text: '' }) => {
  todo.id = mongoObjectId();
  todo.done = false;
  return [...todos, todo];
};

const removeTodo = (todos = [], todoId) => {
  const index = todos.findIndex(item => item.id === todoId);
  if (index === -1) return todos;
  todos.splice(index, 1);
  return [...todos];
};

const doneTodo = (todos = [], todoId) => {
  const todo = todos.find(item => item.id === todoId);
  if (todo == null) return todos;
  todo.done = true;
  return [...todos];
};

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(todos, action.todo);
    case REMOVE_TODO:
      return removeTodo(todos, action.todoId);
    case DONE_TODO:
      return doneTodo(todos, action.todoId);
    default:
      return todos;
  }
};