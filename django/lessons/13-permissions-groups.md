# មេរៀនទី ១៣៖ Group, permission និង authorization

## គោលដៅ

- ប្រើ model permission ដែល Django បង្កើត។
- រៀបចំ role តាម group។
- ពិនិត្យ object ownership និងសិទ្ធិនៅ server។

## ១. Permission ជាមូលដ្ឋាន

Django បង្កើត add, change, delete និង view permission សម្រាប់ model។ អាចពិនិត្យដោយ <code>user.has_perm("app.change_task")</code>។ Superuser ឆ្លងកាត់ permission checks ជាច្រើន ដូច្នេះកុំប្រើ account នេះសម្រាប់ការងារប្រចាំថ្ងៃ។

## ២. Group ជា role

បង្កើត group ដូចជា Editor ឬ Reviewer ហើយបន្ថែម permissions ដែលត្រូវការ។ បន្ទាប់មកភ្ជាប់ user ទៅ group។ កំណត់ role តាមការងារ មិនមែនបង្កើត role មួយសម្រាប់អ្នកប្រើម្នាក់ៗ។

## ៣. ការពារទាំង view និង action

ប្រើ decorator, mixin ឬ explicit check ដើម្បីបដិសេធ request ដែលគ្មានសិទ្ធិ។ បង្ហាញ/លាក់ប៊ូតុងក្នុង template គ្រាន់តែជាការណែនាំ UX; server ត្រូវពិនិត្យម្តងទៀតរាល់ request។

## ៤. Object-level permission

Django built-in model permissions មិនផ្តល់ object-level policy គ្រប់គ្រាន់ដោយស្វ័យប្រវត្តិ។ សម្រាប់ ownership ត្រូវ filter queryset តាម user ឬពិនិត្យ object សិទ្ធិច្បាស់។ ឧទាហរណ៍ កុំទាញ task តាម id សកលហើយអនុញ្ញាត update ដោយមិនពិនិត្យ owner។

## ៥. Principle of least privilege

ផ្តល់តែសិទ្ធិចាំបាច់ បែងចែក staff roles និងពិនិត្យសិទ្ធិពេលតួនាទីផ្លាស់ប្តូរ។ សរសេរ tests សម្រាប់ allowed និង denied case ទាំងពីរ។

## លំហាត់

បង្កើត group <code>Task Reviewer</code> ដែលអាចមើល task និងសម្គាល់ reviewed ប៉ុន្តែមិនអាចលុប។ សរសេរ tests បញ្ជាក់ថា user មាន/គ្មាន group ទទួលបានលទ្ធផលត្រឹមត្រូវ។

## ប្រភព

[Django permissions and authorization](https://docs.djangoproject.com/en/6.1/topics/auth/default/)
