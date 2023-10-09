function SubmitInterest() {
  const amount = document.getElementById("amountValue");
  const rate = document.getElementById("rateValue");
  const timeMonths = document.getElementById("timeMonthsValue");

  let monthlyPayments = amount * (1 + 0.2);
  let total = timeMonths * monthlyPayments;

  return (
    <div>
      <h1>Monthly payments: {monthlyPayments}</h1>
      <h1>Total interest to be paid: {total}</h1>
    </div>
  );
}
