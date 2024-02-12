import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";
import css from "./TransactionHistory.module.css";

function TransactionHistory({ history }) {
  return (
    <table>
      <thead className={css.table}>
        <tr>
          <th className={css.tablehitght}>Type</th>
          <th className={css.tablehitght}>Amount</th>
          <th className={css.tablehitght}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {history.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default TransactionHistory;
