const status = document.querySelector("#status");
const tasks = document.querySelector("#tasks");
const addButton = document.querySelector("#add-task");

status.textContent = "DOM ត្រូវបានភ្ជាប់រួចរាល់";

addButton.addEventListener("click", () => {
  const item = document.createElement("li");
  item.textContent = `កិច្ចការទី ${tasks.children.length + 1}`;
  tasks.append(item);
});
