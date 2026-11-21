# មេរៀនទី ១៩៖ Performance, cache និង query optimization

## គោលដៅ

- វាស់មុនកែលម្អ។
- រក N+1 query និងប្រើ ORM optimization។
- ប្រើ cache ដោយគិតពី invalidation និងភាពត្រឹមត្រូវ។

## ១. វាស់មូលហេតុ

កំណត់ថាយឺតត្រង់ database, template, network ឬ external service។ ប្រើ Django Debug Toolbar ក្នុង development ឬ query logging ដែលគ្រប់គ្រងបាន។ កុំបើក detailed SQL logging ជាសាធារណៈក្នុង production។

## ២. កាត់បន្ថយ query

ប្រើ <code>select_related()</code> សម្រាប់ ForeignKey/OneToOne និង <code>prefetch_related()</code> សម្រាប់ reverse/many-to-many។ ប្រើ <code>only()</code>/<code>defer()</code> តែពេលវាស់បង្ហាញថាមានអត្ថប្រយោជន៍ ព្រោះ field ដែលបាន defer អាចបង្ក query បន្ថែមពេលចូលប្រើ។

## ៣. Pagination និង database index

កុំផ្ញើ row រាប់ម៉ឺនទៅ template ក្នុង request តែមួយ; បន្ថែម pagination និង filter។ បន្ថែម index លើ field ដែល query ញឹកញាប់ ប៉ុន្តែ index ធ្វើអោយ write និង storage មានថ្លៃបន្ថែម។ ពិនិត្យ query plan និង workload មុនបន្ថែម។

## ៤. Cache

Django មាន cache framework ជាមួយ backend ផ្សេងៗ។ Cache អាចលាក់ latency ប៉ុន្តែបង្កទិន្នន័យចាស់ បើ invalidation ខុស។ កំណត់ key ឱ្យរាប់បញ្ចូល user/permission ពេលទិន្នន័យមិនដូចគ្នាសម្រាប់គ្រប់គ្នា។ កុំ cache response ឯកជនជាសាធារណៈ។

## ៥. Transaction និង bottleneck

កាត់ database round trips និងចង្អៀត transaction duration។ កុំរក្សា transaction បើកខណៈធ្វើ network call យូរ។ ប្រើ <code>transaction.atomic()</code> ជុំវិញការកែដែលត្រូវ atomic។

## លំហាត់

បង្ហាញ task និង category ក្នុង list។ រាប់ query មុន/ក្រោយ <code>select_related</code>។ បន្ថែម pagination ហើយសរសេរថាតើអ្វីគួរ cache និងតើ invalidation ធ្វើនៅពេលណា។

## ប្រភព

[Database optimization](https://docs.djangoproject.com/en/6.1/topics/db/optimization/) · [Django cache framework](https://docs.djangoproject.com/en/6.1/topics/cache/)
