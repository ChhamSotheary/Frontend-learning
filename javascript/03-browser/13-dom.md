# មេរៀន ១៣៖ DOM — អាន និងកែប្រែ HTML ដោយ JavaScript

## គោលដៅ

ក្រោយមេរៀននេះ អ្នកអាចពន្យល់ថា DOM ជាអ្វី, ជ្រើស element តាម selector, អាន/កែអត្ថបទនិង attribute, បង្កើត element ថ្មី និងជៀសវាងការបញ្ចូល HTML ដែលមិនទុកចិត្ត។

## ១. DOM មានន័យដូចម្តេច?

Browser អាន HTML ហើយតំណាងវាជារចនាសម្ព័ន្ធ node ដែល JavaScript អាចចូលប្រើបាន។ រចនាសម្ព័ន្ធនេះហៅថា **Document Object Model (DOM)**។ `document` ជាច្រកចូលទៅឯកសារបច្ចុប្បន្ន។ DOM API ជា Web API របស់ browser មិនមែនជាផ្នែកនៃ syntax ស្នូល JavaScript ទេ។

ឧទាហរណ៍ HTML `<h1 id="title">សួស្តី</h1>` ត្រូវបានបង្ហាញជា element node ដែលអាចរកតាម `id` រួចកែអត្ថបទបាន។

## ២. ភ្ជាប់ JavaScript ជាមួយ HTML

ប្រើ `<script src="app.js" defer></script>` ដើម្បីឱ្យ browser ទាញ script ខាងក្រៅ ហើយរត់ក្រោយពេល parse HTML រួច។ `defer` ជួយឱ្យ element នៅក្នុង HTML មានមុនពេល script ជ្រើសវា។ ឧទាហរណ៍នេះស្ថិតនៅ `examples/lesson-13/`។

## ៣. ជ្រើស element

~~~js
const title = document.querySelector("#title");
const cards = document.querySelectorAll(".card");

if (!title) {
  throw new Error("រកមិនឃើញ #title ក្នុង HTML");
}

console.log(title.textContent);
console.log(`មាន card ចំនួន ${cards.length}`);
~~~

- `querySelector(selector)` ត្រឡប់ element ដំបូង ឬ `null`។
- `querySelectorAll(selector)` ត្រឡប់ static NodeList ដែលមាន element ទាំងអស់តាម selector។
- Selector ប្រើ CSS ដូចជា `#id`, `.class`, `button`, `[data-role="save"]`។
- ពិនិត្យ `null` មុនប្រើ property របស់ element ដើម្បីកុំឱ្យកើត `TypeError`។

## ៤. អាន និងកែ content

~~~js
const message = document.querySelector("#message");
message.textContent = "ទិន្នន័យបានរក្សាទុក";
~~~

`textContent` ដាក់អត្ថបទធម្មតា ហើយមិនបកស្រាយ string ជា HTML ទេ។ សម្រាប់ទទួល input ពី user ឬ API នេះជាជម្រើសសុវត្ថិភាពជាង `innerHTML`។ ប្រើ `innerHTML` តែពេល HTML មានប្រភពទុកចិត្ត និងបាន sanitize ត្រឹមត្រូវ ព្រោះការបញ្ចូល HTML មិនទុកចិត្តអាចបង្ក XSS។

## ៥. កែ class, attribute និង value

~~~js
const button = document.querySelector("#save");
button.classList.add("is-ready");
button.classList.toggle("is-disabled");
button.setAttribute("aria-pressed", "true");

const field = document.querySelector("#name");
console.log(field.value);
~~~

ប្រើ `classList.add/remove/toggle/contains` សម្រាប់ class។ `getAttribute`/`setAttribute` សម្រាប់ attribute; form control អានតាម `.value`។ Property និង attribute អាចខុសគ្នាតាម state បច្ចុប្បន្ន ដូច្នេះប្រើ API តាមគោលបំណង។

## ៦. បង្កើត និងបន្ថែម element

~~~js
const list = document.querySelector("#tasks");
const item = document.createElement("li");
item.textContent = "អនុវត្ត querySelector";
list.append(item);
~~~

ជំហានគឺបង្កើត node, ដាក់ content/attribute/class, រួចភ្ជាប់វាទៅ parent។ ប្រើ `.remove()` ដើម្បីដក node ដែលមិនត្រូវការ។

## ៧. កំហុសដែលជួបញឹកញាប់

- Script រត់មុន HTML មាន៖ ដាក់ `defer` ឬផ្លាស់ script ទៅចុង body។
- Selector សរសេរខុស ធ្វើឱ្យទទួល `null`។
- ប្រើ `innerHTML` ជាមួយទិន្នន័យ user ដោយផ្ទាល់។
- ហៅ `querySelectorAll` ហើយសន្មតថាវាត្រឡប់ array; NodeList អាច loop បាន តែ method ខ្លះត្រូវបម្លែងជា array។

## លំហាត់

1. ជ្រើស `#status` ហើយបង្ហាញអត្ថបទ “រួចរាល់”។
2. បង្កើត `<li>` ពី string ដែលទទួលបាន រួចបន្ថែមទៅ `#items` ដោយ `textContent`។
3. បន្ថែម class `active` ទៅប៊ូតុង ហើយពន្យល់ហេតុអ្វី `textContent` សុវត្ថិភាពជាង `innerHTML` សម្រាប់អត្ថបទធម្មតា។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const status = document.querySelector("#status");
if (status) status.textContent = "រួចរាល់";

const item = document.createElement("li");
item.textContent = userProvidedText;
document.querySelector("#items")?.append(item);
document.querySelector("button")?.classList.add("active");
~~~

`textContent` បង្ហាញ string ជាអត្ថបទ មិនរត់ tag ឬ event handler ដែលអាចលាក់នៅក្នុង HTML នោះទេ។

</details>

## សង្ខេប

DOM អនុញ្ញាតឱ្យ JavaScript អាន និងកែ HTML ក្នុង browser។ ជ្រើសដោយ `querySelector`, ពិនិត្យ `null`, កែអត្ថបទដោយ `textContent`, បង្កើត node ដោយ `createElement` និងកុំបញ្ចូល HTML មិនទុកចិត្តដោយផ្ទាល់។
