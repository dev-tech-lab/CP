import './index.css'

const MoneyDetails = props => {
  const {amountValues} = props
  const {balanceAmount, incomeAmount, expensesAmount} = amountValues

  return (
    <>
      <li className="card green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="card-img"
        />
        <div className="text">
          <p className="card-title">Your Balance</p>
          <p className="card-amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="card blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="card-img"
        />
        <div className="text">
          <p className="card-title">Your Income</p>
          <p className="card-amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="card purple">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="card-img"
        />
        <div className="text">
          <p className="card-title">Your Expenses</p>
          <p className="card-amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
