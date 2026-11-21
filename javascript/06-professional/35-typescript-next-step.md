# មេរៀន ៣៥៖ TypeScript — ជំហានបន្ទាប់ពី JavaScript

## គោលដៅ

យល់ថា TypeScript បន្ថែម static type checking លើ JavaScript, សរសេរ type annotation, object type, union, narrowing និង generic មូលដ្ឋាន ហើយមិនច្រឡំ type checking ជាមួយ runtime validation។

## ១. TypeScript ជាអ្វី?

TypeScript ជា language/tooling ដែលពង្រីក JavaScript ដោយ type syntax។ Type checker ពិនិត្យកំហុសមួយចំនួនមុនពេល run; បន្ទាប់មក TypeScript ត្រូវ compile/strip types ទៅ JavaScript។ Type annotations មិនបញ្ជាក់ថា API response ឬ user input មានទម្រង់ត្រឹមត្រូវពេល runtime ទេ។

~~~ts
function greet(name: string): string {
  return `សួស្តី ${name}`;
}

const count: number = 3;
~~~

ជ្រើសតម្លៃមាន type ជាក់លាក់ និងអនុញ្ញាតឱ្យ compiler infer type ពេលវាច្បាស់ ដើម្បីជៀសការសរសេរ annotation លើគ្រប់បន្ទាត់។

## ២. Object types និង interface

~~~ts
type Student = {
  id: number;
  name: string;
  email?: string;
};

function displayStudent(student: Student): string {
  return `${student.id}: ${student.name}`;
}
~~~

`email?` ជា property optional; ពេលអានវាអាចជា `string | undefined`។ `type` និង `interface` អាចពិពណ៌នារូបរាង object; ជ្រើស style តែមួយដែល project ប្រើ ហើយប្រើ features តាមករណី។

## ៣. Union និង narrowing

~~~ts
function formatId(id: number | string): string {
  if (typeof id === "number") {
    return id.toFixed(0);
  }
  return id.trim();
}
~~~

Union អនុញ្ញាតប្រភេទជម្រើសច្រើន; ត្រូវ narrow ដោយ `typeof`, `in`, equality ឬ discriminant field មុនប្រើ behavior ពិសេសរបស់ប្រភេទមួយ។ កុំប្រើ `as` assertion ដើម្បីបង្ខំ compiler ឱ្យជឿដោយគ្មាន evidence។

## ៤. Generics

~~~ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = first(["Dara", "Sotheary"]); // string | undefined
~~~

Generic `T` ឱ្យ function ឬ structure ប្រើបានជាមួយ type ច្រើន ខណៈរក្សាព័ត៌មាន type។ បន្ថែម generic ពេល function ពិតជាទូទៅ; កុំធ្វើ type signature ឱ្យស្មុគស្មាញជាង behavior។

## ៥. `unknown`, `any` និង runtime data

`any` បិទ type checking សម្រាប់តម្លៃនោះ ហើយអាចឱ្យ bug ឆ្លងបាន។ `unknown` បង្ខំឱ្យពិនិត្យ/ប្រែប្រួលមុនប្រើ។ ទិន្នន័យពី `response.json()` គួរត្រូវចាត់ទុកមិនទាន់ទុកចិត្ត រួច validate schema ដោយ runtime code ឬ schema validation library មុនយកទៅប្រើ។ TypeScript type មិននៅក្នុង JavaScript output ដើម្បីការពារ request ទេ។

~~~ts
function isStudent(value: unknown): value is Student {
  return typeof value === "object" && value !== null
    && "id" in value && typeof value.id === "number"
    && "name" in value && typeof value.name === "string";
}
~~~

Type guard ខាងលើជាឧទាហរណ៍សាមញ្ញ; schema ស្មុគស្មាញត្រូវ validate fields ទាំងអស់ និងកំណត់ច្បាប់ច្បាស់។

## ៦. ផែនការរៀនបន្ទាប់

1. រៀន JavaScript modules, objects, arrays និង async/await ឱ្យរឹងមាំ។
2. ដំឡើង TypeScript តាម project guide និងពិនិត្យ compiler options។
3. បម្លែង file មួយៗតូចៗ; កុំប្រើ `any` ជំនួសការគិត type។
4. បន្ថែម runtime validation នៅ trust boundary (form/API/storage)។
5. បន្តទៅ framework ដែលអ្នកជ្រើស បន្ទាប់ពីយល់ browser និង JavaScript fundamentals។

## លំហាត់

1. សរសេរ type `Course` មាន `id`, `title`, `level` និង `published`។
2. សរសេរ function ទទួល `number | string` ហើយត្រឡប់ string ដោយ narrow type។
3. ហេតុអ្វី TypeScript type មិនអាចជំនួស validation API response នៅ runtime?

<details><summary>ចម្លើយគំរូ</summary>

~~~ts
type Course = { id: number; title: string; level: "beginner" | "advanced"; published: boolean };

function normalizeCode(code: number | string): string {
  return typeof code === "number" ? String(code) : code.trim();
}
~~~

TypeScript types ត្រូវដកចេញពេល compile; data ខាងក្រៅអាចខូច ឬ malicious ដូច្នេះត្រូវពិនិត្យនៅ runtime។

</details>

## សង្ខេប

TypeScript ជួយរកកំហុសមុន run និងបញ្ជាក់ data shape នៅក្នុង source code។ សិក្សាក្រោយ JavaScript fundamentals, ប្រើ `unknown` នៅ trust boundary និងរក្សា runtime validation ព្រោះ type annotations មិនការពារ API ឬ user input ពេល app កំពុងរត់ទេ។
