# មេរៀនទី ១២៖ Module, package, pip និង virtual environment

## គោលដៅ

- រៀបកូដក្នុង module និង package។
- បង្កើត virtual environment ដាច់ដោយឡែក។
- ដំឡើង និងកត់ត្រា dependency របស់ project។

## ១. Module និង import

ឯកសារ Python មួយអាចជា module។ បើមាន <code>math_tools.py</code> ដែលមាន function <code>add</code> អ្នកអាចប្រើវាពីឯកសារផ្សេង៖

~~~python
from math_tools import add
print(add(2, 3))
~~~

ដាក់ executable code ដែលមិនចង់អោយរត់ពេល import ក្រោម guard៖

~~~python
def main():
    print("ចាប់ផ្តើមកម្មវិធី")

if __name__ == "__main__":
    main()
~~~

នេះអនុញ្ញាតអោយឯកសារទាំងដំណើរការផ្ទាល់ និង import function របស់វាបាន។

## ២. Package និងឈ្មោះ module

Package រៀប module ជា folder តាមមុខងារ។ ជ្រើសឈ្មោះច្បាស់ មិនប្រើឈ្មោះប៉ះ Python standard library ដូចជា <code>json.py</code> ឬ <code>random.py</code> ព្រោះអាចធ្វើអោយ import ខុស។ Project ធំគួរមាន package structure និង <code>pyproject.toml</code>។

## ៣. បង្កើត environment

~~~bash
python -m venv .venv
~~~

ដំណើរការក្នុង Windows PowerShell៖

~~~powershell
.\.venv\Scripts\Activate.ps1
~~~

Linux/macOS៖

~~~bash
source .venv/bin/activate
~~~

Environment បំបែក library របស់ project មួយពី project ផ្សេង និងពី Python របស់ប្រព័ន្ធ។ កុំ commit folder <code>.venv</code> ទៅ Git។

## ៤. pip និង dependencies

~~~bash
python -m pip install requests
python -m pip freeze
~~~

ប្រើ <code>python -m pip</code> ដើម្បីអោយ pip ភ្ជាប់ជាមួយ interpreter ដែលកំពុងប្រើ។ សម្រាប់ការរៀន អាចរក្សា dependency ក្នុង <code>requirements.txt</code>។ Project ថ្មីគួររៀន <code>pyproject.toml</code> និង workflow របស់ packaging guide។

## លំហាត់

បង្កើត folder project ថ្មី, បង្កើត environment, សរសេរ module សម្រាប់គណនាតម្លៃសរុប និង import ពី <code>main.py</code>។ បន្ថែម <code>.venv/</code> ទៅ <code>.gitignore</code>។

## ប្រភព

[Python venv](https://docs.python.org/3/library/venv.html) · [Python Packaging User Guide](https://packaging.python.org/en/latest/)
