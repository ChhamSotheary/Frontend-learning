const words = ["php", "js", "php", "html", "js"];
const uniqueWords = new Set(words);
const counts = new Map();

for (const word of words) counts.set(word, (counts.get(word) ?? 0) + 1);
console.log([...uniqueWords]);
console.log([...counts.entries()]);
