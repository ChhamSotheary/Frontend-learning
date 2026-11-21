# មេរៀនទី ៥៖ Template, context និង static files

## គោលដៅ

- បង្ហាញ HTML ដោយ Django template។
- បញ្ជូន context ពី view ទៅ template។
- បែងចែក static assets ពីទិន្នន័យ dynamic។

## ១. Render template

~~~python
from django.shortcuts import render

def home(request):
    context = {"page_title": "ទំព័រដើម", "name": "សុភា"}
    return render(request, "pages/home.html", context)
~~~

Django រក template តាមការកំណត់ <code>TEMPLATES</code> និង app directories។ រៀប template ក្នុង <code>pages/templates/pages/home.html</code> ដើម្បី namespace ឈ្មោះ មិនប៉ះ app ផ្សេង។

## ២. បង្ហាញ context

~~~html
&lt;h1&gt;{{ page_title }}&lt;/h1&gt;
&lt;p&gt;សួស្តី {{ name }}&lt;/p&gt;
~~~

Template variable បង្ហាញទិន្នន័យពី context។ Django template បើក autoescaping សម្រាប់ HTML ជាលំនាំដើម ដើម្បីជួយការពារ XSS។ កុំប្រើ <code>safe</code> លើ user input ដោយមិន sanitize និងយល់ហានិភ័យ។

## ៣. Template inheritance

បង្កើត <code>base.html</code> មាន block <code>content</code> ហើយឱ្យទំព័រកូន extends វា។ វាអនុញ្ញាតអោយ share navigation, metadata និង layout ដោយមិនចម្លង HTML។

## ៤. Static files

CSS, JavaScript និងរូបភាពរបស់ app ជា static files។ ប្រើ <code>{% load static %}</code> និង tag static ដើម្បីបង្កើត URL ត្រឹមត្រូវ។ ក្នុង production ត្រូវប្រមូល និងបម្រើ static assets តាមរបៀប deployment ដែលបានរៀបចំ។

## ៥. ការបង្ហាញទិន្នន័យ

ប្រើ template សម្រាប់ presentation។ កុំដាក់ database query និង business logic ស្មុគស្មាញនៅក្នុង template។ View ឬ service គួររៀប data ដែលត្រូវបង្ហាញជាមុន។

## លំហាត់

បង្កើត base template មាន title, navigation និង content block។ បង្កើត home template extends base ហើយបង្ហាញ list នៃ lesson titles ពី context។ បន្ថែម CSS file ក្នុង static directory។

## ប្រភព

[Django templates](https://docs.djangoproject.com/en/6.1/topics/templates/) · [Managing static files](https://docs.djangoproject.com/en/6.1/howto/static-files/)
