import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown-wrapper">
      <select onChange={props.handleChoice} name="animals" id="animals">
        <option value="All">All</option>
        <option value="Cats">Cats</option>
        <option value="Dogs">Dogs</option>
      </select>
    </div>
  );
};

export default Dropdown;
