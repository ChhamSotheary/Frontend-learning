# មេរៀន ១៩៖ Promises និង Chaining

## គោលដៅ

ប្រើ Promise សម្រាប់លទ្ធផលនៅពេលក្រោយ, ស្គាល់ `pending/fulfilled/rejected`, ភ្ជាប់ `.then/.catch/.finally`, បញ្ជូនតម្លៃតាម chain និងប្រើ `Promise.all` នៅពេលសមស្រប។

## ១. Promise ជាអ្វី?

Promise តំណាងឱ្យលទ្ធផលនាពេលអនាគត។ វាមានស្ថានភាព `pending` (កំពុងរង់ចាំ), `fulfilled` (ជោគជ័យ) ឬ `rejected` (បរាជ័យ)។ លទ្ធផល settle ម្តងហើយមិនត្រឡប់ទៅ pending វិញទេ។

~~~js
const delayedNumber = new Promise((resolve) => {
  setTimeout(() => resolve(42), 300);
});

delayedNumber.then((value) => console.log(value));
~~~

`resolve(value)` បំពេញ Promise ដោយតម្លៃ; `reject(reason)` បំពេញផ្លូវបរាជ័យ។ ជាទូទៅប្រើ Promise ពី API ដូច `fetch` ជំនួសការបង្កើត Promise ដោយដៃ លុះត្រាតែត្រូវ bridge callback API។

## ២. Chaining និងការបញ្ជូនតម្លៃ

~~~js
Promise.resolve(5)
  .then((number) => number * 2)
  .then((doubled) => `លទ្ធផល ${doubled}`)
  .then((message) => console.log(message))
  .catch((error) => console.error("មានបញ្ហា:", error));
~~~

រាល់ `.then()` បង្កើត Promise ថ្មី។ តម្លៃដែល return ពី callback ក្លាយជាលទ្ធផល stage បន្ទាប់។ បើ return Promise មួយទៀត chain នឹងរង់ចាំវា។ បើ callback throw នោះ Promise បន្ទាប់ reject។ កុំភ្លេច `return` Promise ក្នុង chain បើការងារខាងលើត្រូវរង់ចាំ។

## ៣. Error path

~~~js
function getPositiveNumber(value) {
  if (value <= 0) return Promise.reject(new Error("ត្រូវការលេខវិជ្ជមាន"));
  return Promise.resolve(value);
}

getPositiveNumber(-2)
  .then((value) => console.log(value))
  .catch((error) => console.error(error.message))
  .finally(() => console.log("បញ្ចប់ការត្រួតពិនិត្យ"));
~~~

`.catch()` គឺ shorthand សម្រាប់ error handler; `finally()` រត់មិនថាជោគជ័យឬបរាជ័យ ហើយជាទូទៅមិនទទួលលទ្ធផលពី Promise មុន។ កុំបំលែង error ទៅ success ដោយចៃដន្យក្នុង `catch`។

## ៤. Promise.all និងការរត់ស្របគ្នា

~~~js
const [profile, settings] = await Promise.all([
  loadProfile(),
  loadSettings(),
]);
~~~

`Promise.all` ចាប់ផ្តើមការងារដែលបានបង្កើតជាមុន ហើយរង់ចាំទាំងអស់; វា reject ពេល Promise មួយ reject។ ប្រើពេលលទ្ធផលមិនពឹងគ្នា។ ប្រសិនបើត្រូវទទួលលទ្ធផលទោះបីមួយចំនួនបរាជ័យ សិក្សា `Promise.allSettled()`។ `Promise.race()` និង `Promise.any()` មានន័យផ្សេងៗគ្នា មិនមែនជំនួសគ្នាដោយស្វ័យប្រវត្តិទេ។

## ៥. កំហុសទូទៅ

- ដាក់ `.then()` តែគ្មាន `return` ពី callback ដែលចាប់ការងារថ្មី។
- ប្រើ `try/catch` ជុំវិញ Promise ដោយមិន `await` ឬ `.catch()`; error អាចគេចផុត។
- សន្មតថា Promise មានន័យថាការងាររត់លើ thread ផ្សេង; Promise រៀបចំលទ្ធផល asynchronous ប៉ុន្តែមិនធ្វើឱ្យ CPU-heavy code រត់ស្របគ្នាដោយខ្លួនឯងទេ។

## លំហាត់

1. បង្កើត Promise ដែល resolve ពាក្យ “រួចរាល់” ក្រោយ 200ms។
2. Chain ចំនួន 4 ដោយគុណ 3 ហើយ format ជា string។
3. តើ `Promise.all` ប្រតិកម្មយ៉ាងដូចម្តេច បើ promise មួយក្នុងចំណោមបី reject?

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const ready = new Promise((resolve) => setTimeout(() => resolve("រួចរាល់"), 200));
ready.then(console.log).catch(console.error);

Promise.resolve(4)
  .then((value) => value * 3)
  .then((value) => `ចំនួន = ${value}`)
  .then(console.log);
~~~

`Promise.all` reject នៅពេល Promise ណាមួយ reject; ប្រើ `allSettled` បើត្រូវការស្ថានភាពរបស់ទាំងអស់។

</details>

## សង្ខេប

Promise រក្សាលទ្ធផល asynchronous ជាខ្សែ chain។ តម្លៃ `return` ឆ្លងទៅ `.then`, exception ទៅ `.catch`, និង `.finally` សម្រាប់ cleanup។ `Promise.all` សមស្របសម្រាប់ការងារឯករាជ្យដែលត្រូវការលទ្ធផលទាំងអស់។
