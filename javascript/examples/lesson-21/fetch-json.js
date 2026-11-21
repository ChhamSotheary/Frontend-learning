async function loadTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

loadTodo()
  .then((todo) => console.log({ title: todo.title, completed: todo.completed }))
  .catch((error) => console.error("សាកល្បង fetch មិនបាន៖", error.message));
