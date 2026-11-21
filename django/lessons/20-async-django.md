# មេរៀនទី ២០៖ Asynchronous Django

## គោលដៅ

- យល់ពី async view និង ASGI។
- ដឹងពេលណា async មានប្រយោជន៍ និងពេលណាគួរប្រើ synchronous view។
- ជៀស blocking call នៅក្នុង async path។

## ១. Async view

~~~python
import asyncio
from django.http import HttpResponse

async def status_view(request):
    await asyncio.sleep(0)
    return HttpResponse("OK")
~~~

Django អាចដំណើរការ async view។ Async មានប្រយោជន៍ជាពិសេសពេល request រង់ចាំ I/O ច្រើន និង dependency ទាំងអស់អាច await បាន។

## ២. ASGI និង WSGI

WSGI ជា synchronous interface ប្រពៃណី។ ASGI គាំទ្រ asynchronous request handling និង protocol បន្ថែមតាម server។ ប្រើ ASGI deployment ដើម្បីទទួលអត្ថប្រយោជន៍ពី async end-to-end; server interface មិនធ្វើអោយ synchronous code ក្លាយជា async ដោយស្វ័យប្រវត្តិទេ។

## ៣. កុំ block event loop

ការហៅ requests សាមញ្ញ, sleep synchronous, file I/O ឬ ORM sync ក្នុង async view អាច block event loop។ ប្រើ async-compatible client ឬបញ្ជូន sync work ទៅរបៀបដែល Django ឯកសារបច្ចុប្បន្នណែនាំ។ ពិនិត្យការកំណត់ async support របស់ ORM សម្រាប់ version ដែលប្រើ។

## ៤. Sync/async boundary

ការឆ្លងពី sync ទៅ async និងត្រឡប់វិញមាន overhead ហើយត្រូវគោរព thread-safety។ កុំបម្លែង view ទាំងអស់ទៅ async ដោយសារ trend។ វាស់ concurrency និង latency ហើយជ្រើស interface សមស្រប។

## ៥. Long-lived connection

WebSocket ឬ long-lived connection ជាទូទៅត្រូវការ ASGI និង stack ដែលគាំទ្រ protocol នោះ។ ជ្រើស library និង server តាមឯកសារផ្លូវការ ហើយគិតពី authentication, backpressure និង resource limits។

## លំហាត់

សរសេរ async view សាមញ្ញដែលរង់ចាំ I/O mock ពីរ។ ពន្យល់ថាការហៅ synchronous client នៅទីនោះអាចប៉ះពាល់អ្វី ហើយសម្រេចថា project តូចរបស់អ្នកពិតជាត្រូវការ async ឬអត់។

## ប្រភព

[Asynchronous support](https://docs.djangoproject.com/en/6.1/topics/async/)
