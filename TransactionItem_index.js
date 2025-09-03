import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {id, title, amount, displayText} = details

  const deleteTransaction = () => onDelete(id)

  return (
    <li className="each-row">
      <p className="col">{title}</p>
      <p className="col">{amount}</p>
      <p className="col">{displayText}</p>
      <button
        type="button"
        className="delete-button"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          className="trash-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
