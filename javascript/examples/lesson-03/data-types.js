const textValue = "42";
const numericValue = Number(textValue);
const invalidValue = Number("មិនមែនលេខ");
console.log(typeof textValue);
console.log(numericValue + 8);
console.log(Number.isNaN(invalidValue));
console.log(Array.isArray([1, 2, 3]));

