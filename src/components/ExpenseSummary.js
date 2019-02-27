import React from 'react'
import { connect } from 'react-redux';

import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const toDollars = (pennies) => {
  const dollars = pennies / 100;
  return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const ExpenseSummary = ({ expensesCount, expensesWord, expensesAmount }) => (
  <div>
    <p>{`Viewing ${expensesCount} ${expensesWord} totaling ${toDollars(expensesAmount)}`}</p>
    <hr />
  </div>
)

const MapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expensesAmount: selectExpensesTotal(visibleExpenses),
    expensesWord: visibleExpenses.length === 1 ? 'expense' : 'expenses'
  }
}

export default connect(MapStateToProps)(ExpenseSummary)
