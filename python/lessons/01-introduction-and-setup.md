# មេរៀនទី ១៖ ស្គាល់ Python និងរៀបចំបរិស្ថាន

## គោលដៅ

- យល់ថា Python ជាភាសាសរសេរកម្មវិធី និង interpreter ដំណើរការយ៉ាងដូចម្តេច។
- ពិនិត្យ Python ត្រូវបានដំឡើងរួចឬនៅ។
- បង្កើត និងដំណើរការឯកសារ Python ដំបូង។

## ១. Python ជាអ្វី?

Python ជាភាសាសរសេរកម្មវិធីដែលមាន syntax អានងាយ។ អ្នកអាចប្រើវាសម្រាប់ស្វ័យប្រវត្តិកម្ម កម្មវិធីបញ្ជា API ការវិភាគទិន្នន័យ និង web app ដោយ Django។ ឯកសារ Python ជាទូទៅមានបច្ច័យ <code>.py</code>។ Interpreter អាន source code ហើយអនុវត្តតាមលំដាប់។

## ២. ពិនិត្យការដំឡើង

បើក terminal ឬ PowerShell ហើយវាយ៖

~~~bash
python --version
~~~

នៅប្រព័ន្ធខ្លះ អាចប្រើ <code>python3 --version</code>។ ប្រសិនបើបង្ហាញ version មានន័យថា command ស្គាល់ Python។ បើមិនស្គាល់ សូមដំឡើងពីគេហទំព័រ Python ផ្លូវការ ហើយបើក terminal ថ្មី។

## ៣. បង្កើតកម្មវិធីដំបូង

បង្កើតឯកសារ <code>hello.py</code> ហើយសរសេរ៖

~~~python
print("សួស្តី Python!")
print("ខ្ញុំកំពុងរៀនសរសេរកម្មវិធី។")
~~~

រក្សាទុក រួចរត់ពីទីតាំង folder នោះ៖

~~~bash
python hello.py
~~~

<code>print()</code> បង្ហាញតម្លៃទៅ terminal។ អត្ថបទត្រូវដាក់ក្នុងសញ្ញា quote ដូចជា <code>"..."</code> ឬ <code>'...'</code>។

## ៤. សាកល្បងក្នុង interactive shell

វាយ <code>python</code> ដោយមិនបញ្ជាក់ឯកសារ ដើម្បីចូល shell អន្តរកម្ម។ សាកល្បង <code>2 + 3</code> និង <code>print("Hi")</code>។ ចេញដោយវាយ <code>exit()</code>។ Shell នេះសមស្របសម្រាប់សាកគំនិតខ្លីៗ ខណៈឯកសារ <code>.py</code> ល្អសម្រាប់រក្សាកម្មវិធី។

## ៥. យល់ពីកំហុសដំបូង

Python ប្រើ indent ដើម្បីសម្គាល់ប្លុកកូដ។ ប្រើ space ឱ្យស្មើគ្នា ជាទូទៅ ៤ spaces ក្នុងមួយកម្រិត។ កុំលាយ tab និង spaces។ សញ្ញា quote មិនបិទ ឬវាយឈ្មោះ function ខុស អាចបង្កើត syntax/runtime error។

## លំហាត់

1. បង្កើត <code>about_me.py</code> ហើយបង្ហាញឈ្មោះ ភាសាដែលកំពុងរៀន និងគោលដៅមួយ។
2. រត់វាពី terminal។ បន្ទាប់មកលុប quote បិទមួយ ហើយសង្កេតសារកំហុស។
3. កត់ត្រាថា command ណាដែលដំណើរការលើកុំព្យូទ័ររបស់អ្នក៖ <code>python</code> ឬ <code>python3</code>។

## ប្រភព

[Python Tutorial: An Informal Introduction](https://docs.python.org/3/tutorial/introduction.html)
