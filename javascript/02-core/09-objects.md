# មេរៀន ៩៖ Objects និង properties

## គោលបំណង
បង្កើត object, អាន/កែ property, ប្រើ bracket notation និង destructuring, ហើយយល់ពី reference និង shallow copy។

## ១. Object ជាអ្វី?
Object ប្រមូល properties ដែលមានឈ្មោះ និង value៖

~~~js
const learner = {
  name: "សុភា",
  level: "beginner",
  active: true
};
~~~

Property ជាគូ key/value។ ប្រើ object សម្រាប់ entity ដែលមានលក្ខណៈពាក់ព័ន្ធ។

## ២. អាន property
~~~js
console.log(learner.name);
console.log(learner["level"]);
~~~

Dot notation ងាយអានពេល key ជាឈ្មោះធម្មតា។ Bracket notation អាចប្រើពេល key រក្សាក្នុង variable៖

~~~js
const key = "active";
console.log(learner[key]);
~~~

`learner.key` រក property មានឈ្មោះ key; `learner[key]` ប្រើតម្លៃ variable key ជា property name។

## ៣. បន្ថែម និងកែ property
~~~js
learner.level = "intermediate";
learner.city = "ភ្នំពេញ";
console.log(learner);
~~~

អាចកែ value ឬបន្ថែម property ទៅ object ដែលមិនបាន freeze។ ប្រើ `delete learner.active` ដោយប្រុងប្រយ័ត្ន; ជាទូទៅកំណត់ជា false ឬបង្កើត object ថ្មីធ្វើឱ្យ intent ច្បាស់ជាង។

## ៤. Nested objects និង optional chaining
~~~js
const course = {
  title: "JavaScript",
  instructor: { name: "គ្រូ" }
};
console.log(course.instructor.name);
console.log(course.assistant?.name);
~~~

`?.` ឱ្យការចូល property បញ្ឈប់ដោយសុវត្ថិភាពពេល value ជា null/undefined។ វាបង្ហាញ undefined មិនមែនជំនួស validation ទេ។

## ៥. Destructuring និង Object methods
~~~js
const { title, instructor } = course;
console.log(title, instructor.name);
console.log(Object.keys(course));
console.log(Object.values(course));
~~~

Destructuring ទាញ property values ទៅ variables។ `Object.keys` ផ្តល់បញ្ជី keys; `Object.values` ផ្តល់ values។

## ៦. Reference និង shallow copy
~~~js
const original = { name: "សុភា", settings: { theme: "light" } };
const alias = original;
alias.name = "ដារ៉ា";
console.log(original.name);
~~~

`alias` និង `original` យោងទៅ object ដដែល ដូច្នេះកែតាមមួយឃើញតាមមួយទៀត។ បង្កើត shallow copy ដោយ៖

~~~js
const copy = { ...original };
copy.name = "មាលា";
~~~

Object spread ចម្លង property កម្រិតដំបូងប៉ុណ្ណោះ; nested `settings` នៅតែជា reference ដូចគ្នា។ កុំសន្មតថា spread ជា deep clone។

## ៧. លំហាត់
បង្កើត object product មាន name, price និង inStock; អាន price ដោយ dot notation, ប្ដូរ inStock និងបង្ហាញ keys។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const product = { name: "សៀវភៅ", price: 12, inStock: true };
console.log(product.price);
product.inStock = false;
console.log(Object.keys(product));
~~~

</details>

មើល [objects.js](../examples/lesson-09/objects.js)។

## សង្ខេប
Object រក្សាទិន្នន័យជាគូ key/value។ ប្រើ dot/bracket notation ដើម្បី access properties; destructuring និង spread ជួយសរសេរកូដខ្លី ប៉ុន្តែ spread គ្រាន់តែ shallow copy។

