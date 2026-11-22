# មេរៀនទី ១៖ របៀបដាក់ CSS និងរចនាសម្ព័ន្ធ rule

## គោលដៅ

- យល់ថា CSS rule ភ្ជាប់ selector ទៅ declarations។
- ប្រៀបធៀប inline, internal និង external CSS។
- រៀបចំឯកសារ HTML/CSS និងពិនិត្យថា stylesheet ភ្ជាប់ត្រឹមត្រូវ។

## ១. CSS rule មានធាតុអ្វី?

~~~css
h1 {
  color: #123b63;
  font-size: 2rem;
}
~~~

- <code>h1</code> ជា selector៖ ជ្រើស element ដែលត្រូវរចនា។
- <code>color</code> និង <code>font-size</code> ជា properties។
- <code>#123b63</code> និង <code>2rem</code> ជា values។
- សញ្ញា <code>{ }</code> ព័ទ្ធ declarations ហើយ semicolon បំបែក declaration នីមួយៗ។

Browser ផ្គូផ្គង selector ទៅ HTML element ហើយគណនារចនាប័ទ្មដែលមានអាទិភាពតាម cascade។

## ២. Inline style សម្រាប់សាកល្បង

~~~html
<p style="color: teal;">អត្ថបទនេះប្រើ inline style។</p>
~~~

Inline style ស្ថិតលើ element ផ្ទាល់។ វាល្អសម្រាប់សាកល្បងរហ័ស ឬករណីតូចដែលបង្កើតតាមកូដ ប៉ុន្តែពិបាកថែទាំ បើមានច្រើន element ព្រោះត្រូវកែ HTML មួយៗ។

## ៣. Internal stylesheet

ដាក់ rule ក្នុង <code>&lt;style&gt;</code> នៅផ្នែក <code>&lt;head&gt;</code>៖

~~~html
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    h1 { color: teal; }
  </style>
</head>
~~~

វាសមស្របសម្រាប់ទំព័រតែមួយ ឬឧទាហរណ៍សាកល្បង។ បើ website មានទំព័រច្រើន ការចម្លង style ដដែលៗនាំអោយកែពិបាក។

## ៤. External stylesheet

បង្កើត <code>styles.css</code> ហើយភ្ជាប់ក្នុង HTML៖

~~~html
<!doctype html>
<html lang="km">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ទំព័រ CSS ដំបូង</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>សួស្តី CSS</h1>
  <p>យើងនឹងរៀបចំរូបរាងទំព័រនេះ។</p>
</body>
</html>
~~~

ក្នុង <code>styles.css</code>៖

~~~css
body {
  font-family: Arial, sans-serif;
  color: #243447;
}

h1 {
  color: #14532d;
}
~~~

ដាក់ HTML និង CSS ក្នុង folder តែមួយសម្រាប់ការសាកដំបូង។ បើ CSS នៅ <code>css/styles.css</code> ត្រូវប្តូរ href ទៅ <code>css/styles.css</code>។

## ៥. ជំហានពិនិត្យ

1. រក្សាទុក HTML និង CSS។
2. បើក HTML ក្នុង browser។
3. ប្តូរ <code>h1</code> ពីពណ៌បៃតងទៅខៀវក្នុង CSS រួច refresh។
4. បើគ្មានការប្រែប្រួល ពិនិត្យឈ្មោះ file, folder, អក្សរធំតូច និង <code>href</code>។
5. បើក DevTools → Elements/Inspector → Styles ដើម្បីមើលថា rule ត្រូវបានផ្ទុកឬទេ។

## កំហុសជួបញឹកញាប់

- សរសេរ <code>style.css</code> តែ link ទៅ <code>styles.css</code>។
- ដាក់ tag <code>&lt;link&gt;</code> ក្នុង body ដោយមិនចាំបាច់; stylesheet ធម្មតាគួរភ្ជាប់ក្នុង head។
- ភ្លេច colon រវាង property និង value ឬភ្លេច semicolon។
- ប្រើ inline style ច្រើន រួចពិបាកកំណត់ថា rule ណាគួរឈ្នះ។

## លំហាត់

បង្កើតទំព័រមានចំណងជើង ១ និង paragraph ២។ សាកដាក់ពណ៌មួយដោយ inline style, មួយដោយ internal CSS ហើយចុងក្រោយផ្លាស់ទី styles ទាំងនោះទៅ external file។ កត់ថាហេតុអ្វី external file ថែទាំងាយជាងសម្រាប់ទំព័រច្រើន។
