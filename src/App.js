import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Hannam The Hill',
    amount: 9912.34,
    date: new Date(2025, 1, 18),
  },
  {
    id: 'e2',
    title: 'Rolex',
    amount: 3212.34,
    date: new Date(2023, 9, 28),
  },
  {
    id: 'e3',
    title: 'Rolls Roys',
    amount: 6743.34,
    date: new Date(2024, 5, 18),
  },
  {
    id: 'e4',
    title: 'Happiness',
    amount: 0.01,
    date: new Date(2000, 1, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
