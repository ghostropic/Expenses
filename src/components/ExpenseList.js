import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpenseList = ({ expenses }) => (
  <div>
    <p>{`Total: ${selectExpensesTotal(expenses)}`}</p>
    <hr />
    {
      expenses.length === 0
        ? (<p>No Expense to list. Try clearing the date range.</p>)
        : (expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />))
    }
  </div>
)

const MapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(MapStateToProps)(ExpenseList)
