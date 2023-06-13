import React, {Component} from 'react';
import './App.css';
import  Hero  from "./components/Hero.js";
import NavBar from "./components/NavBar.js"
import About from "./components/About.js"




class App extends Component {
  render(){
    return (
      <div className="App">
      <Hero/>
      <NavBar/>


      <About/>
      
     
  
      </div>
    );
  }
}

export default App;
