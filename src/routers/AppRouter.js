import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'

import Header from './../components/Header'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import HelpPage from './../components/HelpPage'
import PageNotFound from './../components/PageNotFound'

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
      <Route path="/create" component={AddExpensePage} exact={true}></Route>
      <Route path="/edit/:id" component={EditExpensePage} exact={true}></Route>
      <Route path="/help" component={HelpPage} exact={true}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  </div>
</BrowserRouter>
)

export default AppRouter