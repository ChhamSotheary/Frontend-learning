# មេរៀន ២៩៖ Node.js និង Command-Line Applications

## គោលដៅ

បែងចែក JavaScript language ពី Node.js runtime, អាន arguments ពី command line, ប្រើ built-in modules, ដោះស្រាយ filesystem error និងរៀបចំ CLI ឱ្យមាន usage និង exit code ច្បាស់។

## ១. Node.js ជាអ្វី?

Node.js ជា JavaScript runtime សម្រាប់រត់កូដក្រៅ browser។ វាផ្តល់ APIs ដូច filesystem, process និង HTTP server; API ទាំងនេះមិនមានក្នុង browser ដោយស្វ័យប្រវត្តិទេ។ Version runtime សំខាន់ ដូច្នេះពិនិត្យ `node --version` និងឯកសារតាម Node.js version ដែលគម្រោងប្រើ។

~~~js
// environment.js
console.log({
  version: process.version,
  platform: process.platform,
  currentDirectory: process.cwd(),
});
~~~

រត់ពី terminal ដោយ `node environment.js`។ Browser globals ដូច `document` និង `window` មិនមានក្នុង Node.js លុះត្រាតែបង្កើត environment ផ្សេង។

## ២. CLI arguments

~~~js
// greet.js
const [name = "មិត្ត"] = process.argv.slice(2);
console.log(`សួស្តី ${name}`);
~~~

`process.argv` មាន command និង path របស់ script នៅដើម; arguments ដែលអ្នកផ្ញើចាប់ពី index 2។ ពិនិត្យ input មុនប្រើ និងបង្ហាញ usage សម្រាប់ការបញ្ចូលខុស។

~~~js
const [command, ...args] = process.argv.slice(2);
if (command !== "greet" || args.length > 1) {
  console.error("ប្រើ៖ node cli.js greet [ឈ្មោះ]");
  process.exitCode = 2;
} else {
  console.log(`សួស្តី ${args[0] ?? "មិត្ត"}`);
}
~~~

ការកំណត់ `process.exitCode` អនុញ្ញាតឱ្យ process បញ្ចប់ធម្មតា ហើយផ្ញើ status ទៅ caller; ជាទូទៅល្អជាង `process.exit()` ភ្លាមៗ ដែលអាចកាត់ output ឬ cleanup។

## ៣. Built-in modules និង filesystem

Node.js មាន core modules ដូច `node:path`, `node:fs/promises`, `node:crypto`។ ប្រើ path API ជំនួសការតភ្ជាប់ path ដោយ string ព្រោះ separator ខុសតាម OS។

~~~js
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

async function readTextFile(fileName) {
  const safePath = resolve(process.cwd(), fileName);
  return readFile(safePath, "utf8");
}
~~~

ឧទាហរណ៍ត្រូវដំណើរការជា ESM (កំណត់ module mode តាម Node version/project)។ បើ file path មកពី user កំណត់ directory allowlist និងពិនិត្យ path traversal មុនអាន/សរសេរ; កុំសន្មតថា `resolve` ដោយខ្លួនឯងធ្វើ authorization។

## ៤. Async I/O និង error handling

Filesystem/network API ជាច្រើនមាន asynchronous version; ប្រើ `await` និងចាប់ error ដែលអាចដោះស្រាយបាន។ Error code ដូច `ENOENT` អាចជួយបែងចែក file មិនមានពី permission error។ កុំបង្ហាញ stack trace ឬ server path រសើបដល់អ្នកប្រើ CLI ទូទៅ; log detail នៅកន្លែងសមស្រប។

## ៥. លំហាត់

1. បង្កើត CLI ទទួលឈ្មោះ និងបង្ហាញសារ welcome។
2. បើគ្មានឈ្មោះ បង្ហាញ usage ហើយកំណត់ non-zero exit code។
3. បន្ថែម option `--upper` ដើម្បីបម្លែងឈ្មោះជាអក្សរធំ។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const args = process.argv.slice(2);
const upper = args.includes("--upper");
const name = args.find((arg) => !arg.startsWith("--"));
if (!name) {
  console.error("ប្រើ៖ node greet.js [--upper] <ឈ្មោះ>");
  process.exitCode = 2;
} else {
  console.log(`សួស្តី ${upper ? name.toUpperCase() : name}`);
}
~~~

</details>

## សង្ខេប

Node.js បន្ថែម runtime APIs លើ JavaScript។ CLI អាន arguments ពី `process.argv`, ផ្តល់ usage/exit code និងប្រើ built-in modules តាមតម្រូវការ។ ការចូល filesystem ត្រូវចាប់ error និង validate path/input តាមសិទ្ធិ។
