# មេរៀន ១៨៖ Callbacks និង Event Loop

## គោលដៅ

បែងចែក synchronous និង asynchronous code, យល់តួនាទី call stack, task queue និង microtask queue, ហើយពន្យល់លំដាប់ `setTimeout`, Promise និងការងារធម្មតា។

## ១. Synchronous និង asynchronous

កូដ synchronous ដំណើរការតាមលំដាប់ ហើយបន្ទាត់ក្រោយរង់ចាំបន្ទាត់មុនចប់។ ការងារ asynchronous ដូច timer ឬ network request អាចចាប់ផ្តើមហើយឱ្យ JavaScript បន្តការងារផ្សេង; callback ត្រូវបានហៅពេលលទ្ធផលរួច។ JavaScript ក្នុង browser ត្រូវបានគ្រប់គ្រងដោយ runtime ដែលមាន API និង event loop ជុំវិញ language engine។

~~~js
console.log("១. ចាប់ផ្តើម");
setTimeout(() => console.log("៣. callback របស់ timer"), 0);
console.log("២. បន្តភ្លាមៗ");
~~~

ទោះ delay ជា `0` callback ក៏មិនកាត់ជួរ call stack បច្ចុប្បន្នដែរ។ វារត់ក្រោយកូដបច្ចុប្បន្នអស់។ Timer គឺជាពេលវេលាអប្បបរមាដែលស្នើ មិនមែនការធានាថានឹងរត់ត្រឹមពេលនោះទេ។

## ២. Call stack និង queues

1. JavaScript ដំណើរការ function មួយនៅលើ call stack។
2. Web API របស់ runtime អាចគ្រប់គ្រង timer, I/O ឬ event រង់ចាំក្រៅ stack។
3. ពេល callback ត្រៀមរួច runtime ដាក់វាទៅ queue សមស្រប។
4. ពេល stack ទទេ event loop អនុញ្ញាតឱ្យ callback បន្ទាប់ដំណើរការ។

Browser មានការគ្រប់គ្រង task និង microtask ជាក់លាក់; គំនិតសំខាន់សម្រាប់អ្នកចាប់ផ្តើមគឺ callback មិនអាចបញ្ឈប់ synchronous code ដែលកំពុងដំណើរការ។ ប្រសិនបើ loop ធ្ងន់ធ្វើការយូរ UI នឹងគាំង។

## ៣. Promise callbacks ជា microtasks

~~~js
console.log("A: sync");
setTimeout(() => console.log("D: timer task"), 0);
Promise.resolve().then(() => console.log("C: Promise reaction"));
console.log("B: sync");
~~~

ក្នុង browser ទំនើបលំដាប់ទូទៅគឺ A, B, C, D៖ synchronous code ចប់មុន; Promise reaction ត្រូវបានដំណើរការជា microtask មុន timer task នៅពេល checkpoint សមស្រប។ កុំយកនេះធ្វើជាច្បាប់ឆ្លងគ្រប់ runtime សម្រាប់ API ទាំងអស់; host មានគោលការណ៍ scheduling បន្ថែម។

## ៤. Callback និង callback hell

~~~js
function loadUser(id, onSuccess, onError) {
  setTimeout(() => {
    if (id > 0) onSuccess({ id, name: "Dara" });
    else onError(new Error("ID មិនត្រឹមត្រូវ"));
  }, 100);
}

loadUser(1, (user) => console.log(user.name), (error) => console.error(error.message));
~~~

Callback អនុញ្ញាតឱ្យ code ទទួលលទ្ធផលនៅពេលក្រោយ។ ប៉ុន្តែការដាក់ callback ជាន់គ្នាច្រើនធ្វើឱ្យការគ្រប់គ្រង error និងលំដាប់ការងារពិបាក; Promise និង async/await ជួយរៀបចំ flow នេះ។

## ៥. មេរៀនអនុវត្ត

- កុំប្រើ synchronous loop ធ្ងន់លើ main thread សម្រាប់ការងារយូរ។
- កុំសន្មតថា `setTimeout(fn, 0)` មានន័យថារត់ភ្លាមៗ។
- បន្ថែម error path ជាមួយ callback; កុំបាត់ error ដោយមិនបង្ហាញ។

## លំហាត់

1. សរសេរទាយ output មុនពិនិត្យ: `console.log("A"); setTimeout(() => console.log("B"),0); console.log("C")`។
2. បន្ថែម `Promise.resolve().then(...)` ហើយសាកក្នុង browser console។
3. ហេតុអ្វី loop ដែលរារាំង JavaScript អាចធ្វើឱ្យប៊ូតុងមិនឆ្លើយតប?

<details><summary>ចម្លើយសង្ខេប</summary>

លទ្ធផល A, C, B ព្រោះ synchronous code រត់មុន timer callback។ Loop ធ្ងន់កាន់ main thread ហើយ event handler/UI work មិនអាចទទួលវេនរហូតដល់ stack ទំនេរ។

</details>

## សង្ខេប

Event loop អនុញ្ញាតឱ្យ runtime រៀបចំ callback សម្រាប់ការងារ asynchronous។ Synchronous code បញ្ចប់មុន callback; Promise reactions និង timer tasks មាន queue behavior ខុសគ្នា។ យល់ពីលំដាប់នេះមុនទៅ Promise និង async/await។
