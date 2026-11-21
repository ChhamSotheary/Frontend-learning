const tasks = document.querySelector("#tasks");
let nextId = 1;

document.querySelector("#add").addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `កិច្ចការ ${nextId++} `;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.dataset.action = "remove";
  remove.textContent = "លុប";
  item.append(remove);
  tasks.append(item);
});

tasks.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-action='remove']");
  if (button && tasks.contains(button)) button.closest("li")?.remove();
});
