'use strict';

let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let won = false;

// If 'check' clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!won) {
    if (!guess) {
      setMessage('⛔ No input...');
    } else if (guess === randomNum) {
      setMessage(`✅ Correct!!
      Click "Again!" to play a new round`);
      setCSS('.again', 'backgroundColor', '#e3a84f');
      setCSS('body', 'backgroundColor', '#60b347');
      setCSS('.number', 'width', '25rem');
      setBoxMessage(guess);
      won = true;
      if (score > highScore) {
        highScore = score;
        setHighScore(highScore);
      }
    } else if (guess !== randomNum) {
      if (score > 1) {
        if (guess > randomNum) {
          setMessage('📈 Too high...');
          setScore(--score);
        } else if (guess < randomNum) {
          setMessage('📉 Too low...');
          setScore(--score);
        }
      } else {
        setMessage(`😢 You lost :( 
          Click "Again!" to play a new round`);
        setCSS('.again', 'backgroundColor', '#e3a84f');
        setCSS('body', 'backgroundColor', '#b34747');
        setScore(0);
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  won = false;
  score = 20;
  randomNum = Math.floor(Math.random() * 20) + 1;
  setScore(score);
  setCSS('.again', 'backgroundColor', '#eee');
  setCSS('body', 'backgroundColor', '#222');
  setCSS('.number', 'width', '15rem');
  setMessage('Start guessing...');
  setBoxMessage('?');
  setGuessBox('');
});

const setBoxMessage = function (message) {
  document.querySelector('.number').textContent = message;
};
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setHighScore = function (score) {
  document.querySelector('.highscore').textContent = score;
};

const setGuessBox = function (score) {
  document.querySelector('.guess').value = score;
};

const checkIfLost = function (score) {
  if (score === 0) {
    return true;
  } else {
    return true;
  }
};

const setCSS = function (element, component, customStyle) {
  document.querySelector(element).style[component] = customStyle;
};
