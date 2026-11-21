# មេរៀនទី ៤៖ ប្រមាណវិធី និងការប្រៀបធៀប

## គោលដៅ

- ប្រើប្រមាណវិធីលេខ និងសញ្ញាកាត់តម្លៃ។
- បង្កើតលទ្ធផល Boolean ដោយការប្រៀបធៀប។
- យល់លំដាប់ប្រតិបត្តិការ និងការប្រើវង់ក្រចក។

## ១. ប្រមាណវិធីលេខ

~~~python
a = 17
b = 5
print(a + b)   # 22
print(a - b)   # 12
print(a * b)   # 85
print(a / b)   # 3.4
print(a // b)  # 3
print(a % b)   # 2
print(a ** 2)  # 289
~~~

ប្រមាណវិធីចម្បងមានបូក ដក គុណ ចែក ចែកយកចំនួនគត់ សំណល់ និងស្វ័យគុណ។ ចែកនឹងសូន្យមិនអាចធ្វើបាន ហើយនឹងបង្កើត exception។

## ២. ប្រៀបធៀប

~~~python
score = 82
print(score >= 50)
print(score == 100)
print(score != 0)
~~~

សញ្ញា <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> ត្រឡប់ <code>True</code> ឬ <code>False</code>។ សញ្ញា <code>=</code> កំណត់តម្លៃ តែ <code>==</code> ប្រៀបធៀបតម្លៃ។

## ៣. តក្កវិជ្ជា Boolean

~~~python
age = 20
has_id = True
can_enter = age >= 18 and has_id
print(can_enter)
~~~

<code>and</code> ត្រូវការលក្ខខណ្ឌទាំងពីរពិត។ <code>or</code> ត្រូវការយ៉ាងហោចណាស់មួយពិត។ <code>not</code> បញ្ច្រាសលទ្ធផល។ Python អាចបញ្ឈប់វាយតម្លៃមុន ប្រសិនបើលទ្ធផលបានកំណត់រួច (short-circuit)។

## ៤. លំដាប់ និងវង់ក្រចក

~~~python
result = 2 + 3 * 4
clear_result = (2 + 3) * 4
print(result)        # 14
print(clear_result)  # 20
~~~

គុណត្រូវធ្វើមុនបូក។ ប្រើវង់ក្រចកដើម្បីបង្ហាញចេតនារបស់អ្នក អោយអ្នកអានកូដមិនចាំបាច់ទាយលំដាប់។

## លំហាត់

ទទួលពិន្ទុ និងអថេរ <code>submitted</code>។ កំណត់ <code>passed</code> ជា True តែពេលពិន្ទុចាប់ពី 50 ឡើង និងបានដាក់ការងារ។ បង្ហាញលទ្ធផល។

## ប្រភព

[Python Expressions](https://docs.python.org/3/reference/expressions.html)
