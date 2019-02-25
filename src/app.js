import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle, keyframes } from 'styled-components'

import 'react-dates/lib/css/_datepicker.css'
import { colors, utils } from './styles/style'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
// import selectExpenses from './selectors/expenses'
import { addExpense } from './actions/expenses'

const store = configureStore()

// console.log(store.getState())
// seed
store.dispatch(addExpense({ description: 'gas bill', amount: 45000, createdAt: 211000 }))
store.dispatch(addExpense({ description: 'water bill', amount: 15000, createdAt: 221000 }))

store.dispatch(addExpense({ description: 'rent', amount: 215000, createdAt: 321000 }))
store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 381000 }))

// store.dispatch(actionFilters.setTextFilter('gas'))

// setTimeout(() => {
//   store.dispatch(actionFilters.setTextFilter('bill'))
// }, 3000)

const changingGradient = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400");
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(30deg, ${colors.blackberry}, ${colors.peach_ginger});
    width: calc(100% - ${utils.border});
    min-height: calc(100% - ${utils.border});
    margin: calc(${utils.border} / 2);
    color: ${colors.night};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #app {
    background: linear-gradient(30deg,${colors.mint}, ${colors.plum});
    ${'' /* background: repeating-linear-gradient(45deg, ${colors.mint}, ${colors.plum} 9%); */}
    background-size: 400% 400%;
    animation: ${changingGradient} 5s ease infinite;
    width: calc(100% - ${utils.border});
    min-height: calc(100% - ${utils.border});
    margin: calc(${utils.border} / 2);
  }
  #app > div:first-of-type {
    background-image: linear-gradient(30deg,${colors.peach_ginger}, ${colors.blackberry});
    width: calc(100% - 30px);
    min-height: calc(100% - 30px * 2);
    margin: calc(30px / 2);
  }
  hr {
    margin: 0;
    padding: 0;
    border: .5px solid ${colors.ginger};
    width: 25%;
  }
`

const jsx = (
  <Provider store={store}>
    <GlobalStyle />
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
