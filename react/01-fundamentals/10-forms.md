# មេរៀន ១០៖ Forms និង Controlled Inputs

## គោលដៅ

បង្កើត controlled inputs, ចាប់ submit event, validate input និងបង្ហាញ errors ដែលអ្នកប្រើអាចយល់និងប្រើបាន។

## ១. Controlled input

~~~jsx
function NameForm() {
  const [name, setName] = useState("");
  return (
    <label>
      ឈ្មោះ
      <input value={name} onChange={(event) => setName(event.target.value)} />
    </label>
  );
}
~~~

Value របស់ input មកពី React state; onChange ធ្វើឱ្យ state update ពេលវាយ។ បើដាក់ value ដោយគ្មាន handler update អ្នកប្រើមិនអាចកែបាន។ ចាប់ផ្តើម text input ជា string ទទេ ដើម្បីជៀសការផ្លាស់ uncontrolled/controlled ដោយចៃដន្យ។

## ២. Submit និង validation

~~~jsx
function NameForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) {
      setMessage("សូមបញ្ចូលឈ្មោះ។");
      return;
    }
    setMessage("សួស្តី " + cleanName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">ឈ្មោះ</label>
      <input id="name" value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">បញ្ជូន</button>
      <p role="status" aria-live="polite">{message}</p>
    </form>
  );
}
~~~

ដាក់ handler លើ form ដើម្បីគាំទ្រទាំង click និង Enter។ preventDefault បញ្ឈប់ page reload ដើម។ HTML attributes ដូច required និង type=email ជួយ validation បឋម; server ត្រូវ validate ម្តងទៀត។

## ៣. ច្រើន fields និង checkbox

~~~jsx
const [form, setForm] = useState({ email: "", accepted: false });

function handleChange(event) {
  const { name, type, value, checked } = event.target;
  setForm((current) => ({
    ...current,
    [name]: type === "checkbox" ? checked : value,
  }));
}
~~~

ដាក់ name លើ input។ Checkbox អាន checked; text/email input អាន value។ កុំច្រឡំ boolean checkbox ជាមួយ string។

## ៤. Error និង accessibility

ភ្ជាប់ label ទៅ input ដោយ htmlFor/id។ Error គួរពន្យល់ពីរបៀបកែ; បើ field ខុស អាចប្រើ aria-invalid និង aria-describedby ដើម្បីភ្ជាប់សារទៅ field។ កុំ log password ឬដាក់វាក្នុង localStorage។

## លំហាត់

1. បង្កើត controlled email input មាន required និង type=email។
2. Submit ដោយមិន reload ហើយបង្ហាញតម្លៃដែល trim។
3. តើ controlled input ខុសពី uncontrolled input ដូចម្តេច?

<details><summary>ចម្លើយសង្ខេប</summary>

Controlled input រក្សា value ក្នុង React state និង update តាម handler។ Uncontrolled input ទុក value នៅ DOM ហើយអាចអានពេលត្រូវការ ដោយ ref ឬ FormData។

</details>

## សង្ខេប

Controlled forms រក្សា data flow ច្បាស់រវាង state និង input។ ចាប់ submit នៅ form, validate ជាជំហាន, បង្ហាញ accessible errors និងកុំចាត់ client validation ជំនួស server validation។
