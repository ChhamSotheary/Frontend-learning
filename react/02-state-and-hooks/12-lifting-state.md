# មេរៀន ១២៖ Lifting State Up និងការចែក State

## គោលដៅ

រក្សា state នៅ parent ជិតបំផុតដែលចែករំលែកវា, បញ្ជូន value និង callbacks តាម props និងកុំឱ្យ sibling components មាន state ស្ទួន។

## ១. បញ្ហា state ដាច់ដោយឡែក

បើ SearchBox មាន query ផ្ទាល់ និង ResultsList មាន query មួយទៀត វាអាចមិនត្រូវគ្នា។ បើ component ច្រើនត្រូវការតម្លៃដូចគ្នា លើក state ទៅ parent រួម រួចផ្ញើវាចុះតាម props។

~~~jsx
function SearchPage({ products }) {
  const [query, setQuery] = useState("");
  const visible = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBox query={query} onQueryChange={setQuery} />
      <ProductList products={visible} />
    </>
  );
}
~~~

SearchBox ទទួល value និង callback; ProductList ទទួល filtered data។ Parent ក្លាយជាម្ចាស់ state តែមួយ។

## ២. Controlled child component

~~~jsx
function SearchBox({ query, onQueryChange }) {
  return (
    <label>
      ស្វែងរក
      <input value={query} onChange={(event) => onQueryChange(event.target.value)} />
    </label>
  );
}
~~~

Child មិនរក្សា query ស្ទួនទេ; វារាយការណ៍ event ទៅ parent តាម callback។ នេះធ្វើឱ្យ UI អាចទាយបានពី state រួម។

## ៣. កំណត់ទីតាំង state

លើក state ឱ្យខ្ពស់ត្រឹមកម្រិតដែល component ទាំងអស់ត្រូវការរួម។ កុំដាក់គ្រប់ state នៅ root ព្រោះវាធ្វើឱ្យ parent ធំ និងបញ្ជូន props ច្រើន។ Context អាចជួយពេល data ត្រូវការចែកជ្រៅ; reducer ជួយពេល updates មានច្បាប់ច្រើន។

## លំហាត់

1. បង្កើត Accordion ដែលអនុញ្ញាតបើក panel តែមួយ។
2. តើ state គួររស់នៅក្នុង child ឬ parent?
3. តើ callback ណាដែល parent ផ្ញើទៅ child ដើម្បីកែ selected id?

<details><summary>ចម្លើយគំរូ</summary>

រក្សា openPanelId នៅ Accordion parent ហើយផ្ញើ isOpen និង onToggle(id) ទៅ panel នីមួយៗ។ ដូច្នេះ sibling panels ចែក state មួយ។

</details>

## សង្ខេប

Lifting state up ដោះស្រាយ state ស្ទួនរវាង siblings។ ដាក់ state នៅ parent ជិតបំផុតដែលត្រូវការវា ហើយបញ្ជូន value ចុះនិង callback ឡើង។
