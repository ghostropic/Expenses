import React from 'react'
import styled from 'styled-components'

const Button = ({ text, onClick, disabled, className, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    {text}
  </button>
)

const StyledButton = styled(Button)`
  cursor: pointer;
  height: 48px;
  display: inline-block;
  padding: 0.5rem 0;
  width: 11rem;
  color: ${props => props.color || 'white'};
  border: 2px solid ${props => props.color || 'white'};
  background: ${props => props.background || 'transparent'};

  &.formButton {
    margin: 7px;
  }
  
  &.removeButton {
    background: palevioletred;
  }
 `

export default StyledButton
