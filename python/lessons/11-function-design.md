# មេរៀនទី ១១៖ Scope, parameter, type hints និង docstring

## គោលដៅ

- យល់ពី local និង global scope។
- ប្រើ positional, keyword និង variable-length arguments។
- បន្ថែម type hints និង docstring ដើម្បីបញ្ជាក់កិច្ចសន្យា function។

## ១. Scope នៃអថេរ

~~~python
tax_rate = 0.1

def total_with_tax(price):
    tax = price * tax_rate
    return price + tax
~~~

ឈ្មោះដែលប្រកាសក្នុង function ជាទូទៅជា local ហើយមិនអាចប្រើក្រៅ function។ អថេរខាងក្រៅអាចអានបាន ប៉ុន្តែការកែ global state ធ្វើអោយពិបាកសាកល្បង និងតាមដាន។ ល្អជាងគេគឺបញ្ជូនតម្លៃតាម argument ហើយ return លទ្ធផល។

## ២. Parameter ប្រភេទផ្សេងៗ

~~~python
def make_profile(name, city="ភ្នំពេញ", *skills, active=True, **extra):
    return {
        "name": name,
        "city": city,
        "skills": list(skills),
        "active": active,
        "extra": extra,
    }

profile = make_profile("ដារ៉ា", "សៀមរាប", "Python", "SQL", active=False)
~~~

<code>*skills</code> ប្រមូល positional arguments បន្ថែមជ tuple; <code>**extra</code> ប្រមូល keyword arguments បន្ថែមជ dictionary។ ប្រើវានៅពេល API ពិតជាត្រូវការភាពបត់បែន មិនមែនដាក់គ្រប់ function ទាំងអស់ទេ ព្រោះវាអាចលាក់បាំងរចនាសម្ព័ន្ធ argument។

## ៣. Type hints និងការត្រួតពិនិត្យ

~~~python
def average(scores: list[float]) -> float:
    if not scores:
        raise ValueError("ត្រូវមានពិន្ទុយ៉ាងហោចណាស់មួយ")
    return sum(scores) / len(scores)
~~~

Type hint បង្ហាញប្រភេទដែលអ្នករំពឹងទុកសម្រាប់អ្នកអាន និងឧបករណ៍វិភាគ។ Python មិនបង្ខំ type hint ដោយស្វ័យប្រវត្តិពេល run ទេ ដូច្នេះត្រូវ validate input និងសរសេរ test។

## ៤. Docstring

~~~python
def celsius_to_fahrenheit(celsius: float) -> float:
    """បម្លែងសីតុណ្ហភាព Celsius ទៅ Fahrenheit."""
    return celsius * 9 / 5 + 32
~~~

Docstring ពិពណ៌នាគោលបំណង ចំណុចសំខាន់របស់ parameter និងអ្វីដែល return ឬ exception ដែលអាចកើត។ វាជួយឧបករណ៍ <code>help()</code> និងការបង្កើតឯកសារ។

## លំហាត់

រចនា function <code>summarize_scores</code> ដែលទទួល list នៃលេខ បដិសេធ list ទទេដោយ <code>ValueError</code> និង return dictionary ដែលមាន count, min, max និង average។ បន្ថែម type hints និង docstring។

## ប្រភព

[Python Tutorial: Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
