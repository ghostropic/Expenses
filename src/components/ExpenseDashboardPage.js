import React from 'react'
import styled from 'styled-components'
import { utils } from '../styles/style'

import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () => (
  <Dashboard>
    <p>Search expenses.</p>
    <ExpenseListFilters />
    <ExpenseSummary />
    <ConnectedExpenseList />
  </Dashboard>
)

const Dashboard = styled.div`
  padding: ${utils.border};
  max-width: 800px;
`

export default ExpenseDashboardPage
