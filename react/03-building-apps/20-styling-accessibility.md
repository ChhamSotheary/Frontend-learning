# មេរៀន ២០៖ Styling និង Accessibility

## គោលដៅ

ជ្រើសវិធីដាក់ CSS, ប្រើ HTML semantic, គ្រប់គ្រង focus និង labels និងធ្វើឱ្យ UI អាចប្រើដោយ keyboard/assistive technology។

## ១. វិធី styling

React មិនបង្ខំ CSS strategy មួយទេ។ អាច import stylesheet ធម្មតា, CSS Modules, utility classes ឬ styling library។ ជ្រើសតាម project ហើយរក្សា conventions មួយឱ្យស្រប។

~~~jsx
import "./CourseCard.css";

function CourseCard({ title }) {
  return <article className="course-card"><h2>{title}</h2></article>;
}
~~~

ប្រើ className ក្នុង JSX។ Inline style សមស្របសម្រាប់ style value ដែល dynamic តិចៗ; layout និង visual rules ជាច្រើនងាយគ្រប់គ្រងក្នុង CSS។

## ២. Semantic HTML ជួយ accessibility

ប្រើ button សម្រាប់ action, a សម្រាប់ navigation, label សម្រាប់ input, heading តាមលំដាប់ និង list tags សម្រាប់ lists។ Semantic element ផ្តល់ keyboard behavior និងន័យដល់ screen readers ដោយស្វ័យប្រវត្តិ។

~~~jsx
<form onSubmit={handleSubmit}>
  <label htmlFor="course-name">ឈ្មោះវគ្គ</label>
  <input id="course-name" value={name} onChange={handleChange} />
  <button type="submit">បន្ថែមវគ្គ</button>
</form>
~~~

កុំធ្វើ div ឱ្យចុចបានដោយបន្ថែម onClick តែប៉ុណ្ណោះ; វាមិនទទួល focus/keyboard behavior ដូច button ទេ។

## ៣. Focus និង status

រក្សា focus indicator ឱ្យឃើញច្បាស់។ ពេលបើក dialog ឱ្យ focus ចូលវា; ពេលបិទ ត្រឡប់ទៅ control ដែលបើកវា។ សារផ្លាស់ប្តូរដោយមិនប្តូរ focus អាចប្រើ role=status ឬ aria-live ដោយកុំប្រកាសសារញឹកញាប់ពេក។

## ៤. Accessibility testing

សាក app ដោយ keyboard តែប៉ុណ្ណោះ, ពិនិត្យ Tab order, label, color contrast, zoom និង screen reader។ Automated scanner ជួយរកបញ្ហាខ្លះ ប៉ុន្តែមិនអាចជំនួសការសាកដោយមនុស្សបាន។

## លំហាត់

1. កែ form ឱ្យ label ភ្ជាប់ input និងមាន status message។
2. ពន្យល់ភាពខុសគ្នារវាង button និង link។
3. សាក navigation ដោយ keyboard ហើយកត់ចំណុចដែល focus មិនច្បាស់។

<details><summary>ចម្លើយសង្ខេប</summary>

ប្រើ label htmlFor/id, status element មាន role=status និង aria-live=polite។ Button ធ្វើ action; link ផ្លាស់ទីទៅ URL។

</details>

## សង្ខេប

CSS ជាជម្រើស project; semantic HTML គឺជាគ្រឹះ accessibility។ គិតពី keyboard, focus, labels និងសារប្រាប់ state ជាផ្នែកនៃការសាង UI មិនមែនការតុបតែងក្រោយ។
