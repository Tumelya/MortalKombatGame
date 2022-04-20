console.log(document);

//Player 1
const player1 = {
    name: 'Liukang',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: 'sword',
    attack: function () {
        console.log(player1.name + ' ' + 'Fight...');
    }
};
player1.attack();

//Player 2
const player2 = {
    name: 'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: 'fan',
    attack: function () {
        console.log(player2.name + ' ' + 'Fight...');
    }
};
player2.attack();

function createPlayer (playerN, player) {
    
    const $div = document.createElement('div');
    $div.classList.add(playerN);
    const $root = document.querySelector('.root');
    $root.appendChild($div);
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($div);

    const $div1 = document.createElement('div');
    $div1.classList.add('progressbar');
    $div.appendChild($div1);

    const $div11 = document.createElement('div');
    $div11.classList.add('life');
    $div1.appendChild($div11);
    $div11.style.width = player.hp + '%';

    const $div12 = document.createElement('div');
    $div12.innerText = player.name;
    $div12.classList.add('name');
    $div1.appendChild($div12);

    const $div2 = document.createElement('div');
    $div2.classList.add('character');
    $div.appendChild($div2);
    const $img = document.createElement('img');
    $div2.appendChild($img);
    $img.src = player.img;

};
//createPlayer ();

createPlayer('player1', player1);
createPlayer('player2', player2);