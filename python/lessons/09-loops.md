# មេរៀនទី ៩៖ រង្វិលជុំ for និង while

## គោលដៅ

- ធ្វើកិច្ចការដដែលលើធាតុជាច្រើន។
- ប្រើ <code>range()</code>, <code>enumerate()</code> និង <code>break</code>/<code>continue</code>។
- ការពាររង្វិលជុំគ្មានទីបញ្ចប់។

## ១. for លើ sequence

~~~python
names = ["សុខា", "ដារ៉ា", "មាលា"]
for name in names:
    print(f"សួស្តី {name}")
~~~

<code>for</code> យកធាតុម្តងមួយពី iterable។ វាអានច្បាស់ជាងគណនា index ដោយខ្លួនឯង នៅពេលមិនត្រូវការទីតាំង។

## ២. range និងលេខរៀង

~~~python
for number in range(1, 6):
    print(number)

for index, name in enumerate(names, start=1):
    print(index, name)
~~~

<code>range(start, stop)</code> រួម start តែមិនរួម stop។ <code>enumerate()</code> ផ្តល់ index និងធាតុ។ វាជៀសវាងកំហុសបូកដក index ដោយដៃ។

## ៣. while និងការបញ្ឈប់

~~~python
attempts = 0
while attempts < 3:
    print("សាកល្បង", attempts + 1)
    attempts += 1
~~~

<code>while</code> បន្តដរាបណាលក្ខខណ្ឌពិត។ ត្រូវមានការផ្លាស់ប្តូរដែលនាំលក្ខខណ្ឌទៅ False ឬមានច្រកចេញច្បាស់ ដើម្បីមិនអោយ loop រត់ជានិច្ច។

## ៤. break, continue និង else របស់ loop

<code>break</code> ចេញពី loop ភ្លាម។ <code>continue</code> រំលងទៅជុំបន្ទាប់។ <code>else</code> នៅក្រោយ loop អាចរត់ពេល loop បញ្ចប់ដោយមិនបាន break; ប្រើតែពេលវាធ្វើអោយចេតនាច្បាស់។

~~~python
for number in range(2, 10):
    if number == 6:
        continue
    print(number)
~~~

## ៥. កុំកែ collection កំពុង loop

ការលុបធាតុពី list ខណៈកំពុង loop អាចរំលងធាតុបន្ទាប់ដោយមិនដឹងខ្លួន។ ប្រើ list comprehension ដើម្បីបង្កើត list ថ្មី ឬ loop លើ copy។

## លំហាត់

បូកលេខទាំងអស់ក្នុង list ដោយ loop។ បន្ទាប់មកសរសេរកម្មវិធីសួរលេខរហូតដល់អ្នកប្រើវាយ <code>q</code> ហើយបង្ហាញចំនួននិងផលបូកនៃលេខដែលត្រឹមត្រូវ។

## ប្រភព

[Python Tutorial: for និង range](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
