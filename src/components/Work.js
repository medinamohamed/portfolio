import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../css/Work.css';
import image1 from '../assets/bpnp.jpeg';
import image2 from '../assets/rfc.jpeg';
import image3 from '../assets/MM.jpeg';

function Work() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [backgroundImage, setBackgroundImage] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.pageX - 50, y: e.pageY - 50 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listeners
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="Work" id="work">
      <h2>{t('work')}</h2>
      <div className="project-list content">
        <div className="project">
        <Link className="link" to="https://www.instagram.com/rootsforchangemtl/" target="_blank">

          <div
            className="project-name"
            onMouseEnter={() => setBackgroundImage(image1)}
            onMouseLeave={() => setBackgroundImage(null)}
          >
            {t('bpnp')}
          </div>
          </Link>
          <p>&emsp;&emsp;&nbsp; {t('bpnp-desc')}</p>

          <div className="project-line"></div>
        </div>
        <div className="project">
        <Link className="link" to="https://www.instagram.com/rootsforchangemtl/" target="_blank">

          <div
            className="project-name"
            onMouseEnter={() => setBackgroundImage(image2)}
            onMouseLeave={() => setBackgroundImage(null)}
          >
            {t('rfc')}
          </div>
          </Link>
          <p>&emsp;&emsp;&nbsp; {t('rfc-desc')}  </p>

          <div className="project-line"></div>
        </div>
        <div className="project">
        <Link className="link" to="https://github.com/medinamohamed/portfolio/" target="_blank">

          <div
            className="project-name"
            onMouseEnter={() => setBackgroundImage(image3)}
            onMouseLeave={() => setBackgroundImage(null)}
          >
            3. Portfolio
          </div>
          </Link>
          <p>&emsp;&emsp;&nbsp;   {t('port-desc')}</p>

          <div className="project-line"></div>
        </div>
      </div>
      <div
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="cursor-follow"
      ></div>
    </div>
  );
}

export default Work;
