const input = document.querySelector("#note");
const status = document.querySelector("#status");

try {
  input.value = localStorage.getItem("lesson-note") ?? "";
} catch {
  status.textContent = "Browser មិនអនុញ្ញាតឱ្យអាន storage ទេ។";
}

document.querySelector("#save").addEventListener("click", () => {
  try {
    localStorage.setItem("lesson-note", input.value);
    status.textContent = "បានរក្សាទុកក្នុង browser។";
  } catch {
    status.textContent = "មិនអាចរក្សាទុកបានទេ។";
  }
});
