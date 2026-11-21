# មេរៀនទី ១៧៖ Dataclass, composition និង inheritance

## គោលដៅ

- ប្រើ dataclass សម្រាប់ object ផ្ទុកទិន្នន័យ។
- ប្រៀបធៀប composition និង inheritance។
- សរសេរ class ដែលមានតួនាទីច្បាស់ និងគ្រប់គ្រង invariants។

## ១. Dataclass

~~~python
from dataclasses import dataclass

@dataclass
class Task:
    title: str
    done: bool = False

task = Task("ហាត់ Python")
print(task)
~~~

<code>@dataclass</code> បង្កើត method ទូទៅដូចជា initializer និង representation ដោយផ្អែកលើ field។ វាសមស្របសម្រាប់ data record ប៉ុន្តែមិនមែនជំនួស validation ឬ business logic ដោយស្វ័យប្រវត្តិទេ។

## ២. Immutable dataclass

~~~python
@dataclass(frozen=True)
class Point:
    x: float
    y: float
~~~

<code>frozen=True</code> មិនអោយ assign field ថ្មីក្រោយបង្កើត។ វាជួយអោយតម្លៃស្ថិតស្ថេរ និងអាចប្រើជា key នៅពេល field ទាំងអស់ hashable។

## ៣. Composition

~~~python
class Engine:
    def start(self):
        return "engine started"

class Car:
    def __init__(self, engine):
        self.engine = engine

    def start(self):
        return self.engine.start()
~~~

Composition មានន័យថា object មួយមាន object ផ្សេងជាសមាសភាគ។ វាអនុញ្ញាតអោយប្តូរផ្នែកខាងក្នុង និងសាកល្បងដោយ mock ឬ fake object បានងាយ។

## ៤. Inheritance

Inheritance បង្ហាញទំនាក់ទំនង “ជា​ប្រភេទ​មួយ” និងអាច override method។ ប្រើវាពេល subtype ពិតជាអាចជំនួស base type បាន។ ប្រសិនបើ class កូនត្រូវបិទ ឬប្តូរអាកប្បកិរិយាសំខាន់ៗច្រើន នោះ inheritance អាចបង្ក coupling; ពិចារណា composition ឬ protocol ជំនួស។

## ៥. Method ពិសេស

Dataclass ផ្តល់ <code>__repr__</code> និង <code>__eq__</code> ជាដើម។ Python មាន data model សម្រាប់ <code>__str__</code>, <code>__len__</code>, <code>__iter__</code>។ អនុវត្តតែពេលវាបង្ហាញអត្ថន័យធម្មជាតិរបស់ object ហើយធ្វើអោយ interface ងាយប្រើ។

## លំហាត់

បង្កើត dataclass <code>Address</code> និង class <code>Customer</code> ដែលមាន address ជា field។ បន្ថែម method បង្ហាញអាសយដ្ឋានពេញ។ ប្រៀបធៀបការភ្ជាប់ដោយ composition ជាមួយការសរសេរ field ទាំងអស់ក្នុង Customer។

## ប្រភព

[dataclasses — Data Classes](https://docs.python.org/3/library/dataclasses.html)
