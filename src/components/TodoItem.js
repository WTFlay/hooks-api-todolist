import React from 'react';

const TodoItem = ({ text }) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" value="" />
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
