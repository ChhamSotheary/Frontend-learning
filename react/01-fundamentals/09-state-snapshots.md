# មេរៀន ៩៖ State Snapshot, Batching និង Updater Functions

## គោលដៅ

យល់ថា state ក្នុង render ជា snapshot, ហេតុអ្វី setter មិនកែ variable ភ្លាម និងប្រើ updater function ពេល update ពឹងលើតម្លៃមុន។

## ១. Handler មើល snapshot របស់ render

~~~jsx
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count); // នៅតែជាតម្លៃរបស់ render នេះ
  }

  return <button onClick={handleClick}>{count}</button>;
}
~~~

React ផ្តល់ snapshot នៃ state ទៅ component នៅពេល render។ Handler ដែលបង្កើតក្នុង render នោះចងចាំតម្លៃដដែល។ Setter រៀបចំ update សម្រាប់ render បន្ទាប់; វាមិនកែ count ក្នុង handler កំពុងរត់ទេ។

## ២. Functional updater

~~~jsx
setCount((previousCount) => previousCount + 1);
~~~

Updater function ទទួល state ចុងក្រោយក្នុង queue ហើយ return តម្លៃថ្មី។ ប្រើវាពេល update អាស្រ័យលើតម្លៃមុន ជាពិសេសពេលមាន updates ច្រើនក្នុង event មួយ។ Updater ត្រូវសុទ្ធសាធ; កុំធ្វើ network call ឬ side effect ក្នុងវា។

## ៣. Batching និង update ច្រើនដង

~~~jsx
function addThree() {
  setCount((n) => n + 1);
  setCount((n) => n + 1);
  setCount((n) => n + 1);
}
~~~

React អាចប្រមូល updates ហើយ render ម្តង។ Updater functions ដំណើរការតាមលំដាប់ ដូច្នេះឧទាហរណ៍នេះបូកបី។ បើប្រើ setCount(count + 1) បីដង នោះទាំងបីអាន snapshot count ដូចគ្នា ហើយមិនចាំបាច់បានបូកបីទេ។

## ៤. កុំចាត់ setter ជា assignment

កុំរំពឹងថា UI ឬ console ប្តូរភ្លាមក្នុងបន្ទាត់បន្ទាប់។ បើត្រូវគណនាតម្លៃថ្មី ធ្វើវាក្នុង event handler; ប្រើ Effect តែពេលត្រូវ sync ទៅ external system មិនមែនសម្រាប់ឆ្លើយតប click ធម្មតាទេ។

## លំហាត់

1. សរសេរ handler បូក count បីដោយ updater functions។
2. ហេតុអ្វី console.log ក្រោយ setter មិនបង្ហាញតម្លៃថ្មី?
3. តើពេលណាប្រើ setValue(value + 1) និងពេលណាប្រើ updater?

<details><summary>ចម្លើយសង្ខេប</summary>

ប្រើ updater ពេលត្រូវអានតម្លៃ state ចុងក្រោយ។ Handler បច្ចុប្បន្នចងចាំ snapshot ហើយ setter រៀបចំ render បន្ទាប់។

</details>

## សង្ខេប

State ក្នុង render ជា snapshot មិនមែន mutable variable។ Functional updater ជួយគណនាតាម state ចុងក្រោយ និងការពារការបាត់ updates ពេល React batch ការងារ។
