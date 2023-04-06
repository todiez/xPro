var ui = {};

ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a
        class="nav-link"
        href="#createAccount"
        onclick="loadCreateAccount()"
        >Create Account</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        onclick="loadLogin()"
        >Login</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        onclick="loadDeposit()"
        >Deposit</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        onclick="loadWithdraw()"
        >Withdraw</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        onclick="loadBalance()"
        >Balance</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        onclick="loadAllData()"
        >AllData</a
      >
    </li>
  </ul>
</div>
</nav>

`;

var navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
<div class="card-header">Create Account</div>
<div class="card-body">
  Name<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter name"
  /><br />
  Email address<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter email"
  /><br />
  Password<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter password"
  /><br />
  <button type="submit" id="submit" class="btn" onclick="create()">
    Create Account
  </button>

  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
</div>
</div>
`;

ui.login = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
<div class="card-header">Login</div>
<div class="card-body">
  Name<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter name"
  /><br />
  Email address<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter email"
  /><br />
  Password<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter password"
  /><br />
  <button type="submit" id="submit" class="btn" onclick="create()">
    Create Account
  </button>

  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
</div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
<div class="card-header">Deposit</div>
<div class="card-body">
  Name<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter name"
  /><br />
  Email address<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter email"
  /><br />
  Password<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter password"
  /><br />
  <button type="submit" id="submit" class="btn" onclick="create()">
    Create Account
  </button>

  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
</div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
<div class="card-header">Withdraw</div>
<div class="card-body">
  Name<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter name"
  /><br />
  Email address<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter email"
  /><br />
  Password<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter password"
  /><br />
  <button type="submit" id="submit" class="btn" onclick="create()">
    Create Account
  </button>

  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
</div>
</div>
`;

ui.balance = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
<div class="card-header">Balance</div>
<div class="card-body">
  Name<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter name"
  /><br />
  Email address<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter email"
  /><br />
  Password<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter password"
  /><br />
  <button type="submit" id="submit" class="btn" onclick="create()">
    Create Account
  </button>

  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
</div>
</div>
`;

ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem">
    <div class="card-header">BadBank Landing Module</div>
        <div class="card-body">
            <h5 class="card-title">Welcome to the Bank</h5>
            <p class="card-text">
                Move around using the navigation bar..!
            </p>
            <img src="bank.png" class="img-fluid" alt="Responsive img">
          </div>
    </div>
</div>
`;

ui.allData = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
<div class="card-header">All Data</div>
<div class="card-body">
  Name<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter name"
  /><br />
  Email address<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter email"
  /><br />
  Password<br />
  <input
    type="input"
    class="form-control"
    id="name"
    placeholder="Enter password"
  /><br />
  <button type="submit" id="submit" class="btn" onclick="create()">
    Create Account
  </button>

  <h5 class="card-title">Primary card title</h5>
  <p class="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
</div>
</div>
`;

var loadCreateAccount = function() {
    target.innerHTML = ui.createAccount;
};

var loadLogin = function() {
    target.innerHTML = ui.login;
};

var loadDeposit = function() {
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function() {
    target.innerHTML = ui.withdraw;
};

var loadBalance = function() {
    target.innerHTML = ui.balance;
};

var defaultModule = function() {
    target.innerHTML = ui.default;
};

var loadAllData = function() {
    target.innerHTML = ui.allData;
};

defaultModule();