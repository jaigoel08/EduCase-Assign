import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Message from "./components/Message";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
