import React from 'react'
import moment from 'moment'

import { StyledLink } from '../styles/style'

const toDollars = (pennies) => {
  const dollars = pennies / 100;
  return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

const toDate = createdAt => moment(createdAt).format('MM/DD/YYYY h:mm a')

const ExpenseListItem = ({
  id,
  description,
  amount,
  note,
  createdAt
}) => (
  <div>
    <p>{toDollars(amount)}</p>
    <StyledLink to={`/edit/${id}`}>{description}</StyledLink>
    <p>{note}</p>
    <p>{toDate(createdAt)}</p>
    <hr />
  </div>
)


export default ExpenseListItem
