const scores = [55, 72, 91, 48];
console.log(scores.filter(score => score >= 50));
console.log(scores.map(score => score * 2));
console.log(scores.reduce((sum, score) => sum + score, 0));

