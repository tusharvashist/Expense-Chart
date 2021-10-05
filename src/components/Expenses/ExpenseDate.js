import React from "react";
import "./expenseDate.scss";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
