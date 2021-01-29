let door1 = document.getElementById('door1');
let door2 = document.getElementById('door2');
let door3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let botDoorPath =  'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let stillPlaying = true;
let numClosedDoors = 3;
let openDoor1 ;
let openDoor2 ;
let openDoor3 ;

function isBot(door) {
  if (door.src === botDoorPath) {return true;}
  else { return false;}
}

  
function isClicked(door) {
if(door.src !== closedDoorPath){return true;} 
else{return false;}
}

function gameOver(status){
  if(status === 'win') {startButton.innerHTML = 'You win! Play Again?';}  
else {startButton.innerHTML = 'Game over! Play Again?';}
stillPlaying = false;
}

function playDoor(door) {
  numClosedDoors--;
 if (numClosedDoors === 0) {gameOver('win');
 }
  else if  (isBot(door)) {gameOver();}
}

function randomChoreDoorGenerator()
{const choreDoor = Math.floor(Math.random()*numClosedDoors);
if(choreDoor === 0){
  openDoor1 = botDoorPath;
  openDoor2 = spaceDoorPath;
  openDoor3 = beachDoorPath;}
else if(choreDoor === 1){
  openDoor2 = botDoorPath;
  openDoor1 = spaceDoorPath;
  openDoor3 = beachDoorPath;}
else if (choreDoor === 2){
  openDoor3 = botDoorPath;
  openDoor2 = spaceDoorPath;
  openDoor1 = beachDoorPath;}
}

door1.onclick = () => {
   if (isClicked(door1)===false && stillPlaying)
   {door1.src = openDoor1; playDoor(door1);}
}
   
door2.onclick = () => {
 if (isClicked(door2)===false && stillPlaying)
  {door2.src = openDoor2; playDoor(door2);}
}
door3.onclick = () => {
if (isClicked(door3)===false && stillPlaying)
 {door3.src = openDoor3; playDoor(door3);}
}



startButton.onclick = () => {
if (!stillPlaying){
  startRound();
}
}


function startRound() {
  door1.src = closedDoorPath;
   door2.src = closedDoorPath; 
   door3.src = closedDoorPath;
   numClosedDoors = 3;
   stillPlaying = true;
   startButton.innerHTML = 'Good Luck!';
     
   randomChoreDoorGenerator();
}

 
startRound();






