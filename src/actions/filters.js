import recucerFilters from '../reducers/filters';

// SET_TEXT_FILTER
export const setTextFilter = (filter_text = '') => ({
  type: 'SET_TEXT_FILTER',
  filter_text
})

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SET_DATE'
})

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SET_AMOUNT'
})

// SET_START_DATE
export const setStartDate = start_date => ({
  type: 'SET_START_DATE',
  start_date
})

// SET_END_DATE
export const setEndDate = end_date => ({
  type: 'SET_END_DATE',
  end_date
})
