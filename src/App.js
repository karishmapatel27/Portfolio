import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"


function App() {
  return (
    <Router>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;
