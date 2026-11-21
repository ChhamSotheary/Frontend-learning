# មេរៀន ២០៖ async/await និងការគ្រប់គ្រង Errors

## គោលដៅ

សរសេរ asynchronous flow ឱ្យអានដូច code តាមលំដាប់, ប្រើ `async` និង `await`, ចាប់ error ដោយ `try/catch`, ប្រើ `Promise.all` និងដឹងពីរបៀបមិនធ្វើឱ្យការងារឯករាជ្យរត់ជាបន្តបន្ទាប់ដោយមិនចាំបាច់។

## ១. `async` function

Function ដែលមាន `async` តែងតែត្រឡប់ Promise។ តម្លៃ `return` ត្រូវបាន wrap ជា fulfilled Promise; error ដែល throw ប្រែទៅជា rejected Promise។

~~~js
async function getGreeting() {
  return "សួស្តី";
}

getGreeting().then(console.log);
~~~

នេះស្មើនឹងការត្រឡប់ Promise ដែល resolve ទៅ string។ Caller អាចប្រើ `.then()` ឬ `await`។

## ២. `await` និងលំដាប់ជំហាន

~~~js
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function runSteps() {
  console.log("ចាប់ផ្តើម");
  await wait(300);
  console.log("បន្តក្រោយរង់ចាំ");
}

runSteps().catch(console.error);
~~~

`await` រង់ចាំ Promise ក្នុង async function ហើយបន្តក្រោយលទ្ធផលរួច។ វាមិនបិទ thread ទាំងមូលទេ; function បញ្ចប់ជាបណ្តោះអាសន្ន ខណៈ runtime អាចធ្វើការងារផ្សេង។ Top-level `await` មានច្បាប់ខុសតាម module/runtime; សម្រាប់អ្នកចាប់ផ្តើម ដាក់ក្នុង async function ឬ ESM module ដែលគាំទ្រ។

## ៣. ចាប់ error

~~~js
async function loadRequiredData() {
  try {
    const value = await mayFail();
    return value;
  } catch (error) {
    console.error("មិនអាចទាញទិន្នន័យបាន", error);
    throw error; // បញ្ជូនឱ្យ caller សម្រេចថាត្រូវធ្វើអ្វីបន្ត
  } finally {
    console.log("បញ្ចប់ request flow");
  }
}

loadRequiredData().catch((error) => showFailure(error.message));
~~~

`try/catch` ចាប់ exception ពីការហៅដែលបាន `await`។ បើមិន `await` promise ក្នុង try block នោះ rejection អាចមិនត្រូវ catch ដោយ block នេះទេ។ បន្ទាប់ពី log error សម្រេចថា return fallback ឬ throw បន្ត; កុំទុកឱ្យ caller គិតថាជោគជ័យ។

## ៤. ស្របគ្នា ឬតាមលំដាប់?

~~~js
// មិនពឹងគ្នា៖ ចាប់ទាំងពីរ ហើយរង់ចាំរួម
const [user, courses] = await Promise.all([loadUser(), loadCourses()]);

// ពឹងគ្នា៖ លទ្ធផលទី១ត្រូវមានសិន ទើបហៅទី២
const user = await loadUser();
const courses = await loadCoursesFor(user.id);
~~~

ការដាក់ `await` ជាជួរបង្ខំឱ្យការងារទី២ចាប់ក្រោយទី១។ បើមិនពឹងគ្នា បង្កើតការងារទាំងពីរ ហើយប្រើ `Promise.all` ដើម្បីកាត់ពេលរង់ចាំសរុប។

## ៥. ដាក់ fallback ដោយមានន័យ

~~~js
async function loadOptionalBanner() {
  try {
    return await loadBanner();
  } catch {
    return { text: "សូមស្វាគមន៍" };
  }
}
~~~

Fallback ល្អសម្រាប់ទិន្នន័យ optional ដែល app នៅតែអាចបន្តបាន។ ទិន្នន័យសំខាន់ ឬសកម្មភាពបង់ប្រាក់ មិនគួរបិទបាំង failure ដោយបង្ហាញជោគជ័យក្លែងក្លាយទេ។

## លំហាត់

1. បង្កើត async function `getTotal()` ដែល await function ត្រឡប់ Promise។
2. ហៅ `loadProfile()` និង `loadPreferences()` ដោយស្របគ្នា។
3. សរសេរ caller ដែលចាប់ error ពី async function។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
async function loadPageData() {
  try {
    const [profile, preferences] = await Promise.all([
      loadProfile(),
      loadPreferences(),
    ]);
    return { profile, preferences };
  } catch (error) {
    console.error("ទំព័រមិនអាចផ្ទុកទិន្នន័យបាន", error);
    throw error;
  }
}
~~~

</details>

## សង្ខេប

`async` តែងតែផ្តល់ Promise; `await` ធ្វើឱ្យ flow អានតាមលំដាប់ និង error អាច catch បាន។ ប្រើ `Promise.all` សម្រាប់ការងារឯករាជ្យ ហើយចាប់ error នៅកន្លែងដែលអាចបង្ហាញស្ថានភាព ឬផ្តល់ fallback មានន័យ។
