import React, { useState, useContext } from 'react';
import { TodoContext } from "../stores/TodoStore";

const AddTodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      addTodo({ text });
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control add-todo"
        placeholder="Add todo"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default AddTodoInput;
