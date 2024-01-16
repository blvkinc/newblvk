import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Import your CSS file for styling

const characters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "█▉▊▋▌▍▎▏▕▐░▒▓█",
  "▁▂▃▄▅▆▇█░▒▓█",
];

const Menu = () => {
  const menuItemsRef = useRef([]);

  useEffect(() => {
    menuItemsRef.current.forEach(element => {
      startAnimation(element);
    });
  
    return () => {
      menuItemsRef.current.forEach(element => {
        if (element) {
          clearInterval(element.interval);
          element.removeEventListener("mouseover", element.onMouseOver);
          element.removeEventListener("mouseout", element.onMouseOut);
          element.innerText = element.dataset.value; // Reset text on unmount
        }
      });
    };
  }, []);

  const startAnimation = (element) => {
    element.interval = null;
    element.isHovered = false;

    element.onMouseOver = () => {
      element.isHovered = true;
      clearInterval(element.interval);

      element.interval = setInterval(() => {
        if (!element.isHovered) {
          clearInterval(element.interval);
          element.innerText = element.dataset.value;
          return;
        }

        element.innerText = element.dataset.value
          .split("")
          .map((letter, index) => {
            return getRandomCharacter();
          })
          .join("");
      }, 30);
    };

    element.onMouseOut = () => {
      element.isHovered = false;
      clearInterval(element.interval);
      element.innerText = element.dataset.value;
    };

    element.addEventListener("mouseover", element.onMouseOver);
    element.addEventListener("mouseout", element.onMouseOut);
  };

  const getRandomCharacter = () => {
    const randomSet = characters[Math.floor(Math.random() * characters.length)];
    return randomSet[Math.floor(Math.random() * randomSet.length)];
  };

  return (
    <div className="menu">
      <main>
        <section className="hero">
          <Link to="/about">
            <div ref={(el) => menuItemsRef.current[0] = el} className="menu-item animated-text" data-value="ABOUT">
              ABOUT
            </div>
          </Link>
          <Link to="/work">
            <div ref={(el) => menuItemsRef.current[1] = el} className="menu-item animated-text" data-value="WORK">
              WORK
            </div>
          </Link>
          <Link to="/contact">
            <div ref={(el) => menuItemsRef.current[2] = el} className="menu-item animated-text" data-value="CONTACT">
              CONTACT
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Menu;
