# មេរៀន ២៨៖ SSR, Hydration និង React Server Components

## គោលដៅ

បែងចែក client rendering, server-side rendering និង static generation; ពន្យល់ hydration និងយល់ពី Client/Server Component boundaries ដោយមិនច្រឡំជាមួយ API របស់ framework។

## ១. Client-side rendering

ក្នុង CSR browser ទាញ JavaScript ហើយ React បង្កើត UI ក្នុង browser។ វាផ្តល់ interaction ល្អក្រោយ app load ប៉ុន្តែ initial content អាចរង់ចាំ JavaScript; SEO និងឧបករណ៍ចាស់អាចចូលក្នុងការសម្រេច architecture។

## ២. SSR និង hydration

Server-side rendering បង្កើត HTML ដំបូងនៅ server ហើយផ្ញើទៅ browser។ បន្ទាប់មក React hydrate markup ដោយភ្ជាប់ event handlers និង client behavior។ Markup server/client ត្រូវស្របគ្នា; ប្រើ time/random/browser-only values ក្នុង render ដោយមិនគ្រប់គ្រងអាចបង្ក hydration mismatch។

Static generation បង្កើត HTML មុន deploy សម្រាប់ routes/data ដែលអាចកំណត់ទុកបាន។ Frameworks អាចលាយ SSR/SSG/CSR តាម route។

## ៣. React Server Components

Server Components render នៅ server/build environment ហើយអាចអាន server-side data តាម framework។ ពួកវាមិនមាន browser event handlers ឬ client state/effects ដូច Client Components ទេ។ Client Component ត្រូវបញ្ជាក់ boundary តាម convention របស់ framework ដែលជាញឹកញាប់ប្រើ directive use client ហើយអាចប្រើ Hooks/events។

Server Components ជា React architecture feature ដែលត្រូវការ framework/bundler support; កុំសន្មតថា Vite client-only template ផ្តល់ server component runtime។

## ៤. Boundary និង data

បញ្ជូនតែ props ដែលចាំបាច់ឆ្លង server/client boundary។ កុំ serialize secret ឬ internal server data ទៅ browser។ អ្វីដែលបញ្ជូនទៅ client អ្នកប្រើអាច inspect។

## ៥. ជ្រើស architecture

- CSR/Vite SPA សមស្របសម្រាប់រៀន និង app ដែល client-heavy។
- Framework សមស្របពេលត្រូវការ routing, data loading, SSR/SSG និង deployment conventions រួមគ្នា។
- វាស់ផលលើ user experience, caching, SEO និង server complexity មុនជ្រើស។

## លំហាត់

1. ពន្យល់ hydration ជាភាសាខ្លួនឯង។
2. តើ Server Component អាចប្រើ useState និង onClick ដូច Client Component ទេ?
3. ហេតុអ្វីមិនគួរផ្ញើ secret ក្នុង props ទៅ client?

<details><summary>ចម្លើយសង្ខេប</summary>

Hydration ភ្ជាប់ React behavior ទៅ HTML ដែល server បង្កើតរួច។ Server Components មិនប្រើ client state/event handlers ដូចគ្នាទេ; secret ដែលបញ្ជូនទៅ browser អាចត្រូវ inspect។

</details>

## សង្ខេប

SSR ផ្ញើ HTML មុន ហើយ hydration ភ្ជាប់ interactivity; RSC បំបែក server-only rendering/data ពី client interactivity។ Framework គ្រប់គ្រង integration ជាច្រើន ដូច្នេះរៀនតាម version docs របស់វា។
