import Game from "./game.js"

import GameView from "./gameview.js"

let g = new Game();
let gameview = new GameView();

document.querySelector(".restart")
.addEventListener("click", () => {
    console.log("New game");
    onRestart();
})

let tiles=document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        console.log('Tile Clicked!');
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){

    // make a move
    g.makeMove(i);
    //update board
    gameview.updateBoard(g);
    // change turn in makeMove

} 

function onRestart() {
    g = new Game();
    gameview.updateBoard(g);
}
gameview.updateBoard(g);