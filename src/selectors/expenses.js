import moment from 'moment'

// getVisibleExpenses - passes expense and filters and determines what should be send along the expense list

export default (expenses, {text, sortBy, startDate, endDate}) => { // two arguments: expenses and destructured filters
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDates
    const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
  // return [expenses, startDate]
}