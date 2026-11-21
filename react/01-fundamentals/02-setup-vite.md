# មេរៀន ២៖ បង្កើត React Project ដោយ Vite

## គោលដៅ

បង្កើត React app, ស្គាល់ entry files, ដំណើរការ development server និងយល់ថា JSX ត្រូវការឧបករណ៍ build។

## ១. ជ្រើសរបៀបចាប់ផ្តើម

សម្រាប់ app ថ្មីដាក់ប្រើពិត React official docs ណែនាំឱ្យពិចារណា framework ដែលរួមបញ្ចូល routing និង data loading។ សម្រាប់រៀន React ឬ app ដែលចង់គ្រប់គ្រង setup ដោយខ្លួនឯង អាចប្រើ build tool ដូច Vite។ Create React App ត្រូវបានដកចេញពីជម្រើសសម្រាប់ app ថ្មី។ ពិនិត្យ docs បច្ចុប្បន្នព្រោះ tooling ផ្លាស់ប្តូរតាមពេល។

## ២. បង្កើត និងរត់ project

~~~bash
npm create vite@latest react-practice -- --template react
cd react-practice
npm install
npm run dev
~~~

1. Command ដំបូងបង្កើត Vite React template។
2. ចូលថត project ថ្មី។
3. ដំឡើង dependencies តាម package manifest។
4. ចាប់ dev server ហើយបើក local URL ដែល terminal បង្ហាញ។

បើ Node.js ចាស់ពេក Vite អាចព្រមាន ឬមិនដំណើរការ។ ពិនិត្យតម្រូវការនៅ [Vite Guide](https://vite.dev/guide/)។

## ៣. ស្គាល់ files សំខាន់

- index.html ជាច្រកចូលរបស់ Vite។
- src/main.jsx បង្កើត React root ហើយ render App។
- src/App.jsx ជា component ដែលបង្ហាញ UI។
- src/index.css មាន style សកល។
- package.json រាយ scripts និង dependencies។

~~~jsx
// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
~~~

StrictMode ជួយបង្ហាញបញ្ហាខ្លះៗនៅ development ហើយអាចហៅ code មួយចំនួនម្ដងទៀតដើម្បីរក side effects មិនសុទ្ធ។ វាមិនបន្ថែម UI ទេ។

## ៤. ប្តូរ component ដំបូង

~~~jsx
export default function App() {
  return (
    <main>
      <h1>សួស្តីពី React</h1>
      <p>Project ដំណើរការរួចរាល់។</p>
    </main>
  );
}
~~~

រក្សាទុក src/App.jsx ហើយមើល browser។ បើមាន error សូមអានឈ្មោះ file, line និង message នៅ terminal/console មុនកែ។

## លំហាត់

1. បង្កើត project និងបើកក្នុង browser។
2. ប្តូរ App.jsx ឱ្យបង្ហាញឈ្មោះនិងគោលដៅរៀន។
3. ហេតុអ្វីមិនគួរបើក JSX file ដោយផ្ទាល់ជា file URL?

<details><summary>ចម្លើយសង្ខេប</summary>

JSX មិនមែន syntax ដែល browser parse ដោយផ្ទាល់ទេ។ Vite dev server/build tool បម្លែង និងរៀបចំ modules មុន browser រត់វា។

</details>

## ចំណាំសុវត្ថិភាព

កុំដាក់ password ឬ private API secret ក្នុង variable VITE_* ព្រោះអ្វីដែល build ទៅ browser អ្នកប្រើអាចមើលឃើញបាន។

## សង្ខេប

Vite ផ្តល់ scaffold, dev server និង build workflow សម្រាប់លំហាត់ React។ សម្រាប់ production app សូមសម្រេចថា framework ឬ build tool ត្រូវនឹងតម្រូវការរបស់អ្នក។
