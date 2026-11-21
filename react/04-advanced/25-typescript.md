# មេរៀន ២៥៖ TypeScript ជាមួយ React

## គោលដៅ

កំណត់ types សម្រាប់ props, event handlers និង state; ប្រើ union/narrowing ហើយយល់ថា TypeScript មិន validate API data នៅ runtime ទេ។

## ១. Props types

~~~tsx
type CourseCardProps = {
  title: string;
  level: "beginner" | "advanced";
  completed?: boolean;
};

function CourseCard({ title, level, completed = false }: CourseCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{level}</p>
      <p>{completed ? "បានបញ្ចប់" : "កំពុងរៀន"}</p>
    </article>
  );
}
~~~

សញ្ញា ? បញ្ជាក់ថា property optional។ Union literal កំណត់ជម្រើសដែលអនុញ្ញាត ជំនួស string ណាមួយក៏បាន។ TypeScript ជាទូទៅ infer ប្រភេទ return JSX។

## ២. Type សម្រាប់ event

~~~tsx
function SearchBox() {
  const [query, setQuery] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  return <input value={query} onChange={handleChange} />;
}
~~~

React types ផ្តល់ event types សម្រាប់ input, form និង mouse events។ Inline handler ជាញឹកញាប់ infer type ដោយខ្លួនឯង; កំណត់ type ច្បាស់ពេលបំបែក function។

## ៣. Discriminated union សម្រាប់ UI state

~~~tsx
type LoadState<T> =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T[] };

function Results({ state }: { state: LoadState<Course> }) {
  if (state.status === "loading") return <p>កំពុងផ្ទុក…</p>;
  if (state.status === "error") return <p role="alert">{state.message}</p>;
  return <CourseList courses={state.data} />;
}
~~~

Property status ជា discriminant ដែលជួយឱ្យ type checker ដឹងថា branch នីមួយៗមាន data អ្វី។ វាជួយជៀស state ដែល loading និង error ពិតព្រមគ្នា។

## ៤. Runtime validation នៅតែចាំបាច់

Type annotations ត្រូវដកចេញពេល compile; JSON ពី network អាចមាន shape ខុស។ ទទួល data ជា unknown, ពិនិត្យ type/fields ឬប្រើ schema validation library មុនប្រើ។ កុំប្រើ any ដើម្បីបិទ error ដោយមិនយល់មូលហេតុ។

## លំហាត់

1. កំណត់ props type សម្រាប់ Button ដែលទទួល label និង disabled។
2. បង្កើត union state មាន idle/loading/success/error។
3. ហេតុអ្វី API response ត្រូវ validate ពេល runtime?

<details><summary>ចម្លើយគំរូ</summary>

~~~tsx
type ButtonProps = { label: string; disabled?: boolean };
type Status<T> =
  | { kind: "idle" | "loading" }
  | { kind: "success"; data: T }
  | { kind: "error"; message: string };
~~~

Network response មកពីខាងក្រៅ TypeScript program ហើយ type syntax មិនមានក្នុង output JavaScript ដើម្បីពិនិត្យ data ទេ។

</details>

## សង្ខេប

TypeScript អាចកំណត់ contract រវាង components និងបញ្ជាក់ state transitions។ ប្រើ inference, unions និង event types; validate user/API/storage data នៅ runtime ដដែល។
