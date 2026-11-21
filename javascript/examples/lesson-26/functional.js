const scores = [48, 72, 91, 35, 60];
const passed = scores.filter((score) => score >= 50);
const average = passed.reduce((sum, score) => sum + score, 0) / passed.length;
console.log({ passed, average });
