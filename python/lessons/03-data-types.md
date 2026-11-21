# មេរៀនទី ៣៖ ប្រភេទទិន្នន័យ និងការបម្លែង

## គោលដៅ

- សម្គាល់ប្រភេទលេខ អត្ថបទ និងតម្លៃពិត/មិនពិត។
- ប្រើ <code>type()</code> ពិនិត្យប្រភេទ។
- បម្លែង string ទៅលេខដោយយល់ពីលក្ខខណ្ឌបរាជ័យ។

## ១. ប្រភេទមូលដ្ឋាន

~~~python
count = 12                 # int: ចំនួនគត់
price = 4.75               # float: ចំនួនទសភាគ
title = "Python"           # str: អត្ថបទ
is_ready = True            # bool: True ឬ False
nothing = None             # NoneType: គ្មានតម្លៃ

print(type(count))
print(type(price))
~~~

ប្រភេទទិន្នន័យកំណត់ប្រតិបត្តិការដែលអាចធ្វើបាន។ <code>int</code> និង <code>float</code> ប្រើសម្រាប់គណិតវិទ្យា, <code>str</code> សម្រាប់អត្ថបទ, <code>bool</code> សម្រាប់លក្ខខណ្ឌ និង <code>None</code> សម្គាល់ថាមិនមានតម្លៃ។

## ២. បម្លែងតម្លៃ

~~~python
text_number = "42"
number = int(text_number)
decimal = float("3.5")
label = str(number)
print(number + 8)
print(decimal)
print(label)
~~~

<code>int()</code>, <code>float()</code>, <code>str()</code> បម្លែងប្រភេទនៅពេលតម្លៃអាចបម្លែងបាន។ <code>int("four")</code> បង្កើត <code>ValueError</code> ព្រោះអត្ថបទនោះមិនមែនជាលេខ។

## ៣. ចែកលេខ និងភាពជាក់លាក់

<code>/</code> ផ្តល់លទ្ធផលទសភាគ, <code>//</code> ចែកចំនួនគត់តាមចំនួនជាន់ក្រោម, ហើយ <code>%</code> ផ្តល់សំណល់។ ប្រើ <code>round(value, digits)</code> សម្រាប់បង្គត់តម្លៃបង្ហាញ។ កុំសន្មតថា float ផ្ទុកប្រភាគទសភាគទាំងអស់បានត្រឹមត្រូវពេញលេញ; ការគ្រប់គ្រងប្រាក់ត្រូវសិក្សាបន្ថែមអំពី <code>decimal.Decimal</code>។

## ៤. ពិនិត្យប្រភេទ មុនបម្លែង

~~~python
raw_age = input("អាយុ: ")
if raw_age.isdigit():
    age = int(raw_age)
    print(f"ឆ្នាំក្រោយ អ្នកមានអាយុ {age + 1}")
else:
    print("សូមបញ្ចូលលេខគត់វិជ្ជមាន។")
~~~

<code>isdigit()</code> ជួយករណីលេខគត់វិជ្ជមានសាមញ្ញ ប៉ុន្តែមិនទទួលលេខមានសញ្ញា minus ឬទសភាគទេ។ សម្រាប់ input ទូទៅ គ្រប់គ្រង exception គឺអាចទុកចិត្តបានជាង។

## លំហាត់

ទទួលចំនួនម៉ោងសិក្សាជា string រួចបម្លែងទៅ float។ បង្ហាញនាទីសរុប និងប្រើ <code>round()</code> ដើម្បីបង្ហាញម៉ោងត្រឹម ២ ខ្ទង់ទសភាគ។

## ប្រភព

[Python Built-in Types](https://docs.python.org/3/library/stdtypes.html)
