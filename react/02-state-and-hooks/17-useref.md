# មេរៀន ១៧៖ useRef និង DOM References

## គោលដៅ

ប្រើ ref សម្រាប់ចូល DOM ដូច focus, រក្សា mutable value ដែលមិនគួរធ្វើឱ្យ render និងបែងចែក ref ចេញពី state។

## ១. Ref ជាអ្វី?

useRef បង្កើត object ដែលមាន property current។ React រក្សា object នេះរវាង renders; កែ current មិនធ្វើឱ្យ component render ឡើងវិញ។ ប្រើ state សម្រាប់តម្លៃដែល UI ត្រូវបង្ហាញ; ref សម្រាប់តម្លៃដែលត្រូវចងចាំតែ UI មិនចាំបាច់ refresh។

## ២. Focus DOM element

~~~jsx
function SearchBox() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} aria-label="ស្វែងរក" />
      <button onClick={focusInput}>ផ្តោតលើប្រអប់</button>
    </>
  );
}
~~~

React កំណត់ ref.current ទៅ DOM node ពេល mount ហើយកំណត់ត្រឡប់ null ពេល node ដកចេញ។ Optional chaining ជួយពិនិត្យមុនប្រើ។

## ៣. រក្សា mutable value

~~~jsx
const renderCount = useRef(0);
renderCount.current += 1;
~~~

ការកែ ref ក្នុង render ដោយផ្ទាល់ភាគច្រើនមិនមែនជាគំរូល្អទេ; code នេះបង្ហាញតែគំនិត។ បើត្រូវរាប់ចំនួន renders សម្រាប់ debug អាចប្រើ Effect ឬ DevTools។ Ref សមស្របសម្រាប់ timer id, imperative handle ឬតម្លៃដែលមិនបង្ហាញ UI។

## ៤. កុំប្រើ ref ជំនួស state

បើកែ ref.current ហើយរំពឹងថាអត្ថបទក្នុង JSX ប្តូរ វានឹងមិន re-render។ ប្រើ useState ឬ reducer សម្រាប់ UI data។ ការចូល DOM ដោយ ref គួរធ្វើតែនៅកន្លែងដែល declarative prop មិនគ្រប់គ្រាន់។

## លំហាត់

1. បង្កើតប៊ូតុង Focus ដែល focus ទៅ input។
2. តើអ្វីខុសពី ref និង state?
3. រាយឧទាហរណ៍ data ដែលសមស្របរក្សាក្នុង ref។

<details><summary>ចម្លើយសង្ខេប</summary>

State update ធ្វើឱ្យ UI render; ref update មិន render។ Timer id ឬ DOM node គឺឧទាហរណ៍ ref ដែលមិនត្រូវបង្ហាញជាអត្ថបទ។

</details>

## សង្ខេប

useRef រក្សា object ដែលមាន current រវាង renders ដោយមិនបង្ក render ពេលកែ។ ប្រើសម្រាប់ DOM access និង mutable values ដែលមិនមែន UI state។
