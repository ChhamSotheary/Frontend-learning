# មេរៀន ២២៖ Performance និង React Compiler

## គោលដៅ

វាស់ performance មុន optimize, យល់ថា render មិនមែនស្មើ DOM mutation, ប្រើ memoization តែពេលមានប្រយោជន៍ និងស្គាល់ React Compiler ជម្រើសបច្ចុប្បន្ន។

## ១. Re-render មិនចាំបាច់ជាបញ្ហា

React component function អាចរត់ឡើងវិញពេល props/state/context ផ្លាស់។ វាមិនមានន័យថា browser បានសរសេរ DOM ទាំងអស់ឡើងវិញទេ។ ចាប់ផ្តើមពី code សាមញ្ញ ហើយប្រើ React DevTools Profiler ដើម្បីកំណត់ថាផ្នែកណាយឺតពិត។

## ២. កាត់ការងារដែលមិនចាំបាច់

- គណនាតម្លៃដែលអាច derivation បានដោយផ្ទាល់។
- ដាក់ state ជិត component ដែលប្រើវា។
- កុំបង្កើត object/state duplicates ដោយមិនចាំបាច់។
- បំបែក route/component ធំទៅ lazy chunks ពេលវាជួយ startup។
- Profile ជាមួយ data និង interaction ដូចប្រើប្រាស់ពិត។

## ៣. memo, useMemo និង useCallback

React មាន APIs memoization ដូច memo, useMemo និង useCallback។ វាអាចជួយកាត់ recalculation ឬ child render តាមករណី ប៉ុន្តែបន្ថែម complexity និងមិនជួយគ្រប់ទីកន្លែង។

~~~jsx
const visibleTasks = useMemo(
  () => filterTasks(tasks, filter),
  [tasks, filter]
);
~~~

ប្រើតែពេល calculation មានតម្លៃថ្លៃ ឬ profiler បង្ហាញ bottleneck។ ពិនិត្យ React docs តាម version ព្រោះ React Compiler អាច memoize code មួយចំនួនដោយស្វ័យប្រវត្តិ និងកាត់បន្ថយតម្រូវការប្រើ memoization ដោយដៃ។

## ៤. React Compiler និង version

React Compiler ជា compiler/tooling ដែលអាចធ្វើ automatic memoization ពេល project បាន configure សមស្រប។ វាមិនមែនជាមូលហេតុឱ្យបំពាន purity ឬ Rules of Hooks ទេ។ ចាប់ពីគោលការណ៍ render សុទ្ធសាធ និងវាស់ដោយ Profiler; បើប្រើ Compiler សូមដើរតាម guide របស់ React version នោះ។

## លំហាត់

1. បើក Profiler ហើយរក interaction ដែលមាន render ច្រើន។
2. តើគួរដាក់ useMemo លើ calculation តូចគ្រប់មុខទេ?
3. រៀបចំការវាស់ performance មុន/ក្រោយកែ។

<details><summary>ចម្លើយសង្ខេប</summary>

មិនគួរ memoize គ្រប់មុខទេ; វាមាន overhead និងធ្វើឱ្យ code ស្មុគស្មាញ។ កំណត់ workload, profile, កែ bottleneck ហើយ profile ម្តងទៀត។

</details>

## សង្ខេប

Optimize ដោយ evidence មិនមែនការស្មាន។ Profiler ជួយរក bottleneck; memoization និង React Compiler ជាឧបករណ៍ optimization មិនមែនជំនួស data flow និង purity។
