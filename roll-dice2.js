//variable initialization
var scores, roundScore, activePlayer, dice1, dice2, gameScore;

//function call to initialize game with default values
initGame();

//eventlistener for roll button
document.querySelector(".btn-roll").addEventListener('click',function(){
    if(scores[activePlayer] < gameScore){
        dice1 = Math.floor(Math.random()*6)+1;
        dice2 = Math.floor(Math.random()*6)+1;
        document.querySelector(".dice").style.display = 'block';
        document.querySelector(".dice2").style.display = 'block';
        document.querySelector(".dice").src = "images/dice-" + dice1 + ".png";
        document.querySelector(".dice2").src = "images/dice-" + dice2 + ".png";

        //when user get 6 number on both dice , total score becomes 0
        if(dice1 === 6 && dice2 === 6){
            scores[activePlayer] = 0;
            document.querySelector("#score-"+activePlayer).innerHTML =  0;
            changePlayer();
        }
        else if((dice1 !== 1) && (dice2 !==1)){
        roundScore += (dice1 + dice2);
        document.querySelector("#current-"+activePlayer).innerHTML =  roundScore;
        }
         //when player get number one on any one dice his current score becomes 0 and turn 
         //changes to other player
        else{
        changePlayer();
        }
    }
});

//event listener for hold button
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(scores[activePlayer] < gameScore){
        document.querySelector(".dice").style.display = 'none';
        document.querySelector(".dice2").style.display = 'none';
        scores[activePlayer] += roundScore; 
        document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];
        
        //user can add their wished winning score
        var inputValue = Number(document.querySelector("input").value);
        if(inputValue){
            gameScore = inputValue;
        }else{
            gameScore = 100;
        }
        if(scores[activePlayer] >= gameScore){
            document.querySelector("#name-"+activePlayer).innerHTML = "Winner!";
            document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-"+ activePlayer + "-panel").classList.toggle("active");
        }
        else{
            changePlayer();
        }
    }
});

//new game button where reset is done
document.querySelector(".btn-new").addEventListener('click',initGame);

//function for changing players turn
function changePlayer(){
    roundScore=0;
    document.querySelector("#current-"+activePlayer).innerHTML = 0;
    document.querySelector(".player-"+ activePlayer +"-panel").classList.toggle("active");    
    activePlayer = activePlayer === 0 ? 1 : 0 ; 
    document.querySelector(".player-"+ activePlayer + "-panel").classList.toggle("active");

}

//function for initializing game or reseting all values
function initGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameScore = 100;    
    
    // not displaying dice when you open game
    document.querySelector(".dice").style.display = 'none';
    document.querySelector(".dice2").style.display = 'none';
    
    document.querySelector("#score-0").innerHTML = 0;
    document.querySelector("#score-1").innerHTML = 0;
    document.querySelector("#current-0").innerHTML = 0;
    document.querySelector("#current-1").innerHTML = 0;
    
    document.querySelector("#name-0").innerHTML = "PLAYER 1";
    document.querySelector("#name-1").innerHTML = "PLAYER 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");     

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active"); 
    //default make player 1 active
    document.querySelector(".player-0-panel").classList.add("active");  

    
    }
