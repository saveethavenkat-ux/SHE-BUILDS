import React from "react";

function ExpenseList({ transactions, onDelete }) {
  return (
    <section className="history-section">

      <h2 className="section-title">
        History
      </h2>

      <div className="section-line"></div>

      <div className="transaction-list">

        {transactions.length === 0 ? (
          <p className="no-transactions">
            No transactions yet.
          </p>
        ) : (
          transactions.map((transaction) => (
            <div
              className={`transaction ${
                transaction.type === "income"
                  ? "income-transaction"
                  : "expense-transaction"
              }`}
              key={transaction.id}
            >

              <span className="transaction-title">
                {transaction.title}
              </span>

              <div className="transaction-right">

                <span className="transaction-amount">
                  {transaction.type === "income"
                    ? "+"
                    : "-"}
                  ${transaction.amount.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>

                <button
                  className="delete-button"
                  onClick={() =>
                    onDelete(transaction.id)
                  }
                  title="Delete transaction"
                >
                  ×
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default ExpenseList;