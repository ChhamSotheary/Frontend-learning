# មេរៀន ៣៖ JSX — Markup ក្នុង JavaScript

## គោលដៅ

សរសេរ JSX, បញ្ចូល JavaScript expressions, ប្រើ attributes ត្រឹមត្រូវ និងយល់ពី rules ដែលខុសពី HTML។

## ១. JSX ជាអ្វី?

JSX ជា syntax extension ដែលឱ្យយើងសរសេរ markup ជិតនឹង component logic។ វាមិនមែន string HTML ទេ; build tool បម្លែងវាទៅ JavaScript ដែល React ប្រើពិពណ៌នា UI។

~~~jsx
const title = "មេរៀន JSX";

export default function App() {
  return <h1>{title}</h1>;
}
~~~

Curly braces ដាក់ JavaScript expression នៅក្នុង JSX។ អាចដាក់ variable, function call និង ternary; មិនអាចដាក់ if statement ផ្ទាល់ក្នុង braces។

## ២. ច្បាប់ JSX ដែលត្រូវចាំ

- បិទ tags ទាំងអស់; ឧទាហរណ៍ img និង input ត្រូវសរសេរជា self-closing។
- Component ត្រូវ return root តែមួយ; ប្រើ fragment ឬ parent element។
- ប្រើ className ជំនួស class និង htmlFor ជំនួស for។
- Attribute ជាច្រើនប្រើ camelCase ដូច onClick។
- Value មកពី JavaScript សរសេរក្នុង braces ដូច src={imageUrl}។

~~~jsx
function Profile() {
  const user = { name: "Dara", role: "អ្នកសិក្សា" };
  return (
    <section className="profile">
      <h2>{user.name}</h2>
      <label htmlFor="email">អ៊ីមែល</label>
      <input id="email" type="email" />
      <p>{user.role}</p>
    </section>
  );
}
~~~

## ៣. Conditions ក្នុង JSX

~~~jsx
function Status({ score }) {
  const passed = score >= 50;
  return <p>{passed ? "ជាប់" : "ត្រូវហាត់បន្ថែម"}</p>;
}
~~~

ប្រើ ternary សម្រាប់ជម្រើសពីរ។ Logic ច្រើនគួររៀបចំក្នុង variable ឬ if statement មុន return។ ប្រយ័ត្ន count && <Badge /> ព្រោះ count ស្មើ 0 អាចបង្ហាញលេខ 0; ប្រើ count > 0 ជាលក្ខខណ្ឌ។

## ៤. Style និង user text

~~~jsx
const cardStyle = { backgroundColor: "#f3f4f6", padding: "1rem" };
<article style={cardStyle}>អត្ថបទ</article>
~~~

Style ទទួល object ហើយ property names ភាគច្រើនជា camelCase។ JSX បង្ហាញ string ជាអត្ថបទដោយ escape ជាទូទៅ; កុំប្រើ dangerouslySetInnerHTML ជាមួយទិន្នន័យ user ឬ API មិនទុកចិត្ត។

## លំហាត់

1. បង្កើត card មាន heading, paragraph និង link។
2. បង្ហាញ status ខុសៗគ្នាតាមតម្លៃ done។
3. តើ className ខុសពី HTML class ដូចម្តេច?

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
function LessonCard({ title, done }) {
  return (
    <article className="lesson-card">
      <h2>{title}</h2>
      <p>{done ? "បានបញ្ចប់" : "កំពុងរៀន"}</p>
      <a href="/lessons">មើលមេរៀន</a>
    </article>
  );
}
~~~

JSX ប្រើ className ជា prop ដើម្បីភ្ជាប់ CSS class។

</details>

## សង្ខេប

JSX បញ្ចូល expressions និង markup ដើម្បីពិពណ៌នា UI។ បិទ tag, ប្រើ root មួយ, className/htmlFor និងទុក logic ស្មុគស្មាញក្រៅ markup។
