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

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null // string if we are focused on one of the calendars
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { dispatch } = this.props
    dispatch(setStartDate(startDate))
    dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render() {
    const { filters, dispatch } = this.props
    const { calendarFocused } = this.state
    return (
      <FiltersWrapper>
        {/* {console.log('props', this.props)} */}
        <Input
          placeholder=" filter expenses"
          className="normalInput"
          type="text"
          value={filters.text}
          onChange={(e) => {
            dispatch(setTextFilter(e.target.value))
          }}
        />
        <select
          className="normalSelect"
          value={filters.sortBy}
          onChange={(e) => {
            e.target.value === 'date'
              ? dispatch(sortByDate())
              : dispatch(sortByAmount())
          }}
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

export default connect(MapStateToProps)(ExpenseListFilters)
