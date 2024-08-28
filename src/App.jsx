import Table from './components/Table';

const App = () => {
  let averageIncome = 0;

  const calculateAverage = (netIncomes) => {
    const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
    averageIncome = totalIncome / netIncomes.length;
  };

  return (
    <div>
      <h1>Net Incomes by Brand</h1>
      <Table onCalculateAverage={calculateAverage} />
      <p>Average Net Income: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;

