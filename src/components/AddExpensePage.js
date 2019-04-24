import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

// using a class here because we don't want to
// define onSubmit inline which would be recalculated every render
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    const { addExpenseAction } = this.props
    addExpenseAction(expense)

    const { history } = this.props
    history.push('/')
  }

  render() {
    return (
      <AddExpensePageWrapper>
        <p>Add an expense.</p>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </AddExpensePageWrapper>
    )
  }
}

const AddExpensePageWrapper = styled.div`
  padding: 30px;
`

// 1
// best if possible
// export default connect(undefined, { addExpense })(AddExpensePage)

// 2
// need to use this one beacause there is a naming conflict with the prop and the action
// const mapDispatchToProps = {
//   addExpenseAction: startAddExpense
// }
// export default connect(undefined, mapDispatchToProps)(AddExpensePage)

// 3
// only declare mapDispatchToProps as a function if you need to customize dispatching behavior.
const mapDispatchToProps = dispatch => ({
  addExpenseAction: expense => dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage)
