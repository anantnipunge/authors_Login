import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (

    
    <Router>
      <Routes>
        <Route  path="/" element={<Login/>} />
        <Route  path="/Navbar" element={<Navbar/>}/>
      </Routes>
    </Router>
  );
}
export default App; 