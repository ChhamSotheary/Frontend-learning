# មេរៀនទី ១៧៖ Testing Django application

## គោលដៅ

- សរសេរ test សម្រាប់ model, view និង permission។
- ប្រើ Django test client ដើម្បីសាក HTTP flow។
- បែងចែក unit test និង integration test។

## ១. Test មូលដ្ឋាន

~~~python
from django.test import TestCase
from django.urls import reverse

class HomeViewTests(TestCase):
    def test_home_returns_success(self):
        response = self.client.get(reverse("home"))
        self.assertEqual(response.status_code, 200)
~~~

<code>TestCase</code> ផ្តល់ test database ដាច់ដោយឡែក និង client សម្រាប់ធ្វើ request។ <code>reverse()</code> ប្រើ route name ដើម្បីកុំ hardcode URL។

## ២. Model និង form test

សាក model string representation, constraints និង behavior។ សាក form ទាំងទិន្នន័យ valid និង invalid ហើយពិនិត្យ error ជាក់លាក់។ Test គួរបញ្ជាក់ behavior មិនមែនចម្លង implementation។

## ៣. Auth និង permission test

ប្រើ <code>client.force_login(user)</code> សម្រាប់ត្រៀម user ក្នុង test។ សាក anonymous, authorized និង unauthorized cases។ សម្រាប់ object ownership ត្រូវសាកថា user A មិនអាចមើល/កែ record របស់ user B។

## ៤. Test database និង external service

Django test runner បង្កើត database សាកល្បង ហើយសម្អាតក្រោយរួច។ កុំអោយ test ផ្ញើ email ពិត ឬហៅ API ខាងក្រៅដោយមិនគ្រប់គ្រង។ ប្រើ test backend, fake ឬ mock នៅ boundary ដែលសមស្រប។

## ៥. រត់ test

~~~bash
python manage.py test
~~~

រៀប test file/package តាម app។ Test ដែលបរាជ័យគួរផ្តល់សារ និង assertion ច្បាស់ ដើម្បីជួយរក regression។

## លំហាត់

សរសេរ test សម្រាប់ task list: មិន login ត្រូវ redirect, login user មើល task របស់ខ្លួន, task របស់អ្នកផ្សេងមិនបង្ហាញ។ សរសេរ test form បដិសេធ title ទទេ។

## ប្រភព

[Django testing tools](https://docs.djangoproject.com/en/6.1/topics/testing/)
