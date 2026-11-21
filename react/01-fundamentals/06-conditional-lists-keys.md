# មេរៀន ៦៖ Conditional Rendering, Lists និង Keys

## គោលដៅ

បង្ហាញ UI តាមលក្ខខណ្ឌ, បម្លែង arrays ទៅ JSX ដោយ map និងជ្រើស key មានស្ថិរភាព។

## ១. Conditional rendering

~~~jsx
function LoginStatus({ user }) {
  if (!user) return <p>សូមចូលគណនី</p>;
  return <p>សួស្តី {user.name}</p>;
}
~~~

អាចប្រើ if មុន return, ternary នៅក្នុង JSX ឬ && ពេលចង់បង្ហាញតែពេល condition ពិត។ ជ្រើសរបៀបដែលអានងាយ។

~~~jsx
{isLoading ? <p>កំពុងផ្ទុក…</p> : <CourseList courses={courses} />}
{hasError && <p role="alert">មានបញ្ហាក្នុងការផ្ទុក</p>}
~~~

ប្រយ័ត្ន {count && <Badge />} ព្រោះ count ជា 0 អាចបង្ហាញលេខ 0; ប្រើ count > 0 ជា condition។

## ២. បង្ហាញ arrays

~~~jsx
const lessons = [
  { id: "intro", title: "សេចក្តីផ្តើម" },
  { id: "jsx", title: "JSX" },
];

function LessonList() {
  return (
    <ul>
      {lessons.map((lesson) => <li key={lesson.id}>{lesson.title}</li>)}
    </ul>
  );
}
~~~

map បម្លែង item នីមួយៗទៅ JSX។ ដាក់ key លើ element កម្រិតដំបូងដែល map បង្កើត។

## ៣. ហេតុអ្វីត្រូវការ key?

Key ជួយ React រក្សាអត្តសញ្ញាណ item ពេល list បន្ថែម, លុប ឬ reorder។ ជ្រើស database id ឬ identifier មានស្ថិរភាពពី data។ កុំបង្កើត random key ក្នុង render ព្រោះវាផ្លាស់រាល់ render។ កុំប្រើ array index បើ list អាច reorder ឬលុប ព្រោះ state របស់ row អាចភ្ជាប់ទៅ item ខុស។

Key មិនត្រូវបានផ្ញើទៅ child ជា prop ទេ។ បើ child ត្រូវការ id សូមផ្ញើ prop id ដាច់ដោយឡែក។

## ៤. Empty state

~~~jsx
function CourseList({ courses }) {
  if (courses.length === 0) return <p>មិនទាន់មានវគ្គទេ។</p>;
  return <ul>{courses.map((course) => <li key={course.id}>{course.name}</li>)}</ul>;
}
~~~

Empty, loading, error និង success គឺ UI states ផ្សេងៗដែល app គួរគិតដាច់ដោយឡែក។

## លំហាត់

1. បង្ហាញ students array ជា li ដោយ key ជា student.id។
2. បង្ហាញ “គ្មានលទ្ធផល” ពេល array ទទេ។
3. ហេតុអ្វី index key អាចបង្ក bug ពេលលុប row?

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
{students.length === 0 ? (
  <p>គ្មានលទ្ធផល</p>
) : (
  <ul>{students.map((student) => <li key={student.id}>{student.name}</li>)}</ul>
)}
~~~

ក្រោយលុប row, index របស់ item ខាងក្រោយផ្លាស់; React អាចយក DOM/local state ចាស់ទៅភ្ជាប់ item ផ្សេង។ Key មានស្ថិរភាពរក្សាអត្តសញ្ញាណត្រឹមត្រូវ។

</details>

## សង្ខេប

ប្រើ conditions សម្រាប់ UI តាម state និង map សម្រាប់ arrays។ ផ្តល់ key មានស្ថិរភាពពី data; index សមស្របតែ list ដែលមិនផ្លាស់ប្រវែង ឬលំដាប់។
