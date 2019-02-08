// filtersReducer - default to showing expense from the current month
import moment from 'moment'

const defaultFiltersState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

export default (state = defaultFiltersState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.filter_text }
    case 'SET_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.start_date }
    case 'SET_END_DATE':
      return { ...state, endDate: action.end_date }
    default:
      return state
  }
}
