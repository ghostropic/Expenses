import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import getVisibleExpenses from './selectors/expenses'

import {addExpense} from './actions/expenses'
import * as actionFilters from './actions/filters'

const store = configureStore()

// console.log(store.getState())

store.subscribe(() => {
  const state = store.getState()
  const visibleState = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleState)
})

const expenseOne = store.dispatch(addExpense({description: 'gas bill', amount: 45000, createdAt: 211000}))
const expenseTwo = store.dispatch(addExpense({description: 'water bill', amount: 15000, createdAt: 221000}))

store.dispatch(actionFilters.setTextFilter('gas'))

setTimeout(() => {
  store.dispatch(actionFilters.setTextFilter('bacon'))
}, 2000)

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
