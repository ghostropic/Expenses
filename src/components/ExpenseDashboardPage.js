import React from 'react'
import styled from 'styled-components'

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <h2>dashboard</h2>
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
)

// const ExpenseDashboardPage = () => {
//   return (
//     <div>
//       dashboard
//     </div>
//   )
// }

export default ExpenseDashboardPage