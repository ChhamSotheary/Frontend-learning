# មេរៀនទី ១០៖ មុខងារ និងការបែងចែកកម្មវិធី

## គោលដៅ

- ប្រកាស និងហៅ function។
- បញ្ជូនទិន្នន័យចូលតាម parameter ហើយទទួលតម្លៃត្រឡប់។
- បំបែកកម្មវិធីជាផ្នែកតូចៗដែលអាចប្រើឡើងវិញ។

## ១. ប្រកាស function

~~~python
def greet(name):
    print(f"សួស្តី {name}")

greet("សុភា")
~~~

<code>def</code> ប្រកាស function, <code>name</code> ជា parameter ហើយតម្លៃដែលផ្ញើពេលហៅគឺ argument។ Function មិនដំណើរការរហូតដល់មានការហៅ។

## ២. return និង print ខុសគ្នា

~~~python
def calculate_total(price, quantity):
    return price * quantity

total = calculate_total(2.5, 4)
print(total)
~~~

<code>return</code> បញ្ជូនលទ្ធផលអោយអ្នកហៅយកទៅប្រើបន្ត។ <code>print()</code> គ្រាន់តែបង្ហាញទៅអ្នកប្រើ។ កុំប្រើ print ជំនួស return ប្រសិនបើ function ត្រូវផ្តល់តម្លៃអោយផ្នែកផ្សេងនៃកម្មវិធី។

## ៣. Default និង keyword arguments

~~~python
def greet(name, greeting="សួស្តី"):
    return f"{greeting}, {name}"

print(greet("ដារ៉ា"))
print(greet(name="ដារ៉ា", greeting="ជំរាបសួរ"))
~~~

Default ត្រូវដាក់ក្រោយ parameter ដែលគ្មាន default។ Keyword argument បង្ហាញឈ្មោះ parameter ដូច្នេះអានងាយ និងមិនពឹងតាមលំដាប់ខ្លាំង។

## ៤. បំបែកការងារជា function

~~~python
def is_passing(score):
    return score >= 50

def report(score):
    status = "ជាប់" if is_passing(score) else "មិនទាន់ជាប់"
    return f"ពិន្ទុ {score}: {status}"
~~~

Function គួរមានការទទួលខុសត្រូវច្បាស់ និងឈ្មោះជាកិរិយាសព្ទ ឬការពិពណ៌នាសកម្មភាព។ បំបែកតាមចំណុចដែលអាចយល់ ឬសាកល្បងឯករាជ្យបាន។

## ៥. កុំប្រើ mutable default

កុំសរសេរ <code>def add(item, items=[]):</code> ព្រោះ list default ត្រូវបង្កើតម្តង ហើយប្រើឡើងវិញគ្រប់ការហៅ។ ប្រើ <code>None</code> ជា default ហើយបង្កើត list ថ្មីក្នុង function។

~~~python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
~~~

## លំហាត់

សរសេរ function មួយទទួលតម្លៃដើម និងអត្រាពន្ធ ហើយត្រឡប់តម្លៃសរុប។ សរសេរ function មួយទៀតទទួល list ពិន្ទុ ហើយត្រឡប់មធ្យមភាគ។ កុំអោយ function ទាំងនោះ print ផ្ទាល់។

## ប្រភព

[Python Tutorial: Defining Functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
