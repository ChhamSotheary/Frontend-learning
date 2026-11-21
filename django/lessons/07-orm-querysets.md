# មេរៀនទី ៧៖ ORM, QuerySet និងការស្វែងរកទិន្នន័យ

## គោលដៅ

- អនុវត្ត CRUD តាម Django ORM។
- ប្រើ filter, exclude, ordering និង lookup។
- យល់ lazy QuerySet និងកុំបង្កើត N+1 query ដោយមិនដឹងខ្លួន។

## ១. Create និង Read

~~~python
task = Task.objects.create(title="រៀន QuerySet")
all_tasks = Task.objects.all()
open_tasks = Task.objects.filter(is_done=False)
first_task = Task.objects.get(pk=task.pk)
~~~

QuerySet ជាតំណាង query ដែលអាច compose បាន។ ជាទូទៅវា lazy ហើយ query ទៅ database នៅពេលត្រូវ iterate ឬបម្លែងជាក់ស្តែង។ <code>get()</code> រំពឹងថាមាន row មួយពិតប្រាកដ; វាបោះ <code>DoesNotExist</code> បើមិនមាន និង <code>MultipleObjectsReturned</code> បើមានលើសមួយ។

## ២. Filter និង lookup

~~~python
recent = Task.objects.filter(title__icontains="django").order_by("-created_at")
~~~

Lookup បន្ទាប់ពី double underscore ដូចជា <code>icontains</code>, <code>gte</code> និង <code>in</code> កំណត់លក្ខខណ្ឌ។ ប្រើ <code>exclude()</code> ដើម្បីដកលទ្ធផល។ បន្ថែម pagination ពេលបង្ហាញលទ្ធផលច្រើន។

## ៣. Update និង Delete

~~~python
task.is_done = True
task.save(update_fields=["is_done"])
task.delete()
~~~

ការហៅ <code>QuerySet.update()</code> អាច update ច្រើន row ក្នុង query តែមួយ ប៉ុន្តែវាមិនហៅ model <code>save()</code> ឬ signals ទេ។ ជ្រើសតាម behavior ដែលចង់បាន។

## ៤. ទំនាក់ទំនង និង N+1

ពេលចូល field ForeignKey ក្នុង loop អាចបង្កើត query ម្តងក្នុងមួយ row។ ប្រើ <code>select_related()</code> សម្រាប់ ForeignKey/OneToOne និង <code>prefetch_related()</code> សម្រាប់ relation ជាច្រើន ដើម្បីកាត់បន្ថយចំនួន query។ វាស់ query មុននិងក្រោយកែ។

## ៥. Aggregate និង transaction

ប្រើ <code>Count</code>, <code>Sum</code> និង <code>annotate()</code> ដើម្បីគណនាខាង database។ ប្រើ <code>transaction.atomic()</code> ពេលការផ្លាស់ប្តូរច្រើនត្រូវជោគជ័យជាមួយគ្នា។

## លំហាត់

ក្នុង Django shell បង្កើត task ៥ ដែលមាន status ខុសៗគ្នា។ សាក filter task មិនទាន់រួច តម្រៀបថ្មីទៅចាស់ និង update ច្រើន task។ ប្រៀបធៀប <code>get()</code> និង <code>filter()</code> លើ id ដែលមិនមាន។

## ប្រភព

[Making queries](https://docs.djangoproject.com/en/6.1/topics/db/queries/) · [Database optimization](https://docs.djangoproject.com/en/6.1/topics/db/optimization/)
