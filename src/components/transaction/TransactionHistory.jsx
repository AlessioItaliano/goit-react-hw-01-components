import PropTypes from 'prop-types';

import TransactionHistoryTable from './TransactionHistory.module'

const TransactionHistory = ({items}) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item =>(
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
         </tr>)
          )}

  </tbody>
      </TransactionHistoryTable>
)
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      "item.type": PropTypes.string.isRequired,
      "item.amount": PropTypes.number.isRequired,
      "item.currency": PropTypes.string.isRequired,
    }))
}

export default TransactionHistory