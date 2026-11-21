# មេរៀនទី ៩៖ Form និង validation

## គោលដៅ

- ទទួលទិន្នន័យ HTML form ដោយ Django Form។
- Validate ទិន្នន័យនៅ server។
- បង្ហាញ error តាម field និងរក្សាសុវត្ថិភាព CSRF។

## ១. បង្កើត ModelForm

~~~python
from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ["title"]
~~~

កំណត់ field ដែលអនុញ្ញាតដោយបញ្ជាក់ច្បាស់។ កុំប្រើ <code>fields = "__all__"</code> សម្រាប់ form public ព្រោះ field ថ្មីដែលបន្ថែមក្រោយអាចបង្ហាញដោយចៃដន្យ។

## ២. View សម្រាប់ GET និង POST

~~~python
def task_create(request):
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save()
            return redirect("task-detail", pk=task.pk)
    else:
        form = TaskForm()
    return render(request, "tasks/form.html", {"form": form})
~~~

GET បង្ហាញ form ទទេ។ POST bind ទិន្នន័យដែលបានបញ្ជូន ហើយ <code>is_valid()</code> ដំណើរការ validation។ បន្ទាប់ពី save ប្រើ redirect ដើម្បីកុំអោយ refresh បញ្ជូន form ដដែលម្ដងទៀត (Post/Redirect/Get)។

## ៣. Template និង CSRF

ក្នុង form template ប្រើ method POST និងដាក់ <code>{% csrf_token %}</code> ក្នុង form។ បង្ហាញ <code>form</code> errors និង field errors ដើម្បីអ្នកប្រើដឹងថាត្រូវកែអ្វី។ កុំបិទ CSRF protection ដើម្បីអោយ form ដំណើរការ។

## ៤. Custom validation

អាចកំណត់ <code>clean_title()</code> សម្រាប់ field មួយ ឬ <code>clean()</code> សម្រាប់លក្ខខណ្ឌឆ្លង field។ បោះ <code>forms.ValidationError</code> ជាមួយសារច្បាស់។ Validation នៅ browser ជួយ UX ប៉ុន្តែមិនជំនួស server-side validation ទេ។

## ៥. File និង method

សម្រាប់ file upload ត្រូវបន្ថែម <code>request.FILES</code> និង <code>enctype="multipart/form-data"</code> ព្រមទាំងកំណត់ size/type policy។ មេរៀន upload នឹងពន្យល់ហានិភ័យលម្អិត។

## លំហាត់

បង្កើត form បន្ថែម Task ដែល title មិនអាចទទេ និងមិនលើស 200 តួ។ បង្ហាញ field error នៅ template ហើយពិនិត្យថា GET/POST ទាំងពីរដំណើរការ។

## ប្រភព

[Working with forms](https://docs.djangoproject.com/en/6.1/topics/forms/) · [CSRF protection](https://docs.djangoproject.com/en/6.1/ref/csrf/)
