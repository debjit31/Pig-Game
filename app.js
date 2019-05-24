var scores, roundScore = 0, activePlayer, gamePlaying ;
// Initialize the game
gameInitialization();

document.querySelector('.btn-roll').addEventListener('click',function() {     // Anonymous function and EventListener on Button Click
    
    
    if (gamePlaying) {  

        //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the Result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.Update RoundScore
    if (dice !== 1) {
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        // Next Player
        scores[activePlayer] += roundScore;
        console.log(scores);
        document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 

            gamePlaying = false;
        }
        else {
            nextPlayer();
        }  
   }
}
   
});   

document.querySelector('.btn-hold').addEventListener('click' , function() {

    if (gamePlaying) {

        scores[activePlayer] += roundScore;
        console.log(scores);
    document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
        gamePlaying = false;
    }
    else {
        nextPlayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click', gameInitialization);

function nextPlayer() {

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

             
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    
}

function gameInitialization() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}































