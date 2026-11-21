# មេរៀន ១៨៖ ទាញ API Data និង Async UI

## គោលដៅ

បង្កើត loading/success/error states, ទាញ JSON API, ពិនិត្យ HTTP status, បញ្ឈប់ request ចាស់ និងយល់ថា framework data loading អាចសមជាង Effect ធម្មតា។

## ១. UI ត្រូវមាន state ច្បាស់

សម្រាប់ request យ៉ាងហោចណាស់គិតពី loading, success, empty និង error។ កុំបង្ហាញទំព័រទទេពេលកំពុង request ឬលាក់ error ដោយបង្ហាញ success ក្លែងក្លាយ។

~~~jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        setStatus("loading");
        const response = await fetch("/api/users", { signal: controller.signal });
        if (!response.ok) throw new Error("HTTP " + response.status);
        const data = await response.json();
        setUsers(data);
        setStatus(data.length === 0 ? "empty" : "success");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setStatus("error");
        }
      }
    }

    loadUsers();
    return () => controller.abort();
  }, []);

  if (status === "loading") return <p>កំពុងផ្ទុក…</p>;
  if (status === "error") return <p role="alert">{error}</p>;
  if (status === "empty") return <p>មិនមានអ្នកប្រើទេ។</p>;
  return <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
}
~~~

## ២. ហេតុអ្វីពិនិត្យ response.ok?

fetch មិន reject សម្រាប់ HTTP 404 ឬ 500 ដោយស្វ័យប្រវត្តិទេ; វាផ្តល់ Response object។ ពិនិត្យ response.ok មុន parse body។ JSON parse អាចបរាជ័យផងដែរ។ Endpoint /api/users ជាឧទាហរណ៍; ប្តូរទៅ API ដែលមានសិទ្ធិប្រើ។

## ៣. Race conditions និង cancellation

បើ user ប្តូរ search query ហើយ request ចាស់ត្រឡប់មកក្រោយ request ថ្មី វាអាចសរសេរ data ហួសសម័យ។ AbortController ក្នុង cleanup បញ្ឈប់ request ចាស់។ សម្រាប់ app ធំ គិតប្រើ router/framework loaders ឬ data-fetching library ដើម្បីគ្រប់គ្រង caching, deduplication និង retries។

## ៤. Validate external data

Data ដែល JSON parse បានមិនមានន័យថា schema ត្រឹមត្រូវទេ។ ពិនិត្យថា response ជា array/object និង fields ដែល component ត្រូវការ មាន type ត្រឹមត្រូវ។ Server ក៏ត្រូវធ្វើ authorization; ការលាក់ UI នៅ browser មិនការពារ endpoint។

## លំហាត់

1. បន្ថែម error state និង retry button។
2. ហេតុអ្វី response 404 មិនចាំបាច់ចូល catch?
3. តើ cleanup របស់ Effect ជួយ request ចាស់ដូចម្តេច?

<details><summary>ចម្លើយសង្ខេប</summary>

HTTP 404 ជា HTTP response ដែល fetch បានទទួល ដូច្នេះត្រូវពិនិត្យ response.ok ហើយ throw ដោយខ្លួនឯង។ Cleanup abort request ពេល dependency ផ្លាស់ ឬ component unmount។

</details>

## សង្ខេប

បង្ហាញ loading, success, empty និង error; ពិនិត្យ HTTP status និង schema; បញ្ឈប់ request មិនត្រូវការទៀត។ Effect fetching ជាគំរូសិក្សា—framework ឬ library អាចផ្តល់ data loading ដែលសមជាងសម្រាប់ production app។
