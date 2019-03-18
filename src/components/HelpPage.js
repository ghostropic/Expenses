import React from 'react'
import styled from 'styled-components'

const HelpPage = () => (
  <HelpPageWrapper>
    <h2>Help Page</h2>
    <p>Add an expense via the Create Expense page.</p>
    <p>Remove an expense via the link on the Dashboard.</p>
  </HelpPageWrapper>
)

const HelpPageWrapper = styled.div`
  padding: 30px;
`

export default HelpPage
