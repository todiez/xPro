import React from 'react';
import { api } from './api';
import './App.css';
import MyComponent from './MyComponent';

function App(){
  const [items,setItems] = React.useState([]);
  const [value,setValue] = React.useState([]);  

  function handleSubmit(e){
    e.preventDefault();
    api.createItem(value).then((persistedItem) => {
      setItems([...items,value]);
      setValue('');    
    });
  }

  return (
    <div>
      <h1>TODO</h1>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Add todo: </label>
        <input
          id="new-todo"
          value={value}
          placeholder="Add Todo..."          
          onChange={e => setValue(e.target.value)}
        />
        <button>
          Add #{items.length + 1}
        </button>
      </form>
    </div>
  );
}

function TodoList(props){
  return (
    <ul>
      {props.items.map((item,i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// function App() {
//   return (
//   <div className="App">
//     <MyComponent/>
//   </div>
//  );
// }

export default App;
