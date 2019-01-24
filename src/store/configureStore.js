import {createStore, combineReducers} from 'redux'

import expensesReducer from './../reducers/expenses'
import filtersReducer from './../reducers/filters'

export default () => { // so we can call this what we like and get createStore
  const store = createStore(
    combineReducers({ //combineReducers take a object
      expenses: expensesReducer,
      filters: filtersReducer
    })
  )
  return store
}