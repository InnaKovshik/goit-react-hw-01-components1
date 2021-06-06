import s from './Transaction.module.scss';
import PropTypes from 'prop-types';

const TransactionTr = ({ id, type, amount, currency }, i) => {
  const trClassName = i % 2 === 0 ? s.grey : s.white;
  return (
    <tr key={id} className={trClassName}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

const TransactionBody = ({ items }) => {
  if (items.length !== 0)
    return <tbody className={s.tbody}>{items.map(TransactionTr)}</tbody>;
};

const Transaction = ({ transaction }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionBody items={transaction} />
    </table>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transaction;
