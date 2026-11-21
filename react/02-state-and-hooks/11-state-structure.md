# មេរៀន ១១៖ រៀបចំ State និង Derived Data

## គោលដៅ

ជ្រើស state ឱ្យតិចនិងត្រឹមត្រូវ, កុំរក្សា data ស្ទួន, រៀបចំ object shape និង reset state នៅពេល identity របស់ UI ផ្លាស់។

## ១. សួរថាតើវាជា state មែនទេ?

ទុកជា state ប្រសិនបើតម្លៃត្រូវចងចាំរវាង renders ហើយការផ្លាស់ប្តូរវាគួរធ្វើឱ្យ UI update។ កុំទុកជ state បើវា៖

- អាចគណនាពី props/state ផ្សេងបាន។
- ជាតម្លៃបណ្តោះអាសន្នដែលមិនប៉ះ UI។
- គ្រាន់តែជាលទ្ធផលមួយដែលគណនាបានក្នុង render។

~~~jsx
const [items, setItems] = useState(initialItems);
const [query, setQuery] = useState("");
const visibleItems = items.filter((item) =>
  item.title.toLowerCase().includes(query.toLowerCase())
);
~~~

visibleItems គឺ derived data; កុំរក្សាវាជា state ដាច់ដោយឡែក ព្រោះអាចមិនស្របជាមួយ items/query។

## ២. ជៀស duplicate state និង contradictory state

បើរក្សា selectedItem និង selectedItemId ទាំងពីរ អ្នកត្រូវ sync ពួកវាជានិច្ច។ ជ្រើសរក្សា id មួយ រួចស្វែងរក item ពី array។ ប្រើ state ដែលបង្ហាញស្ថានភាពច្បាស់ ដូច status = "idle" | "loading" | "success" | "error" ជំនួស booleans ជាច្រើនដែលអាចផ្ទុយគ្នា។

## ៣. រៀប object ឱ្យងាយ update

រក្សា state ជិតនឹង component ដែលត្រូវការវា។ បើ data មាន nested object ជ្រៅ ការធ្វើ immutable update នឹងពិបាក; ពិចារណាបំបែក entity ដោយ id ឬរៀប structure រាបស្មើ។ ចម្លង object/array តាមស្រទាប់ដែលផ្លាស់ ហើយកុំ mutate។

## ៤. កំណត់អត្តសញ្ញាណ និង reset

React រក្សា state តាមទីតាំង component ក្នុង tree និង key។ បើប្តូរ key អាចបង្ខំ component subtree ឱ្យចាប់ផ្តើម state ថ្មី; ប្រើវិធីនេះពេល identity ពិតជាថ្មី ដូចប្តូរទៅកែ profile របស់អ្នកផ្សេង។ កុំប្តូរ key រាល់ render។

## លំហាត់

1. មាន array products និង query; គណនា filtered list ដោយមិនបង្ក state ស្ទួន។
2. តើអ្វីជាបញ្ហាបើរក្សា total និង cart items ជា state ទាំងពីរ?
3. ផ្តល់ឧទាហរណ៍ state ដែលមាន contradictory booleans។

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
const visibleProducts = products.filter((product) =>
  product.name.toLowerCase().includes(query.toLowerCase())
);
const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
~~~

បើ update មួយមិន sync ទាំង total និង items, UI បង្ហាញ total ខុស។ គណនា total ពី cart data។

</details>

## សង្ខេប

State គួរជា source of truth តិចបំផុតដែលត្រូវការសម្រាប់ UI។ គណនា derived data ពី state ដែលមានស្រាប់ និងរៀប shape ឱ្យ updates មិនបង្កភាពផ្ទុយគ្នា។
