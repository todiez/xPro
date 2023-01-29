const App = () => {
  let a = [1,2,3,4];
  const handler = (index) => alert(`button: ${index}`);

  
  let list = a.map((item, index) => {
    return <MyButton onClick={() => handler(index)} key={index} ></MyButton>;
  });
  
   
  return (
    <div> 
      <Welcome name="Paz"/>
      {list}
      <Welcome name="Ida"/>
      <Tick/>

    </div>
  )

};

const MyButton = ({ onClick }) => {
  let { Button } = ReactBootstrap;
  return <Button onClick={onClick}>Click Me</Button>;
};



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return element;
}



// //Destructure an object
// let product = {name: "pear", cost: 2, inStock: 7};
// let {name, inStock} = product;                      //order doesn't matter, name only
// let item = {name, inStock};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
