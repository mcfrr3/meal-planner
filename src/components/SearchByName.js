import React from "react";
import axios from "axios";

function SearchByName(props) {
  return (
    <label>
      <input
        name="name"
        type="text"
        placeholder="search by name"
        onChange={() => props.onChange()}
        value={props.form.name}
      />
    </label>
  );
}

export default SearchByName
