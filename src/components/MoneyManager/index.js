import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    history: [],
    title: '',
    amount: '',
    transactionType: 'Income',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTransactionType = event => {
    const tt = event.target.value[0] + event.target.value.slice(1).toLowerCase()
    this.setState({transactionType: tt})
  }

  onSubmitBalanceQuery = event => {
    event.preventDefault()
    const {title, amount, transactionType} = this.state
    if (title !== '' && amount !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount: `Rs ${amount}`,
        transactionType,
      }

      this.setState(preState => ({
        history: [...preState.history, newTransaction],
        title: '',
        amount: '',
      }))

      if (newTransaction.transactionType === 'Income') {
        this.setState(preState => ({
          balance: preState.balance + parseInt(newTransaction.amount.slice(3)),
          income: preState.income + parseInt(newTransaction.amount.slice(3)),
        }))
      } else {
        this.setState(preState => ({
          balance: preState.balance - parseInt(newTransaction.amount.slice(3)),
          expenses:
            preState.expenses + parseInt(newTransaction.amount.slice(3)),
        }))
      }
    }
  }

  deleteItem = id => {
    const {history} = this.state
    const deletedItem = history.filter(eachItem => eachItem.id === id)
    const updatedList = history.filter(eachItem => eachItem.id !== id)

    console.log(deletedItem)

    if (deletedItem[0].transactionType === 'Income') {
      this.setState(preState => ({
        balance: preState.balance - parseInt(deletedItem[0].amount.slice(3)),
        income: preState.income - parseInt(deletedItem[0].amount.slice(3)),
        history: updatedList,
      }))
    } else {
      this.setState(preState => ({
        expenses: preState.expenses - parseInt(deletedItem[0].amount.slice(3)),
        balance: preState.balance + parseInt(deletedItem[0].amount.slice(3)),
        history: updatedList,
      }))
    }
  }

  render() {
    const {balance, income, expenses, title, amount, history} = this.state

    return (
      <div className="app-bg-container">
        <div className="app-money-manager">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails balance={balance} income={income} expenses={expenses} />
        <div className="transactions-container">
          <div className="add-transactions-container">
            <h1 className="add-transaction-heading">Add Transactions</h1>
            <form
              className="add-transaction-form"
              onSubmit={this.onSubmitBalanceQuery}
            >
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type">TYPE</label>
              <select id="type" onChange={this.onChangeTransactionType}>
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="transactions-history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-headers-container">
              <p className="header">Title</p>
              <p className="header">Amount</p>
              <p className="header">Type</p>
            </div>
            <ul>
              {history.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  historyList={eachItem}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
