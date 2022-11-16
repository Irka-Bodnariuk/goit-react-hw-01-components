import PropTypes from 'prop-types';
import TransactionHistoryList from './TransactionHistoryList';
import {
  Transaction,
  TransactionTitlElem,
  TransactionItem,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Transaction>
      <thead>
        <TransactionItem>
          <TransactionTitlElem>Type</TransactionTitlElem>
          <TransactionTitlElem>Amount</TransactionTitlElem>
          <TransactionTitlElem>Currency</TransactionTitlElem>
        </TransactionItem>
      </thead>

      <>
        <TransactionHistoryList items={items} />
      </>
    </Transaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
