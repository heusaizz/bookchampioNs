import PropTypes from 'prop-types';

const Table = ({ onCalculateAverage }) => {
    const netIncomes = [
        { brand: 'McDonalds', income: 1291283 },
        { brand: 'Burger King', income: 1927361 },
        { brand: 'KFC', income: 1098463 }
    ];

    const averageIncome = onCalculateAverage(netIncomes);

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Net Income</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((income, index) => (
                        <tr key={index}>
                            <td>{income.brand}</td>
                            <td>{income.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Average Net Income: {averageIncome.toFixed(2)}</p>
        </div>
    );
};

Table.propTypes = {
    onCalculateAverage: PropTypes.func.isRequired,
};

export default Table;
