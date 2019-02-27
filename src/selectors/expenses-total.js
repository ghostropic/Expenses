export default expenses => (expenses.length > 0
  ? expenses.reduce((sum, { amount }) => sum + amount, 0)
  : 0)
