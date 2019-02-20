import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const colors = {
  blackberry: '#AEB9FF',
  blueberry: '#4A69FF',
  mixed_berry: '#244BFF',
  grape: '#4c26b5',
  hibiscus: '#FF4A4A',
  peach: '#FF9E8F',
  ginger: '#FDBE93',
  peach_ginger: '#CF4710',
  nude: '#FBE4C7',
  night: '#0A0A3A',
  mint: '#5fe2dc',
  plum: '#8700bf'
}

export const utils = {
  border: '30px'
}

// components

export const Input = styled.input`
  height: 48px;
  border: none;
  margin-right: 7px;
`

export const TextArea = styled.textarea`
  height: 80px;
  display: block;
  width: 260px;
  border: none;
`

export const Button = css`
  height: 48px;
  display: inline-block;
  padding: 0.5rem 0;
  margin: 7px;
  width: 11rem;
  color: white;
  border: 2px solid white;
  background: ${props => props.background || 'palevioletred'};
 `

export const StyledLink = styled(Link)`
  margin: 10px 0;
  color: ${colors.night};
  &.is-active {
    color: ${colors.grape};
  }
`
