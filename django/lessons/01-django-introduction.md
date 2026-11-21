# មេរៀនទី ១៖ ស្គាល់ Django និងបង្កើត project

## គោលដៅ

- យល់តួនាទី Django ជា web framework របស់ Python។
- ដំឡើង Django ក្នុង virtual environment។
- បង្កើត project ហើយរត់ development server។

## ១. Django ជាអ្វី?

Django ជា framework សម្រាប់បង្កើត web application។ វាផ្តល់ URL routing, view, template, database ORM, form, authentication និង admin ដែលភ្ជាប់គ្នាជាប្រព័ន្ធ។ វាជួយកាត់បន្ថយការសរសេរផ្នែកដដែលៗ ប៉ុន្តែអ្នកនៅតែត្រូវយល់ HTTP, security និងការរចនាទិន្នន័យ។

## ២. បង្កើត environment និងដំឡើង

ក្នុង folder project បង្កើត virtual environment ហើយ activate តាម OS។ បន្ទាប់មក៖

~~~bash
python -m pip install "Django~=6.1"
python -m django --version
~~~

ការប្រើ <code>python -m pip</code> ធានាថាកំពុងដំឡើងទៅ interpreter ដែលបាន activate។ Version range ជួយរក្សាជំនាន់ major/minor ដែលមេរៀនប្រើ ប៉ុន្តែគម្រោងពិតគួរកត់ lock/dependency policy។

## ៣. បង្កើត និងរត់ project

~~~bash
django-admin startproject config .
python manage.py runserver
~~~

បើក URL local ដែល terminal បង្ហាញ។ Development server បង្ហាញទំព័រស្វាគមន៍ បើ project ចាប់ផ្តើមបាន។ ចុច Ctrl+C ដើម្បីបញ្ឈប់។

## ៤. យល់ពីឯកសារដំបូង

- <code>manage.py</code> ជា command entry point សម្រាប់ការងារអភិវឌ្ឍ។
- <code>config/settings.py</code> កំណត់ app, database, middleware និង configuration។
- <code>config/urls.py</code> ភ្ជាប់ URL ទៅ view។
- <code>asgi.py</code> និង <code>wsgi.py</code> ជា entry point សម្រាប់ server interface។

## ៥. កំហុសទូទៅ

- រត់ command ពី folder ខុស ដូច្នេះរក <code>manage.py</code> មិនឃើញ។
- ដំឡើង Django នៅ Python environment មួយ ប៉ុន្តែរត់ project ពី environment ផ្សេង។
- ចាត់ទុក <code>runserver</code> ជា server សម្រាប់ internet production។ វាត្រូវប្រើតែ local development។

## លំហាត់

បង្កើត project ឈ្មោះ <code>learning_site</code> ក្នុង folder ថ្មី។ ពិនិត្យ version និងរត់ server។ បិទ server រួចពិពណ៌នាតួនាទីរបស់ <code>settings.py</code> និង <code>urls.py</code> ដោយពាក្យខ្លួនឯង។

## ប្រភព

[Django installation](https://docs.djangoproject.com/en/6.1/intro/install/) · [Django tutorial: Part 1](https://docs.djangoproject.com/en/6.1/intro/tutorial01/)
