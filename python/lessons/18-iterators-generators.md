# មេរៀនទី ១៨៖ Iterator និង Generator

## គោលដៅ

- យល់ពិធីការរបស់ iterable និង iterator។
- សរសេរ generator function ដោយ <code>yield</code>។
- ប្រើ lazy evaluation ដើម្បីកាត់បន្ថយការផ្ទុកទិន្នន័យក្នុង memory។

## ១. ពិធីការ iterator

Iterable អាចផ្តល់ iterator តាម <code>iter(value)</code>។ Iterator មាន <code>__next__()</code> ហើយបញ្ចប់ដោយ <code>StopIteration</code>។ Loop <code>for</code> ហៅពិធីការនេះដោយស្វ័យប្រវត្តិ។ ភាគច្រើនគួរប្រើ generator ជំនួសការសរសេរ iterator class ដោយដៃ។

## ២. Generator function

~~~python
def count_up_to(limit):
    number = 1
    while number <= limit:
        yield number
        number += 1

for value in count_up_to(3):
    print(value)
~~~

ពេលហៅ generator function វាមិនដំណើរការទាំងអស់ភ្លាមទេ។ វាផ្អាកនៅ <code>yield</code> ហើយបន្តពីទីនោះនៅពេលអ្នកស្នើធាតុបន្ទាប់។

## ៣. បញ្ជូនទិន្នន័យតាមជំហាន

~~~python
def read_nonempty_lines(path):
    with open(path, encoding="utf-8") as file:
        for line in file:
            cleaned = line.strip()
            if cleaned:
                yield cleaned
~~~

លំនាំនេះដំណើរការឯកសារបន្ទាត់ម្តងមួយ មិនចាំបាច់អានឯកសារទាំងមូលចូល memory។ Context manager នៅក្នុង generator នឹងបិទ file ពេល iterator ត្រូវបញ្ចប់ ឬត្រូវបោះចោល; សម្រាប់ការប្រើប្រាស់ស្មុគស្មាញ ត្រូវប្រើឱ្យអស់ ឬបិទ resource តាមរចនាបថត្រឹមត្រូវ។

## ៤. Lazy មិនមែនឥតគិតថ្លៃ

Generator សមស្របសម្រាប់ stream ធំ និង pipeline។ ប៉ុន្តែវាអាចប្រើបានតែម្តង និងអាចធ្វើអោយ debugging ពិបាក ប្រសិនបើ logic លាក់ក្នុង chain វែង។ ប្រសិនបើទិន្នន័យតូច និងត្រូវប្រើច្រើនដង list ធម្មតាអាចសាមញ្ញជាង។

## លំហាត់

សរសេរ generator ផលិតលេខគូពី ០ ដល់ n។ បន្ទាប់មកបង្កើត pipeline ដែលអានលេខពី list ធំ បោះចោលលេខអវិជ្ជមាន ហើយគណនាផលបូកដោយមិនបង្កើត list មធ្យម។

## ប្រភព

[Python Glossary: iterator](https://docs.python.org/3/glossary.html#term-iterator)
