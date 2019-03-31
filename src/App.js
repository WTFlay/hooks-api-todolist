import React from 'react';
import './App.css';
import TodoStore from "./stores/TodoStore";
import DoneStore from "./stores/DoneStore";
import TodoList from "./components/TodoList";
import TodoDoneList from "./components/TodoDoneList";

const App = () => {
  return (
    <TodoStore>
      <DoneStore>
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
      </DoneStore>
    </TodoStore>
  );
};

export default App;
