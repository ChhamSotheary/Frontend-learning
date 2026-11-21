# មេរៀន ១២៖ Errors និង Debugging

## គោលបំណង
បែងចែក syntax/runtime/logic errors, បោះ និងចាប់ exception, ប្រើ try/catch/finally និងប្រើ console/debugger ដើម្បីរកមូលហេតុ។

## ១. ប្រភេទកំហុស
- **Syntax error**៖ code មិនគោរព grammar ដូច quote ឬ brace បិទមិនគ្រប់; កូដមិនអាច parse បាន។
- **Runtime error**៖ កើតពេលកូដរត់ ដូច access property លើ null។
- **Logic error**៖ កូដរត់បាន តែចម្លើយខុស ព្រោះ formula/condition មិនត្រឹមត្រូវ។

~~~js
const price = 10;
const quantity = 3;
console.log(price + quantity); // រត់បាន តែបើចង់ total ត្រូវគុណ
~~~

## ២. អាន error message
ពេល error កើត សូមអាន៖ error type, message, file និង line/stack trace។ បង្កើតជំហានតិចបំផុតដែលអាចធ្វើឱ្យកើតឡើងវិញ; ពិនិត្យ values ជិតទីតាំងបញ្ហា។ កុំកែច្រើនផ្នែកដោយស្មាន។

## ៣. throw Error
~~~js
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("សមតុល្យមិនគ្រប់");
  }
  return balance - amount;
}
~~~

`throw` បញ្ឈប់ flow បច្ចុប្បន្ន ហើយបញ្ជូន exception ទៅ caller។ ប្រើ Error object ជាមួយ message ដែលពន្យល់បញ្ហា; កុំ throw string ទទេ។

## ៤. try/catch/finally
~~~js
try {
  const result = withdraw(50, 80);
  console.log(result);
} catch (error) {
  console.error("មិនអាចដកប្រាក់៖", error.message);
} finally {
  console.log("បញ្ចប់ការសាកល្បង");
}
~~~

- `try` មាន code ដែលអាច throw។
- `catch` ដំណើរការពេល exception ត្រូវបានបោះ។
- `finally` ដំណើរការមិនថាជោគជ័យ ឬ error; ប្រើសម្រាប់ cleanup ដែលចាំបាច់។
- កុំ catch error ដើម្បីលាក់បញ្ហា ហើយបន្តដូចជាជោគជ័យ។

## ៥. Debugging ដោយ console និង breakpoint
~~~js
const subtotal = 4 * 25;
console.log({ subtotal });
debugger;
const total = subtotal + 5;
console.log(total);
~~~

`console.log`/`console.table` ជួយមើល values; `debugger` បញ្ឈប់ execution ពេល DevTools បើក ដើម្បីពិនិត្យ scope និងជំហាន។ ដក debugger ចេញមុន deploy ប្រសិនបើមិនចាំបាច់។

## ៦. លំហាត់
1. សរសេរ function ដែល throw Error បើ age អវិជ្ជមាន។
2. ចាប់ error ដោយ try/catch ហើយបង្ហាញ message។
3. តើ logic error ខុសពី SyntaxError ដូចម្តេច?

<details><summary>ចម្លើយគំរូ</summary>

~~~js
function validateAge(age) {
  if (age < 0) throw new Error("អាយុមិនអាចអវិជ្ជមាន");
  return age;
}

try {
  console.log(validateAge(-1));
} catch (error) {
  console.error(error.message);
}
~~~

SyntaxError រារាំងការបកស្រាយ code; logic error អាចរត់បាន ប៉ុន្តែផលចេញមិនត្រឹមត្រូវ។

</details>

## សង្ខេប
កំណត់ប្រភេទ error មុនកែ; ប្រើ throw Error សម្រាប់ failure; catch តែពេលអាចដោះស្រាយ/បន្ថែម context; ប្រើ DevTools breakpoints និង console ដើម្បីស្វែងរក values ដែលមិនរំពឹង។

