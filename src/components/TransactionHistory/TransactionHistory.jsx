import PropTypes from 'prop-types';

// id — унікальний ідентифікатор транзакції
// type — тип транзакції
// amount - сума транзакції
// currency - тип валюти

export default function TransactionHistory() {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
}
