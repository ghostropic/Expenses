import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render expense summary correctly with 0 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={0} expensesAmount={0} expensesWord="expenses" />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expenses summary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesAmount={100} expensesWord="expense" />)
  expect(wrapper).toMatchSnapshot()
})

test('should render expenses summary correctly with many expenses', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={10} expensesAmount={10000} expensesWord="expenses" />)
  expect(wrapper).toMatchSnapshot()
})
