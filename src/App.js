import React, {Component} from 'react';
import './App.css';
import  Hero  from "./components/Hero.js";
import NavBar from "./components/NavBar.js"


class App extends Component {
  render(){
    return (
      <div className="App">
      <Hero/>
      <NavBar/>
     
  
      </div>
    );
  }
}

export default App;
