# មេរៀន ២៧៖ Iterators, Generators, Map និង Set

## គោលដៅ

យល់ protocol iterable/iterator, បង្កើត generator ដោយ `function*`, ប្រើ `Map` សម្រាប់ key/value និង `Set` សម្រាប់តម្លៃមិនស្ទួន។

## ១. Iterable និង iterator

Iterable ជាតម្លៃដែលអាចប្រើក្នុង `for...of` ដូចជា array, string, Map និង Set។ វាមាន iterator protocol ដែលផ្តល់តម្លៃម្តងមួយតាម `.next()`។ `for...of` គ្រប់គ្រងការហៅ iterator នេះជំនួសអ្នក។

~~~js
for (const character of "PHP") {
  console.log(character);
}
~~~

ប្រើ `for...of` សម្រាប់ values; `for...in` សម្រាប់ enumerable property keys របស់ object ហើយអាចរួមទាំង inherited keys ដូច្នេះត្រូវប្រុងប្រយ័ត្ន។ សម្រាប់ array ជាញឹកញាប់ប្រើ `for...of`, `forEach` ឬ array methods តាមគោលបំណង។

## ២. Generator

~~~js
function* countTo(limit) {
  for (let value = 1; value <= limit; value++) {
    yield value;
  }
}

for (const value of countTo(3)) console.log(value);
~~~

Generator function ត្រឡប់ iterator; វាឈប់នៅ `yield` ហើយបន្តពេលស្នើតម្លៃបន្ទាប់។ វាមានប្រយោជន៍សម្រាប់ sequence ដែលបង្កើតតាមតម្រូវការ (lazy) ឬការគ្រប់គ្រងលំដាប់បន្តិចម្តង។ កុំប្រើ generator ប្រសិនបើ array តូចធម្មតាអានងាយជាង។

## ៣. Map សម្រាប់ key/value

~~~js
const visits = new Map();
visits.set("home", 3);
visits.set("lessons", 8);
console.log(visits.get("home"));
console.log(visits.has("about"));
~~~

Map រក្សា insertion order និងអនុញ្ញាត key ជាតម្លៃប្រភេទណាក៏បាន (រួមទាំង object)។ ប្រើ `size`, `get`, `set`, `has`, `delete`, `clear`។ Object ជម្រើសល្អសម្រាប់ record ដែលមាន field names ថេរ; Map សមស្របសម្រាប់ dictionary ដែល key ផ្លាស់ប្តូរ។

## ៤. Set សម្រាប់ unique values

~~~js
const tags = new Set(["php", "js", "php"]);
tags.add("html");
console.log([...tags]); // មាន "php" ម្តង
~~~

Set រក្សាតម្លៃមិនស្ទួនតាម SameValueZero semantics។ វាងាយដក duplicate primitives។ Object ត្រូវប្រៀបធៀបតាម reference; object ពីរដែលមាន field ដូចគ្នាមិនក្លាយជា duplicate ដោយស្វ័យប្រវត្តិទេ។

## លំហាត់

1. ប្រើ Set ដកពាក្យស្ទួនពី array string។
2. ប្រើ Map រាប់ចំនួនដងដែលពាក្យនីមួយៗកើតឡើង។
3. សរសេរ generator ផ្តល់លេខគូពី 2 ដល់ 10។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const uniqueWords = [...new Set(words)];
const counts = new Map();
for (const word of words) counts.set(word, (counts.get(word) ?? 0) + 1);

function* evenNumbers() {
  for (let number = 2; number <= 10; number += 2) yield number;
}
~~~

</details>

## សង្ខេប

Iterable អនុញ្ញាត iteration តាម `for...of`; generator ផ្តល់ sequence lazy; Map សម្រាប់ dictionary key/value និង Set សម្រាប់ unique values។ ជ្រើសរចនាសម្ព័ន្ធតាមការចូលប្រើ និងលក្ខណៈ key/data។
