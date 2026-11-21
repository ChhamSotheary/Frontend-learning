# មេរៀន ២៦៖ React Security និង Trust Boundaries

## គោលដៅ

កំណត់ទិន្នន័យដែលមិនទុកចិត្ត, ជៀស XSS, ការពារ secrets, យល់ពី server authorization និងដឹងថា client-side validation មិនគ្រប់គ្រាន់។

## ១. JSX text escaping និង HTML injection

React escape string ដែលបង្ហាញក្នុង JSX ជាអត្ថបទតាមធម្មតា៖

~~~jsx
function Comment({ text }) {
  return <p>{text}</p>;
}
~~~

កុំបញ្ចូល user/API data តាម dangerouslySetInnerHTML ដោយផ្ទាល់។ បើត្រូវបង្ហាញ rich HTML ពិតប្រាកដ សូមប្រើ sanitizer ដែលថែទាំបាន និង policy ច្បាស់; កុំសរសេរ HTML sanitizer ដោយ regex។

## ២. Client មិនមែន trust boundary

Validation ក្នុង browser ជួយ UX ប៉ុន្តែ attacker អាចកែ request ឬរំលង UI។ Server ត្រូវពិនិត្យ data type, range, authorization និង ownership រាល់ request។ ការលាក់ admin button មិនអាចការពារ API endpoint បានទេ។

## ៣. Secrets និង build output

អ្វីដែល bundle ទៅ browser អ្នកប្រើអាច inspect បាន។ កុំដាក់ private API keys, database passwords ឬ signing secrets ក្នុង frontend code ឬ Vite client environment variables។ រក្សា secrets នៅ server/secret manager ហើយ rotate បើលេចធ្លាយ។

## ៤. Cookies, CSRF និង XSS

បើប្រើ cookie-based session រៀបចំ Secure, HttpOnly, SameSite និង CSRF protection តាម architecture។ HttpOnly រារាំង JavaScript អាន cookie តែវាមិនការពារ XSS ទាំងអស់ទេ។ CORS គ្រប់គ្រង browser cross-origin behavior មួយផ្នែក មិនមែន authorization mechanism។

## ៥. Dependencies និង RSC

រក្សា React និង server-side rendering dependencies ទាន់សម័យ; ពិនិត្យ official React security advisories មុន deploy ជាពិសេស app ដែលប្រើ React Server Components។ កុំទាញ package ដោយសារឈ្មោះស្រដៀង package ផ្លូវការ។

## លំហាត់

1. កែ comment renderer ដែលចាក់ HTML ដោយផ្ទាល់ឱ្យបង្ហាញ safe text។
2. តើហេតុអ្វី UI ដែលលាក់ route មិនការពារ server route?
3. រាយទីតាំងដែលមិនគួរដាក់ private API key។

<details><summary>ចម្លើយសង្ខេប</summary>

Render string ជា text node ក្នុង JSX; server ត្រូវពិនិត្យ authorization រាល់ request។ កុំដាក់ secret ក្នុង client source, bundle ឬ repository សាធារណៈ។

</details>

## សង្ខេប

React escaping ជួយការពារការបញ្ចូល text ធម្មតា ប៉ុន្តែ app នៅតែត្រូវគ្រប់គ្រង trust boundary។ Validate/authorize នៅ server, កុំចែក secret ទៅ browser និងតាមដាន security updates របស់ dependency។
