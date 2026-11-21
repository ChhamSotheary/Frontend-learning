# មេរៀនទី ១៨៖ សុវត្ថិភាព Web app

## គោលដៅ

- ស្គាល់ threat សំខាន់ៗរបស់ web application។
- ប្រើការការពារដែលមានក្នុង Django និងបន្ថែម configuration ត្រឹមត្រូវ។
- រៀបចំ security review មុន deploy។

## ១. XSS និង template escaping

Django template autoescape ជួយបម្លែង HTML special character។ កុំ mark user content ជា safe ដោយគ្មាន sanitization។ កុំបញ្ចូល string មិនទុកចិត្តទៅ JavaScript/HTML context ដោយមិន encode តាម context។

## ២. CSRF និង authentication

រក្សា CSRF middleware និង token សម្រាប់ browser form ដែលផ្លាស់ប្តូរទិន្នន័យ។ ប្រើ built-in auth/password handling។ បន្ថែម permission និង ownership check លើ object។ គ្រប់ view ត្រូវគិតថា anonymous ឬ user មិនត្រឹមត្រូវអាចហៅបាន។

## ៣. SQL injection

ប្រើ Django ORM parameterization។ កុំបង្កើត raw SQL ដោយភ្ជាប់ user input។ បើត្រូវ raw SQL ប្រើ parameter placeholder និងពិនិត្យឯកសាររបស់ database backend។

## ៤. HTTPS, host និង secret

Production ត្រូវបិទ DEBUG, កំណត់ ALLOWED_HOSTS, ប្រើ HTTPS, secure cookies និង secret key ដែលមិន commit។ បើ proxy បញ្ចប់ TLS ត្រូវកំណត់ trusted proxy headers តាម infrastructure និងមិនទុកចិត្ត header ពី client ដោយផ្ទាល់។

## ៥. Upload, redirect និង error

Validate file upload, កំណត់ទំហំ និង storage។ ប្រយ័ត្ន open redirect ដោយកុំ redirect ទៅ URL ដែល user ផ្គត់ផ្គង់ដោយមិន validate។ Error page production មិនគួរបង្ហាញ traceback។

## ៦. Checklist និងការបន្តថែទាំ

រត់ <code>python manage.py check --deploy</code> នៅ production configuration ហើយពិនិត្យ warning។ តាមដាន security release របស់ Django និង dependency។ Security មិនមែន setting ម្តងហើយចប់ទេ; ពិនិត្យ threat និង log ជាបន្តបន្ទាប់។

## លំហាត់

ពិនិត្យ app task របស់អ្នកសម្រាប់ XSS, CSRF, IDOR/ownership, secret ក្នុង Git, DEBUG, ALLOWED_HOSTS, cookie និង upload។ បន្ថែម test សម្រាប់ denied access។

## ប្រភព

[Django security](https://docs.djangoproject.com/en/6.1/topics/security/) · [Deployment checklist](https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/)
