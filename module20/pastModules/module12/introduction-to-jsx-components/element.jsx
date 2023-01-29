// React Render a component

const Hello = props => {
    let color = props.action();
    const name = props.name;
    return (<h1 style={{backgroundColor: color}}> Hello {name} </h1>);
};

const getRandomColor = () => {
    const palet = ["red", "green", "blue"];
    let color = palet[Math.floor(Math.random() * 3)];
    console.log(color);
    return color;
}


// const name = 'Mary';
// const element = <h1> Hello {name} </h1>;

ReactDOM.render(
    <Hello action={getRandomColor} name="Pazi"/> ,
     document.getElementById('root')
);
