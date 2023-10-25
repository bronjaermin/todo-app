import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ErrorPage from "./pages/ErrorPage";
import MyNavigation from './components/Shared/MyNavigation'

function App() {
  return (
    <>
      <MyNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
    //     <div className="App">
    //       <div className="navigation">
    //         <div className="navigation-link">
    //           <a>Home</a>
    //         </div>
    //         <div className="navigation-link">
    //           <a>Login</a>
    //         </div>
    //         <div className="navigation-link">
    //           <a>Registration</a>
    //         </div>
    //       </div>

    //       <div className="content">
    //         <div className="content-header">
    //           <div className="content-header-div content-header-div-one">
    //             <h1>MY TODO APP</h1>
    //           </div>
    //           <div className="content-header-div  content-header-div-two">
    //             <input />
    //             <button>Submit</button>
    //           </div>
    //         </div>

    //         <div className="content-cards">
    //           <div className="content-card">
    //             <p>HSHSHSHSHSHHSHSHSHS</p>

    //             <div className="content-card-buttons">
    //               <button>Delete</button>
    //               <button>Edit</button>
    //             </div>
    //           </div>
    //         </div>

    // <div className="content-cards">
    //   <div className="content-card">
    //     <p>Ela Programer</p>

    //     <div className="content-card-buttons">
    //       <button>Delete</button>
    //       <button>Edit</button>
    //     </div>
    //   </div>
    // </div>
    //       </div>
    //     </div>
  );
}

export default App;
