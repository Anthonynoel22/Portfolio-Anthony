import React from 'react';
// import Header from "./components/Header/Header.jsx;"
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
