# មេរៀនទី ១១៖ គម្រោងអនុវត្ត — ទំព័រ ETEC Learning

## គោលដៅ

បញ្ចូល selectors, typography, box model, background, layout, form, navigation និង interaction ទៅក្នុងទំព័ររៀនមួយដែល responsive និងងាយប្រើ។

## ជំហានទី ១៖ បង្កើត folder និងឯកសារ

បង្កើត <code>etec-learning/</code> មាន <code>index.html</code> និង <code>styles.css</code>។ ភ្ជាប់ stylesheet ក្នុង <code>&lt;head&gt;</code> ហើយដាក់ <code>lang="km"</code> និង viewport meta។

## ជំហានទី ២៖ សង់ semantic HTML

~~~html
<header class="site-header" id="home">
  <a class="brand" href="#home">ETEC Learning</a>
  <nav aria-label="មេនូសំខាន់">
    <ul class="nav-links">
      <li><a href="#lessons">មេរៀន</a></li>
      <li><a href="#about">អំពីយើង</a></li>
      <li><a href="#contact">ទំនាក់ទំនង</a></li>
    </ul>
  </nav>
</header>

<main>
  <section class="hero" id="about">
    <p class="eyebrow">រៀនជាជំហានៗ</p>
    <h1>បង្កើតជំនាញ Web របស់អ្នក</h1>
    <p>រៀន HTML និង CSS តាមគម្រោងតូចៗដែលអាចអនុវត្តបាន។</p>
    <a class="button" href="#lessons">មើលមេរៀន</a>
  </section>

  <section class="section" id="lessons" aria-labelledby="lesson-heading">
    <h2 id="lesson-heading">មេរៀនពេញនិយម</h2>
    <div class="lesson-grid">
      <article class="lesson-card"><h3>HTML</h3><p>សង់រចនាសម្ព័ន្ធទំព័រ។</p></article>
      <article class="lesson-card"><h3>CSS</h3><p>រចនាពណ៌ និង layout។</p></article>
      <article class="lesson-card"><h3>Responsive</h3><p>សាកលើអេក្រង់ច្រើនទំហំ។</p></article>
    </div>
  </section>

  <section class="section" id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading">ទាក់ទងមកយើង</h2>
    <form class="contact-form">
      <label for="email">អ៊ីមែល</label>
      <input id="email" name="email" type="email" required>
      <button class="button" type="submit">ផ្ញើ</button>
    </form>
  </section>
</main>

<footer class="site-footer">© ETEC Learning</footer>
~~~

HTML នេះជាគំរូសម្រាប់ CSS practice ប៉ុណ្ណោះ; form មិនទាន់មាន server សម្រាប់ទទួលទិន្នន័យទេ។ កុំបង្ហោះអោយអ្នកប្រើផ្ញើព័ត៌មានដោយគិតថាវារក្សាទុកបាន។

## ជំហានទី ៣៖ បន្ថែម CSS មូលដ្ឋាន

~~~css
*,
*::before,
*::after { box-sizing: border-box; }

body {
  margin: 0;
  color: #243447;
  font-family: "Noto Sans Khmer", "Khmer OS Battambang", sans-serif;
  line-height: 1.7;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem max(1rem, calc((100% - 72rem) / 2));
  background: #17324d;
}

.site-header a { color: white; text-decoration: none; }
.brand { font-size: 1.25rem; font-weight: 700; }
.nav-links { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0; padding: 0; list-style: none; }
.nav-links a { display: block; padding: 0.5rem 0.75rem; border-radius: 0.35rem; }
.nav-links a:hover { background: #28557a; }
.nav-links a:focus-visible, .button:focus-visible, input:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 3px;
}
~~~

## ជំហានទី ៤៖ Hero និង card layout

~~~css
.hero {
  padding: clamp(3rem, 8vw, 7rem) 1.25rem;
  color: white;
  text-align: center;
  background: linear-gradient(135deg, #17324d, #1769aa);
}

.hero h1 { max-width: 18ch; margin: 0 auto; font-size: clamp(2rem, 6vw, 3.75rem); line-height: 1.25; }
.hero p { max-width: 42rem; margin: 1rem auto; }

.section { width: min(100% - 2rem, 72rem); margin: 0 auto; padding-block: 3rem; }
.lesson-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: 1rem; }
.lesson-card { padding: 1.25rem; border: 1px solid #cbd5e1; border-radius: 0.75rem; box-shadow: 0 0.4rem 1rem rgb(15 23 42 / 8%); }
~~~

Grid បង្កើត card columns ដែលបត់បែនតាមទំហំ។ <code>min()</code> និង <code>auto-fit</code> ជួយអោយ column មិនលើស container និងអាចរៀបឡើងវិញដោយស្វ័យប្រវត្តិ។

## ជំហានទី ៥៖ Form និង interaction

~~~css
.contact-form { display: grid; gap: 0.75rem; max-width: 32rem; }
.contact-form input { min-height: 2.75rem; padding: 0.65rem; border: 1px solid #64748b; border-radius: 0.4rem; font: inherit; }
.button { display: inline-block; padding: 0.7rem 1rem; border: 0; border-radius: 0.4rem; color: white; background: #1769aa; font: inherit; text-decoration: none; cursor: pointer; transition: background-color 160ms ease, transform 160ms ease; }
.button:hover { background: #104d80; transform: translateY(-2px); }
~~~

បន្ថែម <code>prefers-reduced-motion</code> rule ពីមេរៀនទី ១០ ប្រសិនបើរក្សា transition។ កុំប្រើ cursor ជំនួសការដាក់ <code>button</code> ត្រឹមត្រូវ។

## ជំហានទី ៦៖ ពិនិត្យទំព័រ

1. បើក HTML ហើយពិនិត្យថា CSS ភ្ជាប់បាន។
2. សាកទទឹង 360px, tablet និង desktop។
3. ដើរតាម link និង button ដោយ keyboard។
4. បើក DevTools ពិនិត្យ overflow, computed styles និង focus outline។
5. សាកអត្ថបទខ្មែរវែង និងអ៊ីមែលវែង ដើម្បីប្រាកដថា layout មិនបែក។

## ការបន្ថែមដែលអ្នកអាចធ្វើ

បន្ថែមរូបភាព hero ជាមួយ background positioning, sidebar vertical navigation, state សម្រាប់ form error និង card hover state។ កត់ថា property ណាដែលបានប្រើពី PDF ហើយពន្យល់ថាវាផ្លាស់ប្តូរអ្វី។

## លក្ខខណ្ឌបញ្ចប់

ទំព័រមានផ្នែក semantic, CSS external, navigation ដែលអាចប្រើដោយ keyboard, card layout responsive និង form fields ដែលមាន label/focus state។ វាមិនមាន horizontal overflow នៅ viewport តូច ហើយអក្សរខ្មែរអានបានស្រួល។
