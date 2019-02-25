import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpenseAction
let history
let wrapper

beforeEach(() => {
  addExpenseAction = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpenseAction={addExpenseAction} history={history} />)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(addExpenseAction).toHaveBeenLastCalledWith(expenses[1])
  expect(history.push).toHaveBeenCalledWith('/')
})
