# វគ្គ Django ពីមូលដ្ឋានដល់កម្រិតខ្ពស់

វគ្គនេះបន្តពី Python ហើយបង្រៀនការបង្កើត web application ជាមួយ Django តាមលំដាប់។ មេរៀនមានគោលដៅ កូដឧទាហរណ៍ ជំហានសាកល្បង កំហុសទូទៅ និងលំហាត់។ ឧទាហរណ៍ប្រើ Django 6.1 និង Python 3.15; Django 6.1 គាំទ្រ Python 3.12–3.15 តាម release 6.1.3។ ពិនិត្យ compatibility និងការណែនាំបច្ចុប្បន្ននៅឯកសារផ្លូវការមុនចាប់ផ្តើមគម្រោង។

## តម្រូវការមុន

- រៀន Python មូលដ្ឋាន៖ function, class, module, virtual environment, exception, file និង SQL។
- ស្គាល់ HTML មូលដ្ឋាន និង HTTP request/response។
- រៀបចំ Python 3.15, editor និង terminal។

## រៀបចំបរិស្ថាន

~~~bash
python -m venv .venv
~~~

Windows PowerShell៖

~~~powershell
.\.venv\Scripts\Activate.ps1
~~~

Linux/macOS៖

~~~bash
source .venv/bin/activate
~~~

~~~bash
python -m pip install "Django~=6.1"
python -m django --version
~~~

កំណត់ dependency ក្នុង project ហើយកុំដាក់ virtual environment ឬ secret ទៅ repository។ Django development server គឺសម្រាប់អភិវឌ្ឍក្នុងម៉ាស៊ីន local ប៉ុណ្ណោះ មិនមែន production server ទេ។

## ផែនទីមេរៀន

### ផ្នែកទី ១៖ ចាប់ផ្តើម និង request flow

1. [ស្គាល់ Django និងបង្កើត project](lessons/01-django-introduction.md)
2. [Project, app និងរចនាសម្ព័ន្ធឯកសារ](lessons/02-project-and-apps.md)
3. [Settings, environment និង configuration](lessons/03-settings-environment.md)
4. [URL, view និង HTTP request/response](lessons/04-urls-views-http.md)
5. [Template, context និង static files](lessons/05-templates-static.md)
6. [Model និង database migration](lessons/06-models-migrations.md)

### ផ្នែកទី ២៖ ទិន្នន័យ និង form

7. [ORM, QuerySet និងការស្វែងរកទិន្នន័យ](lessons/07-orm-querysets.md)
8. [Django Admin](lessons/08-django-admin.md)
9. [Form និង validation](lessons/09-forms-validation.md)
10. [CRUD និង class-based views](lessons/10-crud-class-based-views.md)
11. [ទំនាក់ទំនង model និង constraint](lessons/11-model-relations.md)
12. [User, authentication និង login](lessons/12-authentication.md)

### ផ្នែកទី ៣៖ សិទ្ធិ និង Web features

13. [Group, permission និង authorization](lessons/13-permissions-groups.md)
14. [Session, cookie, message និង CSRF](lessons/14-sessions-cookies-csrf.md)
15. [File upload និង email](lessons/15-uploads-email.md)
16. [JSON response និង API design](lessons/16-json-api.md)
17. [Testing Django application](lessons/17-testing.md)
18. [សុវត្ថិភាព Web app](lessons/18-security.md)

### ផ្នែកទី ៤៖ កម្រិតខ្ពស់ និងដាក់ឱ្យប្រើ

19. [Performance, cache និង query optimization](lessons/19-performance-cache.md)
20. [Asynchronous Django](lessons/20-async-django.md)
21. [Background jobs និងការងារតាមពេល](lessons/21-background-jobs.md)
22. [Middleware, signal និង reusable app](lessons/22-middleware-signals.md)
23. [Production deployment និងប្រតិបត្តិការ](lessons/23-deployment.md)
24. [Capstone៖ បង្កើត web application ពេញលេញ](lessons/24-capstone.md)

## គម្រោងអនុវត្ត

- [គម្រោង៖ Task Board ជាមួយ Django](projects/django-task-board.md)

## ឯកសារផ្លូវការ

- [Django 6.1 documentation](https://docs.djangoproject.com/en/6.1/)
- [Django installation guide](https://docs.djangoproject.com/en/6.1/intro/install/)
- [Django tutorial](https://docs.djangoproject.com/en/6.1/intro/tutorial01/)
- [Django 6.1 release notes និង Python compatibility](https://docs.djangoproject.com/en/6.1/releases/6.1/)

## របៀបរៀន

សរសេរកូដដោយខ្លួនឯងតាមលំដាប់។ សម្រាប់មេរៀន model, migration, authentication និង permission សូមបង្កើត database ថ្មីសម្រាប់សាកល្បង ហើយកុំប្រើទិន្នន័យផ្ទាល់ខ្លួន។ ពេលដាក់ production ត្រូវបំពេញ security checklist របស់ Django សម្រាប់ version ដែលប្រើ។
