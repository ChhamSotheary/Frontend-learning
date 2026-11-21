# មេរៀន ៤៖ Components និងការផ្គុំ UI

## គោលដៅ

បង្កើត function components, ផ្គុំជា component tree និងសម្រេចពេលណាគួរចែក UI ជាឯកតាតូច។

## ១. Component ដំបូង

~~~jsx
function LessonBadge() {
  return <span className="badge">មូលដ្ឋាន</span>;
}
~~~

Component ជា function ត្រឡប់ JSX ហើយឈ្មោះចាប់ផ្តើមអក្សរធំ។ ប្រើវាក្នុង JSX ជា component tag ដើម្បី React គ្រប់គ្រង state និង lifecycle; កុំហៅ function component ដោយផ្ទាល់ដូច function helper។

## ២. ផ្គុំ component tree

~~~jsx
function PageHeader() {
  return <header><h1>វគ្គ React</h1></header>;
}

export default function Page() {
  return (
    <>
      <PageHeader />
      <main>
        <LessonBadge />
        <p>ចាប់ផ្តើមរៀនថ្ងៃនេះ។</p>
      </main>
    </>
  );
}
~~~

Page ជា parent; PageHeader និង LessonBadge ជា children។ Tree នេះជួយឱ្យយល់ពីផ្នែកដែលបង្កើតទំព័រ។

## ៣. ពេលណាគួរបំបែក component?

បំបែកពេលផ្នែកមាន responsibility, behavior ឬ state ផ្ទាល់; ត្រូវប្រើឡើងវិញ; ឬ component ធំពេកពិបាកអាន។ កុំបំបែកគ្រប់ tag ឬបង្ក props ច្រើនជាន់ដោយមិនចាំបាច់។

## ៤. បំបែកជា files

~~~jsx
// src/components/PageHeader.jsx
export default function PageHeader() {
  return <header><h1>វគ្គ React</h1></header>;
}
~~~

~~~jsx
// src/App.jsx
import PageHeader from "./components/PageHeader.jsx";
export default function App() {
  return <PageHeader />;
}
~~~

Import path, file name និង export ត្រូវផ្គូផ្គង។ ប្រើ default ឬ named exports តាម convention របស់ project។

## លំហាត់

1. បង្កើត CourseHeader និង LessonSummary ហើយផ្គុំក្នុង App។
2. តើ component គួរធ្វើអ្វី បើត្រូវកែ DOM ដោយ API ពិសេស?
3. ហេតុអ្វី JSX component syntax ល្អជាងការហៅ function component ផ្ទាល់?

<details><summary>ចម្លើយសង្ខេប</summary>

ចែកតាម responsibility ដើម្បីឱ្យងាយអាន និងប្រើឡើងវិញ។ DOM API ពិសេសដូច focus ត្រូវរៀន ref និង Effect។ JSX component syntax ឱ្យ React គ្រប់គ្រង rendering និង Hooks rules។

</details>

## សង្ខេប

Components ជាឯកតា UI ដែលផ្គុំគ្នាបាន។ បែងចែកតាម responsibility និងប្រើ JSX tags ដើម្បី React គ្រប់គ្រង component tree។
