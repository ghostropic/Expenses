import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from './Button'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expenseFromForm) => {
    const { history, editExpenseAction } = this.props
    const { expense } = this.props
    editExpenseAction(expense.id, expenseFromForm)
    history.push('/')
  }

  onRemove = () => {
    const { history, expense, removeExpenseAction } = this.props
    // const remove = confirm('Are you sure you want to remove this expense?')
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
        <Button
          className="removeButton"
          onClick={this.onRemove}
          text="remove"
        />
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
  removeExpenseAction: startRemoveExpense,
  editExpenseAction: startEditExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
