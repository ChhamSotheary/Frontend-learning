# មេរៀន ២៥៖ Classes, Inheritance និង Composition

## គោលដៅ

សរសេរ class ដោយ constructor, instance methods និង static methods; ប្រើ inheritance ដោយប្រុងប្រយ័ត្ន; ប្រៀបធៀប inheritance ជាមួយ composition និងកំណត់ invariants របស់ object។

## ១. Class និង constructor

~~~js
class BankAccount {
  constructor(owner, initialBalance = 0) {
    if (initialBalance < 0) throw new RangeError("សមតុល្យដំបូងមិនអាចអវិជ្ជមាន");
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) throw new RangeError("ចំនួនត្រូវវិជ្ជមាន");
    this.balance += amount;
    return this.balance;
  }
}

const account = new BankAccount("Dara", 100);
account.deposit(25);
~~~

Constructor រៀបចំ state ចាប់ផ្តើម។ Instance method ស្ថិតលើ prototype ដើម្បីចែករវាង instances។ Validation ក្នុង object ជួយរក្សាច្បាប់ (invariant) ដូចជាសមតុល្យដំបូងមិនអវិជ្ជមាន។ ការគ្រប់គ្រងប្រាក់ពិតត្រូវប្រើ integer minor units ឬ decimal library មិនគួរពឹង floating point ធម្មតា។

## ២. Private fields និង static methods

~~~js
class Temperature {
  #celsius;
  constructor(celsius) { this.#celsius = celsius; }
  get celsius() { return this.#celsius; }
  get fahrenheit() { return this.#celsius * 9 / 5 + 32; }
  static fromFahrenheit(value) { return new Temperature((value - 32) * 5 / 9); }
}
~~~

Private field ដែលចាប់ផ្តើមដោយ `#` មិនអាចចូលដោយកូដក្រៅ class តាម property syntax ទេ។ Getter គឺ property-like access សម្រាប់គណនា/អាន; static method ជាប់ class ហើយជាទូទៅប្រើបង្កើត object ឬ utility ដែលមិនពឹង instance។ កុំបង្ហាញ mutable internal state ដោយគ្មានតម្រូវការ។

## ៣. Inheritance និង `super`

~~~js
class Shape {
  describe() { return "រូបរាង"; }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    if (radius <= 0) throw new RangeError("កាំត្រូវវិជ្ជមាន");
    this.radius = radius;
  }
  area() { return Math.PI * this.radius ** 2; }
}
~~~

`extends` បង្កើត prototype relationship; constructor របស់ subclass ត្រូវហៅ `super()` មុនប្រើ `this`។ Inheritance សមស្របពេលមានទំនាក់ទំនង “is-a” និង behavior ដែលអាចជំនួសគ្នាបាន។ Hierarchy ជ្រៅធ្វើឱ្យការកែប្រែប៉ះពាល់ច្រើនផ្នែក។

## ៤. Composition

Composition បង្កើត object ពីសមត្ថភាពតូចៗ ឬ functions ជំនួសការបន្ត class chain។ ឧទាហរណ៍ `createLogger()`, `createValidator()` អាចបញ្ចូលជាមួយ service មួយ។ វាធ្វើឱ្យ dependency ងាយជំនួស និងសាក ប៉ុន្តែមិនចាំបាច់ត្រូវបំបែករាល់ function ជា factory ទេ។

~~~js
function createNotifier(send) {
  return {
    notify(message) { return send(message); },
  };
}
~~~

## ៥. ជ្រើសរបៀបណា?

- ប្រើ object literal សម្រាប់ទិន្នន័យ និង function តិចៗ។
- ប្រើ class សម្រាប់ instances ច្រើនដែលមាន state និង invariant រួម។
- ប្រើ composition ពេលចង់បន្ថែម behavior ដោយមិនបង្ខំ class hierarchy។
- ជៀសវាង class ដែលមានតែ getter/setter និងគ្មានអត្ថប្រយោជន៍លើ object ធម្មតា។

## លំហាត់

1. បង្កើត `Rectangle` class មាន width/height ហើយគណនា area។
2. បន្ថែម validation មិនឱ្យទំហំស្មើ ឬតូចជាងសូន្យ។
3. សរសេរ example មួយដែល composition ងាយកែជាង inheritance។

<details><summary>ចម្លើយគំរូ</summary>

~~~js
class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) throw new RangeError("ទំហំត្រូវវិជ្ជមាន");
    this.width = width;
    this.height = height;
  }
  get area() { return this.width * this.height; }
}
~~~

</details>

## សង្ខេប

Class រៀបចំ instances និង behavior; private fields ជួយលាក់ state, inheritance ចែក behavior តាម prototype ហើយ composition ផ្គុំសមត្ថភាពតូចៗ។ ជ្រើសរចនាប័ទ្មដែលធ្វើឱ្យ invariant ងាយយល់ និងការផ្លាស់ប្តូរមានផលប៉ះពាល់តូច។
