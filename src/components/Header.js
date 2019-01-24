import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'

const mainColor = 'palevioletred'
const altColor = 'blueviolet'

// const Heading = styled(Header)`
//   h1 {
//     color: ${mainColor}
//   }
// `

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin: 10px;
  color: ${mainColor};
  &.is-active {
    color: ${altColor};
  }
`;

const Header = () => (
  <header>
    <h1>HEADER</h1>
    <StyledNavLink activeClassName="is-active" to="/" exact={true}>Dashboard</StyledNavLink>
    <StyledNavLink activeClassName="is-active" to="/create" exact={true}>Create Expense</StyledNavLink>
    <StyledNavLink activeClassName="is-active" to="/help" exact={true}>Help</StyledNavLink>
    <hr/>
  </header>
)

export default Header