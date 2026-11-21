# មេរៀន ១៦៖ Browser Storage និងការរក្សាទុកទិន្នន័យ

## គោលដៅ

ប្រៀបធៀប `localStorage` និង `sessionStorage`, បម្លែង object ទៅ JSON, គ្រប់គ្រង parsing error និងរក្សាទិន្នន័យតិចៗដែលមិនរសើប។

## ១. Storage ជាអ្វី?

Web Storage ផ្តល់ key/value storage តាម origin។ ទាំង key និង value ជា string។ `localStorage` ជាទូទៅនៅសល់ក្រោយបិទ tab/browser រហូតដល់ user ឬ app លុប; `sessionStorage` ជាប់ session/tab។ Browser អាចកំណត់ quota ឬមិនអនុញ្ញាត storage ដូច្នេះការប្រើប្រាស់អាចបរាជ័យ។

## ២. រក្សាទុក និងអាន string

~~~js
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
console.log(theme); // "dark" ឬ null
localStorage.removeItem("theme");
~~~

ប្រើ `setItem`, `getItem`, `removeItem`, `clear`។ `getItem` ត្រឡប់ `null` បើ key មិនមាន។ ជៀសវាង `clear()` លើ app ដែលចែក origin ជាមួយទិន្នន័យផ្សេង ព្រោះវាលុបគ្រប់ key របស់ origin នោះ។

## ៣. រក្សា object ដោយ JSON

~~~js
const settings = { theme: "dark", fontSize: 18 };
localStorage.setItem("settings", JSON.stringify(settings));

let savedSettings;
try {
  const raw = localStorage.getItem("settings");
  savedSettings = raw === null ? { theme: "light", fontSize: 16 } : JSON.parse(raw);
} catch (error) {
  console.error("ទិន្នន័យ settings ខូច ឬមិនអាចអានបាន", error);
  savedSettings = { theme: "light", fontSize: 16 };
}
~~~

`JSON.stringify` បម្លែងទិន្នន័យដែល JSON គាំទ្រ; `JSON.parse` អាច throw `SyntaxError` បើ string ខូច។ ដាក់ fallback ដែលមានរចនាសម្ព័ន្ធរំពឹងទុក ហើយ validate fields មុនប្រើ ព្រោះ JSON ដែល parse បានមិនមានន័យថាត្រឹមត្រូវតាម app schema ទេ។

## ៤. ចាប់ storage error និងការផ្លាស់ប្តូរ

~~~js
try {
  localStorage.setItem("draft", "អត្ថបទខ្លី");
} catch (error) {
  console.warn("មិនអាចរក្សាទុកបាន; ប្រហែល storage ត្រូវបានបិទ ឬពេញ");
}

window.addEventListener("storage", (event) => {
  if (event.key === "theme") console.log("Theme ត្រូវបានផ្លាស់ប្តូរនៅ tab ផ្សេង");
});
~~~

Event `storage` ជាទូទៅកើតនៅ document ផ្សេងទៀតដែលចែក origin (មិនមែន tab ដែលធ្វើការសរសេរនោះទេ)។ ប្រើវាសម្រាប់ sync ស្រាលៗ រវាង tab ប៉ុណ្ណោះ។

## ៥. អ្វីមិនគួររក្សាទុក?

កុំទុក password, session secret ឬ token ដែលមានសិទ្ធិខ្ពស់ក្នុង Web Storage ព្រោះ JavaScript ដែលរត់ក្នុង origin ដូចគ្នាអាចអានបាន។ បើមាន XSS data ទាំងនេះអាចត្រូវលួច។ ប្រើ session design ដែលសមស្រប (ឧ. cookie មាន `HttpOnly`, `Secure`, `SameSite` កំណត់ដោយ server) ហើយកំណត់ threat model។ Local storage សមស្របសម្រាប់ preference មិនរសើប មិនមែនជាទីតាំងសម្ងាត់ទេ។

## លំហាត់

1. រក្សា theme របស់អ្នកប្រើ ហើយអានវាពេល page load។
2. ប្រសិនបើ JSON មិនអាច parse បាន សូមប្រើ default value។
3. ពន្យល់ភាពខុសគ្នារវាង storage persistence និង security។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
const DEFAULT_THEME = "light";
let theme = DEFAULT_THEME;
try {
  theme = localStorage.getItem("theme") ?? DEFAULT_THEME;
} catch {
  // Storage អាចត្រូវបានបិទ
}
document.documentElement.dataset.theme = theme;
~~~

ទិន្នន័យនៅសល់យូរ មិនមានន័យថាវាត្រូវបានការពារ។ Local storage persistence ល្អសម្រាប់ preference ប៉ុន្តែ JavaScript ក្នុង origin អាចអានវា។

</details>

## សង្ខេប

Web Storage រក្សាទុក string តាម origin; ប្រើ JSON សម្រាប់ទិន្នន័យរចនាសម្ព័ន្ធ និង catch parsing/storage errors។ កំណត់ schema និង fallback; កុំរក្សា credential ឬ token សម្ងាត់ក្នុង localStorage ដោយស្មានថាវាមានសុវត្ថិភាព។
