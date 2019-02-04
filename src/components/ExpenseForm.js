import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  constructor (props) {
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
      this.setState(() => ({createdAt}))
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({focused}))
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({description}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount})) 
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({note}))
  }

  OnSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'this is an error message'}))
      console.log('error')
    } else {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
    <div> 
      <p>Expense Form:</p>
      <div>{this.state.error}</div>
      <form onSubmit={this.OnSubmit}>
        <input 
        value={this.state.description} 
        onChange={this.onDescriptionChange} 
        type="text" 
        placeholder="description" 
        autoFocus
        />
        <input 
        type="text" 
        placeholder="amount"
        value={this.state.amount}
        onChange={this.onAmountChange} 
        /> 
        <textarea 
        placeholder="Add a note to your expense."
        value={this.state.note}
        onChange={this.onNoteChange}
        ></textarea> 
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          id="expense_form_calender" // PropTypes.string.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <button>Add Expense</button>
      </form>
    </div>
    )
  }
}
