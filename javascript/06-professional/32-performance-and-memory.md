# មេរៀន ៣២៖ Performance, Memory និង Profiling

## គោលដៅ

ស្វែងរក bottleneck មុន optimize, កាត់បន្ថយការងារលើ main thread, ប្រើ browser performance tools, គ្រប់គ្រង listener/timer lifecycle និងយល់ពី memory leaks មូលដ្ឋាន។

## ១. វាស់មុនកែ

កូដដែលមើលទៅយឺតមិនតែងតែជា bottleneck ពិតទេ។ កំណត់អ្វីដែលយឺត (startup, interaction, network, render), ប្រើ performance profile និងកំណត់ baseline។ ក្រោយកែ សាក input និងឧបករណ៍ដដែលដើម្បីប្រៀបធៀប។ កុំ sacrifice readability សម្រាប់ micro-optimization ដែលមិនមានផល។

## ២. កាត់បន្ថយការងារលើ main thread

Synchronous JavaScript ធ្ងន់អាចរារាំង rendering និង event handling។ កាត់ការគណនាមិនចាំបាច់, debounce search input, បែងចែកការងារធំជាជំហាន ឬប្រើ Web Worker សម្រាប់ CPU-heavy task ដែលអាចដាច់ពី DOM។ Worker មាន message boundary ហើយមិនអាចចូល DOM ដោយផ្ទាល់។

~~~js
function debounce(callback, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
}
~~~

Debounce រង់ចាំសកម្មភាពស្ងប់មួយរយៈ មុនរត់ callback; សមស្របសម្រាប់ search typing មួយចំនួន។ Throttle កំណត់អត្រារត់អតិបរមា និងសមស្របសម្រាប់ event ដូច scroll តាមករណី។

## ៣. DOM និង rendering

ជៀសវាង query DOM ដដែលក្នុង loop ធំ; cache reference នៅ scope សមស្រប។ សម្រាប់ list ធំ បង្កើត fragment ឬបែងចែក rendering តាម batch; វាស់មុនអះអាងថាល្អជាង។ កុំ update layout property ជាបន្តបន្ទាប់ក្នុង loop ធំ បើវាបង្ខំ layout recalculation។

## ៤. Memory និង lifecycle

Memory leak កើតពេល object ដែលលែងត្រូវការនៅតែអាចចូលដល់បាន។ មូលហេតុទូទៅ៖ listener លើ `window` មិនដក, timer/interval មិន clear, closure កាន់ data ធំ, cache មិនមានកំណត់។

~~~js
const controller = new AbortController();
window.addEventListener("resize", update, { signal: controller.signal });
// ក្រោយ component dispose:
controller.abort();
clearInterval(timerId);
~~~

Browser មាន garbage collector ប៉ុន្តែមិនអាចសម្អាត object ដែលនៅមាន reference ពី root ដែលរស់បានទេ។ ប្រើ memory snapshot និង allocation timeline ដើម្បីស្វែងរក leak មិនត្រូវពឹងលើការស្មាន។

## ៥. លំហាត់

1. ប្រើ debounce លើ input search ដោយ delay 300ms។
2. រាយបញ្ជី 3 មូលហេតុដែលអាចបង្ក memory leak។
3. រៀបចំជំហាន profiling មុននិងក្រោយ optimize។

<details><summary>ចម្លើយសង្ខេប</summary>

បង្ក `const searchLater = debounce(runSearch, 300)` ហើយភ្ជាប់ទៅ `input` event។ Leak ទូទៅមាន listener/timer ដែលមិនសម្អាត និង reference ដែល cache កាន់យូរ។ វាស់ baseline, profile workload តំណាង, កែ bottleneck, វាស់ម្ដងទៀត។

</details>

## សង្ខេប

Performance engineering ចាប់ផ្តើមពីការវាស់ និង profile។ កាត់ការងារលើ main thread តាមការចាំបាច់, គ្រប់គ្រង lifecycle របស់ listener/timer និងស្វែងរក memory reference ដែលនៅសល់ដោយ tools។
