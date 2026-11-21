const unitPrice = 20;
const quantity = 3;
const subtotal = unitPrice * quantity;
const hasDiscount = subtotal >= 50;
const displayTotal = hasDiscount ? subtotal * 0.9 : subtotal;
console.log(`តម្លៃដើម៖ ${subtotal}`);
console.log(`មានបញ្ចុះតម្លៃ៖ ${hasDiscount}`);
console.log(`ត្រូវបង់៖ ${displayTotal}`);

