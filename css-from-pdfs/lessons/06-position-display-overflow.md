# មេរៀនទី ៦៖ Position, display, visibility, overflow និង z-index

## គោលដៅ

- បែងចែក display, visibility និង opacity។
- ដាក់ element ដោយ static, relative, absolute, fixed និង sticky។
- យល់ clipping និង stacking order។

## ១. Display និង visibility

~~~css
.hidden-from-layout { display: none; }
.invisible-but-space-remains { visibility: hidden; }
~~~

<code>display: none</code> ដក element ចេញពី layout និង accessibility tree ជាទូទៅ។ <code>visibility: hidden</code> លាក់វា ប៉ុន្តែរក្សាចន្លោះ។ <code>opacity: 0</code> ធ្វើអោយថ្លាដល់សូន្យ ប៉ុន្តែ element អាចនៅទទួល focus ឬ click ដដែល; ដូច្នេះវាមិនមែនវិធីលាក់ control ដោយសុវត្ថិភាពទេ។

## ២. Position

- <code>static</code>: លំនាំដើម តាម normal flow។
- <code>relative</code>: នៅក្នុង flow ប៉ុន្តែអាច offset និងធ្វើជាគោលសម្រាប់ absolute child។
- <code>absolute</code>: ដកចេញពី normal flow ហើយទីតាំងទាក់ទង containing block ដែលមាន positioning។
- <code>fixed</code>: ជាទូទៅភ្ជាប់ទៅ viewport។
- <code>sticky</code>: នៅក្នុង flow ហើយធ្វើជា sticky ក្រោយឆ្លង threshold ដូចជា top។

## ៣. Relative និង absolute ជាមួយគ្នា

~~~css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
}
~~~

ដាក់ badge ជាកូនរបស់ card។ Relative parent បង្កើត positioning context; absolute badge អាចដាក់នៅជ្រុងដោយមិនប្តូរទីតាំងធាតុផ្សេង។ ត្រូវពិនិត្យលើអេក្រង់តូចថាវាមិនបាំងខ្លឹមសារ។

## ៤. Overflow

<code>overflow: visible</code> អនុញ្ញាតអោយមាតិកាលេចចេញ; <code>hidden</code> កាត់ចោល; <code>auto</code> បង្ហាញ scroll bar បើចាំបាច់។ កំណត់ overflow តែពេលមានមូលហេតុ ដើម្បីកុំកាត់ focus ring ឬ content ដែលអ្នកប្រើត្រូវការចូលដល់។

## ៥. z-index និង stacking context

~~~css
.dialog-backdrop { position: fixed; inset: 0; z-index: 100; }
.dialog { position: fixed; inset: 10vh 1rem auto; z-index: 101; }
~~~

<code>z-index</code> គ្រប់គ្រងលំដាប់គូសក្នុង stacking context មួយ។ លេខធំមិនធានាថាឈ្នះ element ក្នុង stacking context ផ្សេងទេ។ Properties ដូចជា transform, filter និង opacity អាចបង្កើត stacking context ថ្មី។ ស្វែងរក ancestor ដែលបង្ក context មុនដាក់ z-index កាន់តែធំ។

## ៦. Position offsets

<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> ឬ logical properties ដូចជា <code>inset-block-start</code> កំណត់ offset សម្រាប់ positioned element។ ប្រើ logical properties ពេល UI ត្រូវគាំទ្រទិសអត្ថបទច្រើន។

## លំហាត់

បង្កើត card មាន badge “ថ្មី” នៅជ្រុង។ បង្កើត dialog mockup ជាមួយ backdrop ហើយពិនិត្យ z-index។ ប្រៀបធៀប <code>display:none</code>, <code>visibility:hidden</code> និង <code>opacity:0</code> ដោយ keyboard Tab។
