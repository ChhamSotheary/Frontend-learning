# មេរៀនទី ២៦៖ Thread និង process

## គោលដៅ

- បែងចែក I/O-bound និង CPU-bound work។
- ស្គាល់ thread និង process pool។
- ចែករំលែក state ដោយប្រុងប្រយ័ត្ន និងវាស់លទ្ធផល។

## ១. ជ្រើសគំរូតាមប្រភេទការងារ

I/O-bound រង់ចាំ network, disk ឬ database; concurrency អាចប្រើពេលរង់ចាំទៅធ្វើការផ្សេង។ CPU-bound គណនាច្រើន; process ច្រើនអាចប្រើ core ច្រើន ប៉ុន្តែចំណាយពេលបង្កើត process និងបញ្ជូនទិន្នន័យ។

## ២. Thread សម្រាប់ការរង់ចាំ I/O

~~~python
from concurrent.futures import ThreadPoolExecutor
import time

def fetch_simulation(item):
    time.sleep(0.2)
    return f"បានបញ្ចប់ {item}"

with ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(fetch_simulation, range(8)))
~~~

ឧទាហរណ៍នេះគ្រាន់តែបង្ហាញការប្រើ thread; <code>sleep</code> ជំនួសការរង់ចាំ I/O។ កំណត់ចំនួន worker តាម resource និងកំណត់ timeout សម្រាប់ network task ពិត។

## ៣. Process សម្រាប់ CPU work

~~~python
from concurrent.futures import ProcessPoolExecutor

def square(value):
    return value * value

if __name__ == "__main__":
    with ProcessPoolExecutor() as pool:
        print(list(pool.map(square, range(10))))
~~~

Guard <code>if __name__ == "__main__"</code> សំខាន់សម្រាប់ការចាប់ផ្តើម process លើប្រព័ន្ធមួយចំនួន។ Function និងទិន្នន័យត្រូវអាច serialize ដើម្បីបញ្ជូនទៅ process ផ្សេង។

## ៤. Race condition

ពេល thread ច្រើនកែ shared state ដូចគ្នា លទ្ធផលអាចពឹងលើលំដាប់នៃការរត់។ ប្រើ lock ឬរចនាអោយការងារមិនចែករំលែក mutable state។ កុំសន្មតថា thread-safe ដោយសារតែការសាកល្បងតែមួយលើកដំណើរការ។

## លំហាត់

វាស់ពេលធ្វើ simulated I/O ជាប់គ្នា និងដោយ ThreadPoolExecutor។ បន្ទាប់មកសរសេរការគណនា CPU តូចមួយ ហើយប្រៀបធៀប process pool។ កត់ថាការបង្កើត worker មាន overhead ដែរឬទេ។

## ប្រភព

[concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html) · [threading](https://docs.python.org/3/library/threading.html)
