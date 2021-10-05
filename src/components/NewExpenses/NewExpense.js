import React, { useState } from "react";
import Card from "../UI/Card";
import AddExpense from "./AddExpense";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.scss";

const NewExpenses = (props) => {
  const [displayAddExpenseButton, setDisplayAddExpenseButton] = useState(true);

  const saveExpenseDate = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 100).toString(),
    };
    props.onSaveExpense(expenseData);
  };

  const manageDisplayAddExpenseButton = () => {
    setDisplayAddExpenseButton(!displayAddExpenseButton);
  };

  return (
    <Card className="new-expense">
      {displayAddExpenseButton ? (
        <AddExpense onDisplayRequire={manageDisplayAddExpenseButton} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDate}
          onCancelClick={manageDisplayAddExpenseButton}
        />
      )}
    </Card>
  );
};

export default NewExpenses;
