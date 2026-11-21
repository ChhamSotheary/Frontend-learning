# មេរៀនទី ២៤៖ សរសេរ unit test និង test design

## គោលដៅ

- យល់ពី test case, assertion និង regression test។
- ប្រើ <code>unittest</code> ដែលមានក្នុង Python។
- សាកល្បងករណីធម្មតា ករណីព្រំដែន និងករណីកំហុស។

## ១. បំបែក logic ទៅ function

កូដដែលបញ្ចូល input និង print ជាប់គ្នា ពិបាក test។ ដាក់ business rule ក្នុង function ដែលទទួល argument និង return result; ដាក់ terminal I/O នៅផ្នែកក្រៅ។

## ២. សរសេរ test

~~~python
import unittest

def is_passing(score):
    return score >= 50

class PassingTests(unittest.TestCase):
    def test_score_at_boundary_passes(self):
        self.assertTrue(is_passing(50))

    def test_lower_score_fails(self):
        self.assertFalse(is_passing(49))

if __name__ == "__main__":
    unittest.main()
~~~

រក្សាឈ្មោះ file ឱ្យរកឃើញដោយ test discovery ដូចជា <code>test_grades.py</code> ហើយរត់ <code>python -m unittest</code>។

## ៣. Arrange, Act, Assert

រៀបចំទិន្នន័យ (Arrange), ហៅអ្វីដែលកំពុងសាក (Act), ហើយពិនិត្យលទ្ធផល (Assert)។ Test មួយគួរផ្តោតលើឥរិយាបថមួយ និងបង្ហាញច្បាស់ថាអ្វីបានបរាជ័យ។

## ៤. Boundary និង exception

សាកតម្លៃទាប/ខ្ពស់ ព្រំដែនទទេ និង input ខុសទម្រង់។ ប្រើ <code>assertRaises</code> ដើម្បីពិនិត្យ exception ដែល function សន្យាបោះ។ កុំសរសេរ test ដែលគ្រាន់តែបញ្ជាក់ implementation detail ហើយរាំងការកែលម្អកូដ។

## ៥. Unit, integration និង end-to-end

Unit test ពិនិត្យផ្នែកតូចឯករាជ្យ។ Integration test ពិនិត្យការសហការរវាងផ្នែក ឬ database។ End-to-end test ពិនិត្យ flow ពេញ។ Test មិនអាចធានាថាគ្មាន bug ទាំងស្រុងទេ ប៉ុន្តែជួយចាប់ regression និងបញ្ជាក់ behavior ដែលចង់បាន។

## លំហាត់

សរសេរ test សម្រាប់ function គណនាពន្ធ៖ តម្លៃសូន្យ, តម្លៃវិជ្ជមាន, decimal និងតម្លៃអវិជ្ជមានដែលគួរបោះ <code>ValueError</code>។

## ប្រភព

[unittest — Unit testing framework](https://docs.python.org/3/library/unittest.html)
