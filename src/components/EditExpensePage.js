import React from 'react'
import styled from 'styled-components'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      edit expenses for {props.match.params.id}
    </div>
  )
}

export default EditExpensePage