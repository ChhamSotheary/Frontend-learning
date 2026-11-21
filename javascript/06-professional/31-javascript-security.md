# មេរៀន ៣១៖ JavaScript Security សម្រាប់ Browser និង APIs

## គោលដៅ

កំណត់ trust boundary, កាត់បន្ថយ XSS, យល់ពី CSRF និង API authorization, ការពារ secret, validate input និងមើល dependency/security headers ជាផ្នែកនៃការរចនា។

## ១. Browser input ទាំងអស់ត្រូវចាត់ទុកថាមិនទុកចិត្ត

ទិន្នន័យអាចមកពី form, URL, `localStorage`, API, postMessage ឬ third-party script។ កុំសន្មតថា client input ត្រឹមត្រូវដោយសារមាន validation ក្នុង UI។ Server ត្រូវ validate type, length, range និង permission មុនសម្រេចសកម្មភាព។

## ២. XSS និង output encoding

~~~js
const comment = new URLSearchParams(location.search).get("comment") ?? "";
document.querySelector("#comment").textContent = comment;
~~~

ប្រើ `textContent` សម្រាប់អត្ថបទ។ ការកំណត់ `innerHTML` ដោយទិន្នន័យមិនទុកចិត្តអាចឱ្យ script ឬ markup មានគ្រោះថ្នាក់ដំណើរការ។ បើត្រូវ render rich HTML ពិតៗ ប្រើ sanitizer ដែលថែទាំបាន និងគោរព security policy; កុំសរសេរ sanitizer ដោយ regex។ Content Security Policy ជាការការពារបន្ថែម មិនមែនជំនួស safe output encoding ទេ។

## ៣. Authentication, authorization និង CSRF

Authentication ឆ្លើយថា “អ្នកណា?”; authorization ឆ្លើយថា “អាចធ្វើអ្វី?”។ UI ដែលលាក់ប៊ូតុងមិនការពារ API ទេ; server ត្រូវពិនិត្យសិទ្ធិរាល់ request។ Cookie-based sessions ត្រូវរៀបចំ `HttpOnly`, `Secure`, `SameSite` និង CSRF defenses តាម threat model។ CORS គ្រប់គ្រង browser cross-origin access មួយផ្នែក មិនមែន authorization mechanism ទេ។

## ៤. Secrets និង storage

កុំដាក់ API private key, database password ឬ signing secret ក្នុង bundle/frontend repository; client code អ្នកប្រើអាចអានបាន។ រក្សា secret នៅ server/secret manager និង rotate បើលេចធ្លាយ។ Web Storage អានបានដោយ JavaScript ក្នុង origin ដូចគ្នា; កុំទុក credential រសើបទីនោះដោយសន្មតថាមានសុវត្ថិភាព។

## ៥. Dependency និង boundary

- ពិនិត្យ package, maintainer, release និង dependencies មុនបន្ថែម library។
- រក្សា lockfile និងធ្វើ update តាមការគ្រប់គ្រងរបស់ project។
- កំណត់ CORS origins ឱ្យតិចបំផុតដែលត្រូវការ។
- កុំ log access token, password ឬ personal data។
- Parse API JSON រួច validate shape មុនយកទៅប្រើ។

## លំហាត់

1. កែ code ដែលដាក់ query param ទៅ `innerHTML` ឱ្យមានសុវត្ថិភាព។
2. ហេតុអ្វីការលាក់ admin link មិនមែនជា authorization?
3. រាយបញ្ជីទីតាំងមិនគួរដាក់ API secret។

<details><summary>ចម្លើយសង្ខេប</summary>

ដាក់ string ទៅ `textContent`; server ត្រូវពិនិត្យសិទ្ធិលើ endpoint រាល់ request; កុំដាក់ secret ក្នុង frontend source, bundle, public repository ឬ local/session storage របស់ browser។

</details>

## សង្ខេប

សុវត្ថិភាព JavaScript ចាប់ពីការបែងចែក trust boundary។ Encode output តាម context, validate នៅ server, ពិនិត្យ authorization នៅ server និងរក្សា secret នៅ server។ Browser controls ដូច CORS/CSP ជាស្រទាប់ជំនួយ មិនមែនជំនួស model សុវត្ថិភាពទេ។
