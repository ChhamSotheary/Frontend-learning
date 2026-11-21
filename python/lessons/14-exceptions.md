# មេរៀនទី ១៤៖ គ្រប់គ្រងកំហុស និង exception

## គោលដៅ

- យល់ពី exception និងដំណើរការរបស់ try/except។
- ចាប់ exception ជាក់លាក់ និងបង្ហាញសារត្រឹមត្រូវ។
- បោះ exception សម្រាប់ input ដែលបំពានលក្ខខណ្ឌ។

## ១. ករណីបម្លែង input បរាជ័យ

~~~python
raw = input("បញ្ចូលអាយុ: ")
try:
    age = int(raw)
except ValueError:
    print("សូមបញ្ចូលអាយុជាចំនួនគត់។")
else:
    print(f"ឆ្នាំក្រោយ អាយុ {age + 1}")
~~~

ប្លុក <code>try</code> ដាក់ប្រតិបត្តិការដែលអាចបរាជ័យ។ <code>except</code> ចាប់ប្រភេទកំហុសដែលរំពឹង។ <code>else</code> រត់ពេលគ្មានកំហុស។ ត្រូវដាក់ក្នុង try តែបន្ទាត់ដែលអាចបង្ក exception ដើម្បីកុំលាក់ bug ផ្សេងៗ។

## ២. finally និងការសម្អាតធនធាន

<code>finally</code> រត់ទាំងពេលជោគជ័យ និងបរាជ័យ។ សម្រាប់ file ប្រើ <code>with open(...)</code> ដែលគ្រប់គ្រងការបិទដោយស្វ័យប្រវត្តិ។ សម្រាប់ resource ផ្សេង ស្វែងរក context manager មុនសរសេរ cleanup ដោយដៃ។

## ៣. បោះ exception

~~~python
def withdraw(balance, amount):
    if amount <= 0:
        raise ValueError("ចំនួនដកត្រូវធំជាងសូន្យ")
    if amount > balance:
        raise ValueError("សមតុល្យមិនគ្រប់")
    return balance - amount
~~~

Function គួរបង្ហាញថាការហៅមិនត្រឹមត្រូវដោយ exception ដែលមានន័យ។ កុំ return លេខកូដកំហុសពិសេស លាយក្នុងលទ្ធផលធម្មតា ប្រសិនបើ exception បញ្ជាក់ស្ថានភាពបានច្បាស់ជាង។

## ៤. បង្កើត exception ផ្ទាល់ខ្លួន

សម្រាប់ domain ដែលមានអត្ថន័យជាក់លាក់ អាចបង្កើត class ដែលទទួលមរតកពី <code>Exception</code> ដូចជា <code>InsufficientFundsError</code>។ ចាប់វានៅ boundary ដែលអាចបម្លែងទៅជាសារអ្នកប្រើ ឬ HTTP response បាន។ កុំចាប់ <code>Exception</code> ទូលំទូលាយ លុះត្រាតែអ្នកកត់ log រួចបោះបន្ត ឬមាន recovery ត្រឹមត្រូវ។

## លំហាត់

បន្ថែមការត្រួតពិនិត្យក្នុងកម្មវិធីគណនាពិន្ទុ៖ បើ input មិនមែនលេខ ឬនៅក្រៅ ០–១០០ បង្ហាញមូលហេតុ។ បំបែកការបម្លែង និង validation ទៅជា function ដាច់ដោយឡែក។

## ប្រភព

[Python Tutorial: Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
