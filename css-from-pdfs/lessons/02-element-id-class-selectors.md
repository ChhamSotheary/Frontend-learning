# មេរៀនទី ២៖ Element, ID និង Class selectors

## គោលដៅ

- ជ្រើស element តាម tag, class និង id។
- យល់ថា class អាចប្រើឡើងវិញ ខណៈ id ត្រូវ unique ក្នុង HTML page។
- ជ្រើស selector សាមញ្ញដែលអាចថែទាំបាន។

## ១. Element selector

~~~css
p {
  line-height: 1.6;
}
~~~

Rule នេះជ្រើស paragraph ទាំងអស់។ ប្រើ element selector សម្រាប់ default រួម ដូចជា typography មូលដ្ឋាន ឬ margin របស់ heading។

## ២. Class selector

HTML អាចដាក់ class លើ element ច្រើន៖

~~~html
<p class="notice">ប្រកាសទីមួយ</p>
<div class="notice">ប្រកាសទីពីរ</div>
~~~

ចាប់ class ដោយសញ្ញា dot ក្នុង CSS៖

~~~css
.notice {
  padding: 1rem;
  background-color: #eaf4ff;
  border-left: 4px solid #1769aa;
}
~~~

Class សមស្របសម្រាប់ style ដែលត្រូវប្រើឡើងវិញ។ អាចដាក់ class ច្រើនលើ element មួយ ដូចជា <code>class="notice notice--warning"</code>។

## ៣. ID selector

~~~html
<h1 id="page-title">មេរៀន CSS</h1>
~~~

~~~css
#page-title {
  color: #123b63;
}
~~~

ID ជាអត្តសញ្ញាណរបស់ element តែមួយក្នុង document។ វាមានប្រយោជន៍សម្រាប់ anchor ឬ JavaScript hooks។ សម្រាប់ style ដែលប្រើឡើងវិញ ចូរប្រើ class ជាទូទៅ ព្រោះ ID មាន specificity ខ្ពស់ ហើយធ្វើអោយ override ពិបាក។

## ៤. ផ្គូផ្គង selector ជាមួយ HTML

~~~html
<article class="lesson-card">
  <h2 id="lesson-title">Selectors</h2>
  <p class="summary">រៀនជ្រើស element ដើម្បីរចនា។</p>
  <p>អត្ថបទបន្ថែមនៅទីនេះ។</p>
</article>
~~~

~~~css
.lesson-card { padding: 1rem; }
.lesson-card h2 { margin-top: 0; }
.summary { color: #475569; }
~~~

<code>.lesson-card h2</code> ជ្រើស h2 ដែលស្ថិតនៅក្នុង element មាន class lesson-card។ Space មានន័យថាជា descendant នៅកម្រិតណាក៏បាន។

## ៥. ID ទល់នឹង Class និង cascade

ប្រសិនបើ selector ច្រើនកំណត់ property ដូចគ្នា browser ពិចារណា origin, importance, specificity និងលំដាប់។ Element selector មាន specificity ទាបជាង class; class ទាបជាង ID។ កុំបន្ថែម ID ឬ <code>!important</code> ដើម្បីឈ្នះគ្រប់បញ្ហា។ រក្សា selector អោយមានគោលបំណងច្បាស់ និងប្រើ class ជា styling API។

## កំហុសជួបញឹកញាប់

- សរសេរ <code>notice</code> ជំនួស <code>.notice</code> ហើយគិតថាវាជា class selector។
- ប្រើ ID ដូចគ្នាលើ card ទាំងអស់។
- ច្រឡំ <code>#title</code> ជាមួយ <code>.title</code>។
- សរសេរ selector ជ្រៅពេក ដូចជា <code>body main article div p</code> ដែលងាយខូចពេល HTML ផ្លាស់ប្តូរ។

## លំហាត់

បង្កើត card ៣ ដែលមាន class ដូចគ្នា និង class បន្ថែមមួយសម្រាប់ card ពិសេស។ កំណត់ style រួមដោយ class ហើយកំណត់ចំណងជើងតែមួយដោយ ID។ សាកប្តូរ ID ទៅ class ហើយសង្កេតភាពងាយស្រួលក្នុងការប្រើឡើងវិញ។
