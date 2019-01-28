import React from 'react'
import {connect} from 'react-redux'

import {removeExpense} from '../actions/expenses'

const toDollars = (pennies) => {
  let dollars = pennies / 100;
  return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}

const ExpenseListItem = ({id, description, dispatch, amount}) => (
  <div>
    <span>{description}</span> <span>{toDollars(amount)}</span>
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }}>Remove</button>
  </div>
)

export default connect()(ExpenseListItem)
