function Article(props){
    return (<>
        <article> 
            <PlusMinus section="article" handle={props.handle}/>
            <div className="section">Article2:{props.data.article}</div>
            <Data data={props.data}/>
        </article>
    </>);
}