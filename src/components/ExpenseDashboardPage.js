import React from 'react'
import styled from 'styled-components'
import { utils } from '../styles/style'

import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <Dashboard>
    <p>Search expenses.</p>
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </Dashboard>
)

const Dashboard = styled.div`
  padding: ${utils.border};
  max-width: 800px;
`

export default ExpenseDashboardPage
