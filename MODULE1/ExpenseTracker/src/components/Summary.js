import React from "react";

function Summary({ balance, income, expense }) {
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className="summary-section">

      <div className="balance-section">
        <p className="balance-label">YOUR BALANCE</p>

        <h2 className="balance-amount">
          ${formatAmount(balance)}
        </h2>
      </div>

      <div className="income-expense">

        <div className="money-box">
          <h3>INCOME</h3>

          <p className="income-amount">
            ${formatAmount(income)}
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="money-box">
          <h3>EXPENSE</h3>

          <p className="expense-amount">
            ${formatAmount(expense)}
          </p>
        </div>

      </div>

    </section>
  );
}

export default Summary;