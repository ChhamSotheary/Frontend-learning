const user = { name: "Dara", preferences: { theme: "light" } };
const { name, city = "ភ្នំពេញ" } = user;
const updated = { ...user, preferences: { ...user.preferences, theme: "dark" } };
const greet = (prefix, ...names) => names.map((item) => `${prefix} ${item}`);

console.log(name, city, updated.preferences.theme);
console.log(greet("សួស្តី", "Dara", "Sotheary"));
