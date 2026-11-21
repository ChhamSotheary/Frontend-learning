# វគ្គ React.js ជាភាសាខ្មែរ — មូលដ្ឋានដល់កម្រិតខ្ពស់

វគ្គនេះបង្រៀន React សម្រាប់បង្កើត web UI ដោយជំហានៗ៖ ចាប់ពី component និង JSX, state និង form, hooks, data fetching និង routing រហូតដល់ testing, TypeScript, security, rendering architecture និង deployment។ មេរៀនប្រើ React function components ជាចម្បង និងពន្យល់ថា React ជា UI library; framework និង ecosystem tools មានតួនាទីបន្ថែមខុសគ្នា។

មេរៀននីមួយៗមានគោលដៅ, ពន្យល់ជាជំហាន, កូដ, កំហុសទូទៅ, លំហាត់ និងចម្លើយគំរូ។ ចាប់ផ្តើមពី [មេរៀនទី ១](01-fundamentals/01-react-mental-model.md)។

## មុនចាប់ផ្តើម

- ត្រូវស្គាល់ HTML, CSS និង JavaScript មូលដ្ឋាន។ បើ JavaScript មិនទាន់រឹងមាំ សូមមើល [វគ្គ JavaScript](../javascript/README.md) ជាមុន ឬរៀនព្រមគ្នា។
- ត្រូវដឹងពី functions, arrays, objects, destructuring, modules, promises និង async/await។
- ត្រូវដំឡើង Node.js និង npm។ ពិនិត្យ Node.js version តាមតម្រូវការរបស់ Vite នៅពេលបង្កើត project ព្រោះ version អាចផ្លាស់ប្តូរ។
- ប្រើ editor និង browser Developer Tools។

## បង្កើត project សម្រាប់ហាត់

សម្រាប់រៀនមូលដ្ឋាន យើងប្រើ Vite build tool ដើម្បីផ្តោតលើ React code។ React official docs ក៏ពន្យល់ថា app ថ្មីដែលដាក់ប្រើពិតអាចសមស្របនឹង framework; សម្រាប់រៀន React ឬ app ដែលចង់រៀបចំ build ដោយខ្លួនឯង អាចចាប់ផ្តើមជាមួយ Vite។ Create React App ត្រូវបានដកចេញពីជម្រើសណែនាំសម្រាប់ project ថ្មី។ សូមមើល docs ផ្លូវការខាងក្រោមមុនដំឡើង ព្រោះ setup និង version អាចកែប្រែតាមពេល។

~~~bash
npm create vite@latest react-practice -- --template react
cd react-practice
npm install
npm run dev
~~~

ពេល Vite បង្ហាញ local address សូមបើកក្នុង browser។ មេរៀននីមួយៗអាចសាកដោយយក snippet ទៅបញ្ចូល src/App.jsx។ កុំបើក JSX file ដោយផ្ទាល់ជា file URL; JSX ត្រូវការឧបករណ៍ build/dev server។

## ផែនទីមេរៀន

### ផ្នែកទី ១៖ React មូលដ្ឋាន

1. [គំនិត React និង UI ជា function នៃ state](01-fundamentals/01-react-mental-model.md)
2. [បង្កើត React project ដោយ Vite](01-fundamentals/02-setup-vite.md)
3. [JSX ពី HTML ទៅ JavaScript markup](01-fundamentals/03-jsx.md)
4. [Components និងការផ្គុំ UI](01-fundamentals/04-components-composition.md)
5. [Props និងការបញ្ជូនទិន្នន័យ](01-fundamentals/05-props.md)
6. [Conditional rendering, lists និង keys](01-fundamentals/06-conditional-lists-keys.md)
7. [Event handlers និងអន្តរកម្ម](01-fundamentals/07-events.md)
8. [useState និង state ដំបូង](01-fundamentals/08-usestate.md)
9. [State snapshot, batching និង update functions](01-fundamentals/09-state-snapshots.md)
10. [Forms និង controlled inputs](01-fundamentals/10-forms.md)

### ផ្នែកទី ២៖ State និង React Hooks

11. [រៀបចំ state និង derived data](02-state-and-hooks/11-state-structure.md)
12. [Lifting state up និង state sharing](02-state-and-hooks/12-lifting-state.md)
13. [useReducer សម្រាប់ state transitions](02-state-and-hooks/13-usereducer.md)
14. [Context និងការចែក data តាម tree](02-state-and-hooks/14-context.md)
15. [Custom Hooks និងការប្រើ logic ឡើងវិញ](02-state-and-hooks/15-custom-hooks.md)
16. [useEffect និង synchronization ជាមួយ external systems](02-state-and-hooks/16-useeffect.md)
17. [useRef និង DOM references](02-state-and-hooks/17-useref.md)
18. [ទាញ API data និងគ្រប់គ្រង async UI](02-state-and-hooks/18-data-fetching.md)

### ផ្នែកទី ៣៖ Browser app ដែលរឹងមាំ

19. [Routing និង React Router](03-building-apps/19-routing.md)
20. [Styling និង accessibility](03-building-apps/20-styling-accessibility.md)
21. [Error Boundaries, Suspense និង lazy loading](03-building-apps/21-errors-suspense.md)
22. [Performance និង React Compiler](03-building-apps/22-performance.md)
23. [Debugging, Strict Mode និង React DevTools](03-building-apps/23-debugging.md)
24. [Component testing](03-building-apps/24-testing.md)

### ផ្នែកទី ៤៖ Advanced និង Production React

25. [TypeScript ជាមួយ React](04-advanced/25-typescript.md)
26. [React security និង trust boundaries](04-advanced/26-security.md)
27. [React Actions, form actions និង optimistic UI](04-advanced/27-actions.md)
28. [SSR, hydration និង React Server Components](04-advanced/28-rendering-architecture.md)
29. [Architecture, reusable components និង refactoring](04-advanced/29-architecture.md)
30. [Build, deploy និង Capstone project](04-advanced/30-capstone-deployment.md)

## Project អនុវត្ត

មាន React starter project [Learning Tracker](projects/learning-tracker/README.md) ដែលបង្ហាញ components, props, reducer, controlled form, search/filter, localStorage, loading/empty state និង accessibility។ វគ្គ Capstone នៅមេរៀនទី ៣០ បង្ហាញពីការពង្រីកវាទៅ API, routing និង tests។

## ប្រភពផ្លូវការ

- [React Learn](https://react.dev/learn) — មូលដ្ឋាន component, JSX, props, state និង UI data flow។
- [React API Reference](https://react.dev/reference/react) — APIs និង Hooks។
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) — ច្បាប់ប្រើ Hooks។
- [React: Creating a React App](https://react.dev/learn/creating-a-react-app) — ជ្រើស framework ឬ build from scratch និងគោលការណ៍ setup។
- [React Versions](https://react.dev/versions) — ពិនិត្យ version និង release features បច្ចុប្បន្ន។
- [React Blog និង Security Updates](https://react.dev/blog) — release notes និងការជូនដំណឹងផ្លូវការពី React team។
- [Vite Getting Started](https://vite.dev/guide/) — បង្កើត project និងដំណើរការ dev server។
- [React Router Modes](https://reactrouter.com/start/modes) — routing options និង API តាម mode។
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — សាក UI តាមរបៀបដែលអ្នកប្រើធ្វើ។

## ចំណាំអំពី version

React និង toolchain អាចបន្ថែម ឬកែ API។ មេរៀនបង្រៀនគោលគំនិតដែលអាចប្រើបានយូរ ហើយកន្លែងដែល version សំខាន់នឹងភ្ជាប់ទៅ docs ផ្លូវការ។ ពេលចាប់ផ្តើម project ថ្មី សូមបង្កើត template ដោយ command ខាងលើ ដើម្បីទទួល configuration បច្ចុប្បន្ន ជំនួសការចម្លង package versions ចាស់ពី tutorial។
