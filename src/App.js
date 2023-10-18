import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="navigation-link">
          <a>Home</a>
        </div>
        <div className="navigation-link">
          <a>Login</a>
        </div>
        <div className="navigation-link">
          <a>Registration</a>
        </div>
      </div>

      <div className="content">
        <div className="content-header">
          <div className="content-header-div content-header-div-one">
            <h1>MY TODO APP</h1>
          </div>
          <div className="content-header-div  content-header-div-two">
            <input />
            <button>Submit</button>
          </div>
        </div>

        <div className="content-cards">
          <div className="content-card">
            <p>HSHSHSHSHSHHSHSHSHS</p>

            <div className="content-card-buttons">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>

<div className="content-cards">
  <div className="content-card">
    <p>Ela Programer</p>

    <div className="content-card-buttons">
      <button>Delete</button>
      <button>Edit</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default App;
