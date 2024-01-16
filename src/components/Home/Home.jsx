import './Home.css';
import { useEffect, useRef } from 'react';
import p5 from 'p5';
import HomeMenu from "./Menu/Menu";

function sketch(p) {
   // p is a reference to the p5 instance this sketch is attached to
   let characters = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    "█▉▊▋▌▍▎▏▕▐░▒▓█",
    ".,·:;⋰`º⋰⋱/:",
    "_◜◞◠+*`=?!¬•+−×÷=≠><≥≤±≈~¬",
    "╷┬┐┌─╴╶╵┴┘└│┤├",
    "▁▂▃▄▅▆▇█░▒▓█"
];

let cube = [];
let gridSize = 3;

p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    generateCube();
};

p.draw = function () {
    p.background(0);
    displayCube();
    animateCube();
};

function generateCube() {
    for (let x = 0; x < gridSize; x++) {
        cube[x] = [];
        for (let y = 0; y < gridSize; y++) {
            cube[x][y] = {
                char: getRandomCharacter(),
                changeProbability: 0.1 // Adjust the probability of character change
            };
        }
    }
}

function getRandomCharacter() {
    let randomSet = characters[Math.floor(Math.random() * characters.length)];
    return randomSet[Math.floor(Math.random() * randomSet.length)];
}

function animateCube() {
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            // Randomly decide whether to change the character or not
            if (Math.random() < cube[x][y].changeProbability) {
                cube[x][y].char = getRandomCharacter();
            }
        }
    }
}

function displayCube() {
    p.textSize(25);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(255);
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            let xPos = (x - 1) * 80; // Adjust the X translation
            let yPos = (y - 1) * 80; // Adjust the Y translation
            p.text(cube[x][y].char, p.width / 2 + xPos, p.height / 2 + yPos);
        }
    }
}

p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
};
}

function Home() {
    // create a reference to the container in which the p5 instance should place the canvas
    const p5ContainerRef = useRef();
  
    useEffect(() => {
      // On component creation, instantiate a p5 object with the sketch and container reference 
      const p5Instance = new p5(sketch, p5ContainerRef.current);
  
      // On component destruction, delete the p5 instance
      return () => {
        p5Instance.remove();
      };
    }, []);
  
    return (
      <div className="overlay">
       <div className='cl'> <HomeMenu/></div>
        <div className="App" ref={p5ContainerRef} />
      </div>
    );
  }
export default Home;