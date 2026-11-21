const codePattern = /^[A-Z]{2}-\d{4}$/;
const text = "លេខ 2026 និងឆ្នាំ 2027";

console.log(codePattern.test("AB-1234"));
console.log(text.match(/\d{4}/g));
console.log("hello    world".replace(/\s+/g, " ").trim());
