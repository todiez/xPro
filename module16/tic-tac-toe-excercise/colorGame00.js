const Square = () => {
  return <button></button>;
};

const Board = () => {
  const [player, setPlayer] = React.useState(1); //need to keep state updated to re-render on changes
  let status = `Player ${player}`;
  function renderSquare(i) {
    return <Square></Square>;
  }
  return (
    <div id="info">
      <h1>{status}</h1>

      <div className="game-board">
        <div className="grid-row">{renderSquare(0)}{renderSquare(0)}{renderSquare(0)}</div>
        <div className="grid-row">{renderSquare(0)}{renderSquare(0)}{renderSquare(0)}</div>
        <div className="grid-row">{renderSquare(0)}{renderSquare(0)}{renderSquare(0)}</div>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
