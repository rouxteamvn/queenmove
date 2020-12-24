const a = [];
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const solution = [];
let count = 0;
let num = 0;
let noti = document.getElementById("noti");
let btn = document.getElementById("myButton");
let nextBtn = document.getElementById("nextButton");

function getSize() {
  let size = prompt("Let input the size of the board!");
  return parseInt(size);
}

let size = getSize();
let queenMove = new QueenMove(size);

window.onload = () => {
  queenMove.drawBoard();
  
  if(size < 3 && size != 1) {
    noti.innerHTML = "There is no solution!";
  } else {
    //let move
    queenMove.move(1);
    
    // click button
    btn.onclick = (e) => {
      let cond = num != 0 ? --num : num;
      queenMove.drawBoard();
      queenMove.drawChess(cond);
      btn.innerHTML = "Back";
      noti.innerHTML = `There ${size == 1? "is "  : "are "} ${count} solution${size == 1?"!":"s!"}`;
    };
    
    nextBtn.onclick = (e) => {
      if (num < count - 1) {
        queenMove.drawBoard();
        queenMove.drawChess(++num);
      }
    };
  }
};