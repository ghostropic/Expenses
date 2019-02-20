import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import { Input, Button, TextArea } from '../../styles/style'

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)

  expect(wrapper).toMatchSnapshot()
})

test('should render error when form is submitted incorrectly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'new description'
  wrapper.find(Input).at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'new note'
  wrapper.find(TextArea).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = '22.95'
  wrapper.find(Input).at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if input is invalid', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = '22.955'
  wrapper.find(Input).at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
  // onSubmitSpy('jon')
  // expect(onSubmitSpy).toHaveBeenLastCalledWith('jon')
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    description: expenses[0].description,
    note: expenses[0].note
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
  expect(wrapper.state('focused')).toEqual(focused)
})
