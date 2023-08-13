import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';  // Ensure you've imported gsap
import '../css/Work.css';


import image1 from '../assets/img.jpg';
import image2 from '../assets/apple.jpeg';
import image3 from '../assets/sunrise.jpeg';
import image4 from '../assets/sunset.jpeg';

function Work() {
    const cursor = useRef(null);
    const titleRef = useRef(null);

    const [backgroundImage, setBackgroundImage] = useState(null);


    useEffect(() => {
        let tl = gsap.timeline();
        let posX = 0;
        let posY = 0;
        let mouseX = 0;
        let mouseY = 0;

        


        tl.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 10;
                posY += (mouseY - posY) / 10;
                tl.set(cursor.current, {
                    css: {
                        left: posX - 50,
                        top: posY - 50,
                    }
                })
            }
        });

        const handleMouseMove = (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }

        document.addEventListener("mousemove", handleMouseMove);

       // Show the custom cursor when hovering over the first title
         if (titleRef.current) {
            titleRef.current.addEventListener("mouseover", () => {
            gsap.set(cursor.current, { autoAlpha: 1 });

            
        });

        titleRef.current.addEventListener("mouseout", () => {
            gsap.set(cursor.current, { autoAlpha: 0 });
        });
       
    }

        // Initially set cursor to invisible
       // gsap.set(cursor.current, { autoAlpha: 0 });

        // return () => {
        //     // Clean up the event listeners
        //    document.removeEventListener("mousemove", handleMouseMove);
        //    if (titleRef.current) {
        //        titleRef.current.removeEventListener("mouseover", () => {});
        //        //titleRef.current.removeEventListener("mouseout", () => {});
        //    }
        // }
    }, []);

    return (
        <div className="Work">
            <h2>Selected Work</h2>
            
            <div className="project-list content">

            <div className="project">

              <div className="project-name" ref={titleRef}     onMouseEnter={() => setBackgroundImage(image1)}
        >1. Digital Renaissance</div>
              <div className="project-line"></div>
              </div>
              <div className="project">

              <div className="project-name" ref={titleRef}    onMouseEnter={() => setBackgroundImage(image2)}
       >2. Between Past & Present</div>
              <div className="project-line"></div>
              </div>
              <div className="project">

              <div className="project-name coming-soon" ref={titleRef}   onMouseEnter={() => setBackgroundImage(image3)}
        >3. Coming soon</div>
              <div className="project-line"></div>
              </div>
              <div className="project">

              <div className="project-name coming-soon" ref={titleRef} onMouseEnter={() => setBackgroundImage(image4)}
       >4. Coming soon</div>
              </div>
              <div className="project">
</div>

              </div>   
              <div style={{ backgroundImage: `url(${backgroundImage})` }}  className="cursor-follow" ref={cursor}></div>
         
        </div>
    );
}
export default Work;

