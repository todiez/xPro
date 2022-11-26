function App() {
  //inital state, first items of the list
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isDone: false,
    },
    {
      text: "walk Paz all day long",
      isDone: false,
    },
    {
      text: "go running",
      isDone: false,
    },
    {
      text: "build todo list",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isDone: false }]; //create new array with old array plus entered object
    setTodos(newTodos); // use state to update todos list
    return todos;
  };

  //remove on click function
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  //JSX to display the list in the browser
  return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <Todo index={i} key={i} todo={todo} remove={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo}></TodoForm>
        </div>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
