import React from "react";
import "./addExpense.scss";

const AddExpense = (props) => {
  return (
    <div className="add-expense-button">
      <button onClick={props.onDisplayRequire}>Add New Expense</button>
    </div>
  );
};

export default AddExpense;
