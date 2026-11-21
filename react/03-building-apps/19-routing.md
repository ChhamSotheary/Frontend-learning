# មេរៀន ១៩៖ Routing និង React Router

## គោលដៅ

បែងចែក URL ពី component state, បង្កើត routes, ប្រើ Link/navigation និងជ្រើស React Router mode តាមទំហំ app។

## ១. Routing ជាអ្វី?

Routing ផ្គូផ្គង URL បច្ចុប្បន្នទៅ page/component។ វាអនុញ្ញាតឱ្យអ្នកប្រើចែក link, refresh page និងប្រើ browser back/forward។ Routing មិនមែនជាមុខងារស្នូលរបស់ React ទេ; ប្រើ router library ឬ framework។

## ២. Declarative routing មូលដ្ឋាន

ដំឡើង React Router តាមឯកសារផ្លូវការបច្ចុប្បន្ន។ API/import អាចខុសតាម version និង mode; ឧទាហរណ៍នេះប្រើ declarative APIs ដែលមាន BrowserRouter, Routes, Route និង Link។

~~~jsx
import { BrowserRouter, Routes, Route, Link } from "react-router";

function Home() {
  return <h1>ទំព័រដើម</h1>;
}

function About() {
  return <h1>អំពីវគ្គនេះ</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">ដើម</Link>
        <Link to="/about">អំពី</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
~~~

Link ធ្វើ navigation ដោយមិន reload document ពេញលេញ។ Route កំណត់ URL pattern និង UI element។

## ៣. Route params និង navigation

Route dynamic ដូច /courses/:courseId អាចអាន id ដោយ router Hook ដូច useParams។ useNavigate សម្រាប់ navigation ដែលកើតពី action ដូច submit; សម្រាប់ link ដែលអ្នកប្រើចុចដោយផ្ទាល់ សូមប្រើ Link ដើម្បីរក្សា semantics និង keyboard behavior។

## ៤. Router modes និង framework

React Router មាន declarative, data និង framework modes។ Declarative សមស្របសម្រាប់រៀន URL/component mapping; Data mode បន្ថែម loaders/actions/pending state; framework mode ផ្តល់ conventions និង server/build features។ កុំចម្លង API ពី tutorial មិនទាន់ version ព្រោះ package និង mode អាចផ្លាស់ប្តូរ។ សូមមើល [React Router Modes](https://reactrouter.com/start/modes)។

## ៥. 404 និង server fallback

បន្ថែម route catch-all សម្រាប់ URL មិនស្គាល់។ SPA host ត្រូវបញ្ជូន request ទៅ index.html សម្រាប់ client-side routes ឬប្រើ SSR/framework routing; បើមិនដូច្នោះ refresh នៅ /about អាច server ឆ្លើយ 404។

## លំហាត់

1. បង្កើត routes សម្រាប់ /, /courses និង /about។
2. បង្កើត page NotFound សម្រាប់ path មិនស្គាល់។
3. ហេតុអ្វី Link ល្អជាង button សម្រាប់ navigation?

<details><summary>ចម្លើយសង្ខេប</summary>

Link បង្ហាញ semantics របស់ navigation និងគាំទ្រ browser behaviors ដូច open in new tab; button គួរប្រើសម្រាប់ action។ Router fallback ធានាថា refresh URL រង route មិនត្រូវ 404 ពី static host។

</details>

## សង្ខេប

Router ភ្ជាប់ URL ជាមួយ UI និងជួយ navigation/history។ ចាប់ផ្តើមពី declarative routing ហើយរៀន data/framework mode តាមតម្រូវការ និងឯកសាររបស់ version ដែលប្រើ។
