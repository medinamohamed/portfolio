import React, {Component} from 'react';
import '../css/NavBar.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';



class NavBar extends Component {
    
    render(){
      return (
        <div className="NavBar">
          <Navigation/>
          <MobileNavigation/>
        </div>
      );
    }
  }

  export default NavBar;