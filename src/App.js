
import './App.css';
import SignIn from "./User/Signin";
import Signup from "./User/Signup";
import SignUp from "./User/Signup";
import {Navigate, Route, Router, Routes} from "react-router-dom";
import Welcome from "./UserEntry/Welcome";
import {use, useState} from "react";
import Error from "./Error/Error";

function App() {

    const [isAuthenticated,setIsAuthenticated] = useState(false);
  return (

              <div className="App">
                  <Routes>
                      <Route path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/error" element={<Error />} />
                      <Route path="/welcome" element={isAuthenticated? <Welcome/>: <Navigate to="/"/>}/>
                  </Routes>
              </div>

  );
}

export default App;
