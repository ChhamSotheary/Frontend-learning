# មេរៀនទី ២១៖ Background jobs និង Django Tasks

## គោលដៅ

- បែងចែក request/response ពីការងារដែលចំណាយពេលយូរ។
- កំណត់ និង enqueue task តាម Django Tasks API។
- រចនា task ឱ្យមាន retry និង idempotency។
- យល់ថា execution ត្រូវការប្រព័ន្ធ worker ខាងក្រៅ Django។

## ១. ហេតុអ្វីត្រូវ background job?

ការផ្ញើ report ធំ, ដំណើរការ file ឬហៅ external API អាចយូរជាង request timeout។ ជំនួសឱ្យធ្វើអោយ browser រង់ចាំ view អាចដាក់ job ទៅ queue ហើយឆ្លើយថាបានទទួលការងារ។

## ២. រចនា job

Job គួរទទួល identifier ឬទិន្នន័យ serializable មិនមែន request object ទាំងមូល។ បង្កើតឱ្យវាអាច retry ដោយសុវត្ថិភាព (idempotent) ឬមាន key ការពារការដំណើរការស្ទួន។ កំណត់ timeout, retry limit និងអ្វីដែលកើតឡើងក្រោយបរាជ័យ។

## ៣. Django Tasks API

Django 6.0 ឡើងមាន API សម្រាប់កំណត់ និង enqueue task៖

~~~python
from django.tasks import task

@task
def build_report(report_id):
    # ទាញទិន្នន័យតាម id ហើយបង្កើត report
    return {"report_id": report_id, "status": "ready"}

task_handle = build_report.enqueue(report_id=42)
~~~

កំណត់ task ជា module-level function ហើយផ្ញើ arguments ដែលអាច serialize បាន។ ក្នុង view អាច enqueue task ហើយរក្សា task id/status ដើម្បីឱ្យអ្នកប្រើពិនិត្យលទ្ធផលនៅពេលក្រោយ។ កុំផ្ញើ request object ឬ secret ជា argument។

## ៤. Queue, backend និង worker

Framework របស់ Django កំណត់ task, validation, enqueue និងលទ្ធផល។ វាមិនផ្តល់ worker ដែលដំណើរការការងារនៅ background ទេ។ ត្រូវកំណត់ task backend ដែលសមស្រប និងមាន worker/process/service ខាងក្រៅ។ Built-in Immediate និង Dummy backend មានគោលបំណង development/testing; Immediate ដំណើរការភ្លាមក្នុង process បច្ចុប្បន្ន មិនមែន background ពិតទេ។ ពិនិត្យ backend, worker និង compatibility របស់ dependency មុនជ្រើស។

## ៥. ការងារតាមពេល

Scheduled task អាចដំណើរការតាម scheduler ខាងក្រៅ ឬ scheduler របស់ queue។ កំណត់ timezone, overlap behavior និង monitoring។ កុំសន្មតថា web process នឹងមានតែមួយ instance នៅ production។

## ៦. តាមដាន និងសុវត្ថិភាព

កត់ job id និង status ដោយមិន log secret។ ផ្តល់ metrics សម្រាប់ queue delay, retries និង failures។ កំណត់ user/tenant ownership ដើម្បីកុំអោយ job មួយចូលដល់ទិន្នន័យអ្នកផ្សេង។

## លំហាត់

កំណត់ task សម្រាប់បង្កើត report ដោយទទួល report id។ រចនា flow ដែល view validate request និង enqueue task, worker បង្កើត report ហើយ user ពិនិត្យ status។ សរសេរថាតើ retry សុវត្ថិភាពឬអត់ និងតើការពារការបង្កើត report ស្ទួនយ៉ាងដូចម្តេច។

## ប្រភព

[Django Tasks framework](https://docs.djangoproject.com/en/6.1/topics/tasks/) · [Task API reference](https://docs.djangoproject.com/en/6.1/ref/tasks/)
