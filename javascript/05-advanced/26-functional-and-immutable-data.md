# មេរៀន ២៦៖ Functional Programming និង Immutable Data

## គោលដៅ

ស្គាល់ pure function, side effect, higher-order function និងការបំលែង array ដោយមិនកែប្រភពដើម។ ប្រើគំនិត functional ដើម្បីធ្វើ logic ងាយសាកល្បង។

## ១. Pure function និង side effect

Pure function ផ្តល់លទ្ធផលដូចគ្នាសម្រាប់ input ដូចគ្នា និងមិនកែ state ក្រៅខ្លួន៖

~~~js
function calculateTotal(price, quantity) {
  return price * quantity;
}
~~~

ការអាន/សរសេរ DOM, storage, network ឬ console ជា side effect។ Side effect មិនអាក្រក់ទេ ប៉ុន្តែបើបំបែក logic គណនាចេញពី effect នោះ code ងាយសាកល្បង និងពន្យល់។

## ២. Map, filter និង reduce

~~~js
const products = [
  { name: "សៀវភៅ", price: 5 },
  { name: "ប៊ិច", price: 2 },
  { name: "កាបូប", price: 20 },
];

const names = products.map((product) => product.name);
const affordable = products.filter((product) => product.price < 10);
const total = products.reduce((sum, product) => sum + product.price, 0);
~~~

`map` បម្លែង item ទាំងអស់ទៅ array ថ្មី; `filter` ជ្រើស item ដែលលក្ខខណ្ឌពិត; `reduce` បង្រួមទៅតម្លៃមួយ។ ជ្រើស loop ធម្មតាបើ logic មាន side effects ច្រើន ឬ callback chain ធ្វើឱ្យអានពិបាក។

## ៣. Update ដោយមិន mutate

~~~js
const todos = [
  { id: 1, title: "អាន", done: false },
  { id: 2, title: "សរសេរ", done: false },
];

const nextTodos = todos.map((todo) =>
  todo.id === 2 ? { ...todo, done: true } : todo
);
~~~

Array ថ្មីត្រូវបានបង្កើត ហើយ item ដែលផ្លាស់ប្តូរក៏ត្រូវបានចម្លង។ វាជួយប្រៀបធៀប state និងកាត់បន្ថយការកែ data ដែលកន្លែងផ្សេងកំពុងប្រើ។ តែការចម្លង object ធំជ្រៅច្រើនដងអាចចំណាយ performance; វាស់មុន optimize និងពិចារណារចនាសម្ព័ន្ធ data។

## ៤. Higher-order function និង composition

Function ដែលទទួល function ឬ return function ហៅថា higher-order function។ `map/filter` ជាឧទាហរណ៍។ អាចបង្កើត utility តូច៖

~~~js
const isAdult = (person) => person.age >= 18;
const getName = (person) => person.name;
const adultNames = people.filter(isAdult).map(getName);
~~~

ដាក់ callback មានឈ្មោះធ្វើឱ្យ logic អានងាយ និង reuse បាន។ កុំ chain ច្រើនជាន់ដោយមិនចាំបាច់។

## ៥. លំហាត់

1. បម្លែងតម្លៃតម្លៃទំនិញពី array object ទៅ array ឈ្មោះ។
2. Filter តែពិន្ទុ >= 50 ហើយគណនាចំនួនសរុប។
3. Update todo មួយទៅ `done: true` ដោយមិនកែ array ដើម។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const passed = scores.filter((score) => score >= 50);
const total = passed.reduce((sum, score) => sum + score, 0);
const updated = todos.map((todo) => todo.id === targetId ? { ...todo, done: true } : todo);
~~~

</details>

## សង្ខេប

Functional style បំបែកការគណនាពី side effects។ `map/filter/reduce` និង pure function ជួយអាន និងសាក logic; immutable update បង្កើត data ថ្មី ដោយត្រូវយល់ពី shallow copy និងតម្លៃ performance។
