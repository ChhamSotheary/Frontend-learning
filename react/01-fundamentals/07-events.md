# មេរៀន ៧៖ Event Handlers និងអន្តរកម្ម

## គោលដៅ

ភ្ជាប់ event handler, បញ្ជូន arguments, ប្រើ event object និងដឹងពេលណាត្រូវបញ្ឈប់ default behavior។

## ១. ភ្ជាប់ handler

~~~jsx
function SaveButton() {
  function handleClick() {
    console.log("បានចុចរក្សាទុក");
  }
  return <button onClick={handleClick}>រក្សាទុក</button>;
}
~~~

onClick={handleClick} បញ្ជូន function reference; React ហៅវាពេលចុច។ កុំសរសេរ onClick={handleClick()} ព្រោះវាហៅ function ក្នុង render ជំនួសពេល event កើត។

## ២. ផ្ញើ arguments

~~~jsx
function DeleteButton({ itemId, onDelete }) {
  return (
    <button type="button" onClick={() => onDelete(itemId)}>
      លុប
    </button>
  );
}
~~~

Arrow function បង្កើត callback ដែលហៅ onDelete ជាមួយ id នៅពេលចុច។

## ៣. អាន input និង event object

~~~jsx
function SearchInput() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return <input onChange={handleChange} aria-label="ស្វែងរក" />;
}
~~~

Event object មាន target ដែល event ចាប់ផ្តើម និង currentTarget ដែល handler ត្រូវបានភ្ជាប់។ Events ខ្លះ bubble ឡើងពី child ទៅ parent; stopPropagation គួរប្រើតែពេលមានហេតុផល។

## ៤. Form submit និង default behavior

~~~jsx
function handleSubmit(event) {
  event.preventDefault();
  // validate ឬដំណើរការ data ក្នុង app
}

<form onSubmit={handleSubmit}>
  <button type="submit">បញ្ជូន</button>
</form>
~~~

preventDefault បញ្ឈប់ browser behavior លំនាំដើម ដូចជា page navigation របស់ form ដើម្បីឱ្យ app ដោះស្រាយ submit។ ដាក់ handler លើ form ដើម្បីគាំទ្រទាំងចុចប៊ូតុង និង Enter។

## លំហាត់

1. បង្កើតប៊ូតុងចុចហៅ onSelect ជាមួយ id របស់មេរៀន។
2. បង្កើត form handler ដែលបញ្ឈប់ reload។
3. តើមានអ្វីខុសពេលសរសេរ onClick={save()}?

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
<button onClick={() => onSelect("react")}>ជ្រើស React</button>

function handleSubmit(event) {
  event.preventDefault();
  console.log("submit form");
}
~~~

save() រត់ភ្លាមក្នុង render; ប្រើ onClick={save} ឬ callback arrow។

</details>

## សង្ខេប

React events ប្រើ props ដូច onClick/onChange ដែលទទួល function reference។ ប្រើ callback arrow សម្រាប់ arguments និង preventDefault សម្រាប់ប្តូរ browser behavior ដោយចេតនា។
