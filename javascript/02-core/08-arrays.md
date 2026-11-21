# មេរៀន ៨៖ Arrays និង collections

## គោលបំណង
បង្កើត Array, ចូលទៅកាន់ item តាម index, បន្ថែម/ដក item, loop លើ values និងប្រើ methods ដូចជា map/filter/find។

## ១. Array ជាអ្វី?
Array ជាបញ្ជីតម្លៃដែលរក្សាតាមលំដាប់។ ប្រើ square brackets៖

~~~js
const subjects = ["HTML", "CSS", "JavaScript"];
console.log(subjects);
~~~

Array អាចរក្សាតម្លៃប្រភេទផ្សេងៗបាន ប៉ុន្តែសម្រាប់ data ដែលងាយថែទាំ គួររក្សាប្រភេទតម្លៃស្រដៀងគ្នា។

## ២. Index ចាប់ពីសូន្យ
~~~js
const subjects = ["HTML", "CSS", "JavaScript"];
console.log(subjects[0]); // HTML
console.log(subjects[2]); // JavaScript
console.log(subjects.length); // 3
~~~

Index ដំបូងគឺ 0; item ចុងក្រោយជាទូទៅនៅ index `array.length - 1`។ ការអាន index មិនមាននឹងផ្តល់ `undefined`។

## ៣. កែ និងបន្ថែម item
~~~js
const tasks = ["រៀន", "ហាត់"];
tasks[1] = "សរសេរកូដ";
tasks.push("ពិនិត្យលទ្ធផល");
const lastTask = tasks.pop();

console.log(tasks);
console.log(lastTask);
~~~

`push` បន្ថែមនៅចុង; `pop` ដក និងប្រគល់ item ចុងក្រោយ។ `const` មិនរារាំងការកែ item របស់ Array ទេ ព្រោះ binding នៅតែយោងទៅ Array ដដែល។

## ៤. ទៅតាម values
~~~js
const scores = [70, 85, 90];
for (const score of scores) {
  console.log(score);
}
~~~

`for...of` សមស្របពេលត្រូវការតម្លៃ មិនចាំបាច់ index។ ប្រើ classic `for` បើត្រូវការលេខទីតាំង។

## ៥. Array methods ដែលគេប្រើញឹកញាប់
~~~js
const scores = [55, 72, 91, 48];
const passed = scores.filter(score => score >= 50);
const doubled = scores.map(score => score * 2);
const firstHighScore = scores.find(score => score >= 90);

console.log(passed);
console.log(doubled);
console.log(firstHighScore);
~~~

- `filter` បង្កើត Array ថ្មីដែលមានតែ item បំពេញ condition។
- `map` បម្លែង item នីមួយៗទៅ value ថ្មី។
- `find` ប្រគល់ item ដំបូងដែលត្រូវនឹង condition ឬ `undefined`។
- Methods ទាំងនេះមិនប្តូរ Array ដើមក្នុងឧទាហរណ៍នេះទេ។

## ៦. reduce សម្រាប់ប្រមូលតម្លៃ
~~~js
const prices = [5, 10, 8];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 23
~~~

`reduce` រក្សា accumulator; ចាប់ពី 0 ហើយបន្ថែមតម្លៃនីមួយៗ។ បើ logic អានមិនច្បាស់ ប្រើ loop ធម្មតា។

## ៧. ចម្លង Array និងលំហាត់
`const copied = [...scores]` បង្កើត shallow copy មួយ; វាមិនចម្លង nested objects ជ្រៅទេ។

លំហាត់៖ បង្កើត Array នៃលេខ, បង្ហាញលេខធំជាង 10, គុណលេខនីមួយៗនឹង 2 និងរកផលបូក។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const numbers = [4, 12, 7, 20];
console.log(numbers.filter(number => number > 10));
console.log(numbers.map(number => number * 2));
console.log(numbers.reduce((sum, number) => sum + number, 0));
~~~

</details>

មើល [arrays.js](../examples/lesson-08/arrays.js)។ កុំប្រើ `for...in` ដើម្បីយក Array values; វារំកិលលើ keys។

## សង្ខេប
Array រក្សាបញ្ជីតាមលំដាប់។ Index ចាប់ពី 0; `push/pop` កែចុងក្រោយ; `map/filter/find/reduce` ជួយបម្លែង, ត្រង, រក និងប្រមូល។

