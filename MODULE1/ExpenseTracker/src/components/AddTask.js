import React, { useState } from "react";

function AddTask({ onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }

    if (amount === "" || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (type === "") {
      alert("Please select Income or Expense.");
      return;
    }

    onAddTransaction({
      title: title.trim(),
      amount: Number(amount),
      type: type,
    });

    setTitle("");
    setAmount("");
    setType("");
  };

  return (
    <section className="add-section">

      <h2 className="section-title">
        Add new transaction
      </h2>

      <div className="section-line"></div>

      <form
        onSubmit={submitHandler}
        className="transaction-form"
      >

        <div className="input-group">

          <label htmlFor="title">
            Title
          </label>

          <input
            id="title"
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />

        </div>

        <div className="input-group">

          <label htmlFor="amount">
            Amount
          </label>

          <input
            id="amount"
            type="number"
            placeholder="Enter amount..."
            min="0"
            step="0.01"
            value={amount}
            onChange={(event) =>
              setAmount(event.target.value)
            }
          />

        </div>

        <div className="radio-group">

          <label className="radio-option">

            <input
              type="radio"
              name="transactionType"
              value="income"
              checked={type === "income"}
              onChange={(event) =>
                setType(event.target.value)
              }
            />

            <span>Income</span>

          </label>

          <label className="radio-option">

            <input
              type="radio"
              name="transactionType"
              value="expense"
              checked={type === "expense"}
              onChange={(event) =>
                setType(event.target.value)
              }
            />

            <span>Expense</span>

          </label>

        </div>

        <button
          type="submit"
          className="add-transaction-button"
        >
          Add transaction
        </button>

      </form>

    </section>
  );
}

export default AddTask;