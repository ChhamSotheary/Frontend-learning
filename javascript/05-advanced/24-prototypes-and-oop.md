# មេរៀន ២៤៖ Prototypes និង Object-Oriented Programming

## គោលដៅ

យល់ prototype chain និង property lookup, បែងចែក own/inherited property និងឃើញថា class syntax ក្នុង JavaScript ប្រើ prototype model ខាងក្រោម។

## ១. Object និង prototype

Object អាចភ្ជាប់ទៅ object ផ្សេងជាខ្សែ prototype។ ពេលអាន `item.toString()` engine ស្វែងរក property លើ `item` មុន; បើមិនមាន វាស្វែងរកតាម prototype chain រហូតរកឃើញ ឬដល់ `null`។ បើ property មានលើ object ដោយផ្ទាល់ វា shadow property ដូចឈ្មោះនៅ prototype។

~~~js
const animal = { speak() { return "សំឡេងមិនស្គាល់"; } };
const dog = Object.create(animal);
dog.name = "Bori";
console.log(dog.speak());
console.log(Object.hasOwn(dog, "name")); // true
console.log(Object.hasOwn(dog, "speak")); // false
~~~

`Object.hasOwn(object, key)` ពិនិត្យ own property; `key in object` ពិនិត្យទាំង own និង inherited properties។ កុំប្រើ object ដែលមាន key មិនទុកចិត្តជាបណ្ដុំ dictionary ដោយមិនពិចារណា prototype; `Map` ឬ `Object.create(null)` អាចសមស្របជាង។

## ២. Prototype method និង `this`

~~~js
function User(name) {
  this.name = name;
}
User.prototype.greet = function () {
  return `សួស្តី ${this.name}`;
};

const user = new User("Dara");
console.log(user.greet());
~~~

`new` បង្កើត object ថ្មី, ភ្ជាប់ prototype, ហៅ constructor ដោយ `this` ជា object នោះ ហើយត្រឡប់ object។ Method នៅលើ prototype ចែករំលែករវាង instances; ទិន្នន័យដូច `name` ជា own property។ `this` អាស្រ័យលើរបៀបហៅ function—បាត់ receiver អាចធ្វើឱ្យ `this` មិនដូចការរំពឹង។

## ៣. អាន chain និងការពារ built-ins

`Object.getPrototypeOf(value)` អនុញ្ញាតពិនិត្យ prototype ក្នុងការសិក្សា។ មិនគួរកែ prototype របស់ built-ins ដូច `Array.prototype` ក្នុង app ទូទៅទេ ព្រោះអាចប៉ះពាល់កូដផ្សេង និងបង្ក compatibility bug។ ប្រើ composition ឬ method នៅ class/object របស់ខ្លួន។

## ៤. Object-oriented design មានន័យលើស syntax

OOP ជាវិធីរៀបចំ state និង behavior ជុំគ្នា; មិនមែនមានន័យថាគ្រប់ data ត្រូវបង្កើតជា class ទេ។ វត្ថុដែលមាន lifecycle និង invariants ច្បាស់អាចសមស្របនឹង object។ Function សាមញ្ញសមស្របសម្រាប់ការបម្លែងតូចៗ។ ជ្រើសតាមបញ្ហា និងភាពងាយសាកល្បង។

## លំហាត់

1. បង្កើត prototype object ដែលមាន `describe()` ហើយបង្កើត object មួយឱ្យប្រើ method នោះ។
2. តើ `Object.hasOwn` ខុសពី `in` យ៉ាងដូចម្តេច?
3. ហេតុអ្វីគួរប្រុងប្រយ័ត្នពេល method ត្រូវបានយកទៅហៅ detached ពី object?

<details><summary>ចម្លើយសង្ខេប</summary>

`Object.hasOwn` មើលតែ property របស់ object ផ្ទាល់; `in` មើល prototype chain ផង។ Method ដែលប្រើ `this` ត្រូវបានអានតាម receiver ពេលហៅ; detached call អាចបាត់ receiver និងផ្លាស់ប្តូរតម្លៃ `this`។

</details>

## សង្ខេប

JavaScript រក property តាម prototype chain; own properties មានលើ instance ខ្លួនឯង ខណៈ inherited properties មកពី prototype។ Prototype model ជាមូលដ្ឋានដែល class syntax ប្រើ និងជួយយល់ method lookup និង `this`។
