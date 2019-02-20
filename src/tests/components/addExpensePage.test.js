import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpenseFromProps
let history
let wrapper

beforeEach(() => {
  addExpenseFromProps = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpenseFromProps={addExpenseFromProps} history={history} />)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(addExpenseFromProps).toHaveBeenLastCalledWith(expenses[1])
  expect(history.push).toHaveBeenCalledWith('/')
})
