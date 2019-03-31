import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoDoneList from "./components/TodoDoneList";
import TodoStore from "./stores/TodoStore";

const App = () => {
  return (
    <TodoStore>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TodoList />
          </div>
          <div className="col-md-6">
            <TodoDoneList />
          </div>
        </div>
      </div>
    </TodoStore>
  );
};

export default App;
