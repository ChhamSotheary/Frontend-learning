# មេរៀនទី ១៦៖ គោលការណ៍ OOP និង class

## គោលដៅ

- យល់ពី class, instance, attribute និង method។
- រក្សាទិន្នន័យនិងឥរិយាបថដែលពាក់ព័ន្ធនៅជាមួយគ្នា។
- ស្គាល់ encapsulation តាម convention របស់ Python។

## ១. បង្កើត class

~~~python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def describe(self):
        return f"{self.title} សរសេរដោយ {self.author}"

book = Book("រៀន Python", "សុខា")
print(book.describe())
~~~

Class ជាគំរូសម្រាប់បង្កើត object។ Instance ជាវត្ថុជាក់ស្តែងមួយ។ <code>__init__</code> កំណត់ state ដំបូង ហើយ <code>self</code> សំដៅ instance ដែល method កំពុងដំណើរការ។

## ២. Instance attribute និង class attribute

~~~python
class Course:
    platform = "Frontend Learning"

    def __init__(self, title):
        self.title = title
~~~

<code>title</code> ខុសគ្នាតាម instance; <code>platform</code> ជាតម្លៃរួមរបស់ class។ កុំដាក់ list/dict ដែលមានបំណងកែដាច់ដោយឡែកជ class attribute ព្រោះ instances អាចចែករំលែក object ដដែល។

## ៣. Encapsulation និង property

Python ប្រើ convention underscore ដូចជា <code>_balance</code> ដើម្បីប្រាប់ថាជា implementation detail។ វាមិនមែនជា access control ដូចភាសាខ្លះទេ។ ប្រសិនបើត្រូវការគ្រប់គ្រងការកំណត់តម្លៃ អាចប្រើ property ដើម្បី validate និងនៅតែមាន interface សាមញ្ញ។

~~~python
class Product:
    def __init__(self, price):
        self.price = price

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("តម្លៃមិនអាចអវិជ្ជមាន")
        self._price = value
~~~

## ៤. ពេលណាគួរប្រើ class?

ប្រើ class ពេលមាន state និង behavior ដែលធ្វើការជាមួយគ្នា ឬត្រូវការកំណត់ abstraction ច្បាស់។ សម្រាប់ការបម្លែងតម្លៃសាមញ្ញ function ជាញឹកញាប់ស្រួលជាង។ កុំបង្កើត class សម្រាប់តែបំបែកឈ្មោះ function។

## លំហាត់

បង្កើត class <code>BankAccount</code> មាន owner និង balance។ ផ្តល់ method deposit និង withdraw ដែល reject ចំនួនមិនត្រឹមត្រូវ ហើយមិនអោយដកលើសសមតុល្យ។ សាកល្បងករណីត្រឹមត្រូវ និងករណីកំហុស។

## ប្រភព

[Python Tutorial: Classes](https://docs.python.org/3/tutorial/classes.html)
