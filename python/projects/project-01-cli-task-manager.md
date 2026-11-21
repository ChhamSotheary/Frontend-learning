# គម្រោងទី ១៖ កម្មវិធីគ្រប់គ្រងកិច្ចការតាម CLI

## គោលដៅ

អនុវត្ត function, list/dict, module, file, JSON, argparse, exception និង test ទៅក្នុងកម្មវិធីតូចមួយ។

## លក្ខណៈពិសេស

- បន្ថែមកិច្ចការដែលមាន id, title, status និង created time។
- បង្ហាញបញ្ជីកិច្ចការ និង filter តាម status។
- សម្គាល់កិច្ចការថារួចរាល់។
- រក្សាទុកទិន្នន័យក្នុង JSON file។
- បង្ហាញ error ដែលយល់ងាយ ប្រសិនបើ file ខូច ឬ id មិនមាន។

## ជំហានអនុវត្ត

1. បង្កើត virtual environment និងបង្កើត folder <code>src/task_manager</code> និង <code>tests</code>។
2. សរសេរ model ឬ function សម្រាប់ validate និងបង្កើត task។
3. បង្កើត module persistence ដែលអាន/សរសេរ JSON ដោយ UTF-8។
4. បន្ថែម service សម្រាប់ add, list និង complete ដែលមិន print ផ្ទាល់។
5. ប្រើ argparse ដើម្បីបង្កើត command line interface។
6. បន្ថែម tests សម្រាប់ add, complete, id មិនមាន និង file មិនទាន់មាន។
7. សាកល្បងពី terminal និងសរសេរ README របៀបដំឡើង/ប្រើ។

## រចនាសម្ព័ន្ធណែនាំ

~~~text
task-manager/
  src/task_manager/
    __init__.py
    models.py
    storage.py
    service.py
    cli.py
  tests/
  README.md
  .gitignore
~~~

## កំហុសដែលត្រូវជៀស

- សរសេរ JSON ទាំង file រាល់ពេលបន្ថែម ដោយមិនពិនិត្យទិន្នន័យចាស់។
- ប្រើ input ទាំងអស់ដោយទុកចិត្ត និងអោយ title ទទេ។
- លាយ persistence, business logic និង print ក្នុង function តែមួយ។
- បោះបង់ error ពេល JSON file ខូច ដោយសរសេរជាន់លើភ្លាមៗ។

## លក្ខខណ្ឌបញ្ចប់

អ្នកអាចបង្កើត task, មើល task, សម្គាល់ថារួច និងបើកកម្មវិធីឡើងវិញដោយទិន្នន័យនៅតែមាន។ Test បញ្ជាក់ behavior សំខាន់ៗ និង help បង្ហាញរបៀបប្រើ។
