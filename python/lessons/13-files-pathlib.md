# មេរៀនទី ១៣៖ អាន និងសរសេរឯកសារដោយ pathlib

## គោលដៅ

- បើកឯកសារដោយ context manager។
- ប្រើ <code>pathlib.Path</code> ដើម្បីធ្វើការជាមួយ path។
- ជ្រើស encoding និង file mode ត្រឹមត្រូវ។

## ១. អានអត្ថបទ

~~~python
from pathlib import Path

path = Path("notes.txt")
content = path.read_text(encoding="utf-8")
print(content)
~~~

Path មានន័យដូចគ្នាទោះជាប្រព័ន្ធប្រើ slash ខុសគ្នា។ កំណត់ encoding ជាពិសេសសម្រាប់អត្ថបទខ្មែរ ដើម្បីជៀសវាងអក្សរខូច។

## ២. សរសេរ និងបន្ថែម

~~~python
path = Path("notes.txt")
path.write_text("មេរៀន Python ដំបូង\n", encoding="utf-8")
with path.open("a", encoding="utf-8") as file:
    file.write("បានអនុវត្ត pathlib\n")
~~~

Mode <code>w</code> សរសេរថ្មី និងជំនួសមាតិកាចាស់, <code>a</code> បន្ថែមចុងក្រោយ, <code>r</code> អាន។ <code>with</code> បិទ file handle ដោយស្វ័យប្រវត្តិ ទោះមានកំហុសក្នុង block ក៏ដោយ។

## ៣. ផ្លូវ relative និង absolute

Relative path គិតពី working directory ដែលកម្មវិធីរត់ មិនមែនចាំបាច់ពីទីតាំង source file ទេ។ សម្រាប់ file ដែលជាប់ជាមួយ module អាចប្រើ <code>Path(__file__).parent</code> ដើម្បីសង់ path ចាប់ពីទីតាំងឯកសារ។ កុំភ្ជាប់ path ដោយ string; ប្រើ <code>/</code> របស់ Path។

## ៤. ពិនិត្យ និងគ្រប់គ្រងកំហុស

~~~python
path = Path("notes.txt")
if path.exists() and path.is_file():
    print(path.stat().st_size)
else:
    print("រកមិនឃើញឯកសារ")
~~~

សម្រាប់កម្មវិធីពិត សូមចាប់កំហុសជាក់លាក់ដូចជា <code>FileNotFoundError</code> ឬ <code>PermissionError</code> ពេលអ្នកអាចដោះស្រាយ ឬបង្ហាញសារមានប្រយោជន៍។ កុំចាប់ exception ទាំងអស់ហើយស្ងាត់មិនប្រាប់។

## លំហាត់

បង្កើតកម្មវិធីរក្សាទុកបន្ទាត់កំណត់ត្រា ដែលទទួលអត្ថបទពីអ្នកប្រើ បន្ថែមថ្ងៃ/ម៉ោង និង append ទៅ <code>journal.txt</code>។ បើកឯកសារដោយ UTF-8 ហើយបង្ហាញបន្ទាត់ចុងក្រោយ។

## ប្រភព

[pathlib — Object-oriented filesystem paths](https://docs.python.org/3/library/pathlib.html)
