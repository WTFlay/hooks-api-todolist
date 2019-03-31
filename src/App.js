import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoDoneList from "./components/TodoDoneList";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
