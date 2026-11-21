# មេរៀនទី ៤៖ URL, view និង HTTP request/response

## គោលដៅ

- តាមដាន request ពី URL ទៅ view និង response។
- សរសេរ function-based view។
- ប្រើ URL parameter និងដាក់ route ក្នុង app។

## ១. Request flow

Browser ផ្ញើ HTTP request ទៅ Django។ Middleware ដំណើរការ request ជាមុន។ URL resolver ស្វែងរក pattern ដែលត្រូវគ្នា ហើយហៅ view។ View អាចអាន database ឬហៅ service ហើយបង្កើត response។ Response ត្រឡប់កាត់ middleware ទៅ browser។

## ២. សរសេរ view

~~~python
from django.http import HttpResponse

def home(request):
    return HttpResponse("សួស្តីពី Django")
~~~

<code>request</code> មានព័ត៌មាន HTTP ដូចជា method, path និង user។ View ត្រូវត្រឡប់ response object។ កុំទទួល input ទាំងអស់ដោយទុកចិត្ត; validate មុនប្រើ។

## ៣. URL configuration

ក្នុង <code>pages/urls.py</code> កំណត់ path ទៅ view ហើយក្នុង project <code>urls.py</code> ប្រើ <code>include()</code> ដើម្បីភ្ជាប់ route របស់ app។ ដាក់ឈ្មោះ route ដូចជា <code>name="home"</code> ហើយប្រើ reverse lookup ជំនួស hardcode URL។

~~~python
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
]
~~~

## ៤. URL parameter និង method

Route អាចចាប់តម្លៃ ដូចជា <code>path("items/&lt;int:item_id&gt;/", ...)</code> ហើយ Django បញ្ជូនវាជា argument ទៅ view។ ពិនិត្យ HTTP method: ការផ្លាស់ប្តូរទិន្នន័យគួរត្រូវធ្វើតាម POST/PUT/PATCH/DELETE តាម design; GET មិនគួរមាន side effect។

## ៥. Status code

ប្រើ response status សមស្រប៖ 200 ជោគជ័យ, 201 បង្កើតថ្មី, 302 redirect, 400 request មិនត្រឹមត្រូវ, 403 មិនមានសិទ្ធិ, 404 រកមិនឃើញ, 500 កំហុស server។ ជ្រើសតាមអត្ថន័យ មិនប្រើ 200 សម្រាប់គ្រប់ករណី។

## លំហាត់

បង្កើត route <code>/hello/&lt;name&gt;/</code> ហើយបង្ហាញសារសួស្តី។ បន្ថែម route named <code>home</code> និងបង្កើត link ទៅវាដោយ reverse URL ក្នុង template មេរៀនបន្ទាប់។

## ប្រភព

[URL dispatcher](https://docs.djangoproject.com/en/6.1/topics/http/urls/) · [Writing views](https://docs.djangoproject.com/en/6.1/topics/http/views/)
