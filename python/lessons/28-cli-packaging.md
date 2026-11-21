# មេរៀនទី ២៨៖ បង្កើត CLI និងរៀបចំ package

## គោលដៅ

- ទទួល argument ពី command line ដោយ <code>argparse</code>។
- បំបែក CLI layer ពី business logic។
- យល់ពីការរៀបចំ package និង metadata មូលដ្ឋាន។

## ១. សរសេរ CLI ជាមួយ argparse

~~~python
import argparse

def main():
    parser = argparse.ArgumentParser(description="បង្ហាញសារសួស្តី")
    parser.add_argument("name", help="ឈ្មោះអ្នកប្រើ")
    parser.add_argument("--times", type=int, default=1)
    args = parser.parse_args()
    for _ in range(args.times):
        print(f"សួស្តី {args.name}")

if __name__ == "__main__":
    main()
~~~

រត់ <code>python greet.py ដារ៉ា --times 2</code>។ argparse បង្កើត help, បម្លែង type និងរាយការណ៍ argument មិនត្រឹមត្រូវជាទម្រង់សម្រាប់ CLI។

## ២. បំបែក CLI និង logic

ទុកការគណនា ឬ business rules ក្នុង module ដែល import និង test បាន។ Function <code>main()</code> គួរទទួល input តាម parser, ហៅ logic និងបង្ហាញលទ្ធផល។ នេះធ្វើអោយការសាកល្បងមិនចាំបាច់បើក terminal ដោយស្វ័យប្រវត្តិ។

## ៣. រចនាសម្ព័ន្ធ package

Project តូចអាចមាន <code>src/package_name/</code>, test folder និង <code>pyproject.toml</code>។ Metadata ពិពណ៌នាឈ្មោះ package, version និង dependencies។ Entry point អាចធ្វើអោយអ្នកប្រើហៅ command បន្ទាប់ពី install; សូមយោងតាម packaging guide សម្រាប់ build backend និង publishing។

## ៤. Version និង dependency

ប្រើ version control និងកំណត់ dependencies ដោយគោលការណ៍សមស្រប។ ពិនិត្យ package មុនដំឡើង ព្រោះ third-party code មានហានិភ័យ supply chain។ កុំ commit build artifacts, virtual environment ឬ secret។

## លំហាត់

ប្តូរ CLI task list អោយទទួល subcommands <code>add</code>, <code>list</code>, <code>done</code>។ ដាក់ logic ក្នុង module, CLI parsing ក្នុង <code>__main__.py</code> និងបន្ថែម help សម្រាប់គ្រប់ command។

## ប្រភព

[argparse](https://docs.python.org/3/library/argparse.html) · [Python Packaging User Guide](https://packaging.python.org/en/latest/)
