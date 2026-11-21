# មេរៀន ១៖ គំនិត React និង UI ជា function នៃ state

## គោលដៅ

យល់ពី React ជា library សម្រាប់ពិពណ៌នា UI ដោយ components; data ផ្លាស់ប្តូរនាំឱ្យ UI render ឡើងវិញ។ បែងចែក declarative UI ពីការកែ DOM ដោយដៃ។

## ១. UI ជា tree នៃ components

ទំព័រមាន header, navigation, content និង footer។ React អនុញ្ញាតឱ្យបំបែកផ្នែកទាំងនេះជាបំណែកតូចៗ ហើយផ្គុំជាដើមឈើ component។ Component ជា JavaScript function ដែលឈ្មោះចាប់ផ្តើមអក្សរធំ និង return JSX។

~~~jsx
function Welcome() {
  return <h1>សួស្តី React</h1>;
}

export default function App() {
  return (
    <main>
      <Welcome />
      <p>យើងកំពុងបង្កើត UI ជា components។</p>
    </main>
  );
}
~~~

Welcome ជា React component; main និង p ជា HTML elements។ JSX ប្រើអក្សរធំដើម្បីសម្គាល់ component របស់យើង។

## ២. Declarative UI

ជាមួយ DOM API យើងប្រាប់ browser ជាជំហានៗឱ្យរក element ហើយកែវា។ React style គឺប្រាប់ថា “បើ data មានតម្លៃនេះ សូមបង្ហាញ UI បែបនេះ”។ React គ្រប់គ្រងការធ្វើ DOM ឱ្យត្រូវនឹងការពិពណ៌នារបស់ component។

~~~jsx
function Status({ isOnline }) {
  return <p>{isOnline ? "នៅលើបណ្តាញ" : "ក្រៅបណ្តាញ"}</p>;
}
~~~

## ៣. Render មិនមែន page reload

ពេល state ផ្លាស់ React ហៅ component function ម្តងទៀត ដើម្បីគណនា UI ថ្មី។ វាមិនមានន័យថា browser reload ទំព័រទាំងមូលទេ។ React សម្រេចថាតើផ្នែក DOM ណាត្រូវ update។

Component គួរគណនា JSX ពី props/state ដោយសុទ្ធសាធ។ កុំ fetch data, កែ DOM ដោយដៃ ឬកែ global variable ក្នុងអំឡុង render។ សកម្មភាពទាំងនោះមានកន្លែងសមស្រប ដូចជា event handler ឬ Effect។

## លំហាត់

1. សរសេរ CourseTitle component ដែលបង្ហាញ heading “រៀន React”។
2. តើ component មួយដាក់នៅក្នុង component ផ្សេងបានដូចម្តេច?
3. ពន្យល់ភាពខុសគ្នារវាង declarative UI និងការកែ DOM ដោយផ្ទាល់។

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
function CourseTitle() {
  return <h2>រៀន React</h2>;
}

function App() {
  return <CourseTitle />;
}
~~~

Declarative UI ពិពណ៌នាលទ្ធផលតាម data/state; React គ្រប់គ្រង DOM ដើម្បីឱ្យស្របនឹងការពិពណ៌នានោះ។

</details>

## សង្ខេប

React UI ត្រូវបានផ្គុំពី components; component បង្ហាញ UI តាម data ហើយ React render ឡើងវិញពេល state/props ផ្លាស់។ រក្សា render ឱ្យសុទ្ធសាធ និងប្រើ JSX ជំនួសការកែ DOM ដោយដៃ។
