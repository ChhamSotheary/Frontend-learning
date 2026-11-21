# មេរៀនទី ៦៖ List និង Tuple

## គោលដៅ

- បង្កើត និងកែប្រែ list។
- ចូលប្រើធាតុដោយ index និង slice។
- ជ្រើស list ឬ tuple តាមតម្រូវការទិន្នន័យ។

## ១. បង្កើត list

~~~python
lessons = ["variables", "strings", "lists"]
print(lessons[0])
print(lessons[-1])
print(lessons[0:2])
~~~

List រក្សាលំដាប់ និងអាចកែប្រែបាន។ Index ចាប់ពីសូន្យ ហើយ slice មិនរួម index ចុង។ ប្រសិនបើ list ទទេ ការចូល <code>items[0]</code> បង្កើត <code>IndexError</code> ដូច្នេះពិនិត្យប្រវែង ឬប្រើ loop។

## ២. បន្ថែម កែ និងលុប

~~~python
tasks = ["អាន", "សរសេរកូដ"]
tasks.append("អនុវត្ត")      # បន្ថែមចុងក្រោយ
tasks.insert(1, "កត់ចំណាំ") # បញ្ចូលតាមទីតាំង
tasks[0] = "អានឯកសារ"       # កែធាតុ
removed = tasks.pop()        # ដក និងទទួលធាតុចុងក្រោយ
tasks.remove("កត់ចំណាំ")     # ដកតាមតម្លៃដំបូងដែលត្រូវគ្នា
~~~

<code>append()</code> បន្ថែមធាតុមួយ។ <code>extend()</code> បន្ថែមធាតុពី iterable ផ្សេងទៀត។ ប្រយ័ត្ន៖ <code>remove()</code> បង្កើត <code>ValueError</code> ប្រសិនបើរកមិនឃើញ។

## ៣. តម្រៀប និង copy

<code>items.sort()</code> តម្រៀប list ដើម និងត្រឡប់ <code>None</code>។ <code>sorted(items)</code> ត្រឡប់ list ថ្មី។ កំណត់ <code>key=</code> ដើម្បីគ្រប់គ្រងលក្ខណៈតម្រៀប។ Assignment ដូចជា <code>copy = items</code> មិនចម្លង list ទេ តែឱ្យឈ្មោះពីរចង្អុលទៅ list ដដែល; ប្រើ <code>items.copy()</code> សម្រាប់ shallow copy។

## ៤. Tuple

~~~python
point = (10, 20)
x, y = point
print(x, y)
~~~

Tuple មានលំដាប់ ប៉ុន្តែមិនអាចកែធាតុក្រោយបង្កើតបាន។ វាសមស្របសម្រាប់កញ្ចប់តម្លៃថេរ ដូចជា coordinate ឬលទ្ធផលពី function។ Tuple ដែលមានធាតុមួយត្រូវមាន comma: <code>(5,)</code>។

## ៥. វិធីជ្រើស

ប្រើ list នៅពេលបញ្ជីត្រូវបន្ថែម/ដក ឬកែធាតុ។ ប្រើ tuple នៅពេលក្រុមតម្លៃមានន័យថេរ។ កុំប្រើ tuple ដើម្បីធ្វើពុតថាទិន្នន័យខាងក្នុង immutable ប្រសិនបើ tuple នោះផ្ទុក object ដែលកែប្រែបាន។

## លំហាត់

បង្កើតបញ្ជីកិច្ចការ ៤។ បន្ថែមកិច្ចការថ្មី ដកកិច្ចការមួយ និងបង្ហាញលេខរៀងកិច្ចការដោយ <code>enumerate()</code>។

## ប្រភព

[Python Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
