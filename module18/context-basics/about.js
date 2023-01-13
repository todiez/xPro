function About(){
    let ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>About Component</h3>
            <p>This is the counter how often we clicked on a link</p>
            {JSON.stringify(ctx.users)}
            {JSON.stringify(ctx.count)}
        </div>
    );
}