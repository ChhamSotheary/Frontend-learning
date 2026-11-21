# មេរៀនទី ១៩៖ Decorator និង context manager

## គោលដៅ

- យល់ថា function អាចបញ្ជូនទៅ function ផ្សេងបាន។
- បង្កើត decorator សាមញ្ញដោយរក្សា metadata។
- ប្រើ context manager ដើម្បីកំណត់ការចាប់ផ្តើម និង cleanup resource។

## ១. Function ជា object

ក្នុង Python អាចដាក់ function ក្នុងអថេរ បញ្ជូនជា argument និង return ពី function មួយទៀត។ Decorator ទាញយកលក្ខណៈនេះមករុំ function ដោយបន្ថែម behavior។

## ២. Decorator សម្រាប់កត់ថាកំពុងដំណើរការ

~~~python
from functools import wraps

def announce(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        print(f"កំពុងហៅ {function.__name__}")
        return function(*args, **kwargs)
    return wrapper

@announce
def add(a, b):
    return a + b
~~~

<code>@announce</code> ស្មើនឹង assign function ឱ្យតម្លៃត្រឡប់ពី <code>announce</code>។ <code>@wraps</code> រក្សាឈ្មោះ និង docstring ដើមសម្រាប់ introspection។ Decorator ផ្លាស់ប្តូរឥរិយាបថ ដូច្នេះប្រើតែពេល logic រួមគ្នាច្បាស់ ដូចជា logging ឬ authorization។

## ៣. Context manager

~~~python
with open("notes.txt", encoding="utf-8") as file:
    first_line = file.readline()
~~~

Context manager រៀបចំធនធានមុនចូល block និងធានាការសម្អាតពេលចេញ។ ប្រើ <code>with</code> សម្រាប់ file, lock និង connection ដែល support protocol នេះ។

## ៤. បង្កើត context manager

~~~python
from contextlib import contextmanager

@contextmanager
def managed_message():
    print("ចាប់ផ្តើម")
    try:
        yield
    finally:
        print("បញ្ចប់")
~~~

កូដមុន <code>yield</code> ជាការរៀបចំ; កូដក្នុង <code>finally</code> សម្អាតធនធាន។ សម្រាប់ការគ្រប់គ្រង exception ត្រូវសម្រេចថាចង់បោះបន្ត ឬស្រូបវា; កុំលាក់កំហុសដោយចៃដន្យ។

## លំហាត់

សរសេរ decorator ដែលវាស់ពេល function ដោយ <code>time.perf_counter()</code> ហើយត្រឡប់លទ្ធផលដើម។ កុំដាក់ decorator លើកូដ production ដែលមិនចង់បង្ហាញពេលក្នុង output។

## ប្រភព

[functools.wraps](https://docs.python.org/3/library/functools.html#functools.wraps) · [contextlib](https://docs.python.org/3/library/contextlib.html)
