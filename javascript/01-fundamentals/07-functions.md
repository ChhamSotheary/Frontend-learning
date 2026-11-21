# មេរៀន ៧៖ Functions និងការប្រើ code ឡើងវិញ

## គោលបំណង

ប្រកាស/ហៅ function, ផ្ញើ parameters, ទទួល value ដោយ `return`, ប្រើ default parameters និងសរសេរ arrow functions ដែលងាយអាន។

## ១. Function ជាអ្វី?

Function ជាក្រុមសេចក្តីបញ្ជាដែលមានឈ្មោះ ឬអាចយោងបាន ហើយរត់ពេលហៅ។ វាជួយបំបែកបញ្ហា និងកុំឱ្យចម្លង logic ដដែលៗ៖

~~~js
function greet() {
  console.log("សួស្តី!");
}

greet();
greet();
~~~

ការប្រកាសមិនរត់ body ដោយខ្លួនឯងទេ; `greet()` ហៅវា។ ឧទាហរណ៍ខាងលើបង្ហាញសារពីរដង។

## ២. Parameters និង arguments

~~~js
function greet(name) {
  console.log(`សួស្តី ${name}!`);
}

greet("សុភា");
greet("ដារ៉ា");
~~~

`name` ជា parameter ដែលទទួល input។ តម្លៃដែលផ្ញើពេលហៅ ដូច "សុភា" ជា argument។ Function មួយអាចប្រើឡើងវិញជាមួយតម្លៃខុសៗគ្នា។

## ៣. return value

~~~js
function add(first, second) {
  return first + second;
}

const total = add(4, 6);
console.log(total);
~~~

លទ្ធផលគឺ 10។ `return` បញ្ជូន value ចេញពី function ហើយបញ្ឈប់ការអនុវត្ត function នោះ។

កុំច្រឡំការបង្ហាញជាមួយការត្រឡប់៖

~~~js
function showMessage() {
  console.log("បង្ហាញសារ");
}

console.log(showMessage());
~~~

វាបង្ហាញសារមួយ រួច `undefined` ព្រោះ function មិនបាន return value។

## ៤. Default parameter និង validation

~~~js
function greet(name = "ភ្ញៀវ") {
  return `សួស្តី ${name}`;
}

console.log(greet());
console.log(greet("មាលា"));
~~~

Default ប្រើពេល argument មិនបានផ្ដល់ ឬជា undefined; null មិនជំនួសដោយ default ទេ។

~~~js
function divide(dividend, divisor) {
  if (divisor === 0) {
    return "មិនអាចចែកនឹងសូន្យ";
  }
  return dividend / divisor;
}
~~~

Early return សម្រាប់ករណី invalid ធ្វើឱ្យសល់ logic ងាយអាន។ Error handling លម្អិតនឹងរៀននៅមេរៀនក្រោយ។

## ៥. Function declaration និង expression

Function declaration៖

~~~js
function square(number) {
  return number * number;
}
~~~

Function expression រក្សា function ក្នុង variable៖

~~~js
const square = function (number) {
  return number * number;
};
~~~

ទាំងពីរអាចហៅដោយ `square(5)`។ Declaration មានឈ្មោះនៅលើ function; expression អាចជា anonymous function ហើយទទួលឈ្មោះពី variable។

## ៦. Arrow function

~~~js
const square = (number) => {
  return number * number;
};

const double = number => number * 2;

console.log(square(5));
console.log(double(4));
~~~

`=>` ជាសញ្ញា arrow function។ បើ body ជា expression តែមួយ វាត្រឡប់ដោយស្វ័យប្រវត្តិ។ បើប្រើស្លាបកោង ត្រូវសរសេរ `return` ដោយច្បាស់។

Arrow function មិនមែនជំនួស function គ្រប់ករណីទេ; behavior របស់ `this` ខុសគ្នា ហើយនឹងរៀនពេលដល់ Objects/Classes។

## ៧. Scope និងការបំបែកភារកិច្ច

~~~js
function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

console.log(calculateTotal(5, 3));
// console.log(total); // ReferenceError: total មានតែក្នុង function
~~~

Parameter និង variable ខាងក្នុងមាន scope ក្នុង function។ Function ល្អគួរធ្វើការងារតែមួយដែលអាចពន្យល់បាន៖ គណនា, validate ឬ format—not ទាំងអស់រួមគ្នា។

~~~js
function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function formatReceipt(label, amount) {
  return `${label}: ${amount}៛`;
}
~~~

## ៨. ឧទាហរណ៍ និងលំហាត់

មើល [functions.js](../examples/lesson-07/functions.js) ហើយរត់៖

~~~bash
node examples/lesson-07/functions.js
~~~

1. សរសេរ `multiply(a, b)` ដែល return ផលគុណ។
2. សរសេរ `toCelsius(fahrenheit)` តាមរូបមន្ត `(F - 32) * 5 / 9`។
3. សរសេរ arrow function `isEven(number)` ដែល return Boolean។
4. ពន្យល់ពីភាពខុសគ្នារវាង `console.log` និង `return`។

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
function multiply(a, b) {
  return a * b;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

const isEven = number => number % 2 === 0;

console.log(multiply(3, 4)); // 12
console.log(toCelsius(68));  // 20
console.log(isEven(8));      // true
~~~

`console.log` បង្ហាញ value; `return` ផ្ញើ value ចេញពី function ដើម្បីកូដផ្សេងប្រើបាន។

</details>

## សង្ខេប

Functions ដាក់ឈ្មោះឱ្យ logic ហើយអាច reuse។ Parameters ទទួល input; arguments ជាតម្លៃពេលហៅ; `return` ផ្ញើលទ្ធផល។ ប្រើ function តូចៗដែលមានទំនួលខុសត្រូវច្បាស់ និងជ្រើស declaration/expression/arrow តាមបរិបទ។

