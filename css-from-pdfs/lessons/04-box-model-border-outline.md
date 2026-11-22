# មេរៀនទី ៤៖ Box model, ទំហំ, border និង outline

## គោលដៅ

- គណនាទំហំ element តាម content, padding, border និង margin។
- ប្រើ width, height, min/max-width និង box-sizing។
- បែងចែក border ពី outline។

## ១. ផ្នែកទាំងបួននៃ box model

Element មួយមាន content នៅខាងក្នុង, padding ជាចន្លោះពី content ទៅ border, border ជាស៊ុម និង margin ជាចន្លោះខាងក្រៅ។ តាម default <code>content-box</code>, width កំណត់តែ content ប៉ុណ្ណោះ ដូច្នេះ padding និង border បន្ថែមលើទំហំសរុប។

~~~css
.box {
  width: 300px;
  padding: 20px;
  border: 4px solid #2563eb;
}
~~~

ទទឹងសរុប = 300 + 20×2 + 4×2 = 348px (មិនទាន់រាប់ margin)។

## ២. ប្រើ border-box

~~~css
*,
*::before,
*::after {
  box-sizing: border-box;
}
~~~

ជាមួយ <code>border-box</code>, width រួម content + padding + border។ វាធ្វើអោយកំណត់ទំហំ component ងាយព្យាករណ៍ ហើយជាធម្មតាគួរដាក់ reset នេះនៅដើម stylesheet។

## ៣. Margin, padding និង sizing

~~~css
.card {
  width: 100%;
  max-width: 42rem;
  min-width: 0;
  min-height: 8rem;
  margin: 0 auto;
  padding: 1.25rem;
}
~~~

<code>margin</code> ជាចន្លោះក្រៅ; <code>padding</code> ជាចន្លោះក្នុង។ <code>max-width</code> កំណត់ទទឹងអតិបរមា ខណៈ <code>min-width</code> ជាកម្រិតក្រោម។ <code>margin: 0 auto</code> កណ្ដាល block ដែលមានទទឹងកំណត់/អតិបរមា នៅពេលមានកន្លែងទំនេរ។

<code>height</code> កំណត់កម្ពស់ប្រអប់ ប៉ុន្តែអាចធ្វើអោយមាតិកាហៀរពេលអត្ថបទវែង ឬ zoom។ ជាទូទៅប្រើ <code>min-height</code> ឬ padding ដើម្បីអោយកម្ពស់លូតតាមមាតិកា; ប្រើ <code>max-height</code> តែពេលមានគោលបំណងកាត់/scroll ច្បាស់។

## ៤. Border និង radius

~~~css
.card {
  border: 1px solid #cbd5e1;
  border-radius: 0.75rem;
}

.card--dashed {
  border-style: dashed;
}
~~~

Shorthand <code>border</code> រួមបញ្ចូល width, style និង color។ <code>border-style</code> អាចជា solid, dashed, dotted និងផ្សេងទៀត។ <code>border-radius</code> ធ្វើអោយជ្រុងមូល; ប្រើតាមភាសារចនារបស់គេហទំព័រ។

## ៥. Outline និង keyboard focus

~~~css
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline-width: 3px;
  outline-style: solid;
  outline-color: #f59e0b;
  outline-offset: 3px;
}
~~~

Outline ស្ថិតនៅខាងក្រៅ border ហើយមិនកាន់កាប់ទំហំ layout ដូច border ទេ។ អ្នកអាចកំណត់ <code>outline-color</code>, <code>outline-style</code>, <code>outline-width</code> និង <code>outline-offset</code> ដាច់ដោយឡែក ឬប្រើ shorthand <code>outline</code>។ វាមានប្រយោជន៍សម្រាប់ focus indicator។ កុំដាក់ <code>outline: none</code> លុះត្រាតែជំនួសដោយ focus style ដែលមើលឃើញច្បាស់។

## លំហាត់

បង្កើត card ទទឹងអតិបរមា 40rem មាន padding, border និង radius។ សាកវាយអត្ថបទវែង ហើយបើក viewport តូច។ ពិនិត្យក្នុង DevTools ថា width គិតបញ្ចូល padding/border ដោយសារអ្វី។
