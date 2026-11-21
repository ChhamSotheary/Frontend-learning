# មេរៀនទី ១២៖ User, authentication និង login

## គោលដៅ

- បែងចែក authentication និង authorization។
- ប្រើ built-in user, login/logout និង password handling។
- រៀបចំ custom user model មុន migration ដំបូង ប្រសិនបើត្រូវការ។

## ១. Authentication ទល់នឹង authorization

Authentication ឆ្លើយថា “អ្នកនេះជានរណា?” Authorization ឆ្លើយថា “អ្នកនេះអាចធ្វើអ្វីបាន?” Login បញ្ជាក់អត្តសញ្ញាណ; permission/group កំណត់សិទ្ធិ។ កុំច្រឡំថា user login រួចមានសិទ្ធិគ្រប់យ៉ាង។

## ២. User model

Django ផ្តល់ user model ដែលគាំទ្រ password hashing និង session authentication។ ប្រសិនបើត្រូវកែ field login ឬប្រើ email ជា identity ត្រូវពិចារណាបង្កើត custom user model នៅដើម project មុន migration ដំបូង។ ការប្តូរពេលក្រោយស្មុគស្មាញ និងត្រូវធ្វើ data migration។

## ៣. Login និង logout

អាចប្រើ built-in auth views និង URL configuration របស់ Django។ កំណត់ login template, <code>LOGIN_URL</code> និង redirect URL តាមរចនាបថ។ ប្រើ POST សម្រាប់ logout តាម pattern/version ដែលឯកសារបច្ចុប្បន្នណែនាំ ដើម្បីកុំអោយ action ផ្លាស់ប្តូរដោយ GET។

## ៤. ការពារទំព័រដែលត្រូវការ login

Function view អាចប្រើ <code>@login_required</code>; class-based view អាចប្រើ <code>LoginRequiredMixin</code>។ ប៉ុន្តែត្រូវពិនិត្យ ownership/permission លើ object ដាច់ដោយឡែក មិនគ្រប់គ្រាន់ត្រឹម login។

## ៥. Password និង session

Django មិនរក្សា password ជាអក្សរធម្មតាទេ; វាប្រើ password hasher។ កុំអាន ឬ log password។ កំណត់ cookie/session settings ឱ្យសុវត្ថិភាពនៅ production ហើយប្រើ HTTPS។ កុំបង្កើត auth flow ផ្ទាល់ខ្លួន ប្រសិនបើ built-in solution គ្រប់គ្រាន់។

## លំហាត់

បន្ថែម login-required task creation។ បង្កើត task ជាមួយ owner ដែល login រួច និងសរសេរ test បញ្ជាក់ថាអ្នកមិន login ត្រូវ redirect ហើយ user ម្នាក់មិនអាចកែ task របស់អ្នកផ្សេង។

## ប្រភព

[Django authentication](https://docs.djangoproject.com/en/6.1/topics/auth/) · [Customizing authentication](https://docs.djangoproject.com/en/6.1/topics/auth/customizing/)
