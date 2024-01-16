import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Aboutimage from './Content/Image';
import PageTransition from '../Styles/Transition';
import './About.css';

function About() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Handle button click (e.g., navigate back to the home page)
    navigate('/');
  };

  return (
    <div>
      <div className='bottomcanvas'>
        <div
          className={`backbutton ${isHovered ? 'hovered' : ''}`}
          onClick={handleButtonClick}
        ></div>
        test
      </div>
      <div className='topcanvas'>
        <Aboutimage />
      </div>
    </div>
  );
}

export default PageTransition(About);
