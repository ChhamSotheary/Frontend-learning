# មេរៀនទី ១០៖ CRUD និង class-based views

## គោលដៅ

- រៀបចំ Create, Read, Update និង Delete flow។
- ប្រើ generic class-based views សម្រាប់ការងារស្តង់ដារ។
- ការពារការកែ ឬលុបទិន្នន័យដែលអ្នកប្រើមិនមែនជាម្ចាស់។

## ១. CRUD មានអ្វីខ្លះ?

- Create: បង្កើត record ថ្មី។
- Read: បង្ហាញបញ្ជី ឬលម្អិត។
- Update: កែ record។
- Delete: លុប record។

សម្រាប់គ្រប់ operation ត្រូវគិតពី validation, permission, HTTP method និងការឆ្លើយតបពេល object មិនមាន។

## ២. Generic views

~~~python
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView

class TaskListView(ListView):
    model = Task
    template_name = "tasks/task_list.html"
    context_object_name = "tasks"

class TaskCreateView(CreateView):
    model = Task
    fields = ["title"]
    template_name = "tasks/task_form.html"
    success_url = reverse_lazy("task-list")
~~~

Generic views ផ្តល់ flow ស្តង់ដារសម្រាប់ list/detail/form/delete។ <code>reverse_lazy</code> ពន្យារការរក URL រហូតដល់ URL configuration រួចរាល់។

## ៣. Update និង Delete

<code>UpdateView</code> យក object, validate form និងរក្សាទុក។ <code>DeleteView</code> គួរទាមទារ POST ដើម្បីបញ្ជាក់ការលុប; GET គ្រាន់តែបង្ហាញ confirmation page។ កំណត់ success URL និង template សម្រាប់ករណីជោគជ័យ/កំហុស។

## ៤. កំណត់ queryset តាមអ្នកប្រើ

បើ task មាន owner ត្រូវបង្រួម queryset តាម user ដែល login រួច។ កុំទាញ object តាម pk ទូទៅ ហើយសន្មតថា user ជាម្ចាស់។ ការលាក់ link ក្នុង template មិនអាចជំនួស permission check ក្នុង server ទេ។

## ៥. Function-based ឬ class-based

Function-based view ស្រួលអានសម្រាប់ flow ពិសេស។ Class-based view ជួយប្រើ behavior ស្តង់ដារឡើងវិញ ប៉ុន្តែ mixin ច្រើនអាចលាក់ flow។ ជ្រើសតាមភាពងាយយល់ និង test បាន។

## លំហាត់

បង្កើត list, detail, create, update និង delete សម្រាប់ Task។ បន្ទាប់មកបន្ថែម owner ហើយធានាថា user ម្នាក់មិនអាចមើល ឬកែ task របស់ user ផ្សេង។

## ប្រភព

[Generic display views](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-display/) · [Generic editing views](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-editing/)
