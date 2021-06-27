export default class GameView {


    constructor(){
        console.log("init gameview")
    }

    updateBoard(g){
        this.updateturn(g);
        const winningCombination = g.findWinningCombinations();
        console.log("This is the board within gameview")
        console.log(g.board)
        for(let i = 0; i<g.board.length; i++) {

            const tile=document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("tile-winner"); 

            let tileType = g.board[i] == 'X' ? "tile-x" : "tile-o";

            tile.innerHTML = `<span class='${tileType}'>${g.board[i] ? g.board[i] : ''}</span>`

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }

    updateturn(g){
        let playerX = document.querySelector(".player-x");
        let playerO = document.querySelector(".player-o");
        playerX.classList.remove("active");
        playerO.classList.remove("active");
        
        if(g.turn == 'X') {
            playerX.classList.add('active');

        } else {
            playerO.classList.add('active');
        }
    }
   
    
}