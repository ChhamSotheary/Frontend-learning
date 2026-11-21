function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("មិនអាចចែកនឹងសូន្យ");
  }
  return dividend / divisor;
}
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}

