// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const { Button } = ReactBootstrap;
  //removing even numbers of menueItems
  const filteredList = menuitems.filter(item => item % 2 !== 0);

  //map: creates a new array from calling the function for every array element
  const updatedList = filteredList.map((currentValue, index) =>
  {
    return <Button key={index.toString()}>{currentValue}</Button>;
  });

  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5, 7];

ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
