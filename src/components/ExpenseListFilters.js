import React from 'react'
import {connect} from 'react-redux'
import * as actionFilters from '../actions/filters'

const ExpenseListFilters = (props) => (
  <div>
    <span>Filter:</span>
    <input type="text" value={props.filters.text} onChange={(e) => {
      props.dispatch(actionFilters.setTextFilter(e.target.value))
    }}/>
    <select value={props.filters.sortBy} onChange={(e) => {
      e.target.value === 'date' ?
        props.dispatch(actionFilters.sortByDate()) :
        props.dispatch(actionFilters.sortByAmount())
    }}>
      <option value="amount">Amount</option>
      <option value="date">Date</option>
    </select>
  </div>
)

const MapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(MapStateToProps)(ExpenseListFilters) 