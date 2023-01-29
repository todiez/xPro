// use of "props" to set data
function NavBar(props) {
  //save clicked buttons
  const [clicks, setClicks] = React.useState([]);
  console.log(`clicks: ${clicks}`)
  
  const list = props.menuitems;
  const {Button} = ReactBootstrap;

  //click handler, what happens when we click on a button?
  const handleClick = e => {
    // alert(`You clicked on Button no. ${e.target.innerHTML}`);
    setClicks([...clicks, e.target.innerHTML]);    
  };

  // each item should have an unique key
  const updatedList = list.map((listItems, index) => {
    return <Button onClick={handleClick} key={index.toString()}>{listItems}</Button>;
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root2")
);
