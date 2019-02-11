import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const toDollars = (pennies) => {
  const dollars = pennies / 100;
  return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const toDate = createdAt => moment(createdAt).format('MM/DD/YYYY h:mm a')

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt
}) => (
  <div>
    <p>{toDollars(amount)}</p>
    <Link to={`/edit/${id}`}>{description}</Link>
    <p>{toDate(createdAt)}</p>
    <hr />
  </div>
)

export default ExpenseListItem
