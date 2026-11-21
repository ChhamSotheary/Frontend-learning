# មេរៀន ២៤៖ Component Testing

## គោលដៅ

សាក React UI តាម behavior ដែលអ្នកប្រើឃើញ, query element តាម role/label, simulate interaction និងសាក loading/error state។

## ១. អ្វីដែលត្រូវ test?

សរសេរ tests សម្រាប់ behavior សំខាន់: ប៊ូតុងបង្កើនចំនួន, form បង្ហាញ validation, list filter ឬ error message។ ជៀស test ដែលចងជាមួយ implementation detail ដូច internal state name ឬ component instance method។

React Testing Library ផ្តល់ utilities សម្រាប់ render component និងស្វែងរក DOM ដូចរបៀបអ្នកប្រើ។ វាមិនមែន test runner ទេ; ភ្ជាប់វាជាមួយ runner ដែល project ជ្រើស ដូច Vitest/Jest និង user-event សម្រាប់ interaction។

## ២. ឧទាហរណ៍ test

~~~jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter.jsx";

test("ចុចបូកហើយចំនួនកើន", async () => {
  const user = userEvent.setup();
  render(<Counter />);

  await user.click(screen.getByRole("button", { name: "បូក" }));
  expect(screen.getByText("1")).toBeInTheDocument();
});
~~~

Query តាម accessible role/name ធ្វើឱ្យ test ស្រដៀងការប្រើប្រាស់ពិត និងជួយរកបញ្ហា accessibility។ data-testid គួរជាជម្រើសបម្រុងពេល role/text មិនសម។

## ៣. Arrange, Act, Assert

1. Arrange: render UI និងរៀប input។
2. Act: ចុច, វាយ ឬ submit ដោយ user-event។
3. Assert: ពិនិត្យអ្វីដែលបង្ហាញក្នុង DOM។

Async UI ត្រូវរង់ចាំលទ្ធផលដោយ async queries/waitFor តាមឯកសាររបស់ library; កុំប្រើ timeout ដោយស្មាន។

## ៤. Mock API boundary

សម្រាប់ component ដែលទាញ data សាក loading, success, empty និង error។ Mock network boundary ដោយវិធីដែល test stack គាំទ្រ; កុំ mock React internal behavior ឬ assert ចំនួនដង render លុះត្រាតែវាជា requirement ពិត។

## លំហាត់

1. សរសេរ test សម្រាប់ form ដែល required។
2. Test ថា loading message បាត់ ហើយ data បង្ហាញក្រោយ success។
3. ហេតុអ្វី query by role ល្អជាង query selector របស់ class CSS?

<details><summary>ចម្លើយសង្ខេប</summary>

Query by role/name ប្រហាក់ប្រហែលនឹងរបៀប assistive technology និងអ្នកប្រើរក UI ហើយមិនភ្ជាប់ test ទៅ class styling។

</details>

## សង្ខេប

Component tests គួរផ្ទៀងផ្ទាត់ behavior តាម DOM។ ប្រើ role/label, user interaction, async assertions និងសាក error states; React Testing Library ជា testing utility មិនមែន runner។
