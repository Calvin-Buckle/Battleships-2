import Ship from "./ships";

function runGame() {
  
    const ship1 = new Ship(1, 0, false);
    const ship2 = new Ship(2, 0, false);
    const ship3 = new Ship(3, 0, false);
    const ship4 = new Ship(4, 0, false);
    const ship5 = new Ship(5, 0, false);
    const ships = document.getElementsByClassName('ships')





    
    Array.from(ships).forEach(ship => {
        ship.setAttribute('draggable', true)

        ship.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            ship.style.display = 'none'
        }, 0)
        });
        ship.addEventListener('dragend', () => {
            ship.style.display = 'block'
        })
    })
    

}


export default runGame;