const height = 5;
const width = 5;
let current = null

function resetGame(event){
  current = new Date()
  window.clearInterval(displayTimer)
  window.setInterval(displayTimer, 250)

  const squares = document.querySelectorAll('.lightsout-square')
  for (const square of squares) {
    square.classList.add("js-lightsout-square-on");
  }
  for (let i = 0; i < 15; i++){
    const row = Math.floor(Math.random() * 5) + 1
    const col = Math.floor(Math.random() * 5) + 1

    getSquare(row,col).click()
  }
}

function displayTimer() {
    const startTime = current;
    const currentDate = new Date(new Date() - startTime)
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();



    let htmltimer = document.getElementById('lightsout-timer');

    htmltimer.firstChild.nodeValue = (minutes < 10 ? "0":"") + minutes + ":" +
      (seconds < 10 ? "0":"") + seconds;
}

function setupGrid(){
  const squares = document.querySelectorAll('.lightsout-square');
  for (let i = 0; i < squares.length; i++){
    const row = Math.floor(i / height);
    const col = i % height;
    squares[i].style.gridRowStart = row + 1;
    squares[i].style.gridColumnStart = col + 1;
    squares[i].addEventListener("click", newclick);

  }
}
  //row and col are 1-5
    function getSquare(row, col){
        return document.querySelector(".lightsout-square" + `[style*="grid-row-start: ${row}"]`+ `[style*="grid-column-start: ${col}"]`);
  }
  function getAdjacentSquares(row,col){
    return [
      getSquare(row,col),
      getSquare(row-1,col),
      getSquare(row+1,col),
      getSquare(row,col-1),
      getSquare(row,col+1)
    ].filter((sqr) => sqr !== null)
  }

  function newclick(event){
    let row = parseInt(event.target.style.gridRowStart)
    let col = parseInt(event.target.style.gridColumnStart)


    const squares = getAdjacentSquares(row,col)
    console.log(squares)
    for (const square of squares) {
      square.classList.toggle("js-lightsout-square-on");
    }
    if (isOver()){
      showEndgameScreen()
    }
  }
  function showEndgameScreen(){
    if (isOver()){
      alert("Congrats you won!")
    }
    else{
      //alert("Congrats you won!")
    }
  }

  function isOver(){
    const squares = document.querySelectorAll('.lightsout-square')
    for (const square of squares) {
       if (square.classList.contains("js-lightsout-square-on")){
         return false
       }
    }
    return true
  }

setupGrid();

document.getElementById('lightsout-newgame-btn').addEventListener('click',resetGame);
