# មេរៀនទី ៣០៖ វាស់ល្បឿន កែលម្អ និងគម្រោងចុងក្រោយ

## គោលដៅ

- វាស់ performance មុនពេលកែ optimization។
- ស្គាល់ profiler និង complexity មូលដ្ឋាន។
- រៀបចំ project ចុងក្រោយដោយមាន design, tests និងឯកសារ។

## ១. កំណត់បញ្ហា និងវាស់ baseline

កំណត់ថាផ្នែកណាយឺត និងអ្វីជាគោលដៅ (runtime, memory, throughput)។ ប្រើ input ដែលតំណាងការប្រើប្រាស់ពិត ហើយវាស់ baseline មុនកែ។ កុំអះអាងថាលឿនដោយមើលកូដតែប៉ុណ្ណោះ។

~~~python
from timeit import timeit

seconds = timeit("sum(range(1000))", number=10_000)
print(seconds)
~~~

<code>timeit</code> សាកល្បង expression តូចៗ។ សម្រាប់កម្មវិធីទាំងមូល ប្រើ profiler ដើម្បីដឹងថាពេលវេលាចំណាយនៅ function ណា។

## ២. Complexity និង data structure

Membership ក្នុង set/dict ជាទូទៅលឿនសម្រាប់ការស្វែងរកច្រើនជាង scan list ប៉ុន្តែប្រើ memory និងមានលក្ខខណ្ឌ hashability។ ជ្រើស data structure តាមប្រតិបត្តិការដែលធ្វើញឹកញាប់ និងវាស់លើទិន្នន័យជាក់ស្តែង។

## ៣. កែលម្អដោយសុវត្ថិភាព

1. រក្សា test ដែលបញ្ជាក់ behavior។
2. វាស់ និងកត់ baseline។
3. កែផ្នែកតូចមួយ។
4. រត់ test និងវាស់ម្តងទៀត។
5. រក្សាការកែតែពេលមានអត្ថប្រយោជន៍ច្បាស់។

Optimization មុនកំណត់ bottleneck អាចធ្វើអោយកូដស្មុគស្មាញដោយមិនចាំបាច់។

## ៤. Capstone

ជ្រើសគម្រោងមួយ៖ Task Manager CLI ឬ API Data Collector។ តម្រូវអោយមាន module structure, type hints សមស្រប, validation, exception handling, persistence, unit tests, logging, README និង configuration ដែលគ្មាន secret។

## Checklist មុនបញ្ចប់វគ្គ

- អាចពន្យល់ data flow និងការសម្រេចចិត្តសំខាន់ៗ។
- អាចដំឡើង project ក្នុង virtual environment ថ្មី។
- មាន test សម្រាប់ករណីធម្មតា ករណីព្រំដែន និងកំហុស។
- អាចដំណើរការ CLI ដោយ help command។
- មិនបាន commit environment, secret ឬទិន្នន័យផ្ទាល់ខ្លួន។

## ប្រភព

[timeit](https://docs.python.org/3/library/timeit.html) · [cProfile](https://docs.python.org/3/library/profile.html)
