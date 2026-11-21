# មេរៀន ៥៖ Props និងការបញ្ជូនទិន្នន័យ

## គោលដៅ

ប្រើ props បញ្ជូន data ពី parent ទៅ child, កំណត់ default, បញ្ជូន callbacks និងយល់ថា props ជា read-only inputs។

## ១. បញ្ជូន props

~~~jsx
function CourseCard({ title, level }) {
  return <article><h2>{title}</h2><p>កម្រិត៖ {level}</p></article>;
}

function App() {
  return <CourseCard title="React មូលដ្ឋាន" level="Beginner" />;
}
~~~

Parent ផ្ញើ props តាម attributes; child ទទួលវាជា object ហើយអាច destructure។ Data flow ជាទូទៅចុះពី parent ទៅ child។

## ២. បញ្ជូន data ច្រើនប្រភេទ

~~~jsx
const lesson = { id: 1, title: "JSX", done: false };

<LessonCard
  lesson={lesson}
  tags={["React", "UI"]}
  isFeatured={true}
  onOpen={() => console.log("បើក lesson")}
/>
~~~

String អាចសរសេរក្នុង quotes; object, array, number, boolean និង function សរសេរក្នុង braces។ String "false" នៅតែជា string និង truthy; កុំច្រឡំជាមួយ boolean false។

## ៣. Default props និង children

~~~jsx
function Button({ variant = "primary", children }) {
  return <button className={"button button--" + variant}>{children}</button>;
}

<Button>រក្សាទុក</Button>
~~~

children ទទួល content នៅចន្លោះ JSX tags។ Default parameter ប្រើពេល prop មិនផ្តល់ ឬជា undefined; វាមិនជំនួស null ទេ។

## ៤. បញ្ជូន callback

~~~jsx
function LessonButton({ onComplete }) {
  return <button onClick={onComplete}>បញ្ចប់មេរៀន</button>;
}

function LessonPage() {
  function handleComplete() {
    console.log("Parent ទទួលសញ្ញាបញ្ចប់");
  }
  return <LessonButton onComplete={handleComplete} />;
}
~~~

Child អាចស្នើឱ្យ parent ធ្វើសកម្មភាពដោយហៅ callback prop។ បើត្រូវផ្ញើ id អាចហៅ callback ជាមួយ argument ពី event handler។

## ៥. កុំកែ props

បើ prop ជា object ឬ array កុំកែ field ឬ push item ដោយផ្ទាល់។ ឱ្យម្ចាស់ state បង្កើតតម្លៃថ្មី ហើយផ្ញើមកវិញតាម props។

## លំហាត់

1. បង្កើត StudentCard ទទួល name, course, completed។
2. បង្កើត IconButton ដែលទទួល children និង onClick។
3. តើ child គួរធ្វើដូចម្តេចដើម្បីផ្លាស់ប្តូរ data ដែល parent ជាម្ចាស់?

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
function StudentCard({ name, course, completed = false }) {
  return <article><h2>{name}</h2><p>{course}</p><p>{completed ? "រួច" : "កំពុងរៀន"}</p></article>;
}

function IconButton({ children, onClick }) {
  return <button type="button" onClick={onClick}>{children}</button>;
}
~~~

Child ហៅ callback ដែល parent ផ្តល់; parent update state រួចផ្ញើ prop ថ្មីចុះមក។

</details>

## សង្ខេប

Props ជា inputs ដែល read-only និងបញ្ជូន data ពី parent ទៅ child។ ប្រើ callbacks សម្រាប់ឱ្យ child ស្នើ action និងកុំ mutate object/array ដែលទទួលតាម props។
