import React, { useState } from "react";
import "./expenses.scss";
import Card from "../UI/Card";
import Filter from "./Filter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedDate, setSelectedDate] = useState("2021");

  const saveSelectedDate = (newDate) => {
    setSelectedDate(newDate);
  };

  const listOFExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedDate;
  });

  return (
    <div>
      <Card className="expenses">
        <Filter onSelectDate={saveSelectedDate} setupDate={selectedDate} />
        <ExpensesChart expenses={listOFExpense} />
        <ExpenseList listOFExpense={listOFExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
