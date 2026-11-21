# មេរៀន ១៥៖ Custom Hooks និង Reuse Logic

## គោលដៅ

ទាញ stateful logic ចេញពី components ដោយ custom Hook, អនុវត្ត Hook naming/rules និងយល់ថា custom Hook ចែក logic មិនមែនចែក state instance ដោយស្វ័យប្រវត្តិ។

## ១. Hook ជាអ្វី?

Custom Hook ជា JavaScript function ដែលឈ្មោះចាប់ផ្តើម use ហើយអាចហៅ built-in Hooks។ វាជួយ reuse logic របស់ component ដូចជា form state, online status ឬការគ្រប់គ្រង filter។

~~~jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((value) => value + 1);
  const decrement = () => setCount((value) => value - 1);
  return { count, increment, decrement };
}
~~~

ប្រើក្នុង component៖

~~~jsx
function CounterPanel() {
  const { count, increment, decrement } = useCounter();
  return (
    <>
      <button onClick={decrement}>ដក</button>
      <span>{count}</span>
      <button onClick={increment}>បូក</button>
    </>
  );
}
~~~

## ២. Hook rules នៅតែអនុវត្ត

ហៅ custom Hook នៅ top level នៃ component ឬ custom Hook ផ្សេង។ កុំហៅក្នុង condition, loop, event handler ឬ function ធម្មតា។ Naming prefix use ជួយ React lint rules ស្គាល់ថាវាជា Hook។

## ៣. Logic reuse មិនមែន state sharing

បើ component A និង B ហៅ useCounter ម្នាក់មួយ នោះម្នាក់ៗមាន state ផ្ទាល់។ Custom Hook មិនបង្ក state global ទេ។ បើត្រូវ share state ពិតៗ ប្រើ lifting state, Context, reducer ឬ store តាមតម្រូវការ។

## ៤. Custom Hook មិនចាំបាច់គ្រប់ function

Function ធម្មតាដែលគណនាតម្លៃដោយគ្មាន Hooks មិនចាំបាច់មាន prefix use ទេ។ បំបែក Hook ពេលវាដាក់ឈ្មោះឱ្យ behavior ច្បាស់ ឬមាន logic stateful ដែល component ច្រើនប្រើ។

## លំហាត់

1. បង្កើត useToggle ដែល return value និង toggle function។
2. បង្កើត useInput សម្រាប់ value/onChange។
3. ហេតុអ្វីការប្រើ custom Hook ដូចគ្នាពីរ components មិនធ្វើឱ្យ state រួមគ្នា?

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((current) => !current);
  return [value, toggle];
}
~~~

Hooks ត្រូវបានភ្ជាប់ទៅ component instance ដែលហៅវា; ការហៅពីរដងបង្ក state ពីរដាច់ដោយឡែក។

</details>

## សង្ខេប

Custom Hooks ជួយដាក់ឈ្មោះ និង reuse stateful logic។ វាត្រូវគោរព Rules of Hooks ហើយមិនចែក state រវាង callers ដោយស្វ័យប្រវត្តិទេ។
