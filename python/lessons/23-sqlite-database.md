# មេរៀនទី ២៣៖ SQL និង SQLite

## គោលដៅ

- យល់ table, row, column និង primary key។
- បង្កើត SQLite database និងអនុវត្ត CRUD។
- ប្រើ parameterized query ដើម្បីការពារ SQL injection។

## ១. បង្កើត table

~~~python
import sqlite3

with sqlite3.connect("tasks.db") as connection:
    connection.execute("""
        CREATE TABLE IF NOT EXISTS task (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            done INTEGER NOT NULL DEFAULT 0
        )
    """)
~~~

SQLite រក្សាទិន្នន័យក្នុង file មួយ ហើយសមស្របសម្រាប់រៀន ឬកម្មវិធីតូចៗ។ Database មាន schema; កំណត់ constraint ដូចជា <code>NOT NULL</code> ដើម្បីការពារទិន្នន័យមិនត្រឹមត្រូវ។

## ២. Create និង Read

~~~python
with sqlite3.connect("tasks.db") as connection:
    cursor = connection.execute(
        "INSERT INTO task (title) VALUES (?)",
        ("អនុវត្ត SQL",),
    )
    task_id = cursor.lastrowid
    rows = connection.execute(
        "SELECT id, title, done FROM task WHERE id = ?",
        (task_id,),
    ).fetchall()
~~~

សញ្ញា placeholder <code>?</code> ឲ្យ driver បញ្ជូនតម្លៃដោយសុវត្ថិភាព។ កុំភ្ជាប់ user input ទៅ SQL ដោយ f-string ឬ string concatenation។

## ៣. Update, Delete និង transaction

~~~python
with sqlite3.connect("tasks.db") as connection:
    connection.execute("UPDATE task SET done = 1 WHERE id = ?", (task_id,))
    connection.execute("DELETE FROM task WHERE id = ?", (task_id,))
~~~

Context manager ជួយ commit transaction នៅពេលជោគជ័យ និង rollback នៅពេលមាន exception។ គិតពី transaction នៅពេលការផ្លាស់ប្តូរច្រើនត្រូវជោគជ័យជាមួយគ្នា។

## ៤. Schema evolution និង migration

កុំកែ table production ដោយដៃដោយគ្មានផែនការ។ Migration គឺជាកំណត់ត្រាការផ្លាស់ប្តូរ schema ដែលអាចធ្វើឡើងវិញបាន។ Django មាន migration system ដែលនឹងប្រើក្នុងវគ្គបន្ទាប់។

## លំហាត់

បង្កើត table សម្រាប់ task ដែលមាន title, created_at និង status។ បង្កើត function create/list/complete។ សាកល្បង input ដែលមាន quote ដើម្បីបញ្ជាក់ថា query នៅតែដំណើរការដោយ placeholder។

## ប្រភព

[sqlite3 — DB-API 2.0 interface](https://docs.python.org/3/library/sqlite3.html)
