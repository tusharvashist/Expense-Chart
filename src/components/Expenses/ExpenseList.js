import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expenseList.scss";

const ExpenseList = (props) => {
  if (props.listOFExpense.length === 0) {
    return <h2>No item found</h2>;
  }
  return (
    <ul className="expense-list">
      {props.listOFExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
