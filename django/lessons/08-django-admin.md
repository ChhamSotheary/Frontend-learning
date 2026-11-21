# មេរៀនទី ៨៖ Django Admin

## គោលដៅ

- បើក admin site និងបង្កើត superuser សម្រាប់ local development។
- ចុះឈ្មោះ model និងកំណត់ការបង្ហាញក្នុងបញ្ជី។
- យល់ថា admin មិនមែនជំនួស public interface ឬ permission design ទេ។

## ១. បង្កើត admin account

បន្ទាប់ពី migrate database សូមបង្កើត superuser៖

~~~bash
python manage.py createsuperuser
~~~

ប្រើ account សម្រាប់ local development និងកុំប្រើ password ខ្សោយ។ ទំព័រ admin ជាឧបករណ៍គ្រប់គ្រងទិន្នន័យសម្រាប់ staff ដែលមានសិទ្ធិ។

## ២. ចុះឈ្មោះ model

~~~python
from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "is_done", "created_at")
    list_filter = ("is_done",)
    search_fields = ("title",)
~~~

<code>list_display</code> កំណត់ជួរឈរ, <code>list_filter</code> បន្ថែម filter, និង <code>search_fields</code> កំណត់ field សម្រាប់ស្វែងរក។ បន្ថែមតែ field ដែលសមស្រប និង query មាន performance ល្អ។

## ៣. Form ក្នុង admin

Admin អាចបង្ហាញ field order, read-only field និង inline relation។ ប្រើវាដើម្បីអោយ staff គ្រប់គ្រងទិន្នន័យដែលមាន model រួច។ កុំបើក field ដែលអនុញ្ញាត staff កែទិន្នន័យប្រព័ន្ធរសើបដោយគ្មានមូលហេតុ។

## ៤. Admin និង permission

Superuser មានសិទ្ធិខ្ពស់ខ្លាំង។ បង្កើត staff account និង group ដោយសិទ្ធិតិចបំផុត។ ការលាក់ menu មិនមែនជាការការពារទិន្នន័យទេ; ត្រូវប្រើ Django permissions និងពិនិត្យការអនុញ្ញាតលើ action ផងដែរ។

## ៥. ពេលមិនគួរប្រើ admin

Public workflow ដែលមាន validation ពិសេស ឬ UI សម្រាប់អតិថិជន គួរបង្កើត view/form/API ផ្ទាល់។ Admin មានគោលបំណង internal trusted staff និងមិនគួរត្រូវបានកែអោយក្លាយជាគ្រប់ UI របស់ app។

## លំហាត់

ចុះឈ្មោះ <code>Task</code> ក្នុង admin។ បន្ថែម filter និង search។ បង្កើត staff user សម្រាប់សាកល្បង ហើយពិនិត្យថាគាត់អាចធ្វើអ្វីបានមុនផ្តល់ permission។

## ប្រភព

[Django Admin site](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/)
