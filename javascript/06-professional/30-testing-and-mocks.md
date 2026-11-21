# មេរៀន ៣០៖ Testing, Mocks និង Testable Code

## គោលដៅ

សរសេរ unit test ដោយ Arrange/Act/Assert, ប្រើ Node.js built-in test runner ជាឧទាហរណ៍, សម្គាល់ unit/integration test និងប្រើ dependency injection ជំនួស mock ដែលច្រើនពេក។

## ១. ហេតុអ្វី test?

Test ជួយបញ្ជាក់ behavior ដែលយើងរំពឹង និងចាប់ regressions ពេលកែ code។ Test គួរតែបញ្ជាក់អ្វីដែល function ធ្វើ មិនមែន copy implementation line-by-line។ ជ្រើស input តំណាង, boundary និង failure cases។

## ២. Arrange, Act, Assert

~~~js
export function calculateDiscount(price, rate) {
  if (!Number.isFinite(price) || price < 0) throw new RangeError("តម្លៃមិនត្រឹមត្រូវ");
  if (rate < 0 || rate > 1) throw new RangeError("អត្រាបញ្ចុះតម្លៃមិនត្រឹមត្រូវ");
  return price * (1 - rate);
}
~~~

Test រៀបចំ input (Arrange), ហៅ function (Act), ប្រៀបធៀបលទ្ធផល (Assert)។ Test case គួរគ្រប់គ្រង 0%, 100%, តម្លៃមិនត្រឹមត្រូវ និង floating point expectations តាម precision ត្រឹមត្រូវ។

## ៣. Node built-in test runner

~~~js
import test from "node:test";
import assert from "node:assert/strict";
import { calculateDiscount } from "./discount.js";

test("បញ្ចុះ 10% ពី 100", () => {
  assert.equal(calculateDiscount(100, 0.1), 90);
});

test("បដិសេធអត្រាក្រៅ 0 ដល់ 1", () => {
  assert.throws(() => calculateDiscount(100, 2), RangeError);
});
~~~

នេះជា code សម្រាប់មេរៀន មិនបានរត់ក្នុងការរៀបចំឯកសារនេះទេ។ Node version ដែលគាំទ្រ test runner ត្រូវតាម project; អាន docs សម្រាប់ version ជាក់លាក់។

## ៤. Unit, integration និង mock

- Unit test ផ្តោតលើ function/module តូច ដោយ dependency តិច។
- Integration test ពិនិត្យផ្នែកច្រើនធ្វើការជាមួយគ្នា ដូច repository និង database adapter។
- Mock/stub ជំនួស dependency ខាងក្រៅ ឧទាហរណ៍ clock, network client។
- Dependency injection ដោយផ្ញើ function/API ចូល ធ្វើឱ្យ test ជំនួស dependency ងាយ។

កុំ mock implementation លម្អិតទាំងអស់; test អាចក្លាយជាផុយ និងបរាជ័យពេល refactor ដែលមិនផ្លាស់ behavior។ បំបែក business logic ដែល pure ចេញពី I/O។

## ៥. Test asynchronous code និង edge cases

Test callback អាច return Promise ឬប្រើ async callback ដើម្បីឱ្យ runner រង់ចាំ។ ពិនិត្យទាំង success និង rejection; កុំធ្វើ assertion មុន asynchronous operation បញ្ចប់។ កំណត់ test data ឱ្យដាច់ដោយឡែក ដើម្បីមិនឱ្យ test មួយប៉ះ test មួយទៀត។

## លំហាត់

1. សរសេរ test សម្រាប់ function បម្លែង Celsius ទៅ Fahrenheit។
2. បន្ថែម test សម្រាប់ input មិនមែនលេខ។
3. តើពេលណា integration test មានប្រយោជន៍ជាង unit test?

<details><summary>ចម្លើយគំរូ</summary>

~~~js
test("0 Celsius គឺ 32 Fahrenheit", () => {
  assert.equal(toFahrenheit(0), 32);
});

test("reject input មិនមែនលេខ", () => {
  assert.throws(() => toFahrenheit("ក្តៅ"), TypeError);
});
~~~

Integration test សមស្របពេលត្រូវបញ្ជាក់ថា modules/adapters ច្រើនភ្ជាប់គ្នាត្រឹមត្រូវ ដូចជា API handler និង persistence layer។

</details>

## សង្ខេប

Test ច្បាស់ៗប្រើ Arrange/Act/Assert ហើយគ្របដណ្តប់ success, boundary និង failure។ បំបែក pure logic ពី I/O, ប្រើ mock តែ dependency ដែលចាំបាច់ និងបន្ថែម integration test សម្រាប់ការភ្ជាប់រវាងផ្នែក។
