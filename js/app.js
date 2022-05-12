'use strict'

// let myArr = [answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven];

function q1 {
  let answerOne = prompt('What\'s your name?');
  alert(`Hello ${answerOne}! Great to meet you!`);
}

q1();
let score = 0;

function q2 {

  let answerTwo = prompt('Am I married?').toLowerCase();
  
  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('Not for long!');
    // console.log ('You\'re correct!');
    score++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Hopefully by the end of this year, that\'ll be true.');
    // console.log('Its ok, you\'re not completely wrong.')
  }
}
q2();

function q3 {

  let answerThree = prompt('Was I in the military?').toLowerCase();
  
  if (answerThree === 'yes' || answerThree === 'y') {
    alert('Yup! 17 years! HOOAH!');
    // console.log('Yup! 17 years! HOOAH!');
    score++;
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('Whomp, whomp! Proudly served.');
    // console.log('Whomp, whomp! Proudly served.')
  }
}

q3();

function q4 {

  let answerFour = prompt('Did I go to medical school?').toLowerCase();
  
  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Sure did! Loved it, unitl question 2 happened.');
    // console.log('Sure did! Loved it, until question 2 happened.');
    score++;
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('I sure did! Let me check your blood sugar.');
    // console.log('Let me check your blood sugar.');
  }
}
q4();


function q5 {

  let answerFive = prompt('Do I have children?').toLowerCase();
  
  if (answerFive === 'yes' || answerFive === 'y') {
    alert('A boy and a girl...teenagers!');
    // console.log('A boy and a girl...teenagers!');
    score++;
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('Yeah I do!');
    // console.log('Yeah I do!');
  }
}
q5();

function q6 {

  let answerSix = prompt('Are you ready for more?').toLowerCase();
  
  if (answerSix === 'yes' || answerSix === 'y') {
    alert('Me too!');
    // console.log('Me too!');
    score++;
  } else if (answerSix === 'no' || answerSix === 'n') {
    alert('Come on! This fun!');
    // console.log('Come on! This fun!)
  }
}

q6();


function q7 {
  for (let i = 0; i < 4; i++) {
  let answerSeven = prompt('How old do you think I am?').toLowerCase();

  if (answerSeven == 41) {
    alert('That\'s right!');
    // console.log('That\'s right!');
    score++;
    {break;}
  } else if (answerSeven > 41) {
    alert('Too high!');
    // console.log('Too high!');
  } else if (answerSeven < 41) {
    alert('Too low!');
    // console.log('Too low!');
  }
}
alert('I\'m 41 years young!');
}
q7();



function q8 {
let myArr = ['mexican', 'steak', 'chinese'];
for (let i = 0; i < 6; i++) {
  let answerEight = prompt('What is my favorite food?').toLowerCase();
  for(let j = 0; j < myArr.length; j++)

    if (answerEight === myArr[j]) {
      alert('That\'s right!');
      // console.log('That\'s right!');
      score++;
      i=6
      {break};
    }
}
alert(`My favorite foods are ${myArr}.`)
// console.log(`My favorite foods are ${myArr}.`);
alert(`Your score is ${score}.`);
// console.log(score);
}
q8();


