function TodoForm({addTodo,}) {
  //creating managed (state) variable for user input
  const [value, setValue] = React.useState('');

  //submitting means pressing enter on the page!
  const handleSubmit = e => {
    e.preventDefault(); //prevent default (reload page)
    if (!value) return; //if nothing was entered do nothing --> just return
    addTodo(value);
    setValue(''); //clear out input field
    
  };

 
  return (
    // input form
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add your Todo here ..."
        // on change event to the value in input
        //entering an expression e
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
