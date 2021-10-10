import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
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

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
