# មេរៀនទី ៥៖ Background, shadow, opacity និង filter

## គោលដៅ

- កំណត់ background color និង image។
- ប្រើ border/box/text shadow ដោយសមរម្យ។
- យល់ opacity និង filter មិនមែនជំនួសគ្នា។

## ១. Background color និង image

~~~css
.hero {
  background-color: #17324d;
  background-image: url("../images/classroom.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
}
~~~

ពណ៌កំណត់ផ្ទៃក្រោយ។ រូបភាពត្រូវបានគូសពីលើពណ៌ ដែលធ្វើជាពណ៌ fallback។ <code>cover</code> បំពេញប្រអប់តែអាចកាត់ផ្នែករូបភាព; <code>contain</code> បង្ហាញរូបទាំងមូលតែអាចមានចន្លោះទំនេរ។ កែ position ទៅ center, top ឬទីតាំងផ្សេង ដើម្បីជ្រើសផ្នែកសំខាន់នៃរូប។ <code>background-repeat</code> គ្រប់គ្រងថារូបភាពត្រូវធ្វើម្តងទៀតឬអត់។ <code>background-attachment</code> ជ្រើសការភ្ជាប់រូបទៅ scroll area ឬ viewport។

## ២. Background shorthand

~~~css
.hero {
  background: #17324d url("../images/classroom.jpg") center / cover no-repeat;
}
~~~

Shorthand សរសេរខ្លី ប៉ុន្តែត្រូវអានតាមលំដាប់។ ពេលរៀន ឬ debug អាចសរសេរ property ដាច់ដោយឡែក ដើម្បីឃើញតួនាទីនីមួយៗ។

## ៣. Border និង box shadow

~~~css
.card {
  border: 1px solid #d0d7de;
  box-shadow: 0 0.5rem 1.5rem rgb(15 23 42 / 12%);
}
~~~

<code>box-shadow</code> ជាទូទៅកំណត់ offset-x, offset-y, blur, spread និង color។ Shadow គួរបង្ហាញ hierarchy ដោយមិនធ្វើអោយ text ឬ edge មិនច្បាស់។

## ៤. Text shadow

~~~css
.hero-title {
  color: white;
  text-shadow: 0 2px 8px rgb(0 0 0 / 55%);
}
~~~

ប្រើតែពេល contrast នៅតែល្អ។ Text shadow មិនអាចជំនួសការជ្រើសពណ៌ដែលមាន contrast គ្រប់គ្រាន់បានទេ។

## ៥. Opacity និង filter

~~~css
.muted-image { opacity: 0.65; }
.photo:hover { filter: brightness(1.08) saturate(1.1); }
~~~

<code>opacity</code> បន្ថយភាពស្រអាប់របស់ element ទាំងមូល រួមទាំងកូនៗ ហើយអាចបង្ក stacking context។ វាមិនដូចជា background ពាក់កណ្តាលថ្លាទេ។ <code>filter</code> អាចកែ blur, brightness, grayscale និង effect ផ្សេងៗ; filter ខ្លះមានថ្លៃ render ដូច្នេះកុំដាក់លើ element ធំៗច្រើនដោយមិនសាកល្បង។

## ៦. Background attachment

<code>background-attachment: fixed</code> អាចបង្កើតអារម្មណ៍ផ្ទៃក្រោយនៅថេរ ខណៈ <code>scroll</code> រមូរជាមួយមាតិកា។ អាកប្បកិរិយា fixed អាចខុសគ្នាតាម browser និង mobile។ ប្រើតែបើបានសាកល្បងលើឧបករណ៍ដែលគាំទ្រ។

## លំហាត់

បង្កើត hero section មាន background រូបភាព, ពណ៌ fallback និងចំណងជើងពណ៌ស។ កែ <code>background-position</code> ដើម្បីរក្សាមុខមនុស្ស/វត្ថុសំខាន់ក្នុងរូប ហើយពិនិត្យ contrast។
