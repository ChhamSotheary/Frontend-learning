# React Learning Tracker — Starter Project

Project starter សម្រាប់អនុវត្តមេរៀន React។ វាប្រើ reducer សម្រាប់ course state, controlled form, search, localStorage, semantic controls និង accessible status messages។

## របៀបដំណើរការ

1. បង្កើត Vite React project តាម [មេរៀន setup](../../01-fundamentals/02-setup-vite.md)៖

   ~~~bash
   npm create vite@latest learning-tracker -- --template react
   cd learning-tracker
   npm install
   ~~~

2. ចម្លង files ក្នុងថត src/ របស់ starter នេះទៅ src/ ក្នុង project ដែលបង្កើត។
3. រត់ npm run dev ហើយបើក local URL ដែល terminal បង្ហាញ។

Project នេះជាអាហារដ្ឋានអនុវត្ត client-side React; មិនមាន backend ឬ login ពិតទេ។ localStorage មិនមែនជាទីតាំងរក្សា password/token សម្ងាត់។

## ចំណុចសិក្សា

- src/App.jsx: reducer, props, controlled form, derived search list, effect សម្រាប់ persistence។
- src/main.jsx: React root និង StrictMode។
- src/index.css: layout responsive និង focus styles។

## លំហាត់បន្ត

1. បន្ថែម field សម្រាប់ចំនួនមេរៀន និង progress percentage។
2. បន្ថែម filter ទាំងអស់/កំពុងរៀន/បានបញ្ចប់។
3. បំបែក CourseForm និង CourseList ជា components។
4. បន្ថែម route detail ដោយ React Router។
5. សរសេរ component tests និងសាក error ពី storage។

កូដនេះជាគំរូសិក្សា មិនទាន់បាន run ឬ test ក្នុងការរៀបចំមេរៀននេះទេ។
