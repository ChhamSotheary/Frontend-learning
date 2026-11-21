function calculateTotal(price, quantity) {
  return price * quantity;
}
const applyDiscount = (amount, rate = 0) => amount * (1 - rate);
const subtotal = calculateTotal(1200, 3);
const total = applyDiscount(subtotal, 0.1);
console.log(`មុនបញ្ចុះតម្លៃ៖ ${subtotal}៛`);
console.log(`ក្រោយបញ្ចុះ 10%៖ ${total}៛`);

