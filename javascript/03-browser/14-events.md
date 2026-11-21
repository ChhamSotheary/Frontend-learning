# មេរៀន ១៤៖ Events និង Event Delegation

## គោលដៅ

យល់ថា event ជាអ្វី, ភ្ជាប់ listener, ប្រើ object `event`, ដោះស្រាយ bubbling/default behavior និងប្រើ event delegation ដើម្បីគ្រប់គ្រង element ច្រើន។

## ១. Event ជាអ្វី?

Event គឺសញ្ញាថាមានអ្វីកើតឡើងក្នុង browser ដូចជា click, key press, submit ឬ load។ JavaScript ចុះឈ្មោះ callback ដើម្បីឱ្យ browser ហៅវាពេល event កើត។

~~~js
const button = document.querySelector("#hello");
button.addEventListener("click", () => {
  console.log("បានចុចប៊ូតុង");
});
~~~

`addEventListener(type, callback)` ជាវិធីស្តង់ដារសម្រាប់ភ្ជាប់។ អាចមាន listener ច្រើនលើ element មួយ ហើយមិនជាន់លើ handler ផ្សេងដូចការកំណត់ `onclick` ម្តងហើយម្តងទៀត។

## ២. Event object

Browser ផ្ញើ object ទៅ callback ដែលមានព័ត៌មានអំពី event។

~~~js
document.querySelector("#search")?.addEventListener("input", (event) => {
  console.log(event.target.value);
});
~~~

`event.target` ជា node ដែល event ចាប់ផ្តើម។ `event.currentTarget` ជា node ដែល listener ត្រូវបានភ្ជាប់។ ពេលមាន element កូន តម្លៃទាំងពីរអាចខុសគ្នា។

## ៣. Bubbling និង delegation

Event ភាគច្រើន bubble ឡើងពីកូនទៅ parent។ ដូច្នេះអាចដាក់ listener មួយលើ list ហើយពិនិត្យថាប៊ូតុងណាត្រូវបានចុច។

~~~js
const list = document.querySelector("#tasks");
list.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const removeButton = event.target.closest("[data-action='remove']");
  if (!removeButton || !list.contains(removeButton)) return;
  removeButton.closest("li")?.remove();
});
~~~

នេះហៅថា **event delegation**។ វាមានប្រយោជន៍សម្រាប់ list ដែល element ត្រូវបានបង្កើតបន្ទាប់ពី page load ហើយកាត់បន្ថយ listener ច្រើន។ `closest` ឡើងទៅរក element ដែលត្រូវ selector; `contains` បញ្ជាក់ថាវានៅក្នុង list របស់យើង។

## ៤. បញ្ឈប់ default ឬ propagation ដោយមានហេតុផល

~~~js
form.addEventListener("submit", (event) => {
  event.preventDefault(); // កុំឱ្យ browser reload ទំព័រតាម default
});
~~~

`preventDefault()` បញ្ឈប់សកម្មភាពលំនាំដើមរបស់ browser។ `stopPropagation()` បញ្ឈប់ event មិនឱ្យ bubble បន្ត។ កុំប្រើដោយស្វ័យប្រវត្តិ ព្រោះអាចរំខាន link, keyboard behavior ឬ handler របស់ parent។

## ៥. Lifecycle និង `{ once, signal }`

~~~js
button.addEventListener("click", save, { once: true });

const controller = new AbortController();
window.addEventListener("resize", updateLayout, { signal: controller.signal });
// ពេល component លែងប្រើ៖
controller.abort();
~~~

`once` ដក listener ក្រោយវារត់ម្តង។ `AbortController` អាចដោះ listener ក្រុមតែមួយដោយ abort signal។ គ្រប់គ្រង lifecycle ជាពិសេសលើ listener ដែលភ្ជាប់ទៅ `window` ឬ `document`។

## លំហាត់

1. បន្ថែម click listener ដែលបង្កើនលេខក្នុង `#count` មួយរាល់ចុច។
2. ប្រើ delegation ដើម្បីចុចប៊ូតុង `data-action="done"` ហើយបន្ថែម class `done` ទៅ `<li>`។
3. ពន្យល់ភាពខុសគ្នារវាង `target` និង `currentTarget`។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const count = document.querySelector("#count");
document.querySelector("#increment")?.addEventListener("click", () => {
  count.textContent = String(Number(count.textContent) + 1);
});

document.querySelector("#tasks")?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-action='done']");
  button?.closest("li")?.classList.add("done");
});
~~~

`target` ជាចំណុចដើមរបស់ event; `currentTarget` ជា element ដែល listener បច្ចុប្បន្នរត់លើ។

</details>

## សង្ខេប

ប្រើ `addEventListener`, អាន `event.target/currentTarget`, យល់ពី bubbling និងប្រើ delegation ពេលគ្រប់គ្រងកូនច្រើន។ បញ្ឈប់ default behavior តែពេល UI ត្រូវការពិតប្រាកដ និងដោះ listener ពេល lifecycle បញ្ចប់។
