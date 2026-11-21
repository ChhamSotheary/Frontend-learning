# មេរៀន ៨៖ useState និង State ដំបូង

## គោលដៅ

ប្រើ useState ដើម្បីរក្សាតម្លៃរវាង renders, បង្ហាញតម្លៃក្នុង JSX និង update state ដោយមិន mutate។

## ១. បង្កើត state

~~~jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      ចុចបាន {count} ដង
    </button>
  );
}
~~~

useState ទទួល initial value ហើយផ្តល់ current value និង setter។ ការហៅ setter ស្នើឱ្យ React render component ឡើងវិញជាមួយ value ថ្មី។

Hooks ត្រូវហៅនៅ top level របស់ function component ឬ custom Hook ប៉ុណ្ណោះ។ កុំហៅក្នុង condition, loop, event handler ឬ function ធម្មតា។

## ២. Update arrays ដោយបង្កើតតម្លៃថ្មី

~~~jsx
const [items, setItems] = useState([]);

function addItem(item) {
  setItems((currentItems) => [...currentItems, item]);
}
~~~

កុំ items.push(item) រួច setItems(items) ព្រោះបាន mutate array ដើម។ ប្រើ spread, map ឬ filter ដើម្បីបង្កើត array ថ្មី។

## ៣. Update object state

~~~jsx
const [profile, setProfile] = useState({ name: "", city: "" });

function setName(name) {
  setProfile((current) => ({ ...current, name }));
}
~~~

Setter ជំនួស state ទាំងមូល; វាមិន merge object ដូច class component ចាស់ទេ។ Spread fields ដែលចង់រក្សា ហើយកែតែ field ចាំបាច់។ ចំពោះ nested object ត្រូវបង្កើត object ថ្មីតាមស្រទាប់ដែលកែ។

## ៤. State ទល់នឹង variable ធម្មតា

Variable local ត្រូវបង្កើតឡើងវិញគ្រប់ render; state ត្រូវ React រក្សាទុក។ បើតម្លៃគ្រាន់តែគណនាពី props/state ផ្សេង កុំរក្សាវាជា state ស្ទួន។

## លំហាត់

1. បង្កើត counter មានប៊ូតុងបូក និងដក។
2. បង្កើត state name ហើយបង្ហាញសារ welcome។
3. បន្ថែម item ទៅ array state ដោយមិន mutate។

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((value) => value + 1)}>បូក</button>
      <span>{count}</span>
      <button onClick={() => setCount((value) => value - 1)}>ដក</button>
    </>
  );
}
~~~

Array update អាចសរសេរ setItems((items) => [...items, newItem])។

</details>

## សង្ខេប

useState ឱ្យ component ចងចាំតម្លៃ ហើយ render ឡើងវិញពេល setter ហៅ។ កុំ mutate state; បង្កើត array/object ថ្មី និងកុំរក្សា derived data ជា state ដោយមិនចាំបាច់។
