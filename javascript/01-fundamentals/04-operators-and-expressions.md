# មេរៀន ៤៖ Operators និង Expressions

## គោលបំណង

ប្រើ operators សម្រាប់គណនា, assignment, comparison និង logic; យល់ precedence និងជៀស type coercion ដែលមិនចង់បាន។

## ១. Expression និង operator

Expression ជាផ្នែកកូដដែលគណនាបាន value។ Operator ជាសញ្ញាដែលធ្វើប្រតិបត្តិការលើ value៖

~~~js
const total = 4 + 6;
~~~

`4 + 6` ជា expression; `+` ជា operator; លទ្ធផលគឺ 10។

## ២. Arithmetic operators

~~~js
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.333...
console.log(10 % 3); // 1: សំណល់
console.log(2 ** 3); // 8: អនុគមន៍កម្លាំង
~~~

`+` អាចភ្ជាប់ string; `%` ផ្តល់សំណល់; `**` គណនាកម្លាំង។ លេខទសភាគប្រើ floating point ដូច្នេះតម្លៃខ្លះអាចមិនតំណាងបានច្បាស់លាស់៖

~~~js
console.log(0.1 + 0.2);
console.log(Number((0.1 + 0.2).toFixed(2)));
~~~

សម្រាប់លុយក្នុងកម្មវិធីពិត គិតជាឯកតាតូចបំផុត (ដូច cents) ឬប្រើ decimal library ដែលបានជ្រើស; កុំសន្មត floating point ជា decimal arithmetic ពិត។

## ៣. Assignment operators

~~~js
let points = 10;
points += 5;
points -= 2;
points *= 2;
console.log(points);
~~~

លទ្ធផលគឺ 26។ `+=` ជាទម្រង់ខ្លីនៃ `points = points + 5`។ `++` និង `--` បន្ថែម/ដកមួយ; ដាក់លើបន្ទាត់ដាច់ដោយឡែក ដើម្បីកុំឱ្យច្រឡំ prefix/postfix។

## ៤. Comparison operators

~~~js
const age = 20;
console.log(age > 18);
console.log(age === 20);
console.log(age !== 21);
console.log(5 === "5");
~~~

Comparison ផ្តល់ Boolean; បន្ទាត់ចុងក្រោយ false ព្រោះ type ខុសគ្នា។ ប្រើ `===` និង `!==` ជាលំនាំដើម។ `==` អាចបម្លែង type មុនប្រៀបធៀប ហើយបង្កើតលទ្ធផលគួរឱ្យភ្ញាក់ផ្អើល៖

~~~js
console.log(5 == "5"); // true ដោយ type coercion
~~~

## ៥. Logical operators និង short-circuit

~~~js
const isAdult = true;
const hasTicket = true;

console.log(isAdult && hasTicket);
console.log(isAdult || hasTicket);
console.log(!isAdult);
~~~

`&&` ត្រូវឱ្យទាំងពីរពិត; `||` ត្រូវការយ៉ាងតិចមួយពិត; `!` បញ្ច្រាស truthiness។ `&&` និង `||` អាចត្រឡប់ operand ដើម មិនមែន Boolean ជានិច្ច៖

~~~js
const displayName = "" || "ភ្ញៀវ";
console.log(displayName);
~~~

លទ្ធផលគឺ "ភ្ញៀវ"។ `&&` ឈប់ពេល operand ខាងឆ្វេង falsy; `||` ឈប់ពេលខាងឆ្វេង truthy។

## ៦. Nullish coalescing និង optional chaining

~~~js
const savedCount = 0;
console.log(savedCount ?? 10); // 0
console.log(savedCount || 10); // 10
~~~

`??` ប្រើ default តែពេលតម្លៃជា null ឬ undefined; `||` ប្រើ default សម្រាប់តម្លៃ falsy ទាំងអស់ រួមទាំង 0 និង string ទទេ។

~~~js
const user = null;
console.log(user?.profile?.name);
~~~

`?.` បញ្ឈប់ការចូល property បន្តពេលផ្នែកមុន nullish ហើយផ្តល់ undefined ជំនួស TypeError។ វាមិនជំនួស validation business rules ទេ។

## ៧. Ternary និង precedence

~~~js
const score = 72;
const result = score >= 50 ? "ជាប់" : "មិនជាប់";
console.log(result);
~~~

Ternary មានទម្រង់ `condition ? valueIfTrue : valueIfFalse`។ ប្រើសម្រាប់ជម្រើសខ្លីៗ; logic ស្មុគស្មាញប្រើ if/else។

Precedence កំណត់លំដាប់គណនា៖

~~~js
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20
~~~

ដាក់ parentheses បើវាជួយបង្ហាញលំដាប់ដែលចង់បាន។

## ៨. ឧទាហរណ៍ និងលំហាត់

មើល [operators.js](../examples/lesson-04/operators.js) ហើយរត់៖

~~~bash
node examples/lesson-04/operators.js
~~~

1. ពិនិត្យថា `n = 12` ជាលេខគូដោយ `%` និង `===`។
2. គណនា total ពី `price = 20` និង `quantity = 3`។
3. ប្រើ default name ពេល `nickname` ជា string ទទេ។
4. ពន្យល់ភាពខុសគ្នារវាង `0 ?? 5` និង `0 || 5`។

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
const n = 12;
console.log(n % 2 === 0); // true

const price = 20;
const quantity = 3;
console.log(price * quantity); // 60

const nickname = "";
console.log(nickname || "អ្នកប្រើ");

console.log(0 ?? 5); // 0
console.log(0 || 5); // 5
~~~

</details>

## សង្ខេប

Operators គណនា, ផ្ដល់តម្លៃ, ប្រៀបធៀប និងបង្កើត logic។ ប្រើ strict equality, ជ្រើស `??` ឬ `||` តាមន័យដែលចង់បាន ហើយប្រើ parentheses ដើម្បីឱ្យ expression ងាយអាន។

