import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set up expensesReducer with default values', () => {
  const state = expensesReducer(undefined, '@@INIT')

  expect(state).toEqual([])
})

test('should add expense to state', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  }
  const state = expensesReducer(undefined, action)

  expect(state[0].note).toEqual('one pack of bubble gum')
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
  const updates = {
    description: 'december rent'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  }
  const state = expensesReducer(expenses, action)

  expect(state[1].description).toBe('december rent')
})

test('should not edit expense if id is not found', () => {
  const updates = {
    description: 'december rent'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action)

  expect(state[1].description).toBe('rent')
})

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
})
