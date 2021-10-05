import React from "react";
import "./expenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li className="expense-list-item">
      <Card className="expense_data">
        <ExpenseDate date={props.date} />
        <h2 className="expense_name">{props.title}</h2>
        <div className="amount">${props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
