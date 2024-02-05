import PropTypes from 'prop-types'; 
import TransactionHistoryItem from "./TransactionHistoryItem"
function TransactionHistory({ history }) {
    
    return (
      <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                {history.map( ({id,type,amount,currency}) => {
                    return (
                        <TransactionHistoryItem
                            key={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />

                  )
                    
         })} 
                

  </tbody>
</table>


  )

}


TransactionHistory.propTypes = {
    history : PropTypes.arrayOf(PropTypes.object.isRequired).isRequired

}
export default TransactionHistory