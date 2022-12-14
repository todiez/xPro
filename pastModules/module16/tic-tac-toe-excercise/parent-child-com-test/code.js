const Parent = () => {
  const [state, setState] = React.useState("Child said nothing so far");

  const changeStatefromChild = () => {
    setState("This was activated from Child, but we are in Parent component!");
  };

  return (
    <div className="game-board">
      <h1>Parent: {state}</h1>
      <div className="grid-row">
        <Child state={state} change={changeStatefromChild}></Child>
      </div>
    </div>
  );
};

const Child = ({ state, change }) => {
  return (
    <div>
      <h4>Child has just a button and got this String from parent: {state}</h4>
      <button onClick={change}>ChildButton: Let child talk</button>
    </div>
  );
};

const App = () => {
  return <Parent></Parent>;
};

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
