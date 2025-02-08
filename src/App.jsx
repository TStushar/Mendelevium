import React from "react";
import "./index.css";
import { UserProfile } from "./ui-user-profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Network_tab from "./ui-network/NetworkTab.jsx";
import Login from './ui-auth/forms/Login.jsx'
import Signup from './ui-auth/forms/Singup.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/network_tab" element={<Network_tab />} />
          <Route path="/" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path= "/signup" element={ <Signup/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
