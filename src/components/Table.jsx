import PropTypes from 'prop-types';

const TableItem = ({ brand, income }) => (
    <tr>
        <td>{brand}</td>
        <td>{income}</td>
    </tr>
);

TableItem.propTypes = {
    brand: PropTypes.string,
    income: PropTypes.number,
};

const Table = ({ table }) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Net Income</th>
                </tr>
            </thead>
            <tbody>
                {table.map((item, index) => (
                    <TableItem key={index} brand={item.brand} income={item.income} />
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    table: PropTypes.array.isRequired,  
};

export default Table;
