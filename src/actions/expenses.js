import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => (dispatch) => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expenseData

  const expense = {
    description,
    note,
    amount,
    createdAt
  }

  return database.ref('expenses').push(expense).then((ref) => {
    // promise gets called with the ref from push
    dispatch(addExpense({
      id: ref.key,
      ...expense
    }))
  })
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id } = {}) => dispatch => database.ref(`expenses/${id}`)
  .remove()
  .then(() => {
    dispatch(removeExpense({ id }))
  })

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET EXPENSE
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpense = () => dispatch => database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) => {
      // expenses.push(childSnapshot.val()) // need id so need to build objects:
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    dispatch(setExpenses(expenses))
  })
  .catch((e) => {
    console.log('error', e)
  })
