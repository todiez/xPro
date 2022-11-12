const App = () => {

  let product = {name: "pear", cost: 2, inStock: 7};
  let {name, inStock} = product;                      //order doesn't matter, name only
  let item = {name, inStock};

  const handler = () => alert(`hey`);
  return <MyButton onClick={handler}></MyButton>
  
};


const MyButton = ({onClick}) => {
  return <button onClick={onClick}>Click Me</button>;
}



// //Destructure an object
// let product = {name: "pear", cost: 2, inStock: 7};
// let {name, inStock} = product;                      //order doesn't matter, name only
// let item = {name, inStock};





//---------------
ReactDOM.render(<App />, document.getElementById("root"));
