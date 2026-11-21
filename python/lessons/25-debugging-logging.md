# មេរៀនទី ២៥៖ Debugging និង logging

## គោលដៅ

- បង្រួមបញ្ហាទៅជាករណីតូចដែលអាចធ្វើឡើងវិញ។
- ប្រើ traceback និង debugger ដើម្បីរកប្រភពកំហុស។
- កត់ត្រាព័ត៌មានដោយ logging ជំនួសការប្រើ print គ្រប់ទីកន្លែង។

## ១. អាន traceback

Traceback បង្ហាញ call stack និងបន្ទាត់ដែល exception កើត។ អានពីចុងក្រោយឡើងលើ៖ បន្ទាត់ចុងក្រោយបង្ហាញប្រភេទកំហុស និងសារ; បន្ទាត់ខាងលើបង្ហាញផ្លូវដែលនាំទៅកំហុស។ កុំលុបព័ត៌មានមុនពេលយល់មូលហេតុ។

## ២. បង្កើតករណីបង្កើតឡើងវិញ

កត់ត្រា input និងជំហានដែលនាំទៅបញ្ហា។ កាត់បន្ថយបញ្ហាដោយដកផ្នែកមិនពាក់ព័ន្ធ ប៉ុន្តែរក្សាលក្ខខណ្ឌដែលបង្កើត bug។ បន្ទាប់មកសរសេរ test ដែលបរាជ័យមុនកែ និងជោគជ័យក្រោយកែ។

## ៣. logging

~~~python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def load_user(user_id):
    logger.info("កំពុងរក user id=%s", user_id)
~~~

Level សំខាន់ៗ៖ DEBUG សម្រាប់ព័ត៌មានលម្អិត, INFO សម្រាប់ស្ថានភាព, WARNING សម្រាប់បញ្ហាអាចបន្ត, ERROR សម្រាប់ប្រតិបត្តិការបរាជ័យ។ ប្រើ placeholder របស់ logging ជំនួស f-string ដើម្បីអោយបង្កើត message តែពេលចាំបាច់។

## ៤. Debugger និង breakpoint

ដាក់ <code>breakpoint()</code> ដើម្បីផ្អាកកម្មវិធី ហើយពិនិត្យ variable ក្នុង debugger។ កំណត់ breakpoint ជិតចំណុចដែល state ចាប់ផ្តើមខុស។ ដក breakpoint ចេញ ឬបិទ debug setting មុនដាក់កម្មវិធី production។

## ៥. ការពារទិន្នន័យរសើប

កុំ log password, token, session identifier ឬព័ត៌មានផ្ទាល់ខ្លួនដែលមិនចាំបាច់។ កាត់បន្ថយទិន្នន័យ និងកំណត់សិទ្ធិចូល log តាមតម្រូវការ។

## លំហាត់

ដាក់កំហុសដោយចេតនាក្នុងកម្មវិធីបម្លែងលេខ ហើយប្រើ traceback រកបន្ទាត់កំហុស។ ក្រោយកែ សរសេរ logging សម្រាប់ស្ថានភាពជោគជ័យ និង exception ដោយមិនកត់ត្រា input រសើប។

## ប្រភព

[logging — Logging facility](https://docs.python.org/3/library/logging.html) · [pdb — Debugger](https://docs.python.org/3/library/pdb.html)
