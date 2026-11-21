# មេរៀនទី ២១៖ JSON, CSV, កាលបរិច្ឆេទ និង regular expression

## គោលដៅ

- អាន និងបង្កើត JSON ដោយ module ផ្លូវការ។
- អាន/សរសេរ CSV ដោយអ្នកជំនួយការដែលគ្រប់គ្រង quote បាន។
- Parse កាលបរិច្ឆេទ និងប្រើ regex សម្រាប់ pattern អត្ថបទ។

## ១. JSON

~~~python
import json

record = {"name": "ដារ៉ា", "active": True, "score": 88}
text = json.dumps(record, ensure_ascii=False, indent=2)
decoded = json.loads(text)
print(decoded["name"])
~~~

<code>dumps</code>/<code>loads</code> បម្លែង Python object ទៅ JSON string និងត្រឡប់វិញ។ <code>ensure_ascii=False</code> រក្សាអក្សរខ្មែរអោយអានបាន។ សម្រាប់ឯកសារ ប្រើ <code>json.dump</code>/<code>json.load</code> ជាមួយ file។ JSON មិនអាចតំណាងគ្រប់ Python type បានទេ; ឧទាហរណ៍ date ត្រូវបម្លែងជាទម្រង់ដែលកំណត់ច្បាស់។

## ២. CSV

~~~python
import csv

with open("students.csv", newline="", encoding="utf-8") as file:
    for row in csv.DictReader(file):
        print(row["name"], row["score"])
~~~

ប្រើ <code>csv</code> module ជំនួសការបំបែកតាម comma ដោយ <code>split()</code> ព្រោះ field អាចមាន comma និង quote។ <code>DictReader</code> ភ្ជាប់តម្លៃតាម header; ពិនិត្យថា header និងទម្រង់ input ត្រឹមត្រូវ។

## ៣. Date និង timezone

~~~python
from datetime import datetime, timezone

now_utc = datetime.now(timezone.utc)
print(now_utc.isoformat())
parsed = datetime.fromisoformat("2026-11-21T10:30:00+00:00")
~~~

សម្រាប់ពេលដែលត្រូវប្រៀបធៀបឆ្លងប្រទេស ប្រើ timezone-aware datetime។ កុំរក្សាទុកពេលក្នុង local timezone ដោយគ្មាន timezone info ប្រសិនបើប្រព័ន្ធអាចផ្លាស់ទីតំបន់។

## ៤. Regex

~~~python
import re

pattern = re.compile(r"^[A-Z]{2}-\d{4}$")
print(bool(pattern.fullmatch("AB-1234")))
~~~

Regex ល្អសម្រាប់ pattern ខ្លីៗ និងច្បាស់។ ប្រើ raw string <code>r"..."</code> ដើម្បីកុំអោយ backslash ត្រូវ escape ពីរដង។ កុំប្រើ regex ដើម្បី parse ទម្រង់ស្មុគស្មាញ ដូចជា HTML ឬ nested language។

## លំហាត់

អាន CSV មានឈ្មោះ និងពិន្ទុ បម្លែងពិន្ទុទៅលេខ រួចសរសេរលទ្ធផលទៅ JSON ដោយ UTF-8។ ប្រសិនបើ row ខូច សូមបង្ហាញលេខជួរដែលមានបញ្ហា។

## ប្រភព

[json](https://docs.python.org/3/library/json.html) · [csv](https://docs.python.org/3/library/csv.html) · [datetime](https://docs.python.org/3/library/datetime.html) · [re](https://docs.python.org/3/library/re.html)
