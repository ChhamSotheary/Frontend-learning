const cleanedName = "  សុភា  ".trim();
const amount = Number("1234.5");
const formattedAmount = new Intl.NumberFormat("km-KH", {
  style: "currency",
  currency: "USD"
}).format(amount);
console.log(cleanedName);
console.log(formattedAmount);
console.log(new Date().toISOString());

