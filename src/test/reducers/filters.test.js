import moment from 'moment'

import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SET_AMOUNT'})
  
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = {type: 'SET_DATE'}
  const state = filtersReducer(defaultState, action)

  expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
  const action = {type: 'SET_TEXT_FILTER', filter_text: 'hello'}
  const state = filtersReducer(undefined, action)


  expect(state.text).toBe('hello')
})

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    start_date: moment().startOf('month')
  })

  expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set endDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    end_date: moment().endOf('month')
  })

  expect(state.endDate).toEqual(moment().endOf('month'))
})