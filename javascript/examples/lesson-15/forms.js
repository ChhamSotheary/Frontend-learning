const form = document.querySelector("#signup");
const status = document.querySelector("#status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  status.textContent = `សួស្តី ${name} — ទម្រង់បានពិនិត្យក្នុង browser រួច។`;
});
