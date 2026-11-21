# មេរៀន ១៧៖ Accessibility និង UI State

## គោលដៅ

បង្កើតអន្តរកម្មដែលប្រើបានដោយ keyboard និង assistive technology, ជ្រើស HTML semantic, គ្រប់គ្រង focus និងបង្ហាញ state របស់ UI ឱ្យច្បាស់។

## ១. ចាប់ផ្តើមពី HTML semantic

ប្រើ `<button>` សម្រាប់សកម្មភាព និង `<a href>` សម្រាប់ navigation។ ប៊ូតុង native មាន keyboard interaction និង focus behavior ដែល browser ផ្តល់ឱ្យ។ កុំយក `<div>` មកធ្វើប៊ូតុង លុះត្រាតែចាំបាច់ខ្លាំង ហើយត្រូវសរសេរ role, tabindex និង keyboard behavior ដោយខ្លួនឯង។

## ២. Keyboard និង focus

អ្នកប្រើមួយចំនួនប្រើ Tab, Shift+Tab, Enter, Space និង arrow keys ជំនួស mouse។ កុំដក outline focus ចេញ លុះត្រាតែមាន focus indicator ផ្សេងច្បាស់។ ក្រោយបិទ dialog ឬលុប item ត្រូវពិចារណាថា focus គួរទៅកន្លែងណា ដើម្បីកុំឱ្យអ្នកប្រើបាត់ទីតាំង។

~~~js
const openButton = document.querySelector("#open-help");
const closeButton = document.querySelector("#close-help");
const dialog = document.querySelector("#help-dialog");

openButton.addEventListener("click", () => {
  dialog.showModal();
  closeButton.focus();
});

dialog.addEventListener("close", () => openButton.focus());
~~~

Native `<dialog>` មាន behavior ជួយសម្រាប់ modal; ពិនិត្យ browser support និងរចនា keyboard/focus flow។ Modal ដែល custom ត្រូវគ្រប់គ្រង focus trap, Escape, accessible name និង focus return យ៉ាងប្រុងប្រយ័ត្ន។

## ៣. បង្ហាញ status ដែល assistive technology អាចទទួលបាន

~~~html
<p id="status" role="status" aria-live="polite"></p>
~~~

~~~js
document.querySelector("#status").textContent = "បានរក្សាទុកដោយជោគជ័យ";
~~~

`role="status"`/`aria-live` អាចជូនដំណឹងការផ្លាស់ប្តូរ ដែលមិនទទួល focus។ ប្រើតែចាំបាច់ និងកុំ update រាល់ key press ដល់ថ្នាក់ screen reader ប្រកាសច្រើនពេក។ Error របស់ field គួរត្រូវបានភ្ជាប់ជាមួយ input ដោយ `aria-describedby` និងសម្គាល់ `aria-invalid="true"` ពេលខុស។

## ៤. UI state ជាទិន្នន័យច្បាស់លាស់

គិតពី state ដូចជា `loading`, `success`, `error`, `empty`។ ប៊ូតុង submit អាចបិទពេលកំពុងផ្ញើ ហើយ status អាចបង្ហាញជំហានបច្ចុប្បន្ន។ កុំប្រើតែពណ៌ដើម្បីបញ្ជាក់ភាពជោគជ័យ/កំហុស; ដាក់អត្ថបទ ឬ icon មាន label ផង។

~~~js
function setSaving(isSaving) {
  const button = document.querySelector("#save");
  const status = document.querySelector("#status");
  button.disabled = isSaving;
  status.textContent = isSaving ? "កំពុងរក្សាទុក…" : "រួចរាល់";
}
~~~

ក្នុង app ពិត គួរបែងចែក state transition ឱ្យច្បាស់ ដើម្បីកុំឱ្យ `loading` និង `error` នៅពេលតែមួយដោយចៃដន្យ។

## ៥. ពិនិត្យ accessibility ដោយដៃ

1. ដក mouse ហើយប្រើ keyboard តែប៉ុណ្ណោះ។
2. តាមដានថា focus indicator មើលឃើញ និងលំដាប់ Tab មានន័យ។
3. ពិនិត្យ label, heading, button name និង error message។
4. សាក screen reader និង browser accessibility tree; automated scan មិនរកឃើញបញ្ហាទាំងអស់ទេ។

## លំហាត់

1. ធ្វើ status message ដែលអានបានដោយ screen reader ពេលការងាររួច។
2. បង្កើត dialog ដែលពេលបើក focus ទៅប៊ូតុងបិទ និងពេលបិទ focus ត្រឡប់ទៅប៊ូតុងបើក។
3. ពន្យល់ថាហេតុអ្វី semantic button ល្អជាង clickable `<div>`។

<details><summary>ចម្លើយសង្ខេប</summary>

ប្រើ `<p role="status" aria-live="polite">` រួចកែ `textContent`; គំរូ dialog មាននៅផ្នែក ២។ Semantic button ផ្តល់ role, keyboard activation និង focus behavior ដើមរួច ហើយ assistive technology ស្គាល់ន័យបានល្អ។

</details>

## សង្ខេប

Accessibility ចាប់ផ្តើមពី HTML semantic និងបន្តតាម keyboard, focus, label និង status announcement។ ធ្វើ UI state ឱ្យច្បាស់ ហើយសាកដោយ keyboard និង assistive technology; កុំសន្មតថា automated check គ្រប់គ្រាន់។
