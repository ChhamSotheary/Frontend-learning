# មេរៀន ១៤៖ Context និងការចែក Data តាម Tree

## គោលដៅ

ប្រើ Context សម្រាប់តម្លៃដែល components ជាច្រើនក្នុង subtree ត្រូវការ, បង្កើត Provider និង custom Hook; ជៀសការដាក់ state គ្រប់ប្រភេទក្នុង context។

## ១. Context ដោះស្រាយបញ្ហាអ្វី?

Props ជាវិធីសាមញ្ញនិងច្បាស់សម្រាប់ផ្ញើ data ពី parent ទៅ child។ បើ component ជាច្រើននៅជ្រៅក្នុង tree ត្រូវការ theme ឬ current user, ការផ្ញើ props ឆ្លងកាត់ components ដែលមិនប្រើវាអាចក្លាយជា prop drilling។ Context អនុញ្ញាតឱ្យ subtree អានតម្លៃពី Provider ខាងលើ។

## ២. បង្កើត context និង provider

~~~jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext value="dark">
      <Toolbar />
    </ThemeContext>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div className={"toolbar " + theme}>Theme: {theme}</div>;
}
~~~

useContext អានតម្លៃពី Provider ជិតបំផុត។ បើគ្មាន Provider វាប្រើ default value របស់ createContext។

## ៣. បង្កើត Provider component

~~~jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const value = { theme, toggle: () => setTheme((t) => t === "light" ? "dark" : "light") };
  return <ThemeContext value={value}>{children}</ThemeContext>;
}
~~~

ចាប់ពី React 19 អាច render Context object ផ្ទាល់ជា provider។ ក្នុង React ជំនាន់ចាស់ ប្រើ ThemeContext.Provider។ ពិនិត្យ version របស់ project មុនចម្លង syntax។

## ៤. កុំប្រើ Context ដោយស្វ័យប្រវត្តិ

Context មិនមែន state manager ពិសេស ឬជំនួស props ទាំងអស់ទេ។ ប្រើវាសម្រាប់ value ដែល subtree ច្រើនត្រូវការ។ កុំដាក់ state ដែលផ្លាស់ញឹកញាប់និងមិនពាក់ព័ន្ធទាំងអស់ក្នុង context មួយធំ; វាអាចធ្វើឱ្យ data flow ពិបាក និង re-render អ្នកប្រើច្រើន។

## លំហាត់

1. បង្កើត LanguageContext ហើយផ្តល់ភាសា km ទៅ Toolbar។
2. បង្កើត custom Hook useTheme ដែលហៅ useContext។
3. តើពេលណា props ល្អជាង Context?

<details><summary>ចម្លើយសង្ខេប</summary>

~~~jsx
const LanguageContext = createContext("km");
function useLanguage() {
  return useContext(LanguageContext);
}
~~~

Props ល្អពេលទំនាក់ទំនង parent-child តូច និង data flow គួរមើលឃើញច្បាស់។

</details>

## សង្ខេប

Context ផ្តល់ data ទៅ subtree ដោយមិនបញ្ជូន props ឆ្លងកាត់គ្រប់កម្រិត។ ប្រើវាសម្រាប់ shared values ដែលមានហេតុផល ហើយរក្សា context តូចៗតាម responsibility។
