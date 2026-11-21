# មេរៀនទី ៨៖ លក្ខខណ្ឌ if/elif/else

## គោលដៅ

- ធ្វើឱ្យកម្មវិធីជ្រើសផ្លូវតាមលទ្ធផល Boolean។
- រៀបចំលក្ខខណ្ឌច្រើនតាមលំដាប់ច្បាស់លាស់។
- ជៀសវាងការប្រៀបធៀបតម្លៃខុសប្រភេទ និង nested condition ជ្រៅពេក។

## ១. if និង else

~~~python
temperature = 31
if temperature >= 35:
    print("ក្តៅខ្លាំង")
else:
    print("មិនទាន់ក្តៅខ្លាំង")
~~~

បន្ទាត់ក្រោម <code>if</code> ត្រូវ indent។ លក្ខខណ្ឌត្រូវជាកន្សោមដែលមានលទ្ធផល True/False។ <code>else</code> រត់នៅពេលលក្ខខណ្ឌ if មិនពិត។

## ២. ជ្រើសរើសពីច្រើនករណី

~~~python
score = 76
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "Needs practice"
print(grade)
~~~

Python ពិនិត្យពីលើចុះក្រោម ហើយរត់ block ដំបូងដែលពិត។ ដាក់ករណីធំជាងមុនដើម្បីកុំអោយវាត្រូវករណីទូលំទូលាយមុន។ ក្នុងឧទាហរណ៍ បើដាក់ <code>score >= 60</code> មុន នោះពិន្ទុ ៩៥ នឹងបាន C។

## ៣. លក្ខខណ្ឌរួម និង membership

~~~python
username = "dara"
blocked = {"admin", "root"}
if username and username not in blocked:
    print("អាចបន្ត")
~~~

ប្រើ <code>and</code>, <code>or</code>, <code>not</code> ដើម្បីផ្សំលក្ខខណ្ឌ។ String និង collection ទទេត្រូវចាត់ជាមិនពិត ហើយ collection មានធាតុត្រូវចាត់ជាពិត។ កុំសរសេរលក្ខខណ្ឌខ្លីពេក បើវាលំបាកអាន។

## ៤. ពិនិត្យចន្លោះលេខ

Python អនុញ្ញាត chained comparison៖ <code>0 &lt;= score &lt;= 100</code> មានន័យថាពិនិត្យទាំងពីរផ្នែក។ វាអានងាយជាងប្រើ <code>and</code> ជាមួយការសរសេរអថេរដដែលច្រើនដង។

## កំហុសទូទៅ

- ប្រើ <code>=</code> ក្នុងលក្ខខណ្ឌ ជំនួស <code>==</code>។
- ភ្លេច colon នៅចុងបន្ទាត់ <code>if</code>។
- ប្រៀបធៀប input string ជាមួយ integer ដោយមិនបម្លែង។
- រៀបលក្ខខណ្ឌទូលំទូលាយនៅមុខលក្ខខណ្ឌជាក់លាក់។

## លំហាត់

សរសេរចំណាត់ថ្នាក់ពិន្ទុ A/B/C/ត្រូវហាត់បន្ថែម។ បន្ថែមករណី input ខុសពីចន្លោះ ០–១០០ និងបង្ហាញសារកំហុសដែលយល់ងាយ។

## ប្រភព

[Python Tutorial: if Statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)
