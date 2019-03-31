import React from 'react';

const TodoLeft = ({ total }) => {
  return (
    <div>
      <strong>
        <span className="count-todos">
          {total}&nbsp;
        </span>
      </strong>
      items left
    </div>
  );
};

export default TodoLeft;
