# មេរៀនទី ៧៖ Dictionary និង Set

## គោលដៅ

- រក្សាទិន្នន័យជា key/value។
- អាន និងកែតម្លៃក្នុង dictionary ដោយសុវត្ថិភាព។
- ប្រើ set ដើម្បីរក្សាតម្លៃមិនស្ទួន និងធ្វើប្រមាណវិធីក្រុម។

## ១. Dictionary ជា key/value

~~~python
student = {
    "name": "វិចិត្រ",
    "age": 19,
    "active": True,
}
print(student["name"])
print(student.get("email", "មិនបានផ្តល់"))
~~~

Key ប្រើសម្រាប់ស្វែងរក value។ ប្រើ bracket ពេល key ត្រូវមាន; ប្រើ <code>get()</code> ពេល key អាចអវត្តមាន ដើម្បីមិនបង្កើត <code>KeyError</code>។ Key ត្រូវជា hashable value ដូចជា string ឬ tuple ដែលមានធាតុ hashable។

## ២. បន្ថែម កែ និងដក

~~~python
student["email"] = "v@example.com"
student["age"] += 1
del student["active"]
for key, value in student.items():
    print(key, value)
~~~

<code>items()</code> ផ្តល់ key និង value ជាគូៗ។ ប្រសិនបើត្រូវកែ dictionary ខណៈកំពុង loop លើវា សូម loop លើ copy នៃ keys ឬបង្កើត dictionary ថ្មី ដើម្បីជៀសវាងបញ្ហាកែ collection កំពុងត្រូវ iterate។

## ៣. Set

~~~python
tags = {"python", "web", "python"}
tags.add("database")
print(tags)
print("web" in tags)
~~~

Set រក្សាតម្លៃ unique ហើយមិនគួរពឹងលើលំដាប់បង្ហាញ។ ប្រើវាសម្រាប់ដកធាតុស្ទួន និង membership check លឿន។

## ៤. ប្រមាណវិធីក្រុម

~~~python
frontend = {"HTML", "CSS", "JavaScript"}
backend = {"Python", "SQL", "JavaScript"}
print(frontend & backend)  # ចំណុចប្រសព្វ
print(frontend | backend)  # បញ្ចូលក្រុម
print(frontend - backend)  # មានតែក្រុម frontend
~~~

<code>&</code> ជាចំណុចប្រសព្វ, <code>|</code> ជាក្រុមបញ្ចូល និង <code>-</code> ជាភាពខុសគ្នារវាងក្រុម។

## លំហាត់

បង្កើត dictionary តំណាងសៀវភៅមួយ ដែលមាន title, author, year។ បន្ថែម field <code>available</code> ហើយបង្ហាញតាម loop។ បន្ទាប់មកយក set ពីបញ្ជីប្រភេទសៀវភៅដែលមានឈ្មោះស្ទួន។

## ប្រភព

[Dictionaries និង Sets ក្នុង Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html)
