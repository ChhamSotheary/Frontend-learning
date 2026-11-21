# មេរៀន ៦៖ Loops និងការធ្វើការដដែលៗ

## គោលបំណង

ប្រើ `for`, `while`, `do...while` និង `for...of`; ប្រមូលលទ្ធផល; ចៀស infinite loops និងកំហុស off-by-one។

## ១. ហេតុអ្វីត្រូវការ loop?

Loop ធ្វើឱ្យយើងអាចអនុវត្តជំហានដដែលៗដោយមិនចម្លងកូដ។ ឧទាហរណ៍ បង្ហាញលេខ 1 ដល់ 5៖

~~~js
for (let number = 1; number <= 5; number++) {
  console.log(number);
}
~~~

## ២. ផ្នែកទាំងបីរបស់ for

~~~js
for (let number = 1; number <= 5; number++) {
  console.log(number);
}
~~~

1. `let number = 1` ចាប់ផ្តើម counter។
2. `number <= 5` ជា condition; loop បន្តខណៈវាពិត។
3. `number++` កែ counter ក្រោយ body ម្តងៗ។
4. Body រត់សម្រាប់លេខ 1–5; ពេល number ក្លាយជា 6 condition មិនពិត ហើយ loop ឈប់។

## ៣. Accumulator

~~~js
let total = 0;

for (let number = 1; number <= 4; number++) {
  total += number;
}

console.log(total);
~~~

លទ្ធផលគឺ 10។ `total` ជា accumulator ដែលរក្សាផលបូកបច្ចុប្បន្ន។

## ៤. while និង do...while

`while` ប្រើពេលចំនួនជុំមិនច្បាស់ជាមុន ប៉ុន្តែមាន condition បញ្ចប់៖

~~~js
let attempt = 1;

while (attempt <= 3) {
  console.log(attempt);
  attempt++;
}
~~~

ត្រូវ update variable ក្នុង condition; បើភ្លេច `attempt++` វាអាចក្លាយជា infinite loop។

`do...while` រត់ body យ៉ាងតិចម្តង មុនពិនិត្យ condition៖

~~~js
let tries = 0;

do {
  tries++;
  console.log(tries);
} while (tries < 2);
~~~

Output គឺ 1 និង 2។ សាកល្បងមើលថា body រត់ម្តងមុន condition ត្រូវបានពិនិត្យ។

## ៥. for...of សម្រាប់ iterable values

~~~js
const topics = ["HTML", "CSS", "JavaScript"];

for (const topic of topics) {
  console.log(topic);
}
~~~

`for...of` ទទួល values ក្នុង Array តាមលំដាប់។ ប្រើវាពេលមិនចាំបាច់ត្រូវការ index។

## ៦. for...in សម្រាប់ object keys

~~~js
const learner = { name: "សុភា", level: "beginner" };

for (const key in learner) {
  console.log(key, learner[key]);
}
~~~

`for...in` រំកិលលើ keys របស់ object។ សម្រាប់ Array ជាទូទៅប្រើ `for...of` ឬ array methods; មេរៀន Arrays នឹងពន្យល់បន្ថែម។

## ៧. break និង continue

~~~js
for (let number = 1; number <= 6; number++) {
  if (number === 4) continue;
  if (number === 6) break;
  console.log(number);
}
~~~

`continue` រំលង body ដែលនៅសល់សម្រាប់ជុំនេះ; `break` ចេញពី loop ទាំងមូល។ ប្រើតែពេលវាធ្វើឱ្យ logic ច្បាស់។

## ៨. កំហុស និងលំហាត់

- **Infinite loop**៖ condition នៅតែពិត ព្រោះ counter មិនបាន update។
- **Off-by-one**៖ `< 5` មិនរាប់លេខ 5; `<= 5` រាប់លេខ 5។
- **Update ខុសទីតាំង**៖ សម្រេចថាតើតម្លៃត្រូវផ្លាស់មុន ឬក្រោយ body។
- **ប្រើ loop ខុសប្រភេទ**៖ ជ្រើស loop ដែលបង្ហាញគោលបំណងច្បាស់។

មើល [loops.js](../examples/lesson-06/loops.js)។ លំហាត់៖

1. បង្ហាញលេខគូ 2 ដល់ 10។
2. គណនាផលបូក 1 ដល់ 10។
3. បង្ហាញតម្លៃក្នុង `["ក", "ខ", "គ"]` ដោយ `for...of`។
4. ពន្យល់ពីភាពខុសគ្នារវាង break និង continue។

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
for (let n = 2; n <= 10; n += 2) console.log(n);

let sum = 0;
for (let n = 1; n <= 10; n++) sum += n;
console.log(sum); // 55

for (const letter of ["ក", "ខ", "គ"]) console.log(letter);
~~~

</details>

## សង្ខេប

ប្រើ `for` ពេលចំនួនជុំច្បាស់; `while` ពេលលក្ខខណ្ឌជាអ្នកបញ្ឈប់; `do...while` ពេល body ត្រូវរត់យ៉ាងតិចម្តង; `for...of` ដើម្បីទៅតាម values។ ពិនិត្យថា loop អាចបញ្ចប់ និងចុងក្រោយត្រូវបានរាប់ត្រឹមត្រូវ។

