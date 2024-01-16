import React, { useState, useEffect } from 'react';
import './Header.css';

const characters = [
  "blvkinc_",
  "█▉▊▋▌▍▎▏▕▐░▒▓█",
 
];

const Header = () => {
  const [row, setRow] = useState([]);

  useEffect(() => {
    generateRow();
    const animationInterval = setInterval(animateRow, 100);

    return () => clearInterval(animationInterval);
  }, []);

  const generateRow = () => {
    const newRow = [];
    for (let i = 0; i < 4; i++) {
      newRow[i] = {
        char: getRandomCharacter(),
        changeProbability: 0.7
      };
    }
    setRow(newRow);
  };

  const getRandomCharacter = () => {
    const randomSet = characters[Math.floor(Math.random() * characters.length)];
    return randomSet[Math.floor(Math.random() * randomSet.length)];
  };

  const animateRow = () => {
    setRow(prevRow => {
      const newRow = [...prevRow];
      for (let i = 0; i < 4; i++) {
        if (Math.random() < newRow[i].changeProbability) {
          newRow[i].char = getRandomCharacter();
        }
      }
      return newRow;
    });
  };

  return (
    <div className="header">
      <main>
        <section className="hero">
          <div className="row">
            {row.map((cell, i) => (
              <span key={i} className="cube-char">{cell.char}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Header;
