import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = props => (
  <div>
    <p>
Edit expenses for
      {props.match.params.id}
    </p>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.match.params.id, expense))
        props.history.push('/')
      }}
    />
    <button onClick={() => {
      props.dispatch(removeExpense(props.expense))
      props.history.push('/')
    }}
    >
Remove
    </button>
  </div>
)

const mapStatetoProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStatetoProps)(EditExpensePage)
