import React, { useEffect, useRef } from 'react';
import './App.css';

// import NavBar from './components/NavBar.js';
// import Hero from './components/Hero.js';
// import About from './components/About.js';
// import Work from './components/Work.js';
import ComingSoon from './components/ComingSoon.js';

const App = () => {
  const appRef = useRef(null);
  const toRef = useRef(null);

  // useEffect(()=> {
  //   const moveGradient = (event) => {
  //     const winWidth = window.innerWidth;
  //     const winHeight = window.innerHeight;
 
  //     // const mouseX = Math.round(event.pageX/ winWidth) *100))
  //   }
  // })

  return (
    <div className="App">
      <ComingSoon />
    </div>
  );
};

export default App;
