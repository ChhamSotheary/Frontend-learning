# មេរៀនទី ៣៖ Text និង Font properties

## គោលដៅ

- ប្រើ properties សំខាន់ៗសម្រាប់អក្សរ និងការរៀបចំអត្ថបទ។
- ជ្រើស font fallback និងទំហំអាចពង្រីកបាន។
- រៀបចំអក្សរខ្មែរដោយគិតពីភាពអានងាយ។

## ១. ពណ៌ និង font family

~~~css
body {
  color: #263238;
  font-family: "Noto Sans Khmer", "Khmer OS Battambang", sans-serif;
}
~~~

<code>color</code> កំណត់ពណ៌អក្សរ។ <code>font-family</code> រាយ font តាមលំដាប់៖ browser ប្រើ font ដំបូងដែលមាន glyph គ្រប់គ្រាន់ ហើយបន្តទៅ fallback។ កុំសន្មតថាគ្រប់កុំព្យូទ័រមាន font Khmer ដូចគ្នា; សាកល្បងលើឧបករណ៍ផ្សេងៗ។

## ២. ទំហំ និងភាពដិត

~~~css
h1 {
  font-size: 2rem;
  font-weight: 700;
}

.caption {
  font-size: 0.875rem;
  font-weight: 400;
}
~~~

<code>rem</code> គិតពី font size របស់ root ហើយជាទូទៅងាយ scale តាមការកំណត់អ្នកប្រើជាង pixel ថេរ។ <code>font-weight</code> អាចជាពាក្យដូចជា normal/bold ឬលេខ ដូចជា 400/700 ប្រសិនបើ font មាន weight នោះ។

## ៣. Font style និងការតម្រឹម

~~~css
.quote {
  font-style: italic;
  text-align: center;
}
~~~

<code>font-style</code> កំណត់ normal/italic/oblique តាម font។ <code>text-align</code> តម្រឹម inline content តាមបន្ទាត់ ដូចជា left, right, center ឬ justify។ សាកល្បងជាមួយ paragraph ខ្មែរ ព្រោះ justify អាចធ្វើអោយចន្លោះពាក្យមិនស្អាត។

## ៤. Decoration និង transform

~~~css
a {
  text-decoration: underline;
}

.label {
  text-transform: uppercase;
}
~~~

<code>text-decoration</code> គូសបន្ទាត់ក្រោម/លើ ឬដកការតុបតែង។ កុំដក underline ពី link ដោយមិនផ្តល់សញ្ញាផ្សេងថាវាអាចចុចបាន។ <code>text-transform</code> ប្តូររបៀបបង្ហាញអក្សរដូចជា uppercase/lowercase; វាមិនប្តូរទិន្នន័យដើមទេ ហើយមិនសូវមានអត្ថន័យលើអក្សរខ្មែរដែលគ្មាន uppercase/lowercase។

## ៥. ចន្លោះអក្សរ និងបន្ទាត់

~~~css
p {
  line-height: 1.7;
  letter-spacing: 0.01em;
}
~~~

<code>line-height</code> គ្រប់គ្រងកម្ពស់បន្ទាត់ និងជួយការអាន paragraph។ <code>letter-spacing</code> កែចន្លោះរវាង glyph; កុំបន្ថែមច្រើនលើអក្សរខ្មែរ ព្រោះសញ្ញាផ្សំអាចមើលទៅបែក។ ប្រើតែបើបានពិនិត្យលទ្ធផលពិត។

## ៦. ឧទាហរណ៍សរុប

~~~css
.article-title {
  color: #17324d;
  font-family: "Noto Sans Khmer", sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  line-height: 1.35;
}

.article-body {
  color: #344054;
  font-size: 1rem;
  line-height: 1.8;
}
~~~

<code>clamp(min, preferred, max)</code> អនុញ្ញាតអោយចំណងជើង scale តាម viewport ដោយមានកម្រិតតូច/ធំ។

## លំហាត់

រចនា article ខ្មែរមួយមាន h1, author, paragraph និង link។ កំណត់ font stack, size, weight, line-height, alignment និង link decoration។ សាកអក្សរខ្មែរនិងអង់គ្លេសលាយគ្នា។
