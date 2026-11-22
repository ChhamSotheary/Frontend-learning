# មេរៀនទី ១០៖ Transition, animation និង cursor

## គោលដៅ

- បង្កើត transition ពេល property ផ្លាស់ប្តូរ។
- ប្រើ <code>@keyframes</code> សម្រាប់ animation ជាច្រើនជំហាន។
- គាំទ្រអ្នកប្រើដែលកាត់បន្ថយ motion និងជ្រើស cursor តាមមុខងារ។

## ១. Transition

~~~css
.button {
  background-color: #1769aa;
  transform: translateY(0);
  transition: background-color 180ms ease, transform 180ms ease;
}

.button:hover {
  background-color: #104d80;
  transform: translateY(-2px);
}
~~~

<code>transition-duration</code> កំណត់រយៈពេល; shorthand <code>transition</code> អាចកំណត់ property, duration, timing function និង delay រួមគ្នា។ វាបន្ថយភាពភ្លាមៗនៃការផ្លាស់ប្តូរ property ពី state មួយទៅមួយទៀត។ កំណត់ property ដែលចង់ផ្លាស់ប្តូរជាក់លាក់ ជំនួស <code>transition: all</code> ដើម្បីកុំ animate property មិនរំពឹង។

## ២. Transition មិនបង្កើត state

Transition ត្រូវការតម្លៃចាប់ផ្តើម និងតម្លៃចុងក្រោយ ដែលប្តូរតាម hover, focus, class ឬ interaction ផ្សេង។ វាមិនចាប់ផ្តើមដោយខ្លួនឯងទេ។ ប្រើសម្រាប់ការឆ្លើយតបខ្លីៗ ដូចជា button color និង card lift។

## ៣. Keyframe animation

~~~css
@keyframes gentle-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

.status-dot {
  animation: gentle-pulse 1.8s ease-in-out infinite;
}
~~~

<code>@keyframes</code> កំណត់ state តាមភាគរយនៃរយៈពេល។ Shorthand <code>animation</code> ទទួលឈ្មោះ, duration, timing function, delay, iteration count និង direction។ Animation មិនគួររំខាន ឬបន្តឥតឈប់លើ content ដោយគ្មានហេតុផល។

## ៤. គាំទ្រ reduced motion

~~~css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
~~~

Setting នេះគោរពប្រព័ន្ធប្រតិបត្តិការដែលអ្នកប្រើកំណត់ថាចង់កាត់បន្ថយ motion។ ពិនិត្យថា animation មិនមែនជាវិធីតែមួយក្នុងការបង្ហាញស្ថានភាព។

## ៥. Cursor

<code>cursor</code> កំណត់រូបរាង pointer៖ <code>pointer</code> សមស្របលើ link/button ដែលចុចបាន; <code>wait</code> អាចបង្ហាញពេលកំពុងដំណើរការ; <code>not-allowed</code> អាចជួយបញ្ជាក់ disabled state។ Cursor មិនបង្កើត interaction និងមិនអាចជំនួស semantic button ឬ focus state បានទេ។

## លំហាត់

បន្ថែម transition លើ button និង hover card។ បង្កើត animation សញ្ញា loading តូចមួយ ហើយសរសេរ reduced-motion override។ សាកទាំង mouse និង keyboard ហើយសាកបើក OS reduce motion ប្រសិនបើអាច។
