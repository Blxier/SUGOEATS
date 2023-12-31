import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Food from "./pages/Food";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
