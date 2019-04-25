import React from 'react'
import { shallow, mount } from 'enzyme'

import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

// jest.mock('../../../src/components/ExpenseListItem', () => 
//   () => {}
// )

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />)

  expect(wrapper).toMatchSnapshot()
})


test('should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)

  expect(wrapper).toMatchSnapshot()
})
