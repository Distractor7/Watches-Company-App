import React, { useState } from "react";

function InterestCalculator() {
  const [amount, setAmount] = useState(0);
  const [timeMonths, setTimeMonths] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [total, setTotal] = useState(0);

  function SubmitButton() {
    setMonthlyPayments(() => (amount / 100) * 20);
    console.log(timeMonths);
    setTotal(() => monthlyPayments * timeMonths);
  }

  return (
    <div className="calculator">
      <p className="welcomeCalc">
        Hello and welcome to the Watches interest calculator. Please enter below
        the principal amount of the product you've purchased, the interest rate
        and the time period of how many years you'll be paying this amount back
        over.
      </p>
      <h3>Principal Amount</h3>
      <input
        id="amountValue"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <h3>Time Duration (in months)</h3>
      <input
        id="rateValue"
        type="text"
        value={timeMonths}
        onChange={(e) => setTimeMonths(e.target.value)}
      />
      <button className="interestSubmit" onClick={SubmitButton}>
        Submit
      </button>
      <h3>Total: {total}</h3>
      <h3>Monthly Payments : {monthlyPayments}</h3>
    </div>
  );
}

export default InterestCalculator;
