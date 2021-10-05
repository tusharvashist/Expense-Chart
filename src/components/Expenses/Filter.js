import React from "react";
import "./filter.scss";

const Filter = (props) => {
  const filteredDate = (event) => {
    props.onSelectDate(event.target.value);
  };

  return (
    <div className="filter">
      <div className="filter-value">
        <label htmlFor="date">Filter with Year</label>
        <select
          id="date"
          name="date"
          onChange={filteredDate}
          value={props.setupDate}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      {props.children}
    </div>
  );
};

export default Filter;
