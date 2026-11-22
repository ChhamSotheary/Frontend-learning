# មេរៀនទី ៧៖ រៀបចំ Page layout ដោយ Flexbox និង Grid

## គោលដៅ

- រៀបចំ header, navigation, content, sidebar និង footer។
- ប្រើ Flexbox សម្រាប់ការរៀបចំមួយអ័ក្ស។
- ប្រើ Grid សម្រាប់ layout ជួរដេក/ជួរឈរពីរវិមាត្រ។

## ១. ចាប់ផ្តើមពី semantic HTML

~~~html
<header class="site-header">...</header>
<nav aria-label="មេនូសំខាន់">...</nav>
<div class="page-layout">
  <main class="main-content">...</main>
  <aside class="sidebar">...</aside>
</div>
<footer class="site-footer">...</footer>
~~~

HTML ប្រាប់តួនាទីផ្នែកនីមួយៗ។ កុំប្រើ table ដើម្បីបង្កើត page layout; table សម្រាប់ទិន្នន័យ tabular។ Layout គួរប្រើ CSS Grid/Flexbox និងរក្សាលំដាប់ DOM មានអត្ថន័យ។

## ២. Header ដោយ Flexbox

~~~css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
~~~

<code>display:flex</code> បើក flex formatting context លើកូនផ្ទាល់។ <code>flex-direction</code> ជ្រើស row ឬ column។ <code>justify-content</code> រៀបតាម main axis ហើយ <code>align-items</code> តាម cross axis; កុំចងចាំថាវាតែងតែជា X/Y ព្រោះទិសផ្លាស់ប្តូរតាម flex-direction។

## ៣. Page columns ដោយ Grid

~~~css
.page-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(14rem, 1fr);
  gap: 1.5rem;
  max-width: 72rem;
  margin-inline: auto;
  padding: 1.5rem;
}
~~~

Grid គ្រប់គ្រង rows និង columns។ <code>grid-template-columns</code> កំណត់ចំនួន/ទទឹងជួរឈរ; <code>grid-template-rows</code> កំណត់កម្ពស់ជួរដេក។ ឧទាហរណ៍ shell ដែលមាន header, content និង footer អាចកំណត់ row ជា <code>auto 1fr auto</code>។ <code>fr</code> ចែកកន្លែងទំនេរ; <code>minmax()</code> កំណត់ទំហំអប្បបរមា/អតិបរមា។ <code>minmax(0, ...)</code> ជួយអោយ content វែងមិនបង្ខំ track ឱ្យធំជាង container។ កូនដែលលើសចំនួន row/column អាចបង្កើត implicit tracks ដោយ browser។

## ៤. Responsive layout

~~~css
@media (max-width: 48rem) {
  .page-layout {
    grid-template-columns: 1fr;
  }
}
~~~

នៅ viewport តូច sidebar ចុះក្រោម main។ លំដាប់នៅ DOM គួរត្រូវនឹងអត្ថន័យ និងលំដាប់ keyboard; កុំរៀប CSS order ឱ្យខុសពីការអានដែលចង់បាន។

## ៥. Flex-wrap និង Grid cards

~~~css
.navigation-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
}
~~~

ប្រើ Flexbox ពេលធាតុត្រូវរៀបតាមជួរមួយ និងអាច wrap។ ប្រើ Grid ពេលត្រូវគ្រប់គ្រងជួរឈរច្រើនក្នុងពេលតែមួយ។ ពួកវាអាចប្រើរួមគ្នាបាន។

## លំហាត់

បង្កើត page ដែលមាន header, nav, main, sidebar និង footer។ ប្រើ Flexbox សម្រាប់ nav និង Grid សម្រាប់ main/sidebar។ បន្ថែម media query ហើយពិនិត្យទទឹង 360px និង desktop។
