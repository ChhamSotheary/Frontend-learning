# មេរៀន ១៦៖ useEffect និង Synchronization

## គោលដៅ

យល់ Effect ជាការភ្ជាប់ component ទៅ external system, រៀប dependency list, សម្អាត subscription/timer និងសម្គាល់ Effect ដែលមិនចាំបាច់។

## ១. Effect ប្រើពេលណា?

Effect សម្រាប់ sync ជាមួយប្រព័ន្ធក្រៅ React ដូចជា DOM API ពិសេស, subscription, timer, browser title ឬ third-party widget។ កុំប្រើ Effect ដើម្បីគណនា value ពី props/state ឬដើម្បីឆ្លើយតបនឹង click ដែលអាចដោះស្រាយក្នុង event handler។

~~~jsx
function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <h1>{title}</h1>;
}
~~~

## ២. Dependency list និង lifecycle

useEffect ទទួល setup function និង dependency list។ បន្ទាប់ពី commit, React រត់ setup។ បើ dependency ផ្លាស់ React រត់ cleanup ចាស់សិន (បើមាន) រួច setup ថ្មី។ ពេល component unmount, cleanup ចុងក្រោយត្រូវរត់។

~~~jsx
useEffect(() => {
  const connection = connect(roomId);
  connection.open();
  return () => connection.close();
}, [roomId]);
~~~

Dependencies ត្រូវរួមបញ្ចូល reactive values ដែល setup អាន។ កុំលាក់ dependency ដើម្បីបង្ខំឱ្យ Effect មិនរត់; កែ logic ឬបែងចែក function ដើម្បីឱ្យ dependency ត្រឹមត្រូវ។

## ៣. Cleanup ជាមួយ timer

~~~jsx
useEffect(() => {
  const timerId = setInterval(() => setSeconds((s) => s + 1), 1000);
  return () => clearInterval(timerId);
}, []);
~~~

Empty array មានន័យថា Effect មិនពឹង reactive props/state ផ្សេង; មិនមែនជាវិធីបិទ Effects គ្រប់ប្រភេទទេ។ StrictMode development អាច setup/cleanup ម្តងបន្ថែមដើម្បីរក cleanup ខ្វះ។ Code ត្រូវអាច setup ហើយ cleanup ដោយសុវត្ថិភាព។

## ៤. ជៀស Effect ដែលមិនចាំបាច់

~~~jsx
// ធម្មតា គណនាផ្ទាល់ពេល render
const fullName = firstName + " " + lastName;
~~~

កុំរក្សា fullName ជា state ហើយ sync ដោយ Effect។ វាបន្ថែម render និងអាចបង្ក stale value។ សម្រាប់ response ទៅ user action ដូច submit, ដាក់ logic ក្នុង event handler។

## លំហាត់

1. Sync document title ទៅ count ហើយសម្អាត timer នៅ unmount។
2. តើ cleanup រត់នៅពេលណា?
3. តើការគណនា filtered list ពី array/query ត្រូវការ Effect ទេ?

<details><summary>ចម្លើយសង្ខេប</summary>

Cleanup រត់មុន setup ថ្មី ពេល dependency ផ្លាស់ និងពេល component unmount។ Filter list អាចគណនាផ្ទាល់ក្នុង render ហើយមិនត្រូវការ Effect ទេ។

</details>

## សង្ខេប

Effect sync React ជាមួយ external systems; setup មាន cleanup ហើយ dependency list ត្រូវត្រឹមត្រូវ។ ប្រើ event handler សម្រាប់ user actions និងគណនា derived data ក្នុង render ជំនួសការបន្ថែម Effect។
