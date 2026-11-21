# មេរៀនទី ១៥៖ Comprehension និង iterable

## គោលដៅ

- បង្កើត list/dict/set ថ្មីពី iterable ដោយ expression ខ្លី។
- ប្រើ filter និង mapping ដោយមានអត្ថន័យច្បាស់។
- ជ្រើស generator expression ពេលមិនចង់រក្សាទិន្នន័យទាំងអស់ក្នុង memory។

## ១. List comprehension

~~~python
numbers = [1, 2, 3, 4, 5]
squares = [number * number for number in numbers]
even_squares = [number * number for number in numbers if number % 2 == 0]
~~~

ទម្រង់គឺ expression, បន្ទាប់មក <code>for</code> និងអាចមាន <code>if</code>។ ឧទាហរណ៍ទីពីរគណនាការ៉េសម្រាប់លេខគូតែប៉ុណ្ណោះ។ បើ expression មាន loop ជាន់គ្នាច្រើន ឬមាន logic វែង គួរប្រើ loop ធម្មតា។

## ២. Set និង dictionary comprehension

~~~python
words = ["python", "django", "python"]
lengths = {word: len(word) for word in words}
unique_lengths = {len(word) for word in words}
~~~

Dictionary comprehension បង្កើត key/value; set comprehension យកតម្លៃស្ទួនចេញ។ Key ស្ទួននៅ dictionary នឹងសរសេរជាន់គ្នា ដូច្នេះពិនិត្យថានោះជាឥរិយាបថដែលចង់បានឬអត់។

## ៣. Iterable និង iterator

Iterable ជាវត្ថុដែលអាចបន្តយកធាតុពីវាបាន ដូចជា list, string ឬ file។ <code>iter()</code> បង្កើត iterator ហើយ <code>next()</code> យកធាតុបន្ទាប់។ Loop <code>for</code> គ្រប់គ្រង iterator និងការបញ្ចប់ដោយខ្លួនឯង។

~~~python
names = iter(["មាលា", "ដារ៉ា"])
print(next(names))
print(next(names))
~~~

## ៤. Generator expression

~~~python
total = sum(number * number for number in range(1_000_000))
~~~

វង់ក្រចកបង្កើតតម្លៃម្តងមួយ ជំនួសឱ្យបង្កើត list ធំទាំងមូល។ Generator មាន single-pass semantics ជាទូទៅ: ពេលអស់ហើយ មិនអាចប្រើឡើងវិញបានដោយមិនបង្កើតម្តងទៀត។

## លំហាត់

ពីបញ្ជីពាក្យ បង្កើត list ពាក្យដែលវែងជាង ៤ អក្សរ និង dictionary ផ្គូផ្គងពាក្យទៅចំនួនតួអក្សរ។ ធ្វើម្តងទៀតដោយ loop ធម្មតា ដើម្បីប្រៀបធៀបភាពងាយអាន។

## ប្រភព

[Python Tutorial: Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
