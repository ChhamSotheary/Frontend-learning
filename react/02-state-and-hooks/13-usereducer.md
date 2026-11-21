# មេរៀន ១៣៖ useReducer និង State Transitions

## គោលដៅ

ប្រើ useReducer នៅពេល state update logic ច្រើន, បែងចែក actions ពី reducer និងរក្សា reducer ឱ្យសុទ្ធសាធ។

## ១. ពេលណាប្រើ reducer?

useState សមស្របសម្រាប់ state តូចៗ និង updates សាមញ្ញ។ useReducer ជួយពេល event handlers ច្រើនកែ object ដូចគ្នា ឬ transitions មានច្បាប់។ Reducer ទទួល state ចាស់ និង action រួច return state ថ្មី។

~~~jsx
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("មិនស្គាល់ action: " + action.type);
  }
}
~~~

## ២. ភ្ជាប់ reducer ជាមួយ component

~~~jsx
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>បូក</button>
      <button onClick={() => dispatch({ type: "decrement" })}>ដក</button>
      <button onClick={() => dispatch({ type: "reset" })}>កំណត់ឡើងវិញ</button>
    </>
  );
}
~~~

dispatch ផ្ញើ action ដែលពិពណ៌នាអ្វីកើតឡើង; reducer សម្រេច state ថ្មី។ Action គួរបង្ហាញ intent ដូច taskAdded ឬ itemDeleted មិនមែនពិពណ៌នាការកែ object ទូទៅពេក។

## ៣. ច្បាប់ reducer

- មិន mutate state ចាស់; return object/array ថ្មី។
- មិនធ្វើ network, localStorage ឬ random generation ក្នុង reducer។
- Action ដែលត្រូវការ id អាចយក id ពី event handler រួចផ្ញើតាម action payload។
- ប្រើ default case ដើម្បីរក action ដែលមិនស្គាល់។

## លំហាត់

បង្កើត todoReducer ដែលទទួល action add, toggle និង delete។ ប្រាកដថា toggle ប្តូរ todo ដែល id ត្រូវគ្នាដោយ map និងបង្កើត array ថ្មី។

<details><summary>ចម្លើយគំរូ</summary>

~~~jsx
function todoReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [...todos, action.todo];
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action");
  }
}
~~~

</details>

## សង្ខេប

useReducer ផ្តោត state transitions នៅកន្លែងតែមួយ។ Component dispatches actions; reducer សុទ្ធសាធត្រឡប់ state ថ្មី។ ប្រើវាពេល update logic ស្មុគស្មាញជាងការហៅ setter សាមញ្ញ។
