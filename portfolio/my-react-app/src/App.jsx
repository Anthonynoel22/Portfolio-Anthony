import React from 'react';
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Project from "./components/Project/Project.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/projets" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
