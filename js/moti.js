const compliment = ["You are beautiful.", "You look great today.", "You're a smart cookie.", 
"I like your style.","I appreciate you.","You are the best!", "You are awesome!", 
"You light up the room.", "You should be proud of yourself.", "You’ve got all the right moves!",
"You are brave.","You’re like sunshine on a rainy day.","You bring out the best in other people.",
"That color is perfect on you.", "You’re one of a kind!", "You’re inspiring.", "Your hair looks stunning.",
"You have the best ideas."];

const getRandomNum = (max) => Math.floor(Math.random() * max);

const getRandomC = () => 
  `${compliment[getRandomNum(compliment.length)]}`;

const setRandomC = () => {
  document.getElementById('randomGenerator').innerText = getRandomC();
}

document.getElementById('btn-r')
  .addEventListener('click', setRandomC);

setRandomC();