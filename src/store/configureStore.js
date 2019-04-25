import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import ReduxThunk from 'redux-thunk'

import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_compose__ || compose

export default () => { // in order to return createStore from import
  const store = createStore(
    // combineReducers takes an object -- this means any-
    // action dispatched will trigger all reducers to check action type
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(ReduxThunk))
  )
  return store
}
