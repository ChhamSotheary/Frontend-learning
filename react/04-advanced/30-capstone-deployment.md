# មេរៀន ៣០៖ Build, Deploy និង Capstone Learning Tracker

## គោលដៅ

រៀប React app មុន release, build production assets, deploy static SPA ឬ framework app តាមរបៀបត្រឹមត្រូវ និងបញ្ចប់ Learning Tracker ជា Capstone។

## ១. Build និងពិនិត្យ production output

ក្នុង Vite project ជាទូទៅប្រើ៖

~~~bash
npm run build
npm run preview
~~~

Build បង្កើត optimized static output ក្នុងថត dist។ Preview ជួយមើល build locally ប៉ុន្តែមិនមែន production host ពិតទេ។ ពិនិត្យ network requests, console errors, asset paths និង responsive layout។

## ២. Deployment checklist

1. ប្រើ Node/dependency versions ដែល project គាំទ្រ និងរក្សា lockfile។
2. រត់ lint/tests/build តាម scripts របស់ project។
3. កុំដាក់ secrets ក្នុង frontend environment variables ឬ static files។
4. កំណត់ SPA fallback ទៅ index.html បើប្រើ client-side routes។
5. ប្រើ HTTPS និងពិនិត្យ caching/security headers តាម hosting។
6. សាក production build មិនមែនតែ dev server។

បើ app ប្រើ SSR ឬ Server Components ត្រូវ deploy ជាមួយ framework/server runtime ដែលគាំទ្រ; static hosting អាចមិនគ្រប់។

## ៣. Capstone: Learning Tracker

បើក [starter project](../projects/learning-tracker/README.md)។ App តាមដានវគ្គ និងមេរៀនដោយ React state។ ពង្រីកវាតាម milestones ខាងក្រោម។

### Milestone 1: Product scope

- សរសេរ user stories: បន្ថែមវគ្គ, ស្វែងរក, filter, mark lesson complete។
- កំណត់ model: course មាន id, title, category; lesson មាន id, courseId, title, completed។
- គូស UI states: loading, empty, success, error។

### Milestone 2: Component tree និង state

- បំបែក App, CourseForm, SearchFilter, CourseList និង CourseCard។
- ដាក់ state នៅ parent ដែលចែករំលែកវា។
- ប្រើ reducer ពេល action ច្រើន និងបន្ថែម unit tests សម្រាប់ transitions។

### Milestone 3: Persistence និង accessibility

- រក្សា data មិនរសើបក្នុង localStorage ហើយ parse/validate schema ពេលអាន។
- បន្ថែម labels, semantic buttons, visible focus និង status announcements។
- ផ្តល់ clear/reset action និងចងចាំថា localStorage មិនមែន secure storage។

### Milestone 4: API និង routing

- បន្ថែម list/detail routes ដោយ React Router ឬ framework router។
- បំបែក API client ចេញពី UI; ពិនិត្យ response status និង data shape។
- បង្ហាញ loading/error/empty states និងអនុញ្ញាត retry/cancel។

### Milestone 5: Quality និង release

- Test behavior តាម role/label ដោយ React Testing Library។
- ពិនិត្យ keyboard, mobile layout, API failures និង empty data។
- Build production, សាក routing fallback និងសរសេរ README មាន setup/decisions។

## ៤. Rubric វាយតម្លៃ

- Behavior: flow សំខាន់និង edge cases ដំណើរការ។
- Code: component responsibilities, props និង state ownership ច្បាស់។
- Accessibility: keyboard, focus, labels និង status អាចប្រើ។
- Reliability: API/storage errors មិនបង្ហាញ success ក្លែងក្លាយ។
- Security: user text safe, server authorization និង secrets មិននៅ client។
- Delivery: tests/build instructions និង deployment config មានច្បាស់។

## លំហាត់ចុងវគ្គ

1. បន្ថែម edit course និង confirm delete ដែលអាចប្រើ keyboard។
2. បន្ថែម route detail និង not-found page។
3. បង្កើត tests សម្រាប់ filter, reducer និង form validation។
4. Deploy build ហើយសាក refresh នៅ route ជ្រៅ។
5. សរសេរ 5 ចំណុចដែលអ្នកបានរៀន និង 3 ចំណុចដែលត្រូវកែលម្អបន្ទាប់។

## សង្ខេប

Production React ត្រូវការលើសពី UI ដែលបង្ហាញបាន៖ build reproducible, routing fallback, error handling, tests, accessibility និង security។ Capstone ភ្ជាប់គោលគំនិតទាំងវគ្គ ហើយបង្ហាញថាអ្នកអាចបន្តរៀន framework តាមតម្រូវការបាន។
