import React from 'react';

const ClassItem = () => {

  return (
    <div className="class">
      <div
        className="label"
        onClick="{onToggleDone}">label</div>

      <button type="button"
              className="button"
              onClick="{onToggleImportant}">
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
              className="button"
              onClick="{onDelete}">
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  );
};

export default ClassItem;