# មេរៀន ៣៣៖ Tooling — npm, Bundlers, Linting និង Formatting

## គោលដៅ

យល់គោលបំណង package manager និង `package.json`, ប្រើ scripts និង lockfile, បែងចែក bundler/transpiler/linter/formatter និងរៀបចំ build workflow ដែលអាចធ្វើឡើងវិញបាន។

## ១. `package.json` និង npm

`package.json` ពិពណ៌នា project, scripts និង dependencies។ npm អាចដំឡើង packages និងរត់ scripts។ `npm install` សម្រាប់ដំឡើងតាមការកំណត់ package; ក្នុង CI ជាទូទៅប្រើ `npm ci` ជាមួយ lockfile ដើម្បីដំឡើងស្របគ្នា។ អាន docs npm តាម version ជាក់លាក់។

~~~json
{
  "name": "javascript-course-demo",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "test": "node --test"
  }
}
~~~

`type: module` ជួយកំណត់ ES module mode សម្រាប់ `.js` ក្នុង Node project មួយចំនួន។ ច្បាប់អាចខុសតាម Node version និង file extension; សូមប្រើ configuration តែមួយដែល project យល់ព្រម។

## ២. Dependency និង lockfile

Dependency ផ្ទាល់ជាកញ្ចប់ដែល app import; transitive dependency ជាកញ្ចប់ដែល dependency ផ្សេងទាញចូល។ Lockfile កត់ version ដោះស្រាយពិត ដើម្បីឱ្យ install ស្រដៀងគ្នារវាងម៉ាស៊ីន។ Commit lockfile សម្រាប់ app តាមគោលការណ៍ package manager របស់ project; កុំកែ lockfile ដោយដៃ។

Dependency version ranges មាន tradeoff រវាង update flexibility និង reproducibility។ ពិនិត្យ changelog/security advisory មុន upgrade major version។ កុំដំឡើង package ដោយសារឈ្មោះប្រហាក់ប្រហែល package ផ្លូវការ។

## ៣. Tool មួយៗធ្វើអ្វី?

- **Bundler** ប្រមូល module/dependency និងរៀប asset សម្រាប់ deploy។
- **Transpiler** បម្លែង syntax ឬ language ទៅទម្រង់គោលដៅដែល runtime គាំទ្រ។
- **Linter** រកបញ្ហា និងអនុវត្ត coding rules។
- **Formatter** រៀបចំ style ដោយទម្រង់ស្របគ្នា។
- **Test runner** រត់ test និងរាយការណ៍លទ្ធផល។

មិនចាំបាច់បន្ថែម tool ទាំងអស់តាំងពីថ្ងៃដំបូង។ បន្ថែមពេលមានតម្រូវការ និងរក្សា configuration ឱ្យតិចច្បាស់។

## ៤. Build និង source map

Development server ជួយ refresh និងបង្ហាញ error; production build អាច bundle/minify។ Source map ផ្គូផ្គង output ត្រឡប់ទៅ source code ដើម្បី debug។ ពិចារណាថាតើ source map មានព័ត៌មានដែលមិនចង់ public ឬអត់ មុន deploy។ កុំដាក់ `.env` ឬ secret ក្នុង static bundle; env variable ដែល bundle ទៅ client អាចមើលឃើញបាន។

## ៥. លំហាត់

1. ពន្យល់ភាពខុសគ្នារវាង linter និង formatter។
2. ហេតុអ្វី CI ត្រូវប្រើ lockfile និង install mode ស្របគ្នា?
3. រាយ workflow មុន deploy: lint, test, build និង review output។

<details><summary>ចម្លើយសង្ខេប</summary>

Linter ពិនិត្យ rule/bug; formatter រៀបចំទម្រង់។ Lockfile ជួយឱ្យ dependency resolution ស្របគ្នា។ Workflow ត្រូវតាម repo ប៉ុន្តែអាចរួម format check, lint, test, production build និងពិនិត្យ assets/config មុន deploy។

</details>

## សង្ខេប

npm និង lockfile គ្រប់គ្រង dependency/scripts; bundler, transpiler, linter និង formatter មានតួនាទីខុសគ្នា។ ជ្រើស tool តាមបញ្ហា, ចាក់សោ dependency ដោយ lockfile និងកុំបញ្ចូល secret ក្នុង client build។
