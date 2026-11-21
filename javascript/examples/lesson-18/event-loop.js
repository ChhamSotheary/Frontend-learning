console.log("A: synchronous ចាប់ផ្តើម");

setTimeout(() => {
  console.log("D: timer callback");
}, 0);

Promise.resolve().then(() => {
  console.log("C: Promise microtask");
});

console.log("B: synchronous បញ្ចប់");
