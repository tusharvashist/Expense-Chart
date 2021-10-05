import React, { useState } from "react";
import "./expenseForm.scss";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (title !== "" && date !== "" && amount !== "") {
      const expenseData = {
        title: title,
        date: new Date(date),
        amount: +amount,
      };

      props.onSaveExpenseData(expenseData);

      setTitle("");
      setAmount("");
      setDate("");

      props.onCancelClick();
    } else {
      alert("Please add details");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={changeTitleHandler}
            value={title}
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={changeDateHandler}
          />
        </div>
        <div className="new-expense_action">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.onCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
