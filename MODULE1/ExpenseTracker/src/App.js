import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem(
      "expenseTrackerTransactions"
    );

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "expenseTrackerTransactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now(),
      title: transaction.title,
      amount: Number(transaction.amount),
      type: transaction.type,
    };

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const balance = income - expense;

  return (
    <div className="page">
      <div className="expense-container">

        <h1>Expense Tracker</h1>

        <Summary
          balance={balance}
          income={income}
          expense={expense}
        />

        <ExpenseList
          transactions={transactions}
          onDelete={deleteTransaction}
        />

        <AddTask
          onAddTransaction={addTransaction}
        />

      </div>
    </div>
  );
}

export default App;