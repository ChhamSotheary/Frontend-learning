# មេរៀន ២៧៖ React Actions, Form Actions និង Optimistic UI

## គោលដៅ

ស្គាល់ React Actions សម្រាប់ form submission, ប្រើ useActionState និង useOptimistic ជាមួយ pending state និងបែងចែក client action ពី server function/framework action។

## ១. Action សម្រាប់ form

React 19 បានបន្ថែម Actions និង form APIs ដែលទទួល function ជា action។ API ពិត និង support ត្រូវពិនិត្យ version របស់ React/React DOM និង build framework។

~~~jsx
import { useActionState } from "react";

async function saveName(previousState, formData) {
  const name = String(formData.get("name") || "").trim();
  if (!name) return { error: "សូមបញ្ចូលឈ្មោះ។" };
  return { error: "", name };
}

function NameForm() {
  const [state, formAction, isPending] = useActionState(saveName, { error: "", name: "" });

  return (
    <form action={formAction}>
      <label htmlFor="name">ឈ្មោះ</label>
      <input id="name" name="name" required />
      <button disabled={isPending}>{isPending ? "កំពុងរក្សាទុក…" : "រក្សាទុក"}</button>
      {state.error && <p role="alert">{state.error}</p>}
      {state.name && <p role="status">បានរក្សាទុកឈ្មោះ។</p>}
    </form>
  );
}
~~~

useActionState ភ្ជាប់ function ទៅ state របស់ action និង pending indicator។ FormData អាចអាន fields ដោយមិនចាំបាច់គ្រប់ input ជា controlled state។

## ២. Form status

useFormStatus ពី React DOM ឱ្យ component កូនក្នុង form ដឹងថា parent form កំពុង submit ឬអត់។ Hook នេះត្រូវហៅក្នុង component ដែល render ជាកូននៃ form មិនមែន component ដូចគ្នាដែលបង្កើត form នោះទេ។

## ៣. Optimistic UI

useOptimistic អាចបង្ហាញលទ្ធផលបណ្តោះអាសន្ន ខណៈ action pending។ ក្នុង submit/action handler ហៅ addOptimistic ជាមួយទិន្នន័យថ្មី រួចចាប់ផ្តើមការងារពិត; ពេល state ពិត update ឬ action បញ្ចប់ UI នឹង reconcile។ ត្រូវមាន error/revert strategy; កុំបង្ហាញ success ក្លែងក្លាយពេល action បរាជ័យ។

~~~jsx
const [optimisticItems, addOptimistic] = useOptimistic(
  items,
  (currentItems, newItem) => [...currentItems, newItem]
);
~~~

## ៤. Client Action និង Server Function មិនដូចគ្នា

Action function អាចរត់ client-side។ Server Functions/Server Actions អាស្រ័យលើ framework និង server configuration; កុំសន្មតថា form action ធ្វើឱ្យ function រត់លើ server ដោយស្វ័យប្រវត្តិ។ Server endpoint ត្រូវ authorize និង validate request ដូចធម្មតា។

## លំហាត់

1. បន្ថែម pending text និង disable submit button។
2. បង្ហាញ validation error ពេល FormData ទទេ។
3. ពន្យល់ហេតុអ្វី optimistic UI ត្រូវការគ្រប់គ្រង failure។

<details><summary>ចម្លើយសង្ខេប</summary>

Pending state រារាំង submit ស្ទួន និងផ្តល់ feedback។ បើ server បរាជ័យ app ត្រូវបង្ហាញ error ហើយ optimistic state ត្រូវត្រឡប់ ឬ reconcile ជាមួយ data ពិត។

</details>

## សង្ខេប

React Actions ជួយរៀប form submission, pending/error state និង optimistic updates។ ពិនិត្យ version compatibility ហើយបែងចែក client function ពី server/framework action; server នៅតែជាអ្នក validate និង authorize។
