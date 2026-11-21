# មេរៀន ៥៖ លក្ខខណ្ឌ if, switch និង ternary

## គោលបំណង

ប្រើ `if`, `else if`, `else`, `switch` និង ternary ដើម្បីជ្រើសសកម្មភាពតាមទិន្នន័យ ហើយយល់ truthy/falsy។

## ១. ហេតុអ្វីកម្មវិធីត្រូវការលក្ខខណ្ឌ?

កម្មវិធីត្រូវសម្រេចចិត្តតាម input។ ឧទាហរណ៍ បើពិន្ទុដល់កម្រិតឆ្លង ត្រូវបង្ហាញ "ជាប់"; បើមិនដល់ បង្ហាញ "មិនជាប់"។

## ២. if និង else

~~~js
const score = 72;

if (score >= 50) {
  console.log("ជាប់");
} else {
  console.log("មិនជាប់");
}
~~~

ជំហាន៖ JavaScript គណនា condition; បើ true រត់ block ក្នុង if; បើ false រត់ else។ ប្រើស្លាបកោងជានិច្ច ទោះមាន statement តែមួយក៏ដោយ។

## ៣. else if សម្រាប់លក្ខខណ្ឌច្រើន

~~~js
const score = 82;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("ត្រូវហាត់បន្ថែម");
}
~~~

Conditions ត្រូវពិនិត្យពីលើចុះក្រោម។ ដាក់លក្ខខណ្ឌជាក់លាក់មុនទូលំទូលាយ; បើដាក់ `score >= 70` មុន `score >= 90`, ពិន្ទុ 95 នឹងចូល grade C។

## ៤. ប្រើ strict equality

~~~js
const role = "editor";

if (role === "admin") {
  console.log("គ្រប់គ្រងប្រព័ន្ធ");
} else if (role === "editor") {
  console.log("កែអត្ថបទ");
} else {
  console.log("អាន");
}
~~~

`===` ប្រៀបធៀបទាំង type និង value។ ជៀស `==` ព្រោះវាអាចបម្លែង type ដោយស្វ័យប្រវត្តិ។

## ៥. Truthy និង falsy

តម្លៃ falsy សំខាន់ៗ៖ `false`, `0`, `-0`, `""`, `null`, `undefined` និង `NaN`។ `"0"`, `[]` និង `{}` ជា truthy។

~~~js
const username = "";

if (username) {
  console.log(`សួស្តី ${username}`);
} else {
  console.log("សូមបញ្ចូលឈ្មោះ");
}
~~~

នេះសមស្របបើ string ទទេមានន័យថាមិនទាន់បញ្ចូល។ បើលេខ 0 ជា value ត្រឹមត្រូវ កុំប្រើ `if (value)` ដើម្បីពិនិត្យថាមាន value; ប្រើ comparison ច្បាស់។

## ៦. Logical conditions

~~~js
const age = 20;
const hasPermission = true;

if (age >= 18 && hasPermission) {
  console.log("អនុញ្ញាត");
}

if (age < 13 || age > 120) {
  console.log("ពិនិត្យអាយុម្ដងទៀត");
}
~~~

`&&` ត្រូវឱ្យ conditions ទាំងពីរពិត; `||` គ្រប់គ្រាន់ឱ្យមួយពិត។ ដាក់ parentheses ពេល logic ច្រើន។

## ៧. switch សម្រាប់តម្លៃ discrete

~~~js
const day = "សៅរ៍";

switch (day) {
  case "សៅរ៍":
  case "អាទិត្យ":
    console.log("ចុងសប្ដាហ៍");
    break;
  case "ច័ន្ទ":
    console.log("ចាប់ផ្តើមសប្ដាហ៍");
    break;
  default:
    console.log("ថ្ងៃធ្វើការ");
}
~~~

`switch` សាកតម្លៃមួយនឹង cases ជាច្រើន។ `break` ចេញពី switch; បើភ្លេច វាអាចបន្តទៅ case បន្ទាប់ (fall-through)។

## ៨. Ternary សម្រាប់ជម្រើសខ្លី

~~~js
const isLoggedIn = true;
const message = isLoggedIn ? "ស្វាគមន៍" : "សូមចូលគណនី";
console.log(message);
~~~

ប្រើ ternary សម្រាប់ expression ខ្លី; បើ condition ឬ output ស្មុគស្មាញ ប្រើ if/else។

## ៩. ឧទាហរណ៍ និងលំហាត់

មើល [conditions.js](../examples/lesson-05/conditions.js) ហើយរត់៖

~~~bash
node examples/lesson-05/conditions.js
~~~

1. បង្ហាញ "មនុស្សពេញវ័យ" បើ `age >= 18` បើមិនដូច្នោះ "កុមារ"។
2. បង្កើត grade: 90+=A, 80+=B, 70+=C, ក្រោមនេះ=ហាត់បន្ថែម។
3. ប្រើ switch ជ្រើសការស្វាគមន៍តាម `period`។
4. ហេតុអ្វី `if (0)` មិនរត់?

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
const age = 17;
console.log(age >= 18 ? "មនុស្សពេញវ័យ" : "កុមារ");

const score = 84;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("ហាត់បន្ថែម");
}

const period = "ព្រឹក";
switch (period) {
  case "ព្រឹក":
    console.log("អរុណសួស្តី");
    break;
  case "ល្ងាច":
    console.log("សាយណ្ហសួស្តី");
    break;
  default:
    console.log("សួស្តី");
}
~~~

`0` ជា falsy ដូច្នេះ condition បម្លែងទៅ false។ ក្នុង file ពិត សរសេរ braces ជុំវិញ block ដើម្បីឱ្យ logic អានងាយ។

</details>

## សង្ខេប

ប្រើ if/else សម្រាប់ branching; else-if សម្រាប់ conditions ច្រើន; switch សម្រាប់តម្លៃជាក់លាក់; ternary សម្រាប់ expression ខ្លី។ យល់ truthy/falsy និងប្រើ `===` ដើម្បីជៀស type coercion។

