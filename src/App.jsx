import Table from './components/Table';

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const calculateAverage = (incomes) => {
    const totalIncome = incomes.reduce((acc, curr) => acc + curr.income, 0);
    return totalIncome / incomes.length;
  };

  const averageIncome = calculateAverage(netIncomes);

  return (
    <div>
      <h1>Net Incomes by Brand</h1>
      <Table table={netIncomes} />
      <p>Average Net Income: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;