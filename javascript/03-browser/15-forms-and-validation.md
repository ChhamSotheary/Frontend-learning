# មេរៀន ១៥៖ Forms, Validation និង User Input

## គោលដៅ

អាន form data, គ្រប់គ្រង submit, ប្រើ validation របស់ HTML និងធ្វើ validation បន្ថែមដោយ JavaScript ដោយផ្តល់សារដែលអ្នកប្រើអាចយល់បាន។

## ១. Form គឺជាច្រកទទួលទិន្នន័យ

HTML form មាន input, label និងប៊ូតុង submit។ `label for` ត្រូវតែត្រូវនឹង `id` របស់ input ដើម្បីឱ្យអ្នកប្រើ screen reader និងអ្នកចុចលើ label អាចផ្តោតលើ field បាន។ ប្រើ `required`, `type="email"`, `minlength` ជាដើមសម្រាប់ validation ដំបូងដោយ browser។

## ២. ចាប់ submit event

~~~js
const form = document.querySelector("#signup");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  console.log({ name, email });
});
~~~

ចាប់ event នៅ form មិនមែនតែប៊ូតុង ព្រោះអ្នកប្រើអាច submit ដោយចុច Enter។ `FormData` អាន field តាម `name` attribute; ដាក់ `name="name"` ក្នុង HTML។ `preventDefault()` ប្រើនៅពេលយើងគ្រប់គ្រង submit ដោយ JavaScript។

## ៣. បញ្ចូល validation តាម browser និងតាម app

~~~js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = form.elements.email;
  const error = document.querySelector("#email-error");

  if (!emailInput.value.includes("@")) {
    error.textContent = "សូមបញ្ចូលអ៊ីមែលឱ្យបានត្រឹមត្រូវ។";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.focus();
    return;
  }

  error.textContent = "";
  emailInput.removeAttribute("aria-invalid");
  console.log("ទិន្នន័យត្រៀមផ្ញើ");
});
~~~

ឧទាហរណ៍ `includes("@")` គ្រាន់តែបង្ហាញគំនិត មិនមែន email validation ពេញលេញទេ។ ប្រើ constraint validation (`required`, `type=email`, `checkValidity()`, `reportValidity()`) ហើយបន្ថែមច្បាប់តាម business requirement។ Backend ត្រូវ validate ម្តងទៀត ព្រោះ client-side validation អាចត្រូវបានរំលង។

## ៤. Checkbox, select និងលេខ

- Checkbox អានតាម `.checked` មិនមែន `.value`។
- Select អាន `.value`; ត្រូវមាន option ត្រឹមត្រូវ។
- Input លេខនៅតែផ្តល់ string; ប្រើ `Number()` ហើយពិនិត្យ `Number.isFinite()` និងដែនកំណត់។
- កុំទុក `NaN` ឬ string ទទេឱ្យក្លាយជាចំនួនដោយស្ងាត់ៗ។

~~~js
const quantityText = String(new FormData(form).get("quantity") ?? "");
const quantity = Number(quantityText);
if (quantityText.trim() === "" || !Number.isFinite(quantity) || quantity < 1) {
  console.log("ចំនួនត្រូវតែជាលេខយ៉ាងតិច 1");
}
~~~

## ៥. UX និងសុវត្ថិភាពទិន្នន័យ

- បង្ហាញកំហុសក្បែរ field និងពណ៌នាវិធីកែ មិនប្រាប់តែ “ខុស”។
- រក្សាតម្លៃដែលអ្នកប្រើបានបញ្ចូលពេលមាន validation error។
- កុំបង្ហាញ data មិនទុកចិត្តដោយ `innerHTML`។
- កុំប្រើ client-side validation ជំនួស server-side validation ឬ authorization។
- កុំ log ពាក្យសម្ងាត់ ឬព័ត៌មានរសើបទៅ console។

## លំហាត់

1. បង្កើត form ឈ្មោះ និងអ៊ីមែល ដោយ `required` និង `type="email"`។
2. ចាប់ submit ហើយបង្ហាញឈ្មោះក្នុង status ដោយ `textContent`។
3. ពិនិត្យថាប្រអប់យល់ព្រមត្រូវបានធីកមុនបង្ហាញសារ success។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const accepted = form.elements.accepted.checked;
  const status = document.querySelector("#status");
  if (!accepted) {
    status.textContent = "សូមធីកប្រអប់យល់ព្រមសិន។";
    return;
  }
  status.textContent = `សួស្តី ${String(data.get("name") ?? "")}`;
});
~~~

</details>

## សង្ខេប

ចាប់ `submit` នៅ form, អានដោយ `FormData`, ប្រើ validation របស់ HTML ជាមូលដ្ឋាន និងបន្ថែម validation តាមតម្រូវការ។ ត្រូវ validate ម្តងទៀតនៅ server ហើយបង្ហាញសារ error ដែលអាចចូលប្រើបាន។
