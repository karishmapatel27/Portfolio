import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Sidebar from './components/Navbar/Sidebar'

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
