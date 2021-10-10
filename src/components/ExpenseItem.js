import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Feb 18th 2025</div>
      <div className="expense-item__description">
        <h2>Hannam The Hill</h2>
        <div className="expense-item__price">$9294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
