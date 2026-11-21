# មេរៀនទី ១១៖ ទំនាក់ទំនង model និង constraint

## គោលដៅ

- ជ្រើស ForeignKey, OneToOneField និង ManyToManyField។
- កំណត់ on-delete behavior និង database constraint។
- Query relation ដោយគិតពី performance។

## ១. ForeignKey: មួយទៅច្រើន

~~~python
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

class Task(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="tasks",
    )
~~~

Task មួយមាន category មួយ ខណៈ category អាចមាន task ច្រើន។ <code>related_name</code> កំណត់ reverse accessor ដូចជា <code>category.tasks.all()</code>។

## ២. One-to-one និង many-to-many

One-to-one សមស្របសម្រាប់ profile មួយដែលភ្ជាប់ user មួយ។ Many-to-many សមស្របសម្រាប់ tag ច្រើនលើ task ច្រើន។ ប្រសិនបើត្រូវការរក្សា metadata លើទំនាក់ទំនង many-to-many ប្រើ intermediary model ជាមួយ <code>through</code>។

## ៣. on_delete

<code>CASCADE</code> លុប object ពាក់ព័ន្ធតាម, <code>PROTECT</code> រារាំងការលុប, និង <code>SET_NULL</code> កំណត់ foreign key ទៅ null (ត្រូវមាន <code>null=True</code>)។ ជ្រើសតាមច្បាប់ទិន្នន័យរបស់ app មិនមែនតាមភាពងាយស្រួលតែប៉ុណ្ណោះ។

## ៤. Constraint និង validation

Database constraint ដូចជា unique និង check constraint ការពារទិន្នន័យ ទោះមាន code path ច្រើនក៏ដោយ។ Form validation ជួយប្រាប់អ្នកប្រើមុន save; database constraint ជាការការពារចុងក្រោយ។ គិតពីរបៀបបង្ហាញ error ពេល constraint បរាជ័យ។

## ៥. Query relation

ប្រើ <code>select_related("category")</code> សម្រាប់ ForeignKey និង <code>prefetch_related("tags")</code> សម្រាប់ many-to-many។ ពិនិត្យ query count និងលទ្ធផលក្រោយ optimization។

## លំហាត់

បន្ថែម Category និង Tag ទៅ Task។ សម្រេចអាកប្បកិរិយាពេលលុប category ដែលមាន task។ សរសេរ query បង្ហាញ task ជាមួយ category និង tags ដោយកាត់បន្ថយ query បន្ថែម។

## ប្រភព

[Model field reference](https://docs.djangoproject.com/en/6.1/ref/models/fields/) · [Constraints](https://docs.djangoproject.com/en/6.1/ref/models/constraints/)
