import moment from 'moment'

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0))

  expect(action).toEqual({
    type: 'SET_START_DATE',
    start_date: moment(0)
  })
})

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({
    type: 'SET_END_DATE',
    end_date: moment(0)
  })
})

test('should generate setTextFilter action object with provided values', () => {
  const str = ''
  const action = setTextFilter(str)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter_text: str
  })
})

test('should generate setTextFilter action object with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter_text: ''
  })
})

test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SET_AMOUNT' })
})

test('should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SET_DATE' })
})
