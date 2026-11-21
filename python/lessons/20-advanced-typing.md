# មេរៀនទី ២០៖ Type hints កម្រិតខ្ពស់ និង Protocol

## គោលដៅ

- បញ្ជាក់តម្លៃ optional និងប្រភេទជាច្រើន។
- ប្រើ generic collection hints។
- យល់ structural typing តាម Protocol។

## ១. ប្រភេទអាចជាច្រើន

~~~python
def parse_identifier(raw: str) -> int | None:
    try:
        return int(raw)
    except ValueError:
        return None
~~~

<code>int | None</code> មានន័យថា function អាចផ្តល់ int ឬ None។ កូដអ្នកហៅត្រូវពិនិត្យ None មុនប្រើជាលេខ។ នៅ Python កំណែចាស់ type union អាចសរសេរ <code>Optional[int]</code> ឬ <code>Union</code> ពី typing។

## ២. Collection និង alias

~~~python
type UserRecord = dict[str, str | int]

def lookup(users: dict[int, UserRecord], user_id: int) -> UserRecord | None:
    return users.get(user_id)
~~~

Alias អោយឈ្មោះខ្លីសម្រាប់ type ស្មុគស្មាញ។ Syntax <code>type</code> alias គឺសម្រាប់ Python 3.12 ឡើង; ប្រសិនបើគម្រោងគាំទ្រកំណែចាស់ សូមប្រើ <code>TypeAlias</code> ដែលសមស្រប។

## ៣. Protocol

~~~python
from typing import Protocol

class HasName(Protocol):
    name: str

def greet(person: HasName) -> str:
    return f"សួស្តី {person.name}"
~~~

Protocol កំណត់សមត្ថភាពដែលត្រូវមាន ដោយមិនតម្រូវឱ្យ class ទទួល inheritance ពីវា។ វាអាចធ្វើអោយ function អាចប្រើជាមួយ type ច្រើន បើ type ទាំងនោះមាន interface ត្រឹមត្រូវ។

## ៤. Static checker និង runtime

Type hints ដោយខ្លួនឯងមិន validate data ពេល runtime ទេ។ ប្រើ static checker ក្នុង development ដើម្បីរកភាពមិនត្រូវគ្នា ហើយប្រើ validation ពិតសម្រាប់ទិន្នន័យពី user, file ឬ network។ កំណត់ version និង checker ក្នុង project ដើម្បីអោយក្រុមធ្វើការដូចគ្នា។

## លំហាត់

កំណត់ Protocol សម្រាប់ repository ដែលមាន method <code>get_by_id</code>។ សរសេរ function service ទទួល repository នោះ និង return record ឬ None។ បញ្ជាក់ type hints ហើយសរសេរ fake repository សាកល្បង។

## ប្រភព

[Python typing module](https://docs.python.org/3/library/typing.html)
