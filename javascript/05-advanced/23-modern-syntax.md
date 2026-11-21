# មេរៀន ២៣៖ Destructuring, Spread/Rest និង Modern Syntax

## គោលដៅ

ប្រើ destructuring ដើម្បីយកតម្លៃចេញពី array/object, ប្រើ rest ដើម្បីប្រមូលតម្លៃ, ប្រើ spread ដើម្បីបង្កើត array/object ថ្មី និងយល់ថា spread ជាការចម្លងរាក់ (shallow copy)។

## ១. Array destructuring

~~~js
const colors = ["ក្រហម", "ខៀវ", "បៃតង"];
const [first, second, ...remaining] = colors;
console.log(first, second, remaining);
~~~

ទីតាំងខាងឆ្វេងទទួលតម្លៃតាម index។ អាចរំលងតម្លៃដោយ comma និងដាក់ default ប្រសិនបើ `undefined`៖ `const [name = "អនាមិក"] = []`។ Rest (`...remaining`) ត្រូវនៅចុងបញ្ចប់ ហើយប្រមូលតម្លៃដែលនៅសល់ទៅជា array ថ្មី។

## ២. Object destructuring

~~~js
const user = { name: "Dara", role: "student", city: "ភ្នំពេញ" };
const { name, role: job, country = "កម្ពុជា" } = user;
console.log(name, job, country);
~~~

ឈ្មោះ property ខាងឆ្វេងត្រូវនឹង key; `role: job` ដាក់តម្លៃ `role` ទៅ variable `job`។ Default ប្រើពេល property គ្មាន ឬមានតម្លៃ `undefined` មិនមែនពេល `null` ទេ។ Nested destructuring ប្រើបាន តែជៀសវាងជ្រៅពេកដែលធ្វើឱ្យកូដពិបាកអាន។

## ៣. Spread និងច្បាប់ shallow copy

~~~js
const oldScores = [70, 80];
const newScores = [...oldScores, 90];

const oldUser = { name: "Dara", preferences: { theme: "light" } };
const updatedUser = { ...oldUser, name: "Sotheary" };
~~~

Spread បំបែក iterable elements ឬ enumerable object properties ទៅទីតាំងថ្មី។ វាចម្លងតែស្រទាប់ខាងក្រៅ៖ `updatedUser.preferences === oldUser.preferences` នៅតែជា `true` ព្រោះ nested object ចែក reference ដូចគ្នា។ បើចង់ update nested data ដោយមិនកែ object ចាស់ ត្រូវចម្លងស្រទាប់ដែលត្រូវកែផង៖

~~~js
const nextUser = {
  ...oldUser,
  preferences: { ...oldUser.preferences, theme: "dark" },
};
~~~

## ៤. Rest parameters និង default parameters

~~~js
function sum(label, ...numbers) {
  const total = numbers.reduce((result, value) => result + value, 0);
  return `${label}: ${total}`;
}
console.log(sum("សរុប", 2, 3, 4));
~~~

Rest parameter ប្រមូល arguments ចុងក្រោយជា array; ដាក់បានតែម្តង និងត្រូវនៅចុង parameter list។ Default parameter អាចកំណត់តម្លៃពេល argument មិនបានផ្ញើ៖ `function greet(name = "មិត្ត") { ... }`។

## ៥. Optional chaining និង nullish coalescing

~~~js
const city = user.address?.city ?? "មិនទាន់កំណត់";
~~~

`?.` ឈប់ចូល property បន្ត ហើយផ្តល់ `undefined` បើខាងមុខជា `null` ឬ `undefined`។ `??` ប្រើ fallback តែពេលតម្លៃខាងឆ្វេងជា nullish; ខុសពី `||` ដែលក៏ចាត់ `0`, `false`, `""` ជា false។ កុំប្រើ optional chaining ដើម្បីលាក់ bug ដែល property គួរតែមានជាដាច់ខាត។

## លំហាត់

1. យក `title` និង `year` ពី object ដោយ default year ជា 2026។
2. បន្ថែមតម្លៃ 100 ទៅចុង array ដោយបង្កើត array ថ្មី។
3. ធ្វើ function ទទួលលេខជាច្រើនដោយ rest ហើយបូកវា។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const book = { title: "JavaScript", year: 2025 };
const { title, year = 2026 } = book;
const values = [1, 2, 3];
const nextValues = [...values, 100];
const addAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);
~~~

</details>

## សង្ខេប

Destructuring អានទិន្នន័យងាយ, rest ប្រមូលសំណល់, spread ពង្រីក iterable/properties។ Spread object គ្រាន់តែ shallow copy; យល់ reference និង nullish/default behavior មុនប្រើវាដើម្បី update state។
