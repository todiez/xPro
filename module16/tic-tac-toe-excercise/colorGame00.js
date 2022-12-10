//Child Component:
const Square = ({ id, newState }) => {
  const [color, setColor] = React.useState("green");
  const [status, setStatus] = React.useState(null);
  const xo = ["O", "X"];

  const colorPalet = ["red", "green", "blue"];
  const getRandomColor = () => colorPalet[Math.floor(Math.random() * 3)];

  React.useEffect(() => {
    //console.log(`Render ${id}`);
    //console.log(`Render ${color}`);
    return () => console.log(`unmounting Square ${id}`); //return in use effect === unmounting
  });

  //id in {} === props.id --> passing from parents to child via props
  return (
    <button
      onClick={(e) => {
        let col = getRandomColor(); //needed in two lines to avoid state delay
        setColor(col);
        let nextPlayer = newState({id: id, color:col}); //calling the function from the parent --> setting the state for the gameboard
        setStatus(nextPlayer);
        e.target.style.background = col;
        //alert(`I'm square ${id}`);
      }}
    >
      <h1>{xo[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1); //need to keep state updated to re-render on changes
  const [state, setState] = React.useState([]); //overall game state, starts with empty array
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);
  let status = `Player ${player}`;
  const toggle = () => setMounted(!mounted);
  const reRender = () => setRandom(Math.random()); //a reRender of the parent forces the reRender of the child, reRenders are implied by changing the state of a component

  //parent function --> needs to be called von the child (square)
  const newState = obj => {
    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    setState([...state, obj]); //adding obj to already existing state
    console.log(`current state ${JSON.stringify(state)}`);
    status = `Player ${nextPlayer}`
    return nextPlayer; //returning nextPlayer gives it back to child, because we got called from Child
  }
  const currentState = () => {
    let curState = state.slice(state.length-3, state.length)
    console.log(`current state ${JSON.stringify(curState)}`);
  }

  function renderSquare(i) {
    //factory for square production, passing in id, player and the function newState to use it in the Child
    return <Square id={i} player={player} newState={newState}></Square>;
  }
  return (
    //parent
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>

      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-render</button>
        <button onClick={currentState}>Show CurrentState in Console</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
