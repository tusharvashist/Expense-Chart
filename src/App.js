import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpense";

const Dummy_expenses = [
  {
    id: 1,
    date: new Date(2021, 3, 12),
    title: "movie ticket",
    amount: 590,
  },
  {
    id: 2,
    date: new Date(2021, 4, 10),
    title: "maintainance",
    amount: 355,
  },
  {
    id: 3,
    date: new Date(2021, 22, 8),
    title: "shopping",
    amount: 474,
  },
  {
    id: 4,
    date: new Date(2021, 14, 3),
    title: "books",
    amount: 124,
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpenses onSaveExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
