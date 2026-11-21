# មេរៀនទី ៦៖ Model និង database migration

## គោលដៅ

- បង្កើត model តំណាង entity ក្នុង database។
- យល់ field, constraint និង migration។
- បង្កើត schema change ដោយរក្សាប្រវត្តិ។

## ១. បង្កើត model

~~~python
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
~~~

Model class តំណាង table, field តំណាង column។ ជ្រើស field type តាមទិន្នន័យ និងកំណត់ validation ដូចជា <code>max_length</code>, <code>null</code>, <code>blank</code> និង default ដោយយល់ពីន័យ។

## ២. Migration

~~~bash
python manage.py makemigrations
python manage.py migrate
~~~

<code>makemigrations</code> បង្កើត migration file ពីការផ្លាស់ប្តូរ model។ <code>migrate</code> អនុវត្ត migration លើ database។ Migration គឺជាឯកសារកូដដែលត្រូវរក្សាទុកក្នុង Git ដើម្បីអោយ environment ផ្សេងអាចបង្កើត schema ដូចគ្នា។

## ៣. Field ដែលត្រូវបន្ថែមពេលមានទិន្នន័យ

បើបន្ថែម field ដែលមិនទទួល null ទៅ table មាន row រួច Django ត្រូវដឹងតម្លៃសម្រាប់ row ចាស់។ ជ្រើស default មានន័យ ឬធ្វើ migration ជាពីរដំណាក់កាល (បន្ថែម nullable, fill data, បន្ទាប់កំណត់ required)។ កុំជ្រើស default ដោយមិនគិតអាជីវកម្ម។

## ៤. Schema និង model behavior

ប្រើ <code>Meta</code> សម្រាប់ ordering/constraints តាមតម្រូវការ ហើយបង្កើត method សម្រាប់ behavior ដែលជាប់នឹង entity។ កុំប្រើ model method ធ្វើការងារ web request ឬ I/O មិនពាក់ព័ន្ធ។

## ជំហានសាកល្បង

1. បង្កើត Task model។
2. បង្កើត migration ហើយពិនិត្យឯកសារដែលបានបង្កើត។
3. អនុវត្ត migration។
4. បើក Django shell ហើយបង្កើត task ដោយ ORM។
5. ប្តូរ field មួយ បង្កើត migration ថ្មី និងអនុវត្ត។

## លំហាត់

បង្កើត model <code>Lesson</code> មាន title, slug, published និង created_at។ កំណត់ title required និង slug unique។ បង្កើត/អនុវត្ត migration ហើយកត់ថាតើ unique constraint ការពារអ្វី។

## ប្រភព

[Django models](https://docs.djangoproject.com/en/6.1/topics/db/models/) · [Migrations](https://docs.djangoproject.com/en/6.1/topics/migrations/)
