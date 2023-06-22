import React, {Component} from 'react';
import './App.css'

import NavBar from "./components/NavBar.js"
import  Hero  from "./components/Hero.js";
import About from "./components/About.js"
import Work from "./components/Work.js"


class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <Hero/>
        <About/>
        <Work/>
      </div>
    );
  }
}

export default App;
