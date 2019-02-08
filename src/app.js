import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

// import selectExpenses from './selectors/expenses'

import { addExpense } from './actions/expenses'
import * as actionFilters from './actions/filters'

const store = configureStore()

// console.log(store.getState())

store.subscribe(() => {
  const state = store.getState()
  // const visibleState = selectExpenses(state.expenses, state.filters)
  // console.log(visibleState)
})

store.dispatch(addExpense({ description: 'gas bill', amount: 45000, createdAt: 211000 }))
store.dispatch(addExpense({ description: 'water bill', amount: 15000, createdAt: 221000 }))

store.dispatch(addExpense({ description: 'rent', amount: 215000, createdAt: 321000 }))
store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 381000 }))


// store.dispatch(actionFilters.setTextFilter('gas'))

// setTimeout(() => {
//   store.dispatch(actionFilters.setTextFilter('bill'))
// }, 3000)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
