import React from 'react'
import { Link } from 'react-router-dom'

import { removeExpense } from '../actions/expenses'

const toDollars = (pennies) => {
  const dollars = pennies / 100;
  return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const ExpenseListItem = ({
  id, description, dispatch, amount
}) => (
  <div>
    <Link to={`/edit/${id}`}>{description}</Link>
    <span>{toDollars(amount)}</span>
  </div>
)

export default ExpenseListItem
