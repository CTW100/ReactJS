import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2025, 1, 18);
  const expenseTitle = 'Hannam The Hill';
  const expenseAmount = 9294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
