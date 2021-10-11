import Expenses from './components/Expenses/Expenses';

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
      <h1>Let's get started!</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
