import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import ExpenseForm from './ExpenseForm'
import expenses from '../reducers/expenses'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    add expense:
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage)