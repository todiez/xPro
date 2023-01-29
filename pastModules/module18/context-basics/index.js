const UserContext = React.createContext(null);

function Spa() {
  const Route = ReactRouterDOM.Route;
  const Link = ReactRouterDOM.Link;
  const HashRouter = ReactRouterDOM.HashRouter;
  let counter = 0;

  return (
    <HashRouter>
      <div>
        <h1>Routing - Hello World</h1>
        <Link to="/">Home</Link> --
        <Link to="/about/">About</Link> --
        <Link to="/products">Products</Link>
        <hr />
        <UserContext.Provider value={{users: ["Paz"], count: 0}}>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/products/" component={Products} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
