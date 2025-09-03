import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

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

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    balance: 0,
    income: 0,
    expenses: 0,
  }

  addTransaction = event => {
    event.preventDefault()

    const {transactionList, title, amount, type} = this.state

    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type,
      displayText: type === 'INCOME' ? 'Income' : 'Expenses',
    }

    const newList = [...transactionList, newTransaction]

    const income = newList
      .filter(item => item.type === 'INCOME')
      .reduce((acc, item) => acc + item.amount, 0)

    const expenses = newList
      .filter(item => item.type === 'EXPENSES')
      .reduce((acc, item) => acc + item.amount, 0)

    const balance = income - expenses

    this.setState({
      transactionList: newList,
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
      balance,
      income,
      expenses,
    })
  }

  updateTitle = event => this.setState({title: event.target.value})

  updateAmount = event => this.setState({amount: event.target.value})

  updateType = event => this.setState({type: event.target.value})

  deleteRow = id => {
    this.setState(prevState => {
      const newList = prevState.transactionList.filter(item => item.id !== id)

      const income = newList
        .filter(item => item.type === 'INCOME')
        .reduce((acc, item) => acc + item.amount, 0)

      const expenses = newList
        .filter(item => item.type === 'EXPENSES')
        .reduce((acc, item) => acc + item.amount, 0)

      const balance = income - expenses

      return {
        transactionList: newList,
        income,
        expenses,
        balance,
      }
    })
  }

  render() {
    const {transactionList, title, amount, type, income, expenses, balance} =
      this.state
    const amountValues = {
      balanceAmount: balance,
      incomeAmount: income,
      expensesAmount: expenses,
    }
    return (
      <div className="bg-container">
        <div className="welcome-header">
          <h1 className="greeting">Hi, Richard</h1>
          <p className="welcome-msg">
            Welcome back to your{' '}
            <span className="blue-bolded-text">Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails amountValues={amountValues} />
        </div>
        <div className="transaction-section">
          <form className="transaction-form" onSubmit={this.addTransaction}>
            <h1 className="section-heading">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <input
              id="title"
              type="text"
              className="input"
              value={title}
              onChange={this.updateTitle}
              placeholder="Title"
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <input
              id="amount"
              type="text"
              className="input"
              value={amount}
              onChange={this.updateAmount}
              placeholder="Amount"
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <select
              id="type"
              className="dropdown"
              value={type}
              onChange={this.updateType}
            >
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="form-button">
              Add
            </button>
          </form>

          <div className="transaction-display">
            <h1 className="section-heading">History</h1>
            <ul className="transaction-table">
              <li className="transaction-row">
                <p className="col heading-row">Title</p>
                <p className="col heading-row">Amount</p>
                <p className="col heading-row">Type</p>
              </li>
              {transactionList.map(item => (
                <TransactionItem
                  key={item.id}
                  details={item}
                  onDelete={this.deleteRow}
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
