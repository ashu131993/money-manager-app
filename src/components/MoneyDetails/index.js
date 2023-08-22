// Write your code here
// import {Component} from 'react'
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="money-details-container">
      <div className="balance-container money-detail">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="logo"
        />
        <div className="show-data-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="income-container money-detail">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="logo"
        />
        <div className="show-data-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="expense-container money-detail">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="logo"
        />
        <div className="show-data-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

/* class MoneyDetails extends Component {
  render() {
    return (
      <div className="money-details-container">
        <div className="balance-container money-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="logo"
          />
          <div className="show-data-container">
            <p>Your Balance</p>
            <h2>Rs 50000</h2>
          </div>
        </div>
        <div className="income-container money-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="logo"
          />
          <div className="show-data-container">
            <p>Your Income</p>
            <h2>Rs 50000</h2>
          </div>
        </div>
        <div className="expense-container money-detail">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="logo"
          />
          <div className="show-data-container">
            <p>Your Expenses</p>
            <h2>Rs 50000</h2>
          </div>
        </div>
      </div>
    )
  }
} */

export default MoneyDetails
