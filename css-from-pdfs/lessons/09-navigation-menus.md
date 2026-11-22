# មេរៀនទី ៩៖ បង្កើត Horizontal និង Vertical navigation menu

## គោលដៅ

- ប្រើ <code>&lt;nav&gt;</code> និង anchor ដើម្បីបង្កើត navigation ដែលមានអត្ថន័យ។
- រៀប link ជាជួរដេក ឬជួរឈរដោយ Flexbox។
- បង្ហាញ hover, focus និង active state ដោយច្បាស់។

## ១. សរសេរ HTML ដែលមាន semantics

~~~html
<nav class="site-nav" aria-label="មេនូសំខាន់">
  <a class="site-nav__brand" href="/">ETEC Learning</a>
  <ul class="site-nav__links">
    <li><a href="#home" aria-current="page">ទំព័រដើម</a></li>
    <li><a href="#lessons">មេរៀន</a></li>
    <li><a href="#about">អំពីយើង</a></li>
    <li><a href="#contact">ទំនាក់ទំនង</a></li>
  </ul>
</nav>
~~~

ប្រើ anchor សម្រាប់ navigation ទៅទីតាំង/ទំព័រ និង button សម្រាប់ action។ <code>nav</code> បញ្ជាក់ landmark; <code>aria-label</code> ជួយបែងចែក navigation ច្រើនកន្លែង។

## ២. Horizontal menu

~~~css
.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #17324d;
}

.site-nav__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-nav a {
  display: block;
  padding: 0.65rem 0.8rem;
  color: white;
  text-decoration: none;
}
~~~

នៅទីនេះ Flexbox រៀប link តាម row។ <code>flex-wrap</code> អនុញ្ញាតអោយវាចុះបន្ទាត់ពេលកន្លែងមិនគ្រប់។ នៅទូរស័ព្ទ សាកមើលថា brand និង links មិនបាំងគ្នា។

## ៣. Hover, focus និងទំព័របច្ចុប្បន្ន

~~~css
.site-nav a:hover {
  background: #28557a;
}

.site-nav a:focus-visible {
  outline: 3px solid #facc15;
  outline-offset: 2px;
}

.site-nav a[aria-current="page"] {
  background: #28557a;
  font-weight: 700;
}
~~~

កុំប្រើ hover ជាសញ្ញាតែមួយ; keyboard focus ត្រូវមើលឃើញដូចគ្នា។ <code>aria-current</code> បង្ហាញថា link មួយតំណាងទំព័របច្ចុប្បន្ន។

## ៤. Vertical menu

ប្តូរទិស link list៖

~~~css
.sidebar-nav__links {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0;
  list-style: none;
}
~~~

Vertical menu សមស្របសម្រាប់ sidebar ឬ navigation លើទូរស័ព្ទ។ ត្រូវរក្សា link target អោយមានទំហំចុចស្រួល និងបង្ហាញ hover/focus state។

## ៥. Dropdown menu

Dropdown មិនមែនត្រឹមតែលាក់ element ដោយ hover ទេ។ ប្រសិនបើបង្កើត dropdown ត្រូវអោយ keyboard អាចបើក/បិទ, focus មិនបាត់, state ត្រូវបានបង្ហាញ និង screen reader អាចយល់។ សម្រាប់ navigation ស្មុគស្មាញ ចាប់ផ្តើមពី HTML button/link ដែលត្រឹមត្រូវ ហើយបន្ថែម JavaScript សម្រាប់ state; កុំច្រឡំ dropdown navigation ជាមួយ ARIA menu widget ដែលមាន keyboard pattern ពិសេស។

## លំហាត់

បង្កើត navigation ផ្ដេកសម្រាប់ desktop និង vertical សម្រាប់ sidebar។ សាក resize ទទឹង, ប្រើ Tab ដើរតាម links ហើយពិនិត្យថាទំព័របច្ចុប្បន្ន និង focus បង្ហាញច្បាស់។
