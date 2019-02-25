import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    const { history, editExpenseAction } = this.props
    const { id } = this.props.expense
    editExpenseAction(id, expense)
    history.push('/')
  }

  onRemove = () => {
    const { history, expense, removeExpenseAction } = this.props
    removeExpenseAction(expense)
    history.push('/')
  }

  render() {
    const { expense } = this.props
    return (
      <EditExpensePageWrapper>
        <p>
        Edit expenses for
          <strong>{expense ? ` ${expense.description}` : ''}</strong>
        </p>
        <ExpenseForm
          expense={expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
          type="button"
        >
          Remove
        </button>
      </EditExpensePageWrapper>
    )
  }
}

const EditExpensePageWrapper = styled.div`
  padding: 30px;
`

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = {
  removeExpenseAction: removeExpense,
  editExpenseAction: editExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
