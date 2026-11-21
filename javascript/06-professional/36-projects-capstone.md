# មេរៀន ៣៦៖ Projects និង Capstone ពីមូលដ្ឋានដល់កម្រិតជាក់ស្តែង

## គោលដៅ

យកគំនិតពីវគ្គមកបង្កើត app, ធ្វើតាម milestone, បន្ថែម validation/accessibility/error handling និងរៀបចំ code ដើម្បីងាយពង្រីក។ Starter project Todo មាននៅ `../projects/todo/`។

## គម្រោង A៖ Profile Greeting Card

**គោលគំនិត:** variables, strings, conditions, functions និង DOM។

ជំហាន៖

1. បង្កើត HTML form មានឈ្មោះ និងជម្រើសពេលថ្ងៃ (ព្រឹក/រសៀល/ល្ងាច)។
2. ចាប់ submit event និងប្រើ `preventDefault()` ដើម្បីបង្ហាញលទ្ធផលនៅលើ page។
3. Trim input, បដិសេធឈ្មោះទទេ និងផ្តល់ error message។
4. បង្កើត greeting function ដែលត្រឡប់ string; ដាក់អត្ថបទដោយ `textContent`។
5. សាក input មានតួអក្សរដូច `<script>` ហើយបញ្ជាក់ថាវាបង្ហាញជាអត្ថបទ មិនរត់ជាកូដ។

**ពិនិត្យខ្លួនឯង:** ការគណនា greeting គួរបំបែកចេញពី DOM update ដើម្បីអាចប្រើ function ដដែលឡើងវិញ។

## គម្រោង B៖ Quiz App

**គោលគំនិត:** arrays, objects, conditions, functions, events និង UI state។

ជំហាន៖

1. រៀបចំសំណួរជា array នៃ object `{ question, choices, answerIndex }`។
2. រក្សា `currentQuestionIndex` និង `score` នៅក្នុង state មួយកន្លែង។
3. Render សំណួរ និងជម្រើសដោយបង្កើត DOM nodes; កុំបញ្ចូល string ពី user/API តាម `innerHTML`។
4. ពេលជ្រើស ចាក់សោជម្រើសសម្រាប់សំណួរនោះ, បង្ហាញត្រឹមត្រូវ/ខុសជាអត្ថបទ និងបន្ថែម score តែម្ដង។
5. ប៊ូតុងបន្ទាប់ផ្លាស់ទៅសំណួរបន្ទាប់; ពេលចប់បង្ហាញពិន្ទុ និងប៊ូតុង restart។
6. គ្រប់គ្រង empty question list, double click និង keyboard access។

**បន្ថែម:** រក្សា high score ដែលមិនរសើបក្នុង localStorage និងចាប់ JSON parse/storage error។

## គម្រោង C៖ Todo List (មាន starter code)

**គោលគំនិត:** DOM, forms, events/delegation, immutable updates, localStorage, accessibility និង error handling។

### លំហូរទិន្នន័យ

1. `loadTodos()` អាន JSON ហើយពិនិត្យទម្រង់ data មុនប្រើ។
2. `renderTodos()` បង្កើត UI ពី state បច្ចុប្បន្នដោយ DOM methods និង `textContent`។
3. Form submit បន្ថែម item ថ្មី; event delegation លើ list គ្រប់គ្រង toggle/delete។
4. `saveTodos()` រក្សា state ហើយបង្ហាញសារបើ storage បិទ ឬ error។
5. UI មាន label, keyboard focus និង live status។

សាក run ដោយបើក `javascript/projects/todo/index.html` ក្នុង browser។ កូដអាចប្រើ browser local file សម្រាប់លំហាត់នេះ ព្រោះមិនមាន module import ឬ network request។

## គម្រោង D៖ API Dashboard

**គោលគំនិត:** fetch, JSON, async/await, modules, loading/error states និង request cancellation។

ជំហាន៖

1. ជ្រើស public API ដែលអនុញ្ញាតឱ្យសាក និងអាន terms/rate limits។
2. បង្កើត `api.js` សម្រាប់ request; ពិនិត្យ `response.ok`, parse JSON និង validate response shape។
3. បង្កើត `ui.js` សម្រាប់ loading, empty, success និង error state។
4. បន្ថែម `AbortController` ដើម្បីបញ្ឈប់ request ចាស់ពេល search ថ្មី។
5. បង្ហាញ data មិនទុកចិត្តដោយ DOM nodes/`textContent`; មិនដាក់ API secret ក្នុង browser source។
6. សាក network offline, HTTP failure, malformed JSON និង response ទទេ។

## Capstone៖ Learning Tracker

បង្កើត app តាមដាន course/lesson ដែលមាន៖

- បន្ថែម, កែ, លុប course; course មានឈ្មោះ, កម្រិត និង status។
- Filter តាម status និង search តាមឈ្មោះ។
- Progress សរុប និងទំព័រ detail សម្រាប់ lesson។
- រក្សា preference/data មិនរសើបក្នុង storage; ពិនិត្យ schema និងផ្តល់ reset។
- Accessibility: semantic headings/buttons, labels, visible focus, keyboard-only flow និង live status។
- Tests សម្រាប់ pure functions ដូច filter, progress និង validation។
- Error state ពេល storage ឬ API មិនដំណើរការ។

### Milestones

1. **Scope:** សរសេរ user stories និងគូស data model មុនចាប់ code។
2. **Core behavior:** បង្កើត state functions និង test cases ដោយមិនពាក់ DOM។
3. **Interface:** បង្កើត semantic HTML និង render state។
4. **Persistence/API:** បន្ថែម adapter មួយៗ និង error handling។
5. **Quality:** ពិនិត្យ keyboard, responsive layout, security boundary និង performance។
6. **Review:** សរសេរ README មានរបៀប run, feature, decisions និង known limitations។

### Rubric សម្រាប់វាយតម្លៃខ្លួនឯង

- **Behavior:** flow សំខាន់ និង edge cases ដំណើរការតាម requirement។
- **Code:** function មាន responsibility ច្បាស់, data flow ងាយតាម និងគ្មាន global state ច្រើន។
- **Safety:** user text មិនត្រូវបកស្រាយជា HTML; server authorization មិនអាស្រ័យលើ UI។
- **Accessibility:** keyboard/focus/labels/status អាចប្រើបាន។
- **Reliability:** network/storage errors មានការឆ្លើយតប មិនបង្ហាញ success ក្លែងក្លាយ។
- **Maintainability:** instructions និង project setup អាចឱ្យអ្នកផ្សេងរត់/បន្តបាន។

## សង្ខេប

ការរៀនកម្រិតខ្ពស់កើតពីការភ្ជាប់គំនិតក្នុង project ពិត និងពិនិត្យ edge cases។ ចាប់ពី mini app, បែងចែក state/logic/UI/I/O, រួចបន្ថែម accessibility, tests, security និង documentation ជាបន្តបន្ទាប់។
