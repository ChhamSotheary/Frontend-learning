# មេរៀន ១០៖ Strings, Numbers និង Dates

## គោលបំណង
ស្វែងរក/កែ string ដោយ methods, គិតពី precision របស់ number, បង្ហាញតម្លៃតាម locale និងធ្វើការជាមួយ Date object ដោយប្រុងប្រយ័ត្ន។

## ១. String មិន mutate ដោយ method
~~~js
const rawName = "  សុភា  ";
const cleanName = rawName.trim();
console.log(cleanName);
console.log(rawName);
~~~

`trim` បង្កើត string ថ្មីដោយដក whitespace ពីចុង; វាមិនកែ rawName ទេ។ String ជា immutable value។

## ២. Methods ស្វែងរក និងកាត់អត្ថបទ
~~~js
const message = "រៀន JavaScript រាល់ថ្ងៃ";
console.log(message.includes("JavaScript"));
console.log(message.toLowerCase());
console.log(message.slice(4, 14));
~~~

`includes` ពិនិត្យថាមានអត្ថបទឬអត់; `toLowerCase` បម្លែងអក្សរឡាតាំងទៅ lowercase; `slice(start, end)` កាត់តាម index ដោយ end មិនរាប់បញ្ចូល។ ពេលរាប់អក្សរខ្មែរ និង Unicode combining marks ត្រូវប្រុងប្រយ័ត្ន ព្រោះ index គិតតាម UTF-16 code units មិនស្មើអក្សរដែលមនុស្សមើលឃើញគ្រប់ករណីទេ។

## ៣. បម្លែង string និង number
~~~js
const priceText = "12.50";
const price = Number(priceText);
console.log(price + 2.5);
console.log(Number.isFinite(price));
~~~

Validate user input មុនគណនា។ Floating point អាចមានកំហុស precision; សម្រាប់ចំនួនប្រាក់រក្សាជា cents ឬប្រើ decimal library តាមគោលការណ៍ project។

`toFixed` បង្ហាញខ្ទង់ទសភាគ ប៉ុន្តែត្រឡប់ string៖
~~~js
const amount = 3.5;
const formatted = amount.toFixed(2);
console.log(formatted, typeof formatted); // "3.50" string
~~~

## ៤. Format តាម locale
~~~js
const amount = 1234567.5;
const formatted = new Intl.NumberFormat("km-KH", {
  style: "currency",
  currency: "USD"
}).format(amount);
console.log(formatted);
~~~

`Intl.NumberFormat` រៀបចំលេខតាម locale និង currency; កុំភ្ជាប់ comma ឬសញ្ញារូបិយប័ណ្ណដោយដៃសម្រាប់ UI ដែលមានភាសាច្រើន។

## ៥. Date និង ISO strings
~~~js
const now = new Date();
console.log(now.toISOString());
console.log(now.getFullYear());
~~~

`new Date()` បង្កើតពេលបច្ចុប្បន្ន។ ISO string រក្សាទម្រង់ machine-friendly ដែលមាន timezone marker។ ការបង្ហាញតាម local time ខុសពី UTC; កុំសន្មត timezone ដោយមើលតែលេខម៉ោង។

សម្រាប់បង្ហាញថ្ងៃជាអ្នកប្រើ៖
~~~js
const date = new Date("2026-01-15T00:00:00Z");
console.log(new Intl.DateTimeFormat("km-KH", { dateStyle: "long" }).format(date));
~~~

## ៦. លំហាត់
1. Trim string មាន whitespace។
2. បម្លែង `"19.95"` ជាលេខ ហើយ validate។
3. បង្ហាញចំនួនជា USD ដោយ Intl.NumberFormat។
4. ហេតុអ្វី Date string គួរមាន timezone ច្បាស់?

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const name = "  ដារ៉ា ".trim();
const value = Number("19.95");
console.log(name, Number.isFinite(value));
console.log(new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value));
~~~

</details>

មើល [strings-numbers-dates.js](../examples/lesson-10/strings-numbers-dates.js)។

## សង្ខេប
String methods បង្កើត value ថ្មី; validate number មុនគណនា; ប្រើ Intl សម្រាប់ formatting; ប្រើ ISO/UTC និង timezone ច្បាស់ពេលផ្ទុក ឬបង្ហាញ dates។

