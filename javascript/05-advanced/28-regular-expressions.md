# មេរៀន ២៨៖ Regular Expressions និង Text Processing

## គោលដៅ

សរសេរ regex មូលដ្ឋាន, ប្រើ `test`, `match`, `replace`, anchor, character class និង quantifier; ព្រមទាំងដឹងពីដែនកំណត់របស់ regex សម្រាប់ validation។

## ១. Regex មានន័យអ្វី?

Regular expression ជាលំនាំសម្រាប់ស្វែងរក ឬជំនួសអត្ថបទ។ ក្នុង JavaScript អាចបង្កើត literal `/pattern/flags` ឬ `new RegExp(string)`។ Literal ងាយអានសម្រាប់ pattern ថេរ; constructor សម្រាប់ pattern បង្កើតពី string ហើយត្រូវ escape backslash។

~~~js
const hasDigits = /\d/.test("លេខ 2026");
const words = "red,green blue".match(/[a-z]+/gi);
console.log(hasDigits, words);
~~~

`\d` មានន័យថា digit មួយ; `g` ស្វែងរកបន្តច្រើន match និង `i` មិនប្រកាន់អក្សរធំតូច។ `test` ត្រឡប់ boolean។

## ២. Anchor, character class និង quantifier

- `^` ចាប់ផ្តើមអត្ថបទ; `$` ចុងអត្ថបទ។
- `[A-Z]` ជួរអក្សរធំ; `[^0-9]` តួអក្សរមិនមែនលេខ។
- `+` មួយ ឬច្រើន; `*` សូន្យ ឬច្រើន; `?` សូន្យ ឬមួយ; `{2,5}` ចំនួន 2 ដល់ 5។
- `.` តំណាងតួអក្សរជាច្រើនប្រភេទ (ជាទូទៅមិនរាប់ newline)។

~~~js
const isSimpleCode = /^[A-Z]{2}-\d{4}$/.test("AB-1234");
~~~

Pattern នេះពិនិត្យទ្រង់ទ្រាយ code តែប៉ុណ្ណោះ; វាមិនបញ្ជាក់ថា code មានក្នុង database ឬ user មានសិទ្ធិប្រើទេ។

## ៣. Capture groups និង replace

~~~js
const date = "2026-11-21";
const parts = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
if (parts) {
  const [, year, month, day] = parts;
  console.log({ year, month, day });
}

const compact = "hello   world".replace(/\s+/g, " ").trim();
~~~

Group ក្នុងវង់ក្រចករក្សា substring សម្រាប់ប្រើ; `(?:...)` បង្កើត group ដោយមិន capture។ `replace` អាចទទួល replacement string ឬ callback សម្រាប់ការបម្លែងតាម match។

## ៤. Regex មិនមែន validation solution ទាំងអស់

Email, URL, Unicode និងអត្ថបទភាសាធម្មជាតិមាន edge cases ច្រើន។ ប្រើ HTML input type ឬ parser/library ដែលសមស្រប ហើយ validate តាម business rule នៅ server ផង។ កុំយក regex ពិបាកអានមួយបន្ទាត់មកជំនួស verification។ Pattern ដែលមាន backtracking ធ្ងន់អាចយឺតខ្លាំងលើ input គ្រប់គ្រងដោយអ្នកប្រើ (ReDoS)។

## លំហាត់

1. ពិនិត្យថា string ជាលេខ 4 ខ្ទង់ពេញលេញ។
2. ដក whitespace ជាប់គ្នាច្រើនឱ្យសល់ space មួយ។
3. ហេតុអ្វី regex សម្រាប់ email មិនគួរជាច្បាប់ verification តែមួយ?

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const isFourDigits = /^\d{4}$/.test(input);
const normalized = text.replace(/\s+/g, " ").trim();
~~~

ទម្រង់អ៊ីមែលមានលក្ខខណ្ឌច្រើន និង syntax ចម្រុះ; regex សាមញ្ញអាចបដិសេធអាសយដ្ឋានត្រឹមត្រូវ ឬទទួលអាសយដ្ឋានដែលមិនអាចទទួលសារ។ ប្រើ verification ដោយ workflow ផ្ញើសារ និងអនុវត្ត business/security rules ផ្សេងទៀត។

</details>

## សង្ខេប

Regex ជាឧបករណ៍សម្រាប់ pattern matching និង text replacement។ ចាប់ផ្តើមពី pattern តូច, test edge cases, កំណត់ anchor តាមតម្រូវការ និងកុំយក regex មកធ្វើ authorization ឬ validation ដែលត្រូវការ logic ស្មុគស្មាញ។
