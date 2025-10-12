import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Curtains from './components/Curtain';
import Carpet from './components/Carpet';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from './components/MenuBar';
import Sofa from './components/Sofa';
import AC from './components/AC';
import MattressSelector from './components/Matrass';







function App() {
  return (
    <Router>
      <MenuBar />
     
      <div className="container mt-5 pt-5 text-center">
        <Routes>
          <Route path="/" element={<h2>Welcome</h2>} />
          <Route path="/carpet" element={<div><Carpet/></div>} />
          <Route path="/curtain" element={<div><Curtains/></div>} />
          <Route path="/sofa" element={<div><Sofa/></div>} />
          <Route path="/ac" element={<div><AC/></div>} />
          <Route path="/mattress" element={<div><MattressSelector/></div>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;