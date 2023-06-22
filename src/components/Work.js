import React, {Component} from 'react';

import '../css/Work.css';


class Work extends Component {

    render(){
        const projects = [
            { name: 'Digital Renaissance', comingSoon: false },
            { name: 'Between Past & Present', comingSoon: false },
            { name: 'Coming soon', comingSoon: true },
            { name: 'Coming soon', comingSoon: true },
          ];


        return (
          <div className="Work">
        <h2>Selected Work</h2>
        <div className="project-list">
            <div className="project">

                    <div className="project-name">1. Digital Renaissance</div>
           
                <div className="project-line"></div>
            </div>
            <div className="project">
               
                <div className="project-name">2. Between Past & Present</div>
                <div className="project-line"></div>
            </div>
            <div className="project">
               
                <div className="project-name coming-soon">3. Coming soon</div>
                <div className="project-line"></div>
            </div>
            <div className="project">
                
                <div className="project-name coming-soon">4. Coming soon</div>
            </div>


        </div>
          </div>
        );
      }

}

export default Work;
