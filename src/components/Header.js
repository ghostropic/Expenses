import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors, utils } from '../styles/style'

const Header = () => (
  <Heading>
    <div><h1>Expenses</h1></div>
    <StyledNavLink activeClassName="is-active" to="/" exact>Dashboard</StyledNavLink>
    <StyledNavLink activeClassName="is-active" to="/create" exact>Create Expense</StyledNavLink>
    <StyledNavLink activeClassName="is-active" to="/help" exact>Help</StyledNavLink>
  </Heading>
)

const Heading = styled.div`
  height: 150px;
  padding: ${utils.border};
  padding-bottom: 0;

  div {
    background: linear-gradient(30deg, ${colors.blackberry}, ${colors.peach_ginger});
    width: 62px;
  }

  h1 {
    font-size: 4rem;
    margin: 10px;
  }
`

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;
  color: ${colors.night};
  &.is-active {
    color: ${colors.grape};
  }
`;


export default Header
