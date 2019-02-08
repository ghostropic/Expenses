import { createStore, combineReducers } from 'redux'

import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

/* eslint-disable no-underscore-dangle */
export default () => { // in order to return createStore from import
  const store = createStore(
    combineReducers({ // combineReducers take a object -- this means any action dispatched will trigger all reducers to check action type
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux dev tools ext
  )
  return store
}
/* eslint-enable */
