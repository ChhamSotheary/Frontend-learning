# មេរៀន ២១៖ Error Boundaries, Suspense និង Lazy Loading

## គោលដៅ

បែងចែក render errors ពី asynchronous/event errors, ប្រើ Error Boundary សម្រាប់តំបន់ UI ដែលបរាជ័យ និងយល់ពី Suspense/lazy loading។

## ១. Error Boundary ជួយអ្វី?

Error Boundary ចាប់ error ដែលកើតក្នុង rendering នៃ descendants ហើយបង្ហាញ fallback UI ជំនួសការបាត់ទំព័រទាំងមូល។ API បែប class component នៅតែប្រើសម្រាប់ Error Boundary ជាច្រើន; function components មិនមាន Hook មូលដ្ឋានសម្រាប់សរសេរ boundary ដោយផ្ទាល់ទេ។ អាចប្រើ library ដែលថែទាំបាន ឬ class boundary។

~~~jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <p role="alert">ផ្នែកនេះមិនអាចបង្ហាញបានទេ។</p>;
    return this.props.children;
  }
}
~~~

ឧទាហរណ៍នេះបង្ហាញ fallback មូលដ្ឋាន; app ពិតអាច log error ទៅ monitoring និងផ្តល់វិធីសាកម្ដងទៀត។

## ២. អ្វីដែល Error Boundary មិនចាប់?

វាមិនចាប់ error ទាំងអស់ពី event handlers, async callbacks ឬ error ក្នុង boundary ខ្លួនឯងដោយស្វ័យប្រវត្តិទេ។ ចាប់ error ក្នុង async code ដោយ try/catch ហើយ update error state ឬប្រើ framework data/error handling។ កុំលាក់ error ដោយ catch ទទេ។

## ៣. Lazy loading និង Suspense

~~~jsx
import { lazy, Suspense } from "react";
const ReportsPage = lazy(() => import("./ReportsPage.jsx"));

function App() {
  return (
    <Suspense fallback={<p>កំពុងផ្ទុកផ្នែករបាយការណ៍…</p>}>
      <ReportsPage />
    </Suspense>
  );
}
~~~

lazy អនុញ្ញាតឱ្យ bundler បំបែក code ទៅ chunk ដែលផ្ទុកពេលត្រូវការ; Suspense បង្ហាញ fallback នៅពេល child កំពុងរង់ចាំ resource ដែលគាំទ្រ។ កុំសន្មតថា Suspense ដោះស្រាយ fetch ធម្មតាគ្រប់របៀប; data framework និង React APIs មាន integration តាមរបៀបខុសគ្នា។

## ៤. រៀប boundaries តាម UI

ដាក់ boundary ជុំវិញតំបន់ដែលអាចបរាជ័យដោយឡែក ដូច chart ឬ page section។ Fallback គួរពន្យល់អ្វីកើត និងផ្តល់ recovery action។ Boundary តែមួយជុំវិញ app ទាំងមូលអាចបង្ហាញផ្ទៃទទេពេលបញ្ហាតូចកើត។

## លំហាត់

1. តើ error ក្នុង click handler ត្រូវ catch ដោយ Error Boundary ទេ?
2. ដាក់ Suspense ជុំវិញ lazy page និងសរសេរ fallback។
3. រៀប fallback ដែលអ្នកប្រើអាចយល់ និងសាកម្ដងទៀត។

<details><summary>ចម្លើយសង្ខេប</summary>

Error Boundary មិនចាប់ event handler errors ដោយផ្ទាល់ទេ; ចាប់ក្នុង handler ឬ async function។ Suspense fallback បង្ហាញខណៈ lazy module កំពុង load។

</details>

## សង្ខេប

Error Boundaries កំណត់តំបន់ render failure និងបង្ហាញ fallback; Suspense ផ្តល់ loading fallback សម្រាប់ integration ដែលគាំទ្រ; lazy បំបែក code។ គ្រប់គ្រង event/network errors នៅកន្លែងដែលវាកើត។
