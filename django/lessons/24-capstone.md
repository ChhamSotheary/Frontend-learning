# មេរៀនទី ២៤៖ Capstone — បង្កើត web application ពេញលេញ

## គោលដៅ

ប្រមូលផ្តុំ Python និង Django ដើម្បីបង្កើត app ដែលមាន data model, user account, CRUD, validation, tests, security និង deployment plan។

## Project ដែលត្រូវបង្កើត

បង្កើត Task Board ដែល user អាចចុះឈ្មោះ/ចូលប្រើ, បង្កើត project និង task, កំណត់ due date/status, ចែក task ទៅសមាជិក និងស្វែងរកតាម filter។

## ជំហាន

1. សរសេរ requirement និង actor/permission matrix មុនចាប់ផ្តើមកូដ។
2. សម្រេច user model មុន migration ដំបូង; បង្កើត model project, membership និង task ជាមួយ constraint។
3. បង្កើត migration និង admin សម្រាប់ staff management។
4. បង្កើត URL/view/template សម្រាប់ login, dashboard, task list/detail និង CRUD។
5. បន្ថែម form validation និង ownership/group authorization។
6. បន្ថែម pagination, search និង query optimization បន្ទាប់ពីវាស់។
7. បន្ថែម JSON endpoint ប្រសិនបើ client ត្រូវការ ហើយបញ្ជាក់ auth/CSRF design។
8. សរសេរ tests សម្រាប់ model, form, URL, permission និង invalid input។
9. រៀប configuration សម្រាប់ local និង production ដោយមិនដាក់ secret ក្នុង Git។
10. សរសេរ README ដំឡើង, migration, run, test និង deployment checklist។

## គំរូ permission matrix

- Anonymous: មើលតែទំព័រ public និងចូលគណនី។
- Member: មើល project ដែលខ្លួនជាសមាជិក និងកែ task តាម role។
- Manager: បន្ថែម/ដកសមាជិក និងគ្រប់គ្រង project។
- Admin: គ្រប់គ្រងទិន្នន័យប្រព័ន្ធតាមសិទ្ធិ staff។

នេះគ្រាន់តែជាគំរូ។ អ្នកត្រូវកំណត់ច្បាប់ឱ្យស្របតម្រូវការ និងអនុវត្ត check ខាង server។

## Definition of done

- User មិនអាចចូលទិន្នន័យ project ផ្សេងដោយប្តូរ URL id។
- Input ត្រូវបាន validate នៅ server ហើយ CSRF នៅសកម្ម។
- Tests គ្របដណ្តប់ authorized និង denied cases។
- Query ត្រូវបានវាស់ និងគ្មាន N+1 ដែលដឹងច្បាស់នៅទំព័រចម្បង។
- Production secret, DEBUG និង ALLOWED_HOSTS ត្រូវបានកំណត់ដោយសុវត្ថិភាព។
- អ្នកអភិវឌ្ឍថ្មីអាច setup និងរត់ project តាម README។

## បន្តសិក្សា

ពេល capstone រួច សូមជ្រើសជំនាញមួយ៖ Django REST Framework, real-time/ASGI, database tuning, observability ឬ cloud deployment។ ពិនិត្យ version compatibility និង security updates មុនបន្ថែម dependency ថ្មី។
