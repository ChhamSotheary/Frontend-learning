const score = 84;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "ត្រូវហាត់បន្ថែម";
}
console.log(`ពិន្ទុ៖ ${score}`);
console.log(`ចំណាត់ថ្នាក់៖ ${grade}`);

