# មេរៀនទី ៥៖ String និងការរៀបចំអត្ថបទ

## គោលដៅ

- ចូលប្រើតួអក្សរក្នុង string ដោយ index និង slice។
- ប្រើមុខងារសំខាន់ៗសម្រាប់សម្អាត និងស្វែងរកអត្ថបទ។
- បង្កើត string ដែលមានតម្លៃអថេរដោយ f-string។

## ១. String មិនអាចកែតួអក្សរផ្ទាល់បាន

~~~python
word = "Python"
print(word[0])      # P
print(word[-1])     # n
print(word[0:3])    # Pyt
~~~

Index ចាប់ពីសូន្យ។ Index អវិជ្ជមានចាប់រាប់ពីចុងក្រោយ។ Slice <code>[start:stop]</code> រួម start ប៉ុន្តែមិនរួម stop។ String គឺ immutable: បើចង់កែ អ្នកបង្កើត string ថ្មី។

## ២. មុខងារអត្ថបទដែលប្រើញឹកញាប់

~~~python
raw = "  Learn Python  "
clean = raw.strip()
print(clean.lower())
print(clean.upper())
print(clean.replace("Python", "Django"))
print(clean.startswith("Learn"))
~~~

<code>strip()</code> ដក whitespace ពីចុងទាំងពីរ, <code>lower()</code>/<code>upper()</code> បម្លែង case, <code>replace()</code> បង្កើត string ថ្មីដែលជំនួសអត្ថបទ និង <code>startswith()</code> ពិនិត្យបុព្វបទ។

## ៣. បំបែក និងភ្ជាប់

~~~python
csv_line = "សុខា,20,ភ្នំពេញ"
parts = csv_line.split(",")
print(parts)
print(" | ".join(parts))
~~~

<code>split()</code> បំបែក string ទៅជា list។ <code>join()</code> ភ្ជាប់ sequence នៃ string ដោយ separator។ ឧទាហរណ៍នេះគ្រាន់តែបង្ហាញគំនិត៖ បើអាន CSV ពិត សូមប្រើ module <code>csv</code> ព្រោះទិន្នន័យអាចមាន comma ឬ quote ក្នុងតម្លៃ។

## ៤. f-string និងអត្ថបទច្រើនបន្ទាត់

~~~python
name = "មាលា"
hours = 2.5
message = f"{name} រៀន {hours:.1f} ម៉ោង"
print(message)
~~~

<code>:.1f</code> បង្ហាញ float មួយខ្ទង់ទសភាគ។ ប្រើ triple quotes សម្រាប់អត្ថបទច្រើនបន្ទាត់ ឬ docstring ប៉ុន្តែកុំដាក់ secret នៅក្នុង string ក្នុង source។

## ៥. អត្ថបទ និង Unicode

Python string គាំទ្រ Unicode ដូច្នេះអាចផ្ទុកអក្សរខ្មែរ។ ការរាប់ code point មិនស្មើនឹងការរាប់អក្សរដែលភ្នែកមើលឃើញជានិច្ច ព្រោះសញ្ញាផ្សំអាចប្រើ code point ច្រើន។ ពេលត្រូវកាត់អក្សរខ្មែរតាម grapheme ត្រូវប្រើឧបករណ៍ដែលគាំទ្រ Unicode grapheme cluster។

## លំហាត់

ទទួលឈ្មោះពេញពីអ្នកប្រើ។ ដក whitespace ចុងដើម បង្ហាញអក្សរធំ និងបង្ហាញចំនួនតួអក្សរ។ សាកឈ្មោះជាភាសាខ្មែរ និងភាសាអង់គ្លេស។

## ប្រភព

[Python String Methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
