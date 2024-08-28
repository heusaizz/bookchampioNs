import PropTypes from 'prop-types';

const Table = ({ onCalculateAverage }) => {
    const netIncomes = [
        { brand: 'McDonalds', income: 1291283 },
        { brand: 'Burger King', income: 1927361 },
        { brand: 'KFC', income: 1098463 }
    ];

    // Llamar a la función para calcular el promedio
    onCalculateAverage(netIncomes);

    return (
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
    );
};

// Validación de props con lo aprendido hoy 28/08 que es el isRequired
Table.propTypes = {
    onCalculateAverage: PropTypes.func.isRequired,
};

export default Table;

