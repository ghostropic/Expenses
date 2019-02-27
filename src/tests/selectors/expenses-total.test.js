import expenseListTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

// should return 0 if no expenses
test('should return 0 if no expenses', () => {
  const result = expenseListTotal([])
  expect(result).toBe('$0.00')
})

// should correctly add up a single expense
test('should correclty addup a single expense', () => {
  const expense = [expenses[0]]
  const result = expenseListTotal(expense)
  expect(result).toBe('$1.95')
})

// should correclty add up multiple expenses
test('should correclty add up multiple expenses', () => {
  const result = expenseListTotal(expenses)
  expect(result).toBe('$601.95')
})
