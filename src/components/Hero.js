import React, {Component} from 'react';
import { motion } from 'framer-motion';

import '../css/Hero.css';

import {  titleAnim, textVariants, letterVariants } from '../utils/motion';


class Hero extends Component {
  
  render(){
    const text = 'MEDINA MOHAMED';

    return (
      <div className="Hero">
         <section className="hero">
          <header className="header">
            
         <motion.h1 variants={textVariants} initial="hidden" animate="show">
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
              <motion.h2 variants={titleAnim} initial="hidden" animate="show" >Front-end Developer</motion.h2>
          </header>
      </section>
      </div>
    );
  }
}


export default Hero;