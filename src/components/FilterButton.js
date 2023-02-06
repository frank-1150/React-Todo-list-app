import React from "react";

function FilterButton(props) {
  function handleOnClick(e) {
    props.setFilter(props.name);
  }
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={handleOnClick}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name} </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
