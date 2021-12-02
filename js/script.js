//primo giorno: fare la parte grafica
//secondo giorno: fare la parte javascript
const play = document.querySelector('.play');
const grid = document.getElementById('grid');
const select = document.getElementById ('level');
let numin = 1;
let numax = 100;

//cambio di livello

select.addEventListener('change', function(){
    console.log('inizio gioco');
    let level = select.value;
    console.log('scelta livello', level);

    changelvl(level, numax);
});

//in base al livello scelgo il numero di celle

function changelvl(lvl, numCells) {
    if (lvl == 1) {
        numCells = 49;
    }
    else if (lvl == 2) {
        numCells = 81;
    }
    else {
        numCells == 100;
    }
    console.log(numCells);
    return numCells;
}