
export default (expenses) => {
  if (expenses.length > 0) {
    const pennies = expenses.reduce((sum, { amount }) => sum + amount, 0)
    const dollars = pennies / 100;
    return dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  return '$0.00'
}
