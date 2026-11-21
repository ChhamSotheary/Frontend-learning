# មេរៀន ២៖ Variables, const និង let

## គោលបំណង

រៀនប្រកាស variables, ផ្ដល់តម្លៃ, ជ្រើស `const` ឬ `let`, ដាក់ឈ្មោះច្បាស់ និងយល់ scope មូលដ្ឋាន។

## ១. Variable និង value

Variable ជាឈ្មោះដែលកូដប្រើយោងទៅ value មួយ៖

~~~js
const studentName = "សុភា";
const lessonNumber = 2;

console.log(studentName);
console.log(lessonNumber);
~~~

`studentName` និង `lessonNumber` ជា bindings; `=` ភ្ជាប់ value ទៅឈ្មោះ; អត្ថបទក្នុង quote ជា string; លេខ 2 ជា number។ Variable អាចប្រើ value ដដែលច្រើនកន្លែងដោយមិនសរសេរវាឡើងវិញ។

## ២. ប្រើ const ជាលំនាំដើម

~~~js
const courseName = "JavaScript";
console.log(courseName);
~~~

ប្រើ `const` ពេលមិនមានបំណងភ្ជាប់ឈ្មោះទៅ value ថ្មីម្ដងទៀត។ `const` ត្រូវមាន value នៅពេលប្រកាស ហើយមិនអនុញ្ញាតឱ្យ reassign៖

~~~js
const courseName = "JavaScript";
// courseName = "CSS"; // បើដក comment នឹងកើត TypeError
~~~

## ៣. ប្រើ let ពេលត្រូវ reassign

~~~js
let score = 0;
score = score + 10;
score += 5;
console.log(score);
~~~

លទ្ធផលគឺ 15។ `let` អនុញ្ញាតឱ្យ binding ទទួលតម្លៃថ្មី។ `score += 5` ជាទម្រង់ខ្លីនៃ `score = score + 5`។

ជ្រើស `const` មុន; ប្រើ `let` ពេល logic ត្រូវផ្លាស់ប្តូរ value ពិតប្រាកដ។

## ៤. ហេតុអ្វីគួរជៀសវាង var ក្នុងកូដថ្មី?

`var` ជារបៀបប្រកាសចាស់ ដែលមាន function scope និងអនុញ្ញាតឱ្យប្រកាសឈ្មោះម្ដងទៀតក្នុង scope ដូចគ្នា៖

~~~js
var message = "ដំបូង";
var message = "ប្រកាសម្ដងទៀត";
console.log(message);
~~~

ប្រើ `const` និង `let` ក្នុង code ថ្មី ដើម្បីឱ្យ scope តូច និងចាប់ឈ្មោះស្ទួនបានលឿន។ រៀន `var` ដើម្បីអាចអានកូដ legacy។

## ៥. ដាក់ឈ្មោះឱ្យច្បាស់

~~~js
const pricePerItem = 4.5;
const quantity = 3;
const totalPrice = pricePerItem * quantity;
console.log(totalPrice);
~~~

ឈ្មោះបង្ហាញតួនាទី value ហើយងាយអានជាង `x` ឬ `data1`។ JavaScript ប្រកាន់អក្សរតូច/ធំ; `userName` និង `username` ជាឈ្មោះពីរផ្សេង។ Convention ទូទៅគឺ camelCase ដូច `studentName` និង `totalPrice`។

## ៦. Scope ខ្លីៗ

Scope កំណត់កន្លែងដែលឈ្មោះអាចប្រើបាន។ `let` និង `const` មាន block scope៖

~~~js
if (true) {
  const localMessage = "នៅក្នុង block";
  console.log(localMessage);
}

// console.log(localMessage); // ReferenceError
~~~

`localMessage` មានតែក្នុងស្លាបកោងដែលបានប្រកាសវា។ Scope ជួយកុំឱ្យឈ្មោះប៉ះទង្គិចគ្នា។ Functions និង closures នឹងរៀនបន្ថែមពេលក្រោយ។

## ៧. const និង object

`const` មិនអនុញ្ញាត reassign binding ប៉ុន្តែ property ក្នុង object អាចកែបាន៖

~~~js
const learner = { name: "សុភា" };
learner.name = "ដារ៉ា";
console.log(learner.name);
~~~

លទ្ធផលគឺ "ដារ៉ា"។ យើងកែ object ដដែល មិនបានភ្ជាប់ឈ្មោះ learner ទៅ object ថ្មីទេ។ Object mutability នឹងរៀនលម្អិតក្នុងមេរៀន Objects។

## ៨. ឧទាហរណ៍ និងលំហាត់

មើល [variables.js](../examples/lesson-02/variables.js) ហើយរត់៖

~~~bash
node examples/lesson-02/variables.js
~~~

1. ប្រកាសឈ្មោះ និងអាយុដោយ `const` ហើយបង្ហាញទាំងពីរ។
2. ប្រកាស `let cartTotal = 0`; បន្ថែម 25 ហើយបន្ថែម 10 ដោយ `+=`។
3. ហេតុអ្វី `const city; city = "ភ្នំពេញ";` កំហុស?
4. តើអាច reassign object ដែលរក្សាក្នុង `const` ដែរឬទេ?

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
const learnerName = "សុភា";
const age = 18;

let cartTotal = 0;
cartTotal += 25;
cartTotal += 10;

const profile = { city: "សៀមរាប" };
profile.city = "ភ្នំពេញ";

console.log(learnerName, age, cartTotal, profile.city);
~~~

`const city;` កំហុស ព្រោះ const ត្រូវ initialize នៅពេលប្រកាស។ អាចកែ property ក្នុង object ប៉ុន្តែមិនអាច reassign binding ទៅ object ថ្មី។

</details>

## សង្ខេប

Variable ជាឈ្មោះសម្រាប់ value។ ប្រើ `const` ជាលំនាំដើម និង `let` ពេលត្រូវ reassign។ `const` ការពារ binding មិនឱ្យផ្លាស់ទៅ value ថ្មី; វាមិនធ្វើឱ្យ object immutable ដោយស្វ័យប្រវត្តិទេ។ `let` និង `const` មាន block scope; ជៀស `var` ក្នុង code ថ្មី។

