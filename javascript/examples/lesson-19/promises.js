function wait(milliseconds, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), milliseconds));
}

wait(200, 5)
  .then((number) => number * 3)
  .then((result) => `ចំនួនចុងក្រោយ៖ ${result}`)
  .then(console.log)
  .catch((error) => console.error("មានកំហុស៖", error))
  .finally(() => console.log("បញ្ចប់ Promise chain"));
