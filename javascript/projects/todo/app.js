const STORAGE_KEY = "frontend-learning-todos-v1";
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const status = document.querySelector("#status");
let todos = loadTodos();

function isTodo(value) {
  return value !== null
    && typeof value === "object"
    && typeof value.id === "string"
    && typeof value.title === "string"
    && value.title.trim().length > 0
    && value.title.length <= 120
    && typeof value.done === "boolean";
}

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isTodo);
  } catch {
    status.textContent = "មិនអាចអានទិន្នន័យដែលបានរក្សាទុកបានទេ។";
    return [];
  }
}

function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    return true;
  } catch {
    status.textContent = "ការកែប្រែមានក្នុងទំព័រនេះ ប៉ុន្តែ browser មិនអាចរក្សាទុកបានទេ។";
    return false;
  }
}

function persistTodos(successMessage) {
  if (saveTodos()) status.textContent = successMessage;
}

function renderTodos() {
  list.replaceChildren();

  for (const todo of todos) {
    const item = document.createElement("li");
    item.className = "todo-row";
    item.classList.toggle("is-done", todo.done);
    item.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.dataset.action = "toggle";
    checkbox.setAttribute("aria-label", `សម្គាល់ថារួច៖ ${todo.title}`);

    const label = document.createElement("span");
    label.className = "todo-label";
    label.textContent = todo.title;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.dataset.action = "remove";
    removeButton.textContent = "លុប";
    removeButton.setAttribute("aria-label", `លុបកិច្ចការ៖ ${todo.title}`);

    item.append(checkbox, label, removeButton);
    list.append(item);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) {
    status.textContent = "សូមសរសេរកិច្ចការមុនចុចបន្ថែម។";
    input.focus();
    return;
  }

  todos = [...todos, { id: crypto.randomUUID(), title, done: false }];
  renderTodos();
  persistTodos("បានបន្ថែមកិច្ចការហើយ។");
  form.reset();
  input.focus();
});

list.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLInputElement) || event.target.dataset.action !== "toggle") return;
  const item = event.target.closest("li[data-id]");
  if (!item) return;
  const { id } = item.dataset;
  todos = todos.map((todo) => todo.id === id ? { ...todo, done: event.target.checked } : todo);
  renderTodos();
  persistTodos("បានធ្វើបច្ចុប្បន្នភាពកិច្ចការ។");
});

list.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-action='remove']");
  const item = button?.closest("li[data-id]");
  if (!item || !list.contains(item)) return;
  todos = todos.filter((todo) => todo.id !== item.dataset.id);
  renderTodos();
  persistTodos("បានលុបកិច្ចការ។");
});

document.querySelector("#clear-completed").addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.done);
  renderTodos();
  persistTodos("បានលុបកិច្ចការដែលរួច។");
});

renderTodos();
