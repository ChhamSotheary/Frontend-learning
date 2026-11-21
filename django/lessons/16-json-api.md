# មេរៀនទី ១៦៖ JSON response និង API design

## គោលដៅ

- បង្កើត endpoint ត្រឡប់ JSON។
- ផ្ទៀងផ្ទាត់ method, input និង response status។
- យល់ពេលណា Django core គ្រប់គ្រាន់ និងពេលណាត្រូវ API framework បន្ថែម។

## ១. JsonResponse

~~~python
from django.http import JsonResponse

def health(request):
    return JsonResponse({"status": "ok"})
~~~

<code>JsonResponse</code> បម្លែង Python mapping ទៅ JSON និងកំណត់ content type។ កុំបញ្ជូន model object ផ្ទាល់; បង្កើត dictionary ដែលបង្ហាញតែ field ដែល API គួរផ្សព្វផ្សាយ។

## ២. ពិនិត្យ method និង input

~~~python
import json
from django.http import JsonResponse

def create_note(request):
    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)
    try:
        payload = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
~~~

បន្ទាប់ពី parse ត្រូវ validate ថា payload មាន object រំពឹងទុក, field type ត្រឹមត្រូវ និងទំហំមិនលើសកំណត់។ កុំចាត់ JSON ដែល parse បានថាទុកចិត្តរួច។

## ៣. Status និង error shape

ប្រើ status code តាមលទ្ធផល ហើយរក្សា error response ឱ្យមានរចនាសម្ព័ន្ធថេរ។ កុំបង្ហាញ exception ឬ SQL detail ទៅ client។ កំណត់ pagination, filtering និង versioning សម្រាប់ API ដែលមានការប្រើប្រាស់។

## ៤. Authentication និង CSRF

Browser session API ត្រូវគោរព CSRF protection។ Token-based API មាន threat model ផ្សេង ហើយត្រូវគ្រប់គ្រង token, expiration, revocation និង authorization។ កុំបិទ CSRF ដោយសន្មតថា endpoint JSON មិនងាយរង CSRF។

## ៥. API framework

Django core អាចបង្កើត JSON endpoint សាមញ្ញ។ API ធំដែលត្រូវការការគ្រប់គ្រង serialization, browsable API, throttling និង authentication ច្រើន អាចប្រើ framework ដូចជា Django REST Framework បន្ទាប់ពីពិនិត្យ compatibility និងឯកសារផ្លូវការរបស់ version ជាក់លាក់។

## លំហាត់

បង្កើត GET endpoint បញ្ជី task និង POST endpoint បង្កើត task។ ពិនិត្យ method, JSON ខូច, field ខ្វះ និង status code។ កំណត់ថា user ម្នាក់ឃើញតែទិន្នន័យរបស់ខ្លួនឬទេ។

## ប្រភព

[JsonResponse](https://docs.djangoproject.com/en/6.1/ref/request-response/#jsonresponse-objects)
