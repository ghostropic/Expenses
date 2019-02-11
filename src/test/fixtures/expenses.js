import moment from 'moment'

// expenses
export default [{
  id: '1',
  description: 'gum',
  note: 'one pack of bubble gum',
  amount: 195,
  createdAt: moment(0)
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 15000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 45000,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
