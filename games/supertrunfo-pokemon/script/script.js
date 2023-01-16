const cards = [
    {
        nome: 'Charizard',
        atributos: {
            ataque: 10,
            defesa: 5,
            magia: 5,
        }
    },
    {
        nome: 'Lapras',
        atributos: {
            ataque: 8,
            defesa: 6,
            magia: 6
        }
    },
    {
        nome: 'Greninja',
        atributos: {
            ataque: 4,
            defesa: 6,
            magia: 10
        }
    },
    {
        nome: 'Vaporeon',
        atributos: {
            ataque: 6,
            defesa: 6,
            magia: 8
        }
    },
    {
        nome: 'Arcanine',
        atributos: {
            ataque: 10,
            defesa: 5,
            magia: 5
        }
    },
    {
        nome: 'MewTwo',
        atributos: {
            ataque: 6,
            defesa: 4,
            magia: 10
        }
    },
    {
        nome: 'Scyther',
        atributos: {
            ataque: 8,
            defesa: 6,
            magia: 5
        }
    },
    {
        nome: 'Gengar',
        atributos: {
            ataque: 3,
            defesa: 7,
            magia: 10
        }
    },
    {
        nome: 'Alakazan',
        atributos: {
            ataque: 2,
            defesa: 8,
            magia: 10
        }
    },
    {
        nome: 'Dragonite',
        atributos: {
            ataque: 8,
            defesa: 4,
            magia: 8
        }
    }
]

let playerCard;
let botCard;
let counter = 0;

function sortCard() {
    const pokemonSort = document.getElementById('pokemonSorteado');
    const botPokemonSort = document.getElementById('pokemonBotSorteado');
    let playerCardNum = parseInt(Math.random() * cards.length);
    let botCardNum = parseInt(Math.random() * cards.length);
    playerCard = cards[playerCardNum];
    botCard = cards[botCardNum];

    while (playerCardNum === botCardNum) playerCardNum = parseInt(Math.random() * cards.length);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    pokemonSort.style.display = 'flex';
    botPokemonSort.style.display = 'flex';
    pokemonSort.innerHTML = `O seu Pokemon Sorteado é: ${playerCard['nome']}`;
    botPokemonSort.innerHTML = `O seu adversário é: ${botCard['nome']}`;

    showAtributes();
}

function showAtributes() {
    const options = document.getElementById('opcoes');
    const indAtribute = document.getElementById('align');
    let txtOptions = '';
    indAtribute.innerHTML = 'Escolha o seu atributo';
    for (let atributo in playerCard.atributos) {
        txtOptions += '<input type="radio" checked id="teste" name="atributo" value="' + atributo + '">' + atributo + ' ' + playerCard.atributos[atributo];
        options.innerHTML = txtOptions;
    }
}

function atributeSelection() {
    let radioAtributes = document.getElementsByName('atributo');
    for (let i = 0; i < radioAtributes.length; i++) {
        if (radioAtributes[i].checked == true) return radioAtributes[i].value;
    }
}


function play() {
    const atributeSelected = atributeSelection();
    const res = document.getElementById('resultado');

    const btnReset = document.getElementById('reiniciar');
    const apagar = document.getElementById('apagar');

    const botAtributes = document.getElementById('atributosOponente');
    const playerCardValue = playerCard.atributos[atributeSelected];
    const botCardValue = botCard.atributos[atributeSelected];

    const victories = document.getElementById('numTentativas');

    botAtributes.innerHTML = 'Os atributos do seu oponente eram: </br>';
    botAtributes.innerHTML += `Ataque ${botCard.atributos['ataque']} </br>`;
    botAtributes.innerHTML += `Defesa ${botCard.atributos['defesa']} </br>`;
    botAtributes.innerHTML += `Magia ${botCard.atributos['magia']} </br>`;

    if (playerCardValue > botCardValue) {
        ++counter;
        res.innerHTML = 'Você venceu!';
        victories.innerHTML = counter;
    } else if (playerCardValue == botCardValue) {
        res.innerHTML = 'Você empatou!';
    } else {
        --counter;
        res.innerHTML = 'Você perdeu!';
        victories.innerHTML = counter;
    }

    if (counter == 10) {
        res.innerHTML = 'Parabéns!';
        apagar.style.display = 'none';
        btnReset.style.display = 'none';
        victories.style.display = 'none';
    }

    res.style.color = 'white';
    res.style.fontSize = '4rem';
    res.style.display = 'block';
    if (res.style.display == 'block') {
        apagar.style.display = 'none';
        btnReset.style.display = 'block';
    }
}

function reset() {
    const atributeSelected = atributeSelection();
    const btnReset = document.getElementById('reiniciar');

    const pokemonSort = document.getElementById('pokemonSorteado');
    const botPokemonSort = document.getElementById('pokemonBotSorteado');

    const res = document.getElementById('resultado');
    const apagar = document.getElementById('apagar');

    let playerCardNum = parseInt(Math.random() * 10);
    let botCardNum = parseInt(Math.random() * 10);

    if (playerCardNum === botCardNum) playerCardNum = parseInt(Math.random() * cards.length);

    playerCard = cards[playerCardNum];

    botCard = cards[botCardNum];

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    pokemonSort.innerHTML = `O seu Pokemon sorteado é: ${playerCard['nome']}`;
    botPokemonSort.innerHTML = `O seu adversário é: ${botCard['nome']}`;
    let playerCardValue = playerCard.atributos[atributeSelected];
    let botCardValue = botCard.atributos[atributeSelected];

    playerCardValue = '';
    botCardValue = '';
    apagar.style.display = 'block';
    btnReset.style.display = 'none';
    res.style.display = 'none';

    showAtributes();
}
