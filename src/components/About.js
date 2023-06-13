import React, {Component} from 'react';
import '../css/About.css';
import profile from '../assets/profile.png';

class About extends Component {
    render(){
      return (
        <div className="About" id="about" >
            <div className="container">
                <div className="text">
                    <h2>About</h2>
                    <p>I am  developer with a passion for the convergence of technology and design. I combine my technical expertise with a creative mindset to craft innovative and intuitive digital solutions.
I am commited to staying at the forefront of emerging technologies which drives my constant pursuit of knowledge and exploration. </p>
                </div>

                <div className="image">
                    <img src={profile} alt="Profile" />
                </div>
            </div>
        </div>
      );
    }
  }
  
  
  export default About;