import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import StyledButton from './Button'
import { Input, TextArea } from '../styles/style'
import 'react-dates/initialize'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100) : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }))
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  OnSubmit = (e) => {
    e.preventDefault()
    const { description, amount, note, createdAt } = this.state
    const { onSubmit } = this.props
    if (!description || !amount) {
      this.setState(() => ({ error: 'this is an error message' }))
    } else {
      this.setState(() => ({ error: '' }))
      onSubmit({
        note,
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf()
      })
    }
  }

  render() {
    const { error, description, amount, note, createdAt, focused } = this.state
    return (
      <div>
        <div>{error}</div>
        <form onSubmit={this.OnSubmit}>
          <Input
            value={description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="description"
            autoFocus
          />
          <Input
            type="text"
            placeholder="amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="expense_form_calender" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <StyledButton
            className="formButton"
            text="Add Expense"
            type="submit"
            />
          <TextArea
            placeholder="Add a note to your expense."
            value={note}
            onChange={this.onNoteChange}
          />
        </form>
      </div>
    )
  }
}
