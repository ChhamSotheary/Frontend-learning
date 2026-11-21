# គម្រោង Django៖ Task Board

## គោលបំណង

បង្កើត web application ដើម្បីរៀបចំ project និង task សម្រាប់ក្រុមតូច។ គម្រោងនេះអនុវត្ត CRUD, ORM, form, authentication, permission, template, test និង deployment safety។

## Model ស្នូល

- Project: name, description, created_at, owner។
- Membership: project, user, role; ត្រូវមាន unique constraint លើ project/user។
- Task: project, title, description, status, due_date, assignee, created_at។

សម្រេច on-delete behavior មុន migration ហើយចងចាំថា user អាចជាសមាជិក project មួយច្រើន។

## Flow អ្នកប្រើ

1. User login ហើយមើល project ដែលខ្លួនជាសមាជិក។
2. Manager បង្កើត project និងបន្ថែមសមាជិក។
3. Member បង្កើត task និងកំណត់ status/due date។
4. Member មើល និងកែ task ក្នុង project ដែលខ្លួនអាចចូល។
5. Manager archive project ឬកែ membership។

## ជំហានអនុវត្ត

1. កំណត់ permission matrix និង URL map។
2. បង្កើត custom user ប្រសិនបើចាំបាច់ មុនបង្កើត migration ដំបូង។
3. សរសេរ models, constraints និង migrations។
4. ចុះឈ្មោះ admin សម្រាប់ project និង task។
5. បង្កើត login/logout, dashboard និង CRUD forms។
6. កំណត់ queryset តាម membership នៅ server-side។
7. បន្ថែម search, filter និង pagination។
8. សរសេរ tests សម្រាប់ member, manager, anonymous និង user ក្រៅ project។
9. វាស់ query count ហើយប្រើ select_related/prefetch_related តាមតម្រូវការ។
10. រៀប README និង production checklist។

## ករណីសាកល្បងសំខាន់ៗ

- User A មិនអាចមើល Task របស់ Project របស់ User B ដោយប្តូរ id ក្នុង URL។
- Member មិនអាចបន្ថែម/ដកសមាជិក ប្រសិនបើ role មិនអនុញ្ញាត។
- Form បដិសេធ title ទទេ និង due date ទម្រង់មិនត្រឹមត្រូវ។
- Anonymous ត្រូវ redirect ទៅ login ឬទទួល 403/404 តាម design។
- Migration បង្កើត constraint ដែលការពារសមាជិកស្ទួន។

## សុវត្ថិភាព

រក្សា CSRF, validate input, escape template output, ប្រើ HTTPS ក្នុង production និងមិន commit secret។ ការលាក់ action ក្នុង UI មិនជំនួស server authorization check ទេ។

## លទ្ធផលដែលរំពឹង

អ្នកប្រើអាចគ្រប់គ្រង task តាមសិទ្ធិរបស់ខ្លួន ហើយ test បញ្ជាក់ថាទិន្នន័យរបស់ project ផ្សេងមិនអាចចូលបាន។ README ពិពណ៌នារបៀប setup និង limitation ដែលនៅសល់។
