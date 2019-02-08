import React from 'react'
import {
  BrowserRouter, Route, Switch, Link, NavLink
} from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import PageNotFound from '../components/PageNotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
