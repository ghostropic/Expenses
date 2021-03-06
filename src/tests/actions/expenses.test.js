import configureMockStore from 'redux-mock-store'
import ReduxThunk from 'redux-thunk'

import database from '../../firebase/firebase'
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpense,
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([ReduxThunk])

beforeEach((done) => {
  const expenseData = {}
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt }
  })
  database.ref('expenses').set(expenseData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const updates = {
    note: '',
    amount: 0,
    createdAt: 0
  }
  const id = '123abc'
  const action = editExpense(id, updates)
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates
  })
})

test('should setup addExpense action object with provided values', () => {
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'better mouse',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense)
    done()
  })
})

test('should setup SET action object with data', () => {
  const action = setExpenses(expenses)

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore({})

  store.dispatch(startSetExpense()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})

test('should remove expense from database and store', (done) => {
  const store = createMockStore({})
  const { id } = expenses[0]
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expenses[0].id
    })

    return database.ref(`expenses/${actions[0].id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })
})

test('should edit expense in database and store', (done) => {
  const store = createMockStore({})
  const { id } = expenses[0]
  const updates = { amount: 10000 }

  store.dispatch(startEditExpense(expenses[0].id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })

    return database.ref(`expenses/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().amount).toEqual(updates.amount)
    done()
  })
})
