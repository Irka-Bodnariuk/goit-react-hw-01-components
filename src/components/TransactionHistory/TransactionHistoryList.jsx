import PropTypes from 'prop-types';
import { TransactionElem, TransactionItem } from './TransactionHistory.styled';

export default function TransactionHistoryList({ items }) {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionItem key={id}>
          <TransactionElem>{type}</TransactionElem>
          <TransactionElem>{amount}</TransactionElem>
          <TransactionElem>{currency}</TransactionElem>
        </TransactionItem>
      ))}
    </tbody>
  );
}

TransactionHistoryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
