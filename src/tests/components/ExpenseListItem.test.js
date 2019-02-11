import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses';

test('should render list of expenses', () => {
  // const date = moment(wtf[0].createdAt).format('MM/DD/YYYY h:mm a')

  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)

  expect(wrapper).toMatchSnapshot()
})
 