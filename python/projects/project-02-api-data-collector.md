# គម្រោងទី ២៖ កម្មវិធីទាញទិន្នន័យពី API

## គោលដៅ

អនុវត្ត HTTP, JSON, validation, timeout, retry policy, logging និងរក្សាទុកលទ្ធផល។

## ជ្រើសប្រភពទិន្នន័យ

- ជ្រើស API សាធារណៈដែលមានឯកសារ និងអនុញ្ញាតការប្រើប្រាស់។
- អាន rate limit និងលក្ខខណ្ឌប្រើប្រាស់។
- ប្រសិនបើត្រូវការ token សូមប្រើ environment variable; កុំដាក់ token ក្នុង repository។

## ជំហានអនុវត្ត

1. បង្កើត client function ដែលទទួល URL និង timeout។
2. ពិនិត្យ status code និង content type មុន parse response។
3. គ្រប់គ្រង connection error, timeout, HTTP error និង JSON error ដោយករណីដាច់ដោយឡែក។
4. Validate field និង type ដែលកម្មវិធីត្រូវការ; កុំសន្មតថា API response មិនប្រែប្រួល។
5. បម្លែងទិន្នន័យទៅ schema ខាងក្នុងដែលមានឈ្មោះច្បាស់។
6. រក្សាទុកទៅ CSV ឬ SQLite ហើយបន្ថែម timestamp ពេលទាញយក។
7. សរសេរ test ដោយបំបែក HTTP client ឬប្រើ fake response ដើម្បីកុំអោយ test អាស្រ័យលើ network។
8. បន្ថែម CLI ដែលកំណត់ប្រភព និងទីតាំង output។

## សុវត្ថិភាព និងភាពធន់

- កំណត់ timeout និងទំហំ response ដែលទទួលយក។
- Retry មានកម្រិតសម្រាប់កំហុសបណ្តោះអាសន្នប៉ុណ្ណោះ។
- កុំ retry POST side effect ដោយគ្មាន idempotency key ឬការរចនាដែលមានសុវត្ថិភាព។
- កុំ log token ឬទិន្នន័យផ្ទាល់ខ្លួនដែលមិនចាំបាច់។
- កត់ប្រភព និងពេលទាញយក ដើម្បីអាចតាមដានទិន្នន័យ។

## លក្ខខណ្ឌបញ្ចប់

កម្មវិធីអាចទាញទិន្នន័យ សម្គាល់កំហុសដោយមិន crash ដោយស្ងាត់ រក្សាទិន្នន័យតាម schema និងអាច test ដោយមិនចាំបាច់ពឹង internet។
