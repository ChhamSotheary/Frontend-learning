# មេរៀន ២២៖ JavaScript Modules និងការរៀបចំ Files

## គោលដៅ

បែងចែក module ពី script ធម្មតា, ប្រើ `export` និង `import`, យល់ named/default export, រៀបចំ dependency និងដំណើរការ browser modules តាម local server។

## ១. ហេតុអ្វីបំបែកជា modules?

Module ជួយបំបែក code តាមមុខងារ, កំណត់អ្វីដែល file ផ្សេងអាចប្រើ និងកាត់បន្ថយការបំពុល global scope។ ក្នុង browser module មាន module scope ហើយ import/export បង្កើត dependency ដែល browser អាចតាមដាន។

## ២. Named exports

~~~js
// math.js
export function add(a, b) {
  return a + b;
}

export const TAX_RATE = 0.1;
~~~

~~~js
// app.js
import { add, TAX_RATE } from "./math.js";
console.log(add(100, 5));
console.log(TAX_RATE);
~~~

Named import ត្រូវដាក់ឈ្មោះឱ្យត្រូវនឹង export; អាចប្តូរ alias ដោយ `import { add as sum } ...`។ Relative path ត្រូវច្បាស់ ហើយសម្រាប់ browser modules សរសេរ extension `.js` ជាទូទៅ។

## ៣. Default export

~~~js
// greeting.js
export default function greet(name) {
  return `សួស្តី ${name}`;
}
~~~

~~~js
import greet from "./greeting.js";
console.log(greet("Dara"));
~~~

Module មួយមាន default export មួយ។ ឈ្មោះនៅពេល import អាចជ្រើសបាន ប៉ុន្តែប្រើឈ្មោះច្បាស់លាស់ធ្វើឱ្យអានងាយ។ កុំប្រើ default export ច្រើនឬច្របូកច្របល់ជាមួយ named export ដោយគ្មាន style ទៀងទាត់។

## ៤. ភ្ជាប់ module ក្នុង HTML

~~~html
<script type="module" src="./app.js"></script>
~~~

Browser module មាន strict mode និងត្រូវបាន defer ដោយធម្មជាតិ។ ជាទូទៅ កុំបើក `index.html` ជា `file://` ដោយផ្ទាល់ ព្រោះ module loading អាចត្រូវបានរារាំងដោយ browser security/CORS; ប្រើ local development server។

## ៥. Modules ក្នុង Node.js

Node.js គាំទ្រ ES modules និង CommonJS តាម package/runtime configuration។ កុំច្របល់ `import/export` ជាមួយ `require/module.exports`; អានការកំណត់ project និងឯកសារ Node.js តាម version ដែលប្រើ។ Browser example ក្នុងមេរៀននេះប្រើ ES modules។

## ៦. របៀបរៀបចំ module ឱ្យល្អ

- File មួយទទួលខុសត្រូវច្បាស់ ដូច `format-date.js`, `api.js`។
- Export public function តែអ្វីដែល file ផ្សេងត្រូវការ។
- ជៀសវាង circular dependency; វាធ្វើឱ្យលំដាប់ initialization ពិបាកយល់។
- កុំបង្កើត module ធំមួយដែលកាន់ UI, network, storage និង business rules ទាំងអស់។

## លំហាត់

1. បង្កើត `calculator.js` មាន named exports `add` និង `subtract`។
2. Import ទៅ `app.js` ហើយបង្ហាញលទ្ធផល។
3. ពន្យល់ថាហេតុអ្វីត្រូវប្រើ local server ពេលសាក browser module។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
// calculator.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// app.js
import { add, subtract } from "./calculator.js";
console.log(add(7, 2), subtract(7, 2));
~~~

Browser module ទាញ file ផ្សេងៗ ហើយគោរព origin/CORS security; local server ផ្តល់ origin HTTP ដូចគេហទំព័រធម្មតា។

</details>

## សង្ខេប

ប្រើ ES modules ដើម្បីបែងចែកមុខងារ និងបង្ហាញ API របស់ file ដោយ `export/import`។ Browser ប្រើ `<script type="module">` និង local server; Node.js module mode អាស្រ័យលើ project configuration។
