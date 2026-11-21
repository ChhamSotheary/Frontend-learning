# មេរៀន ២៣៖ Debugging, Strict Mode និង React DevTools

## គោលដៅ

ស្វែងរក UI bug តាម component tree, inspect props/state, អាន warning, ប្រើ StrictMode និងដាក់ breakpoint ដើម្បីរកមូលហេតុ។

## ១. React DevTools

React DevTools មាន Components panel សម្រាប់មើល component tree, props, hooks និង owner relationships; Profiler panel សម្រាប់វាស់ render។ ដំឡើង extension ផ្លូវការសម្រាប់ browser ដែលប្រើ ហើយពិនិត្យថាភ្ជាប់ទៅ React app ត្រឹមត្រូវ។

## ២. ដោះស្រាយ bug ជាជំហាន

1. បង្កើតជំហានតិចបំផុតដែលបង្ក bug។
2. អាន error/warning និងពិនិត្យ file/line។
3. Inspect props, state និង event payload នៅ component ដែលពាក់ព័ន្ធ។
4. ពិនិត្យថា list keys មានស្ថិរភាព ឬ state ត្រូវបាន mutate។
5. កែតែមូលហេតុមួយ ហើយសាក flow ដដែល។

## ៣. Strict Mode

StrictMode ជា development tool ដែលអាចហៅ render, Effect setup/cleanup ឬ callback មួយចំនួនលើសពីម្តងដើម្បីរក impure logic និង cleanup ខ្វះ។ វាមិនបង្ក behavior ដូច production ទាំងស្រុងទេ ហើយមិន render UI បន្ថែម។ កុំលុប StrictMode ដើម្បីលាក់ bug; កែ code ឱ្យ setup/cleanup អាចធ្វើម្តងហើយម្តងទៀតដោយសុវត្ថិភាព។

## ៤. Breakpoints និង logs

ដាក់ breakpoint ក្នុង event handler ឬ reducer, ពិនិត្យ values ពេលកើត bug។ Console log មានប្រយោជន៍សម្រាប់សង្កេតតូចៗ ប៉ុន្តែដក logs ដែលមាន data រសើបមុន deploy។ កុំ log password, access tokens ឬ personal data។

## លំហាត់

1. ប្រើ Components panel រក component ដែលបង្ហាញ title ខុស។
2. បង្កើត Effect ដោយគ្មាន cleanup ហើយពិនិត្យ StrictMode warnings/behavior។
3. សរសេរជំហាន debug សម្រាប់ list ដែល checkbox state ផ្លាស់ទៅ row ខុសក្រោយ delete។

<details><summary>ចម្លើយសង្ខេប</summary>

ពិនិត្យ key ក្នុង list; index keys ជាញឹកញាប់ធ្វើឱ្យ React ភ្ជាប់ row state ខុសក្រោយលុប។ ប្តូរទៅ stable id ពី data។

</details>

## សង្ខេប

ប្រើ React DevTools, warning និង breakpoints ដើម្បីសង្កេត UI data flow។ StrictMode ជួយរក purity/cleanup bugs; ដោះស្រាយមូលហេតុ ជំនួសការលាក់សញ្ញាព្រមាន។
