# មេរៀន ៣៖ Data Types និងការបម្លែងតម្លៃ

## គោលបំណង

ស្គាល់ប្រភេទតម្លៃសំខាន់ៗ, ប្រើ `typeof`, បម្លែង string/number ដោយចេតនា និងស្វែងរក `NaN`។

## ១. ហេតុអ្វី data type សំខាន់?

ប្រភេទតម្លៃកំណត់ថា JavaScript ធ្វើប្រតិបត្តិការអ្វីបាន។ `+` អាចបូកលេខ ឬភ្ជាប់ string៖

~~~js
console.log(2 + 3);
console.log("2" + 3);
~~~

លទ្ធផល៖ `5` និង `23`។ បន្ទាត់ទីមួយគណនាលេខ; បន្ទាត់ទីពីរភ្ជាប់ string និងលេខដែលត្រូវបានបម្លែងទៅអត្ថបទ។

## ២. Primitive types

- **String**: អត្ថបទ ដូច `"សួស្តី"`។
- **Number**: លេខធម្មតា និងទសភាគ ដូច `42` ឬ `3.14`។
- **BigInt**: ចំនួនគត់ធំខ្លាំង ដូច `9007199254740993n`។
- **Boolean**: `true` ឬ `false`។
- **Undefined**: មិនទាន់មាន value។
- **Null**: អវត្តមាន value ដែលបានកំណត់ដោយចេតនា។
- **Symbol**: value មានអត្តសញ្ញាណតែមួយ; ប្រើក្នុងករណីជាក់លាក់។

ចាប់ផ្តើមជាមួយ String, Number, Boolean, Undefined និង Null; BigInt/Symbol នឹងសិក្សាពេលត្រូវការ។

## ៣. Objects និង functions

Object ប្រមូល data ក្នុង properties៖

~~~js
const student = { name: "សុភា", active: true };
console.log(student.name);
console.log(student.active);
~~~

Array ក៏ជាប្រភេទ object មួយ។ Function ជា value ដែលអាចហៅ ដើម្បីអនុវត្ត code៖

~~~js
function sayHello() {
  console.log("សួស្តី");
}
sayHello();
~~~

Objects, arrays និង functions មានមេរៀនដាច់ដោយឡែក។

## ៤. ពិនិត្យប្រភេទដោយ typeof

~~~js
console.log(typeof "Hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof function () {});
~~~

លទ្ធផល៖ `string`, `number`, `boolean`, `undefined`, `object` និង `function`។

ចំណុចពិសេស៖

~~~js
console.log(typeof null);       // "object" (ប្រវត្តិសាស្ត្រ)
console.log(typeof []);         // "object"
console.log(Array.isArray([])); // true
~~~

`typeof null` បង្ហាញ `"object"` ដោយសារឥរិយាបថប្រវត្តិសាស្ត្រ; វាមិនមានន័យថា null ជា object ពិតទេ។ ប្រើ `Array.isArray` ដើម្បីពិនិត្យ Array។

## ៥. Explicit conversion

បម្លែងដោយចេតនាធ្វើឱ្យគោលបំណងច្បាស់៖

~~~js
const scoreText = String(90);
const inputNumber = Number("42");

console.log(typeof scoreText);
console.log(inputNumber + 8);
~~~

លទ្ធផលគឺ `string` និង `50`។

បើ string មិនមែនជាលេខ `Number` ផ្តល់ `NaN`៖

~~~js
const amount = Number("អក្សរ");
console.log(amount);
console.log(Number.isNaN(amount));
~~~

`Number.isNaN` ជាវិធីច្បាស់សម្រាប់ពិនិត្យ NaN។ កុំប្រៀបធៀបដោយ `amount === NaN`។

## ៦. Number និង parseInt

~~~js
console.log(Number("42px"));
console.log(parseInt("42px", 10));
~~~

លទ្ធផលគឺ `NaN` និង `42`។ `Number` ត្រូវការឱ្យ string ទាំងមូលអាចបម្លែងជាលេខ។ `parseInt` អានចំនួនគត់ពីខាងដើម; radix 10 បញ្ជាក់ប្រព័ន្ធទសភាគ។ ជ្រើសវិធីតាមទម្រង់ input ដែលអ្នកចង់ទទួល ហើយ validate មុនគណនា៖

~~~js
const value = Number("12.5");
if (Number.isFinite(value)) {
  console.log(value);
} else {
  console.log("សូមបញ្ចូលលេខត្រឹមត្រូវ");
}
~~~

## ៧. Input ជា string

តម្លៃពី form ឬ prompt ជា string ជាទូទៅ ទោះ user វាយលេខក៏ដោយ៖

~~~js
const first = "12";
const second = "8";

console.log(first + second);
console.log(Number(first) + Number(second));
~~~

លទ្ធផលគឺ `128` និង `20`។ បម្លែងទៅ number មុនគណនា ដើម្បីចៀសការភ្ជាប់អត្ថបទដោយចៃដន្យ។

## ៨. ឧទាហរណ៍ និងលំហាត់

មើល [data-types.js](../examples/lesson-03/data-types.js)។ រត់៖

~~~bash
node examples/lesson-03/data-types.js
~~~

1. ព្យាករណ៍ `"7" + 3` និង `Number("7") + 3`។
2. បម្លែង `"19.5"` ទៅ Number ហើយបង្ហាញ type។
3. ពិនិត្យ `Number("abc")` ដោយ `Number.isNaN`។
4. ហេតុអ្វី `typeof []` មិនផ្តល់ `"array"`?

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
console.log("7" + 3); // "73"
console.log(Number("7") + 3); // 10

const price = Number("19.5");
console.log(price, typeof price); // 19.5 number

const invalid = Number("abc");
console.log(Number.isNaN(invalid)); // true
console.log(Array.isArray([])); // true
~~~

Array ជា object ប្រភេទពិសេស; ប្រើ `Array.isArray` ដើម្បីកំណត់ថាជា Array។

</details>

## សង្ខេប

JavaScript មាន primitive values និង objects។ `typeof` មានករណីពិសេសសម្រាប់ null និង Array។ បម្លែងតម្លៃដោយ `String`, `Number`, `Boolean` តាមចេតនា ហើយ validate input/NaN មុនគណនា។

