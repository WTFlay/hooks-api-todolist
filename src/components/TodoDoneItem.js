import React from 'react';

const TodoDoneItem = ({ text }) => {
  return (
    <div>
      {text}
      <button className="remove-item btn btn-default btn-xs pull-right">
        <span className="glyphicon glyphicon-remove"/>
      </button>
    </div>
  );
};

export default TodoDoneItem;
