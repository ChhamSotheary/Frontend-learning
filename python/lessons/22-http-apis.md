# មេរៀនទី ២២៖ HTTP request និង API

## គោលដៅ

- យល់ពី request, response, status code និង JSON API។
- ផ្ញើ HTTP request ដោយមាន timeout។
- គ្រប់គ្រង network, HTTP និង JSON errors ដោយច្បាស់។

## ១. Request និង response

Client ផ្ញើ method (GET, POST ជាដើម), URL, headers និងអាចមាន body។ Server ត្រឡប់ status code, headers និង body។ GET ជាទូទៅសម្រាប់អាន; POST សម្រាប់បង្កើត/ដំណើរការ។ កុំប្រើ method ដោយមិនយល់ side effect និងការផ្ទៀងផ្ទាត់សិទ្ធិ។

## ២. ឧទាហរណ៍ជាមួយ urllib

~~~python
from urllib.request import Request, urlopen
import json

request = Request("https://api.example.com/items", headers={"Accept": "application/json"})
with urlopen(request, timeout=10) as response:
    data = json.loads(response.read().decode("utf-8"))
    print(response.status, data)
~~~

នេះជាទម្រង់សម្រាប់ស្គាល់ standard library។ Project ជាក់ស្តែងអាចប្រើ HTTP client library ដូចជា <code>requests</code> ឬ <code>httpx</code> ប៉ុន្តែត្រូវបន្ថែម dependency និងពិនិត្យឯកសាររបស់វា។

## ៣. Timeout និង error handling

Network អាចយឺត ផ្តាច់ ឬត្រឡប់ error។ កំណត់ timeout ជានិច្ច។ បែងចែក connection error, HTTP error និង JSON decode error ដើម្បីបង្ហាញមូលហេតុត្រឹមត្រូវ។ កំណត់ retry មានកម្រិត និង backoff សម្រាប់ករណីសមស្រប; កុំ retry request ដែលអាចបង្កើត side effect ដោយគ្មាន idempotency។

## ៤. API key និងទិន្នន័យមិនទុកចិត្ត

កុំដាក់ API token ក្នុង source code, README ឬ commit។ អានពី environment variable ឬ secret manager ហើយកុំ print token ក្នុង log។ ទិន្នន័យពី API ត្រូវ validate មុនយកទៅប្រើ។

## ជំហានអនុវត្ត

1. ប្រើ public API ដែលមានការអនុញ្ញាត និងពិនិត្យលក្ខខណ្ឌប្រើប្រាស់។
2. ផ្ញើ GET request ជាមួយ timeout។
3. ពិនិត្យ status និង content type។
4. Parse JSON ហើយ validate field ដែលត្រូវការ។
5. កត់ត្រា error message ដោយមិនបង្ហាញ secret។

## លំហាត់

រចនា function <code>fetch_items(url)</code> ដែលមាន timeout កំណត់ច្បាស់, បដិសេធ response មិនជោគជ័យ និង return list ដែល validate រួច។ បន្ថែមការពិពណ៌នាថាតើ exception ណាខ្លះត្រូវបោះឡើង។

## ប្រភព

[urllib.request](https://docs.python.org/3/library/urllib.request.html) · [urllib.error](https://docs.python.org/3/library/urllib.error.html)
