# មេរៀនទី ១៥៖ File upload និង email

## គោលដៅ

- ទទួល file តាម Django form និង request។
- កំណត់ការត្រួតពិនិត្យទំហំ/type និងកន្លែងរក្សាទុក។
- ផ្ញើ email តាម configuration ដោយមិនបង្ហាញ secret។

## ១. Model និង form សម្រាប់ upload

Model ប្រើ <code>FileField</code> ឬ <code>ImageField</code> ហើយកំណត់ <code>upload_to</code>។ Form HTML ត្រូវមាន <code>enctype="multipart/form-data"</code>។ View bind ទាំង <code>request.POST</code> និង <code>request.FILES</code> ទៅ form។

## ២. សុវត្ថិភាព file

កំណត់ទំហំអតិបរមា និងប្រភេទដែលអនុញ្ញាត។ ឈ្មោះ file និង extension មកពី user មិនគួរទុកចិត្ត។ កុំដាក់ uploaded file ដែលអាចរត់ជា code នៅទីតាំងដែល web server execute។ ពិនិត្យ content មិនមែន extension តែមួយ ហើយពិចារណា scan file តាមហានិភ័យ។

## ៣. Media និង storage

ក្នុង development អាចកំណត់ <code>MEDIA_ROOT</code> និង <code>MEDIA_URL</code>។ Production គួរប្រើ storage ដែលមាន backup, access control និង lifecycle policy ត្រឹមត្រូវ។ Static files និង user-uploaded media មាន trust model ខុសគ្នា។

## ៤. Email

កំណត់ email backend និង credentials តាម environment/secret store។ ក្នុង development អាចប្រើ console backend ដើម្បីពិនិត្យសារ ដោយមិនផ្ញើពិត។ កុំបង្កើត URL action ឬ HTML email ដែលអាចបង្ក injection; escape ទិន្នន័យ និងប្រើ template។

## ៥. បរាជ័យ និង privacy

Handle storage/email failure ដោយបង្ហាញស្ថានភាពមានន័យ និងកត់ log ដោយមិនចម្លង file content, email credential ឬព័ត៌មានផ្ទាល់ខ្លួនលើសចាំបាច់។

## លំហាត់

បន្ថែម attachment ទៅ task។ កំណត់ maximum size និង allowlist file type។ សាក file ធំពេក និងឈ្មោះមាន path character។ កំណត់ email console backend ហើយសរសេរ view ផ្ញើ confirmation email ក្នុង development។

## ប្រភព

[File uploads](https://docs.djangoproject.com/en/6.1/topics/http/file-uploads/) · [Sending email](https://docs.djangoproject.com/en/6.1/topics/email/) · [File storage](https://docs.djangoproject.com/en/6.1/topics/files/)
