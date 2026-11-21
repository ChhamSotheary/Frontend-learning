# មេរៀន ៣៤៖ Architecture, Design Patterns និង Refactoring

## គោលដៅ

រៀបចំ code តាម responsibility, ញែក UI/business logic/I/O, ប្រើ dependency injection ស្រាលៗ និង refactor ជាជំហានដែលរក្សា behavior។

## ១. ចាប់ពី responsibility និង data flow

កុំចាប់ផ្តើមដោយបង្កើត folder ច្រើន។ កំណត់ថា app ត្រូវទទួល input ណា, បម្លែងអ្វី, បង្ហាញលទ្ធផលណា និង side effect នៅឯណា។ បែងចែកជាផ្នែកដូចជា UI/controller, business rules និង data access ពេលវាជួយកាត់ coupling។

~~~js
// Pure business rule
export function canEnroll(course, currentCount) {
  return course.open && currentCount < course.capacity;
}

// I/O dependency ត្រូវបានផ្ញើចូល
export function createEnrollmentService({ saveEnrollment }) {
  return async function enroll(course, student, currentCount) {
    if (!canEnroll(course, currentCount)) throw new Error("មិនអាចចុះឈ្មោះបាន");
    return saveEnrollment({ courseId: course.id, studentId: student.id });
  };
}
~~~

Pure rule ងាយសាកល្បង; service បញ្ជូនការងារ persistence តាម dependency។ នេះគឺ dependency injection សាមញ្ញ ដោយមិនចាំបាច់ប្រើ framework។

## ២. Design patterns ជាឈ្មោះសម្រាប់បញ្ហាដែលកើតញឹកញាប់

- **Module** បំបែក public API និង implementation។
- **Factory** បង្កើត object ដែលមាន setup/validation។
- **Strategy** ប្តូរវិធីធ្វើដោយផ្ញើ function/implementation ខុសគ្នា។
- **Observer/event** ជូនដំណឹង subscriber ពេល state ផ្លាស់។

Pattern មិនមែនជា checklist; បើ conditional តូចមួយអានងាយជាង abstraction សូមទុកវាសាមញ្ញ។ កុំបង្កើត singleton/global mutable state ដោយមិនមានហេតុផល។

## ៣. Refactoring ដោយសុវត្ថិភាព

1. សរសេរឧទាហរណ៍ behavior បច្ចុប្បន្ន និង edge case។
2. បំបែក function ធំតាមការងារមួយៗ។
3. ដាក់ឈ្មោះតាម intent មិនមែន implementation detail។
4. ផ្លាស់ទី side effects ទៅ boundary។
5. រត់ tests/checks ដែលមាន និងពិនិត្យ diff មុនបន្ត។

Refactor មានគោលបំណងកែលម្អរចនាសម្ព័ន្ធដោយរក្សា behavior; feature change គួរធ្វើជាការផ្លាស់ប្តូរច្បាស់លាស់ដាច់ពីគ្នា ដើម្បីងាយស្វែងរក regressions។

## ៤. Code smells ដែលគួរពិនិត្យ

- Function ធំធ្វើ parsing, validation, network និង UI update ទាំងអស់។
- Module មួយ import ទៅគ្នាជារង្វង់។
- `try/catch` ទទេ ឬ error ត្រូវបានលាក់។
- Global mutable state ច្រើនដែលអាចផ្លាស់ប្តូរពីគ្រប់ទីកន្លែង។
- Abstraction ឬ class hierarchy ច្រើនជាង complexity ដែលវាកាត់បន្ថយ។

## លំហាត់

1. បំបែក function ដែល validate form, POST API និង update status ទៅ responsibilities ដាច់ៗ។
2. តើ dependency injection ជួយ test ដូចម្តេច?
3. រៀបជំហាន refactor function ធំ ដោយមិនប្តូរ output។

<details><summary>ចម្លើយសង្ខេប</summary>

បំបែក pure validation, API client និង UI status update; ផ្ញើ API function ចូល service ដើម្បី test ដោយ fake implementation; កំណត់ behavior/tests មុន ហើយប្តូរម្តងតូចៗ។

</details>

## សង្ខេប

Architecture ល្អធ្វើឱ្យ data flow និង responsibility ច្បាស់។ ញែក business rule ពី I/O, ប្រើ patterns តែពេលវាដោះស្រាយបញ្ហាពិត និង refactor ជាជំហានតូចដែលរក្សា behavior។
