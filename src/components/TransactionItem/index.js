// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyList, deleteItem} = props
  const {id, title, amount, transactionType} = historyList

  const deleteEntry = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="transaction-item-container">
        <p className="description">{title}</p>
        <p className="description">{amount}</p>
        <p className="description">{transactionType}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={deleteEntry}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
