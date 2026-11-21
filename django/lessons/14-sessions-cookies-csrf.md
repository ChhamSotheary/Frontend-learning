# មេរៀនទី ១៤៖ Session, cookie, message និង CSRF

## គោលដៅ

- យល់ពី cookie និង server-side session។
- ប្រើ Django messages សម្រាប់ feedback ក្រោយ redirect។
- យល់ CSRF និងការកំណត់ cookie ដែលមានសុវត្ថិភាព។

## ១. Cookie និង session

Cookie ជាទិន្នន័យដែល browser ផ្ញើត្រឡប់ទៅ server ក្នុង request បន្ទាប់។ Django session រក្សាទិន្នន័យនៅ server-side storage ហើយដាក់ session identifier ក្នុង cookie។ កុំរក្សា password ឬព័ត៌មានសម្ងាត់ក្នុង cookie/session ដោយគ្មានការរចនាសុវត្ថិភាព។

## ២. Session API

~~~python
request.session["theme"] = "dark"
theme = request.session.get("theme", "light")
~~~

ប្រើ session សម្រាប់ state តិចតួចដែលភ្ជាប់ user/browser។ កំណត់ expiration និង storage តាមតម្រូវការ។ Session មិនមែនជាកន្លែងដាក់ទិន្នន័យ business សំខាន់ជំនួស database ទេ។

## ៣. Django messages

Messages អនុញ្ញាតបង្ហាញសារ success/error បន្ទាប់ពី redirect។ បន្ថែម message ក្នុង view ហើយ render ក្នុង base template។ កុំដាក់ព័ត៌មានរសើប ឬ stack trace ក្នុង message ដែល user មើលឃើញ។

## ៤. CSRF

CSRF attack ព្យាយាមអោយ browser ដែល login រួចផ្ញើ request ផ្លាស់ប្តូរទិន្នន័យដោយ user មិនបានចេតនា។ Django CSRF middleware និង token ក្នុង POST form ជួយផ្ទៀងផ្ទាត់ប្រភព request។ កុំបិទ CSRF middleware ដើម្បីដោះស្រាយបញ្ហា; រកមូលហេតុ token ខ្វះ ឬ origin មិនត្រូវ។

## ៥. Cookie settings

Production ត្រូវប្រើ HTTPS និងពិនិត្យ <code>SESSION_COOKIE_SECURE</code>, <code>CSRF_COOKIE_SECURE</code>, HttpOnly និង SameSite តាម deployment។ កំណត់ domain/path តិចបំផុតដែលត្រូវការ ហើយពិនិត្យ Django deployment checklist។

## លំហាត់

បន្ថែម message “កិច្ចការបានរក្សាទុក” ក្រោយបង្កើត task។ បញ្ជាក់ថា POST form មាន CSRF token ហើយសាកថា request ដោយគ្មាន token ត្រូវបានបដិសេធដោយ middleware។

## ប្រភព

[Django sessions](https://docs.djangoproject.com/en/6.1/topics/http/sessions/) · [Messages framework](https://docs.djangoproject.com/en/6.1/ref/contrib/messages/) · [CSRF protection](https://docs.djangoproject.com/en/6.1/ref/csrf/)
