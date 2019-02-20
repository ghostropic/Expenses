import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

// using a class here because we don't want to
// define onSubmit inline which would be recalculated every render
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    const { addExpenseFromProps } = this.props
    addExpenseFromProps(expense)

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
export default connect(undefined, { addExpense })(AddExpensePage)

// 2
// const mapDispatchToProps = { //action creators
//   addExpense
// }
// export default connect(undefined, mapDispatchToProps)(AddExpensePage)

// 3
// only decalre mapDispatchToProps as a function if you need to customize dispatching behavior.
// const mapDispatchToProps = dispatch => ({
//   addExpense: expense => dispatch(addExpense(expense))
// })
// export default connect(undefined, mapDispatchToProps)(AddExpensePage)
