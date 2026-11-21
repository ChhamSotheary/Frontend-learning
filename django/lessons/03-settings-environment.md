# មេរៀនទី ៣៖ Settings, environment និង configuration

## គោលដៅ

- យល់ settings ដែល Django ត្រូវការដំណើរការ។
- បែងចែក configuration ពី source code។
- គ្រប់គ្រង secret និង environment តាមរបៀបសុវត្ថិភាព។

## ១. Settings សំខាន់ៗ

<code>INSTALLED_APPS</code> កំណត់ apps, <code>MIDDLEWARE</code> រៀបចំ request/response, <code>DATABASES</code> កំណត់ database, <code>TEMPLATES</code> កំណត់ engine និង <code>STATIC_URL</code> កំណត់ static asset URL។ អាន setting នីមួយៗមុនកែ។

## ២. DEBUG និង host

ក្នុង local development អាចប្រើ <code>DEBUG=True</code> ដើម្បីឃើញ diagnostic។ Production ត្រូវបិទ DEBUG ព្រោះ error page អាចបង្ហាញព័ត៌មានផ្ទៃក្នុង។ Production ក៏ត្រូវកំណត់ <code>ALLOWED_HOSTS</code> ឱ្យត្រូវនឹង hostname ដែលអនុញ្ញាត។

## ៣. Secret key និង environment variable

កុំ commit <code>SECRET_KEY</code> ពិត ឬ password។ ដាក់ configuration តាម environment variable ឬ secret manager ហើយបង្កើត key ខុសគ្នារវាង dev, staging និង production។ បើ key បែកធ្លាយ ត្រូវប្តូរវា និងពិនិត្យផលប៉ះពាល់លើ session/signature។

## ៤. កំណត់ environment ដោយមានសុវត្ថិភាព

គម្រោងអាចអានតម្លៃពី environment ក្នុង settings ប៉ុន្តែត្រូវបរាជ័យដោយសារច្បាស់ ប្រសិនបើ production setting ចាំបាច់អវត្តមាន។ កុំដាក់ fallback ដែលបើក DEBUG ឬប្រើ password ខ្សោយពេល deploy។ <code>.env</code> ជួយ local development ប៉ុណ្ណោះ ហើយត្រូវបញ្ចូលក្នុង <code>.gitignore</code>។

## ៥. ការរៀបចំ settings តាម environment

ពេល project ធំ អាចបំបែក common, development និង production settings។ រក្សា common defaults ឱ្យមានសុវត្ថិភាព ហើយកុំចម្លងបញ្ជី setting ជាច្រើនកន្លែងដោយគ្មានការគ្រប់គ្រង។

## លំហាត់

បង្កើត <code>.gitignore</code> ដែលមិនអោយ commit virtual environment, local database និង secret file។ សរសេរ README បញ្ជាក់ environment variables ដែលចាំបាច់ ដោយប្រើឈ្មោះឧទាហរណ៍ មិនបង្ហាញតម្លៃ secret ពិត។

## ប្រភព

[Django settings](https://docs.djangoproject.com/en/6.1/topics/settings/) · [Deployment checklist](https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/)
