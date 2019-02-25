import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates';
import styled from 'styled-components'

import { Input } from '../styles/style'

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null // string if we are focused on one of the calendars
  }

  onTextChange = (e) => {
    const { setTextFilterAction } = this.props
    setTextFilterAction(e.target.value)
  }

  onSortChange = (e) => {
    const { sortByDateAction, sortByAmountAction } = this.props
    e.target.value === 'date'
      ? sortByDateAction()
      : sortByAmountAction()
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDateAction, setEndDateAction } = this.props
    setStartDateAction(startDate)
    setEndDateAction(endDate)
  }

  render() {
    const { filters } = this.props
    const { calendarFocused } = this.state
    return (
      <FiltersWrapper>
        <Input
          placeholder=" filter expenses"
          className="normalInput"
          type="text"
          value={filters.text}
          onChange={this.onTextChange}
        />
        <select
          className="normalSelect"
          value={filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          startDateId="your_unique_start_date_id"
          endDateId="your_unique_end_date_id"
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          onDatesChange={this.onDatesChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </FiltersWrapper>
    )
  }
}

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  select:not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1"><path d="M4 8L0 4h8z"/></svg>');
    padding: .5em;
    padding-right: 1.5em;
  }
  .normalSelect {
    border-radius: 1px;
    border: 0;
  }
  .normalInput, .normalSelect {
    height: 48px;
    border: none;
    margin-right: 7px;
  }
`

const MapStateToProps = state => ({
  filters: state.filters
})

const MapDispatchToProps = {
  setTextFilterAction: setTextFilter,
  sortByDateAction: sortByDate,
  sortByAmountAction: sortByAmount,
  setStartDateAction: setStartDate,
  setEndDateAction: setEndDate
}

export default connect(MapStateToProps, MapDispatchToProps)(ExpenseListFilters)
