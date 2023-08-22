import Home from "./components/pages/Home.js";
import Login from "./components/pages/Login.js";
import Profile from "./components/pages/Profile.js";
import Register from "./components/pages/Register.js";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";   
import * as React from "react";
import { Routes, Route , Navigate , BrowserRouter } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
        {user ? (
          <Navigate path="/"  />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {user ? (
          <Navigate path="/"  />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
        {user ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Register />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
