# មេរៀនទី ២៖ Project, app និងរចនាសម្ព័ន្ធឯកសារ

## គោលដៅ

- បែងចែក Django project និង app។
- បង្កើត app និងចុះឈ្មោះវាក្នុង settings។
- រៀបចំ feature ឱ្យមានទំនួលខុសត្រូវច្បាស់។

## ១. Project និង app មានន័យអ្វី?

Project ជា configuration និងការភ្ជាប់ app របស់ website ទាំងមូល។ App ជាផ្នែកមុខងារមួយ ដូចជា blog, accounts ឬ inventory។ Website មួយអាចមាន app ច្រើន ហើយ app មួយអាចប្រើឡើងវិញបាន ប្រសិនបើវាមិនពឹង project ជាក់លាក់ខ្លាំងពេក។

## ២. បង្កើត app

~~~bash
python manage.py startapp pages
~~~

ចុះឈ្មោះក្នុង <code>INSTALLED_APPS</code> នៃ settings៖

~~~python
INSTALLED_APPS = [
    # Django built-in apps...
    "pages",
]
~~~

សម្រាប់ app ដែលមាន <code>apps.py</code> configuration class អាចប្រើ dotted path ដូចជា <code>pages.apps.PagesConfig</code>។

## ៣. រចនាសម្ព័ន្ធ app

- <code>models.py</code>: database model។
- <code>views.py</code>: request handling និង response។
- <code>urls.py</code>: route របស់ app; បង្កើតឯកសារនេះដោយខ្លួនឯង។
- <code>admin.py</code>: ចុះឈ្មោះ model ក្នុង admin។
- <code>tests.py</code>: tests។
- <code>apps.py</code>: app configuration។

កុំដាក់ logic ទាំងអស់ក្នុង view។ ពេល app ធំ អ្នកអាចរៀបចំ module បន្ថែមដូចជា forms, services ឬ selectors តាមតម្រូវការ ជៀសការបំបែកមុនពេលមានភាពស្មុគស្មាញពិត។

## ៤. ភ្ជាប់ URL របស់ app

បង្កើត <code>pages/urls.py</code> រួច include ក្នុង project URL configuration។ មេរៀនបន្ទាប់នឹងពន្យល់ flow និង namespace លម្អិត។

## លំហាត់

បង្កើត app <code>blog</code> និង app <code>accounts</code>។ ចុះឈ្មោះក្នុង settings ហើយកត់ថា feature ណាគួរទៅទីណា។ កុំបង្កើត app តូចៗច្រើនពេក ប្រសិនបើ feature របស់វាមិនឯករាជ្យ។

## ប្រភព

[Django tutorial: Creating the Polls app](https://docs.djangoproject.com/en/6.1/intro/tutorial01/)
