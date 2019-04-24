import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'
import Button from '../../components/Button'

let editExpenseAction
let startRemoveExpense
let history
let wrapper

beforeEach(() => {
  editExpenseAction = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      editExpenseAction={editExpenseAction}
      removeExpenseAction={startRemoveExpense}
      history={history}
      expense={expenses[1]}
    />
  )
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(editExpenseAction).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle onClick to remove expense', () => {
  wrapper.find(Button).prop('onClick')()
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1])
  expect(history.push).toHaveBeenCalledWith('/')
})
