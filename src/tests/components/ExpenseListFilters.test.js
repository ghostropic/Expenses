import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import { Input } from '../../styles/style'

let setTextFilterAction
let sortByDateAction
let sortByAmountAction
let setStartDateAction
let setEndDateAction
let wrapper

beforeEach(() => {
  setTextFilterAction = jest.fn()
  sortByDateAction = jest.fn()
  sortByAmountAction = jest.fn()
  setStartDateAction = jest.fn()
  setEndDateAction = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilterAction={setTextFilterAction}
      sortByDateAction={sortByDateAction}
      sortByAmountAction={sortByAmountAction}
      setStartDateAction={setStartDateAction}
      setEndDateAction={setEndDateAction}
    />
  )
})

test('it should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('it should render correctly with altfilters', () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'bills'
  const e = { target: { value } }
  wrapper.find(Input).prop('onChange')(e)
  expect(setTextFilterAction).toHaveBeenLastCalledWith(value)
})
// test('should handle text change', () => {
//   const value = 'new text'
//   wrapper.find(Input).simulate('change', {
//     target: { value }
//   })
//   expect(setTextFilterAction).toHaveBeenLastCalledWith(value)
// })

test('should sort by date', () => {
  wrapper.setProps({ filters: altFilters })
  const value = 'date'
  const e = { target: { value } }
  wrapper.find('select').prop('onChange')(e)
  expect(sortByDateAction).toHaveBeenCalled()
})

test('should sort by amount', () => {
  const value = 'amount'
  const e = { target: { value } }
  wrapper.find('select').prop('onChange')(e)
  expect(sortByAmountAction).toHaveBeenCalled()
})

test('should handle date change', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDateAction).toHaveBeenLastCalledWith(startDate)
  expect(setEndDateAction).toHaveBeenLastCalledWith(endDate)
})

test('should handle date change', () => {
  const calendarFocused = 'endDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state().calendarFocused).toEqual(calendarFocused)
})
