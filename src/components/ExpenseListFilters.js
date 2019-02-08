import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates';

// import * as actionFilters from '../actions/filters'
import {
  setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate
} from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null // string if we are focused on one of the calendars
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render() {
    return (
      <div>
        <span>Filter:</span>
        {console.log('elf', this.props)}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            e.target.value === 'date'
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAmount())
          }}
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          onDatesChange={this.onDatesChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    )
  }
}

const MapStateToProps = state => ({
  filters: state.filters
})

export default connect(MapStateToProps)(ExpenseListFilters)
