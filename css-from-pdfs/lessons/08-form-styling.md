# មេរៀនទី ៨៖ រចនា Form ដោយ CSS

## គោលដៅ

- បង្កើត form មាន label, input, button និង error message។
- ធ្វើអោយ field ងាយអាន ប្រើ keyboard និងប្រើលើ mobile។
- កុំអោយ CSS លុប focus indicator ឬសញ្ញា validation។

## ១. HTML មុនរចនា

~~~html
<form class="contact-form">
  <div class="field">
    <label for="full-name">ឈ្មោះពេញ</label>
    <input id="full-name" name="full_name" autocomplete="name" required>
  </div>
  <div class="field">
    <label for="email">អ៊ីមែល</label>
    <input id="email" name="email" type="email" autocomplete="email" required>
  </div>
  <button type="submit">ផ្ញើសារ</button>
</form>
~~~

Label ភ្ជាប់ទៅ input តាម <code>for</code>/<code>id</code> ដើម្បីឱ្យ screen reader និង click លើ label ដំណើរការត្រឹមត្រូវ។ CSS មិនអាចជំនួស semantic label ឬ validation របស់ server បានទេ។

## ២. Layout និងទំហំ field

~~~css
.contact-form {
  display: grid;
  gap: 1rem;
  max-width: 36rem;
}

.field {
  display: grid;
  gap: 0.4rem;
}

.field input {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.65rem 0.8rem;
  border: 1px solid #64748b;
  border-radius: 0.4rem;
  font: inherit;
}
~~~

<code>font: inherit</code> ឱ្យ form control ប្រើ typography ដូចមាតិកាជុំវិញ។ <code>min-height</code> ធ្វើអោយ target ងាយប៉ះ; កុំកំណត់ width/height ដែលបង្ហាប់ field លើ mobile។

## ៣. Focus និង hover

~~~css
.field input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
  border-color: #1d4ed8;
}

.contact-form button:hover {
  background-color: #123b63;
}
~~~

Keyboard user ត្រូវមើលឃើញ focus។ Hover ជាការបន្ថែម មិនមែនជាសញ្ញាតែមួយ ព្រោះ touchscreen មិនមាន hover ដូច pointer ទេ។

## ៤. Error, disabled និង state

បង្ហាញ error ជាអត្ថបទពន្យល់ជាមួយ field និងភ្ជាប់ <code>aria-describedby</code> ពេល HTML ត្រូវការ។ ពណ៌តែមួយមុខមិនគ្រប់គ្រាន់ដើម្បីបញ្ជាក់កំហុស។ Style <code>:disabled</code> អោយមើលឃើញថាប៊ូតុងមិនអាចប្រើបាន ប៉ុន្តែរក្សា contrast។

## ៥. កុំ style form ដោយមិនសាក

សាក keyboard Tab/Shift+Tab, zoom, viewport តូច និង browser ផ្សេង។ Form controls មាន browser behavior ផ្ទាល់; ប្រើ reset ស្រាល និងកុំដក outline ឬ default affordance ដោយមិនបង្កើតជំនួស។

## លំហាត់

បង្កើត form ចុះឈ្មោះដែលមានឈ្មោះ, អ៊ីមែល, ពាក្យសម្ងាត់ និង submit button។ បន្ថែម required, label, focus state, error text និង disabled state។ សាកដោយ keyboard មិនប្រើ mouse។
