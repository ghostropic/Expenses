import moment from 'moment'

// selectExpenses
// passes expenses and filters and determines what expenses should by visible in the expense list given the applied filters.

export default (expenses, {
  text, sortBy, startDate, endDate
}) => expenses.filter((expense) => {
  const createdAtMoment = moment(expense.createdAt)
  const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
  const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
  // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDates
  const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase())
  return startDateMatch && endDateMatch && textMatch
}).sort((a, b) => {
  if (sortBy === 'date') {
    return a.createdAt < b.createdAt ? 1 : -1
  } if (sortBy === 'amount') {
    return a.amount < b.amount ? 1 : -1
  }
})
// return [expenses, startDate]
