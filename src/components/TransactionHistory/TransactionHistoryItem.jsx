import PropTypes from "prop-types";
import css from "./TransactionHistoryItem.module.css";

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={css.tablerow}>
      <td className={css.tablebody}>{type}</td>
      <td className={css.tablebody}>{amount}</td>
      <td className={css.tablebody}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
