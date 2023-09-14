var td = document.getElementsByTagName('td');
var table = document.getElementById('table');
var Heading = document.getElementsByTagName('h1')[0];

let dr = 0;
let i = 0;
let stone,oRank=0,xRank=0;
if (i == 0) {
    stone = 'X';
}


table.addEventListener('click', event => {
    
    dr++;
    if (event.target == td[0] || event.target == td[1] || event.target == td[2] ||
        event.target == td[3] || event.target == td[4] || event.target == td[5] ||
        event.target == td[6] || event.target == td[7] || event.target == td[8]) {
        if (i % 2 == 0)
            stone = 'X';
        else
            stone = 'O';
        event.target.textContent = stone;
    }
    i++;
    win();
    if (win() == 1) {
        restart();
        whoWin();
        dr = 0;
        setTimeout(function(){
            whoBeginFirst();
        },3000);
        
    }
    if (dr == 9) {
        dr = 0;
        GameOver();
        setTimeout(function(){
            restart();
        },3000);
        
        whoBeginFirst();
    }

})

function GameOver() {
    for (var j = 0; j < 9; j++) {
        td[j].className = 'GameOver';
    }
    Heading.innerText = 'DRAW';
    //Heading.setAttribute('style', 'background-color:black; color:white;');
    Heading.style.backgroundColor = 'black';
    Heading.style.color = 'rgb(86, 2, 79)';
}

function win() {
    if (td[0].textContent == td[4].textContent && td[4].textContent == td[8].textContent && td[8].textContent == 'X' ||
        td[0].textContent == td[4].textContent && td[4].textContent == td[8].textContent && td[8].textContent == 'O') {
        td[0].className = 'win';
        td[4].className = 'win';
        td[8].className = 'win';
        return 1;
    }
    if (td[2].textContent == td[4].textContent && td[4].textContent == td[6].textContent && td[6].textContent == 'X' ||
        td[2].textContent == td[4].textContent && td[4].textContent == td[6].textContent && td[6].textContent == 'O') {
        td[2].className = 'win';
        td[4].className = 'win';
        td[6].className = 'win';
        return 1;
    }
    if (td[0].textContent == td[1].textContent && td[1].textContent == td[2].textContent && td[2].textContent == 'X' ||
        td[0].textContent == td[1].textContent && td[1].textContent == td[2].textContent && td[2].textContent == 'O') {
        td[0].className = 'win';
        td[1].className = 'win';
        td[2].className = 'win';
        return 1;
    }
    if (td[3].textContent == td[4].textContent && td[4].textContent == td[5].textContent && td[5].textContent == 'X' ||
        td[3].textContent == td[4].textContent && td[4].textContent == td[5].textContent && td[5].textContent == 'O') {
        td[3].className = 'win';
        td[4].className = 'win';
        td[5].className = 'win';
        return 1;
    }
    if (td[6].textContent == td[7].textContent && td[7].textContent == td[8].textContent && td[8].textContent == 'X' ||
        td[6].textContent == td[7].textContent && td[7].textContent == td[8].textContent && td[8].textContent == 'O') {
        td[6].className = 'win';
        td[7].className = 'win';
        td[8].className = 'win';
        return 1;
    }
    if (td[0].textContent == td[3].textContent && td[3].textContent == td[6].textContent && td[6].textContent == 'X' ||
        td[0].textContent == td[3].textContent && td[3].textContent == td[6].textContent && td[6].textContent == 'O') {
        td[0].className = 'win';
        td[3].className = 'win';
        td[6].className = 'win';
        return 1;
    }
    if (td[1].textContent == td[4].textContent && td[4].textContent == td[7].textContent && td[7].textContent == 'X' ||
        td[1].textContent == td[4].textContent && td[4].textContent == td[7].textContent && td[7].textContent == 'O') {
        td[1].className = 'win';
        td[4].className = 'win';
        td[7].className = 'win';
        return 1;
    }
    if (td[2].textContent == td[5].textContent && td[5].textContent == td[8].textContent && td[8].textContent == 'X' ||
        td[2].textContent == td[5].textContent && td[5].textContent == td[8].textContent && td[8].textContent == 'O') {
        td[2].className = 'win';
        td[5].className = 'win';
        td[8].className = 'win';
        return 1;
    }
    return 0;
}

function restart() {
    setTimeout(function () {
        for (var j = 0; j < 9; j++) {
            td[j].className = 'hoverr';
        }
        for (var j = 0; j < 9; j++) {
            td[j].innerText = '';
        }
        Heading.innerText = 'Tic Tac Toe';
        Heading.style.backgroundColor = 'orange';
    }, 2000);
}


function whoWin() {
    var theWinner;
    for (let k = 0; k < 9; k++) {
        if (td[k].className == 'win')
            theWinner = td[k].textContent;
    }
    if (theWinner != undefined) {
        Heading.innerText = 'The winner is ' + theWinner + '...';
    }

}

function whoBeginFirst() {
    if (i % 2 == 0 && dr == 0)
        Heading.textContent = 'X first';
    else if (i % 2 != 0 && dr == 0)
        Heading.textContent = 'O first';
    setTimeout(function () {
        Heading.textContent = 'Tic Tac Toe';
    }, 3000);

}

