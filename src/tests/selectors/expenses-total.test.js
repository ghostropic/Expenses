import expenseListTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const result = expenseListTotal([])
  expect(result).toBe(0)
})

test('should correclty addup a single expense', () => {
  const expense = [expenses[0]]
  const result = expenseListTotal(expense)
  expect(result).toBe(195)
})

test('should correclty add up multiple expenses', () => {
  const result = expenseListTotal(expenses)
  expect(result).toBe(60195)
})
