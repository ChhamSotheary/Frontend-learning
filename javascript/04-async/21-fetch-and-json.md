# មេរៀន ២១៖ HTTP, fetch និង JSON APIs

## គោលដៅ

យល់ request/response មូលដ្ឋាន, ផ្ញើ request ដោយ `fetch`, ពិនិត្យ HTTP status, បម្លែង JSON, គ្រប់គ្រង network និង parse errors, ហើយបង្ហាញ loading/error/success state។

## ១. Request និង response

Client ផ្ញើ HTTP request ទៅ server ដោយ method, URL, headers និងអាចមាន body។ Server ត្រឡប់ status, headers និង body។ JSON គឺទម្រង់ទិន្នន័យ មិនមែន network protocol ទេ; `fetch` ជា browser API សម្រាប់ request។

## ២. GET និង parse JSON

~~~js
async function loadUser(userId) {
  const response = await fetch(`/api/users/${encodeURIComponent(userId)}`);
  if (!response.ok) {
    throw new Error(`Server ឆ្លើយតប status ${response.status}`);
  }
  return await response.json();
}

loadUser("42")
  .then((user) => console.log(user))
  .catch((error) => console.error("ផ្ទុក user មិនបាន", error));
~~~

`fetch` reject ជាទូទៅសម្រាប់ network-level failure ឬការបញ្ឈប់ request; HTTP 404/500 មិនធ្វើឱ្យវា reject ដោយស្វ័យប្រវត្តិទេ ដូច្នេះពិនិត្យ `response.ok`។ `.json()` ក៏ asynchronous និងអាច reject បើ body មិនមែន JSON ត្រឹមត្រូវ។ `/api/users/...` ជា placeholder ត្រូវប្តូរទៅ endpoint ដែលអ្នកមានសិទ្ធិប្រើ។

## ៣. ផ្ញើ JSON ដោយ POST

~~~js
async function createNote(note) {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  if (!response.ok) throw new Error(`បង្កើតមិនបាន (${response.status})`);
  return response.json();
}
~~~

Server ត្រូវគាំទ្រ route និង content type នេះ។ API ពិតអាចត្រូវការការផ្ទៀងផ្ទាត់, CSRF control ឬ header ផ្សេងៗ; កុំដាក់ API secret ក្នុង frontend code ព្រោះអ្នកប្រើអាចមើលឃើញ។

## ៤. Cancellation និង timeout

~~~js
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch("/api/status", { signal: controller.signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  console.log(await response.json());
} catch (error) {
  if (error.name === "AbortError") console.log("Request ត្រូវបានបញ្ឈប់ ឬដល់ពេលកំណត់");
  else console.error(error);
} finally {
  clearTimeout(timeoutId);
}
~~~

`AbortController` អាចបញ្ឈប់ request ដែលមិនត្រូវការទៀត ឧទាហរណ៍ user ប្តូរទំព័រ ឬ search query ថ្មី។ បើប្រើ controller ជាមួយ timeout និង user cancellation ក្នុង app ពិត គ្រប់គ្រងមូលហេតុឱ្យបានច្បាស់។

## ៥. UI state ដែលមានភាពជឿជាក់

បង្ហាញ `loading` មុន request; បន្ទាប់មក `success` ឬ `error`។ កុំ render data មុន validate shape; API response អាចខុសពីអ្វីដែលកូដរំពឹង។ Escape/render user-provided text ជាអត្ថបទ។ API ខាងក្រោយក៏ត្រូវ authentication និង authorization ដោយខ្លួនឯង; ការលាក់ប៊ូតុងនៅ client មិនមែនជាការការពារទេ។

## លំហាត់

1. ហេតុអ្វី `fetch` 404 មិនចាំបាច់ចូល `catch`?
2. បន្ថែម `Content-Type` និង JSON body ទៅ POST request។
3. បន្ថែម UI status “កំពុងផ្ទុក” មុន request និង error បើ response មិន `ok`។

<details><summary>ចម្លើយសង្ខេប</summary>

`fetch` ដោះស្រាយ network failure; HTTP status គឺ response ត្រឹមត្រូវតាម protocol ដូច្នេះត្រូវពិនិត្យ `response.ok`។ សូមមើលគំរូ GET/POST ខាងលើ ហើយ catch error ដើម្បី update status តាម `textContent`។

</details>

## សង្ខេប

ប្រើ `fetch` ជាមួយ `await`, ពិនិត្យ `response.ok` មុនអាន body, ចាប់ network/HTTP/JSON errors, ហើយអាចបញ្ឈប់ request ដោយ `AbortController`។ កុំបង្ហោះ secret នៅ frontend និងកុំទុក authorization ឱ្យ client សម្រេចតែម្នាក់ឯង។
