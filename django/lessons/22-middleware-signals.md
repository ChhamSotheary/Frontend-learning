# មេរៀនទី ២២៖ Middleware, signal និង reusable app

## គោលដៅ

- យល់ទីតាំង middleware ក្នុង request/response cycle។
- ប្រើ signal សម្រាប់ការភ្ជាប់ event ដោយប្រុងប្រយ័ត្ន។
- រៀបចំ app ដែលអាចថែទាំ ឬប្រើឡើងវិញបាន។

## ១. Middleware

Middleware ជា layer ដែលរត់លើ request និង/ឬ response ជុំវិញ view។ Django មាន middleware សម្រាប់ security, session, authentication, messages និង CSRF។ លំដាប់ក្នុង <code>MIDDLEWARE</code> មានសារៈសំខាន់ ព្រោះ middleware មួយអាចពឹងលើ state ដែលមួយផ្សេងបង្កើត។

## ២. Custom middleware

បង្កើត middleware តែពេល behavior ពិតជាឆ្លងកាត់គ្រប់ view ដូចជា correlation id ឬ header policy។ កំណត់ callable <code>get_response</code> ហើយកុំធ្វើ database query ឬ network request ថ្លៃនៅរាល់ request ដោយគ្មានមូលហេតុ។

## ៣. Signals

Signal អនុញ្ញាត sender ជូនដំណឹង event ទៅ receiver ដោយមិនហៅផ្ទាល់។ វាអាចមានប្រយោជន៍សម្រាប់ decoupled side effect តូចៗ ប៉ុន្តែធ្វើអោយ control flow លាក់។ កុំប្រើ signal ជំនួស business flow ដែលគួរត្រូវអានឃើញក្នុង service។

## ៤. Register receiver

ដាក់ signal registration ក្នុង app config <code>ready()</code> ហើយភ្ជាប់ receiver ដោយ sender ជាក់លាក់។ ធ្វើ receiver ឱ្យ idempotent ព្រោះការចុះឈ្មោះអាចត្រូវហៅក្នុង test/reload។ កុំធ្វើការងារយូរ ឬផ្ញើសារដែលអាចបរាជ័យដោយមិនគ្រប់គ្រង។

## ៥. Reusable app

Reusable app គួរមាន namespace, migrations, templates/static ដាក់តាម namespace, tests, documentation និង configuration មិនពឹង project ម្ចាស់ខ្លាំង។ កំណត់ public API និង versioning មុនចែកចាយ។

## លំហាត់

បង្កើត middleware local ដែលបន្ថែម request id ទៅ response header ហើយសរសេរ test។ បន្ទាប់មកពិចារណាថា signal សមស្របសម្រាប់កត់ event ក្រោយបង្កើត taskឬគួរហៅ service ដោយផ្ទាល់។

## ប្រភព

[Middleware](https://docs.djangoproject.com/en/6.1/topics/http/middleware/) · [Signals](https://docs.djangoproject.com/en/6.1/topics/signals/)
