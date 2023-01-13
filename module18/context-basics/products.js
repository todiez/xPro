function Products(){
    let ctx = React.useContext(UserContext);
    
    ctx.count++;
    
    return (
        <div>
            <h3>Products Component</h3>
            <p>List of the the product we make</p>
            {JSON.stringify(ctx.count)}
            
        </div>
    );
}