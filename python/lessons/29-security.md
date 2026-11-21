# មេរៀនទី ២៩៖ សុវត្ថិភាពសម្រាប់កម្មវិធី Python

## គោលដៅ

- សម្គាល់ទិន្នន័យដែលមិនទុកចិត្ត និងការបញ្ចូលដែលមានហានិភ័យ។
- ការពារ secret និងប្រើ API/database ដោយសុវត្ថិភាព។
- បង្កើតទម្លាប់ update dependency និងកាត់បន្ថយសិទ្ធិ។

## ១. Validate នៅព្រំដែន

ទិន្នន័យពី user, file, environment និង network ជាទិន្នន័យមិនទុកចិត្ត។ ពិនិត្យប្រភេទ ជួរ ប្រវែង និង format នៅពេលវាចូលប្រព័ន្ធ។ កុំសន្មតថា client បាន validate រួច។

## ២. កុំបង្កើត command ឬ SQL ពី input

ប្រើ parameterized query សម្រាប់ SQL។ ជៀសវាងបញ្ចូល input ដោយផ្ទាល់ទៅ shell command; បើត្រូវហៅ process ប្រើ API ដែលទទួល argument ជាបញ្ជី និងកំណត់ path/permission ច្បាស់។ កុំប្រើ <code>eval()</code> លើ input មិនទុកចិត្ត។

## ៣. Secret និង configuration

រក្សា API key និង password ក្រៅ source code។ ប្រើ environment variable ឬ secret store សមស្រប ហើយកុំបង្ហោះ <code>.env</code> ទៅ Git។ បង្វិល token ប្រសិនបើវាបែកធ្លាយ និងកុំកត់ត្រាវាក្នុង log។

## ៤. Dependency និង serialization

ដំឡើង package ពីប្រភពដែលទុកចិត្ត ពិនិត្យ version និងធ្វើ update ជាប្រចាំ។ កុំប្រើ <code>pickle</code> ដើម្បីអានទិន្នន័យដែលអ្នកមិនទុកចិត្ត ព្រោះ unpickling អាចដំណើរការកូដ។ ប្រើ JSON សម្រាប់ទិន្នន័យអន្តរប្រព័ន្ធ ប៉ុន្តែត្រូវ validate schema។

## ៥. សិទ្ធិ និង error message

ដំណើរការកម្មវិធីដោយសិទ្ធិតិចបំផុតដែលចាំបាច់។ បង្ហាញសារកំហុសដែលមិនបង្ហាញ stack, path ផ្ទៃក្នុង ឬ secret ទៅអ្នកប្រើធម្មតា; រក្សាព័ត៌មាន diagnostic នៅ log ដែលមានសិទ្ធិគ្រប់គ្រង។

## លំហាត់

ពិនិត្យគម្រោង CLI របស់អ្នក៖ រកមើលថា secret មានក្នុង source ឬអត់, SQL មាន concatenation ឬអត់, input មាន limit ឬអត់ និង error output បង្ហាញព័ត៌មានផ្ទៃក្នុងឬអត់។ កែចំណុចដែលរកឃើញ។

## ប្រភព

[Python Security Considerations](https://docs.python.org/3/library/security_warnings.html)
