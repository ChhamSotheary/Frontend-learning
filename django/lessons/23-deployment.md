# មេរៀនទី ២៣៖ Production deployment និងប្រតិបត្តិការ

## គោលដៅ

- បែងចែក local development និង production។
- រៀបចំ configuration, database, static files និង application server។
- បង្កើតការតាមដាន និង backup plan។

## ១. កុំប្រើ development server

<code>runserver</code> មិនត្រូវបានរចនាសម្រាប់ production traffic។ ប្រើ production-ready WSGI/ASGI server និង platform ដែលបានគ្រប់គ្រង។ ជ្រើស server តាម sync/async needs និងឯកសារផ្លូវការរបស់វា។

## ២. Production configuration

- <code>DEBUG=False</code> និង <code>ALLOWED_HOSTS</code> ច្បាស់។
- <code>SECRET_KEY</code> និង credential មកពី secret manager/environment។
- HTTPS, secure session/CSRF cookies និង proxy configuration ត្រឹមត្រូវ។
- Database production ដូចជា PostgreSQL ដែលមាន backup និងសិទ្ធិ account តិចបំផុត។

## ៣. Migration និង static files

ដាក់ migration files ក្នុង Git ហើយអនុវត្តនៅ deployment pipeline តាមលំដាប់ដែលបានសាក។ រត់ <code>collectstatic</code> ហើយបម្រើ static assets តាម CDN/web server/storage ដែលបានកំណត់។ រៀបចំ user media ដាច់ដោយឡែកពី static code។

## ៤. Health, logs និង metrics

កំណត់ health check ដែលមិនបង្ហាញ secret។ ប្រមូល application logs, request/error metrics និង database health។ កុំ log password, token ឬ body ទាំងមូលដោយស្វ័យប្រវត្តិ។ បង្កើត alert និងកំណត់ retention/access។

## ៥. Backup និង rollback

ធ្វើ backup database/media តាមតម្រូវការ ហើយសាក restore ជាក់ស្តែង។ មានផែនការ rollback code និង schema; migration ដែលលុបទិន្នន័យអាចមិនអាច rollback សាមញ្ញបាន។ ប្រើ staged rollout និងពិនិត្យ error ក្រោយ deploy។

## ៦. Pre-deploy checklist

រត់ <code>python manage.py check --deploy</code> ដោយ production settings។ ពិនិត្យ dependency, migration, secret, host, HTTPS, static/media, backup និង access controls។

## លំហាត់

សរសេរ deployment checklist សម្រាប់ project របស់អ្នក ដោយមិនភ្ជាប់ទៅ vendor មួយ។ បែងចែក config ដែលជាសាធារណៈពី secret ហើយពិពណ៌នារបៀប backup និង rollback។

## ប្រភព

[Django deployment checklist](https://docs.djangoproject.com/en/6.1/howto/deployment/checklist/) · [How to deploy Django](https://docs.djangoproject.com/en/6.1/howto/deployment/)
