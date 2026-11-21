# មេរៀន ១១៖ Scope, Hoisting និង Closures

## គោលបំណង
បែងចែក global, function និង block scope; យល់ពី hoisting/Temporal Dead Zone; ពន្យល់ closure និងប្រើ closure រក្សា state។

## ១. Scope ជាអ្វី?
Scope គឺកន្លែងដែល variable អាចយោងបាន។ `let` និង `const` មាន block scope៖

~~~js
const course = "JavaScript";
if (true) {
  const level = "beginner";
  console.log(course, level);
}
// level មិនអាចប្រើនៅទីនេះ
~~~

Inner block អាចអាន outer variable បាន; outer block មិនអាចចូល local variable ខាងក្នុងបាន។

## ២. Function scope
~~~js
function greet() {
  const message = "សួស្តី";
  return message;
}
console.log(greet());
// console.log(message); // ReferenceError
~~~

Variable ក្នុង function មានតែក្នុង function នោះ។ ដាក់ state នៅ scope តូចបំផុតដែលត្រូវការ។

## ៣. Hoisting និង Temporal Dead Zone
Declaration ត្រូវបានរៀបចំមុន code រត់ ប៉ុន្តែ behavior ខុសគ្នាតាមការប្រកាស។ `let` និង `const` មិនអាចប្រើមុនបន្ទាត់ declaration៖

~~~js
// console.log(level); // ReferenceError
const level = "advanced";
~~~

ចន្លោះពីដើម scope ដល់ declaration ហៅថា Temporal Dead Zone។ Function declaration អាចហៅមុនបន្ទាត់ប្រកាស៖

~~~js
sayHello();
function sayHello() {
  console.log("សួស្តី");
}
~~~

ទោះអាចក៏ដោយ ដាក់ declaration មុន call ជាទូទៅធ្វើឱ្យ flow អានងាយ។

## ៤. Closure ជាអ្វី?
Function ខាងក្នុងអាចចងចាំ lexical scope របស់វា ទោះ function ខាងក្រៅបានបញ្ចប់ក៏ដោយ៖

~~~js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
~~~

លទ្ធផលគឺ 1 និង 2។ Inner function បន្តចូលដំណើរការ `count`; នេះជា closure។ វាអាចរក្សា private state ដោយមិនដាក់ variable ជា global។

## ៥. កុំបង្កើត closure ដោយមិនចាំបាច់
Closure មានប្រយោជន៍សម្រាប់ callbacks និង state ដែលត្រូវលាក់ ប៉ុន្តែវាក៏រក្សា reference ទៅ data បាន។ បើបង្កើត closure ច្រើនកាន់ data ធំៗយូរ អាចរក្សា memory លើសតម្រូវការ។ រៀប lifecycle និងដោះ listener/timer ពេលលែងប្រើ។

## ៦. លំហាត់
1. តើហេតុអ្វី `level` ក្នុង block មិនអាចប្រើក្រៅ?
2. បង្កើត function factory `createMultiplier(factor)` ដែល return function គុណតម្លៃដោយ factor។
3. ពន្យល់ថា closure រក្សា state ដូចម្តេច។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
function createMultiplier(factor) {
  return function (value) {
    return value * factor;
  };
}
const triple = createMultiplier(3);
console.log(triple(4)); // 12
~~~

Function ខាងក្នុងចងចាំ factor ពី scope ខាងក្រៅ។

</details>

## សង្ខេប
Scope គ្រប់គ្រងការមើលឃើញ variable; `let/const` មាន block scope និង TDZ; closure គឺ function ដែលរក្សាសិទ្ធិចូល lexical variables ក្រោយ outer function ចប់។

