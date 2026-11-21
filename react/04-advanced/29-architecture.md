# មេរៀន ២៩៖ Architecture, Reusable Components និង Refactoring

## គោលដៅ

រៀប React project តាម feature/responsibility, បែងចែក UI/state/data access, រចនា reusable components ដោយ API តូច និង refactor ជាជំហាន។

## ១. ចាប់ពី data flow មិនមែន folder ច្រើន

កំណត់ថា user action មកពីណា, state ម្ចាស់នៅណា, data មកពី API ឬ local store និង UI states អ្វីត្រូវបង្ហាញ។ កុំបង្កើត architecture ស្មុគស្មាញមុនមានបញ្ហាពិត។

ឧទាហរណ៍ feature folder អាចមាន CoursePage.jsx, CourseForm.jsx, courseReducer.js, courseApi.js និង course.test.jsx។ Project តូចអាចប្រើ structure សាមញ្ញ; project ធំអាចចែកតាម feature ដើម្បីកាត់ការភ្ជាប់រវាង domains។

## ២. Reusable component API

~~~jsx
function Button({ children, variant = "primary", disabled = false, onClick }) {
  return (
    <button
      className={"button button--" + variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
~~~

Reusable component គួរមាន API ច្បាស់, semantic behavior និង defaults មានហេតុផល។ កុំបង្ក generic component ដែលមាន options ច្រើនពេក រហូតពិបាកប្រើ។

## ៣. បែងចែក responsibility

- Component បកប្រែ props/state ទៅ UI។
- Hook រៀប stateful logic ដែលអាច reuse។
- Reducer កំណត់ transitions សម្រាប់ state ស្មុគស្មាញ។
- API/data module ប្រមូល network calls និង parse errors។
- Server/framework layer កាន់ secrets និង authorization។

នេះជាការណែនាំ មិនមែនច្បាប់ file placement ដាច់ខាត។ ជ្រើស structure ដែលធ្វើឱ្យ data flow អាចតាមដាន។

## ៤. Refactor ដោយសុវត្ថិភាព

1. កំណត់ behavior បច្ចុប្បន្ន និង edge cases។
2. បំបែក component ធំតាម UI responsibility។
3. ដក pure calculation ទៅ function ដែលងាយ test។
4. រក្សា state ownership និង props API ឱ្យច្បាស់។
5. សាក behavior និង review diff ក្រោយការផ្លាស់តូចនីមួយៗ។

## លំហាត់

1. បំបែក dashboard ធំជាបី components តាម responsibility។
2. តើអ្វីជាសញ្ញាថា reusable component មាន props ច្រើនពេក?
3. រៀបផែនការ refactor ដោយមិនប្តូរ user-visible behavior។

<details><summary>ចម្លើយសង្ខេប</summary>

Props ច្រើនដែលបង្ក combinations ស្មុគស្មាញ ឬត្រូវរៀប logic ច្រើនដើម្បីប្រើ component គឺជាសញ្ញាឱ្យពិនិត្យ API។ កត់ behavior/tests មុន រួចផ្លាស់ប្តូរម្តងតូចៗ។

</details>

## សង្ខេប

Architecture ល្អធ្វើឱ្យ ownership និង data flow ច្បាស់។ រៀបតាម feature/responsibility, ធ្វើ component API ឱ្យតូច និង refactor ជាជំហានដែលអាចផ្ទៀងផ្ទាត់បាន។
