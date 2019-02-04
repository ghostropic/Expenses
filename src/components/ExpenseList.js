import React from 'react'
import {connect} from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h3>expense list</h3>
    {/* {props.expenses.map((expense) => <ExpenseListItem key={expense.id} amount={expense.amount} description={expense.description}/>)} */}
    {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/>)}
  </div>
)

const MapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(MapStateToProps)(ExpenseList)