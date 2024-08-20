function createPlayerBoard(){
    let playerBoard = document.getElementById('player-board');
    for(let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `playerCell${i}`;
        playerBoard.appendChild(cell);
    }
}

function createEnemyBoard(){
    let enemyBoard = document.getElementById('enemy-board');
    for(let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `enemyCell${i}`;
        enemyBoard.appendChild(cell); 
    }
}

export { createEnemyBoard, createPlayerBoard };
