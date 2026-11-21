# មេរៀន ១៖ JavaScript ជាអ្វី និងរត់កូដដំបូង

## គោលបំណង

ក្រោយមេរៀននេះ អ្នកអាចពន្យល់តួនាទី JavaScript, បែងចែក language/engine/runtime, រត់ file ដោយ Node.js, ភ្ជាប់វាទៅ HTML និងរក error ដំបូង។

## ១. HTML, CSS និង JavaScript មានតួនាទីអ្វី?

- **HTML** រៀបចំមាតិកា និងអត្ថន័យ ដូច heading, button និង form។
- **CSS** កំណត់រូបរាង ដូចពណ៌, spacing និង layout។
- **JavaScript** បន្ថែម logic និង interaction ដូចឆ្លើយតបពេលចុច button, គណនាតម្លៃ និងផ្ញើ request។

សម្រាប់ប៊ូតុងមួយ៖ HTML បង្កើតប៊ូតុង, CSS ធ្វើឱ្យវាមើលឃើញច្បាស់, JavaScript កំណត់អ្វីកើតឡើងពេលចុច។

~~~html
<button id="hello-button">ចុចទីនេះ</button>
<p id="message">សារដើម</p>
~~~

JavaScript អាចស្វែងរក button ហើយប្តូរ paragraph; ការស្ដាប់ event នឹងសិក្សាលម្អិតក្នុងមេរៀន DOM និង Events។

## ២. JavaScript និង Java មិនមែនជាភាសាតែមួយ

ឈ្មោះស្រដៀងគ្នា ប៉ុន្តែ JavaScript មិនមែនជា Java កំណែតូចទេ។ ភាសាទាំងពីរមាន syntax និង runtime ផ្សេងគ្នា។ JavaScript ប្រើ៖

~~~js
console.log("សួស្តី JavaScript");
~~~

Syntax របស់ Java ដូចជា `System.out.println(...)` មិនមែនជាកូដ JavaScript ទេ។

## ៣. Language, standard, engine និង runtime

- **JavaScript** ជាភាសាដែលយើងសរសេរ។
- **ECMAScript** ជាស្តង់ដារដែលកំណត់ syntax និងឥរិយាបថស្នូលរបស់ភាសា។
- **JavaScript engine** អាន និងអនុវត្ត code; V8 ជា engine មួយដែលប្រើក្នុង Chrome និង Node.js។
- **Runtime** ផ្តល់ engine និង APIs សម្រាប់បរិស្ថានជាក់លាក់។

Browser runtime ផ្តល់ `document`, `window` និង DOM APIs។ Node.js ផ្តល់ `process`, file-system និង networking APIs។ កូដដែលប្រើ `document` ត្រូវការទំព័រ browser; វាមិនមាននៅក្នុង Node.js ទទេ។

## ៤. រត់កូដដំបូងក្នុង Node.js

មើល file [hello.js](../examples/lesson-01/hello.js)៖

~~~js
const learnerName = "សុភា";
const topic = "JavaScript";

console.log(`សួស្តី ${learnerName}!`);
console.log(`ថ្ងៃនេះយើងចាប់ផ្តើមរៀន ${topic}។`);
~~~

ពន្យល់ជាជំហាន៖

1. `const` ប្រកាស binding ឈ្មោះ `learnerName`។
2. `=` ភ្ជាប់ string `"សុភា"` ទៅ binding នោះ។
3. បន្ទាត់បន្ទាប់រក្សា topic ដែលនឹងប្រើនៅក្នុងសារ។
4. `console.log(...)` បង្ហាញតម្លៃក្នុង console។
5. Backtick បង្កើត template literal; `${learnerName}` បញ្ចូលតម្លៃ variable ទៅក្នុងអត្ថបទ។
6. JavaScript អនុវត្តបន្ទាត់តាមលំដាប់ពីលើចុះក្រោម។

នៅ root repo រត់៖

~~~bash
node javascript/examples/lesson-01/hello.js
~~~

ឬបើ terminal បើកនៅថត `javascript/`៖

~~~bash
node examples/lesson-01/hello.js
~~~

Expected output៖

~~~text
សួស្តី សុភា!
ថ្ងៃនេះយើងចាប់ផ្តើមរៀន JavaScript។
~~~

## ៥. ភ្ជាប់ JavaScript ទៅ HTML

ឯកសារ [index.html](../examples/lesson-01/index.html) ភ្ជាប់ `app.js` ដោយ `<script src="./app.js" defer></script>`។ Attribute `defer` ឱ្យ browser parse HTML មុនរត់ script៖

~~~html
<!doctype html>
<html lang="km">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>មេរៀន JavaScript ដំបូង</title>
  <script src="./app.js" defer></script>
</head>
<body>
  <h1>រៀន JavaScript</h1>
  <p id="message">សារដើម</p>
</body>
</html>
~~~

ឯកសារ `app.js`៖

~~~js
const message = document.querySelector("#message");
message.textContent = "JavaScript បានកែអត្ថបទក្នុង page។";
console.log("Script បានដំណើរការ");
~~~

`document.querySelector` រក element តាម CSS selector; `textContent` កំណត់អត្ថបទដែលបង្ហាញ។ កូដនេះត្រូវការ browser DOM។ បើ run ដោយ Node.js នឹងឃើញ error ព្រោះ `document` មិនមាន។

## ៦. Console និងកំហុសដំបូង

- Node.js បង្ហាញ `console.log` ក្នុង terminal។
- Browser បង្ហាញវាក្នុង Developer Tools → Console។
- Console បង្ហាញ error និងទីតាំងប្រហាក់ប្រហែលដែលកូដមានបញ្ហា។
- សាក expression ខ្លីៗដូច `2 + 3` ក្នុង console; លទ្ធផលគួរជា 5។

កំហុសទូទៅ៖

- `node` មិនស្គាល់៖ ដំឡើង Node.js ពីគេហទំព័រផ្លូវការ រួចបើក terminal ថ្មី។
- File មិនត្រូវបានរកឃើញ៖ ពិនិត្យថា terminal នៅ folder ត្រឹមត្រូវ និង path ត្រូវ។
- SyntaxError៖ ពិនិត្យ quote, backtick, parentheses និង braces។
- `document is not defined`៖ កំពុងរត់ browser-only code ក្នុង Node.js។
- មិនឃើញសារលើ page៖ `console.log` បង្ហាញក្នុង console មិនសរសេរចូល HTML ទេ។

## ៧. លំហាត់

1. ប្តូរឈ្មោះក្នុង file hello.js ហើយព្យាករណ៍ output មុនរត់។
2. បង្កើត string `goal` ដែលប្រាប់ថាអ្នកចង់ធ្វើអ្វីដោយ JavaScript; បង្ហាញវាជាមួយឈ្មោះ។
3. ពន្យល់ថា ហេតុអ្វី `document.querySelector` ត្រូវការរត់ក្នុង browser។

<details>
<summary>ចម្លើយគំរូ</summary>

~~~js
const learnerName = "ដារ៉ា";
const goal = "បង្កើតគេហទំព័រអន្តរកម្ម";
console.log(`សួស្តី ${learnerName}! ខ្ញុំចង់ ${goal}។`);
~~~

`document` ជា browser DOM API; Node.js មិនមាន browser page ដោយ default ទេ។

</details>

## សង្ខេប

JavaScript ជាភាសាសម្រាប់ logic និង interaction។ ECMAScript កំណត់ស្តង់ដារ; engine អនុវត្ត code; runtime ដូច browser ឬ Node.js ផ្តល់ APIs ផ្សេងៗ។ ចាប់ផ្តើមពី `console.log`, រត់ file ក្នុង Node.js ហើយពិនិត្យ browser output ក្នុង Developer Tools។

## ឯកសារយោង

- [ECMAScript Living Specification](https://tc39.es/ecma262/)
- [Node.js: Introduction](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [HTML Standard: script element](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element)
- [Chrome DevTools Console](https://developer.chrome.com/docs/devtools/console/javascript)

