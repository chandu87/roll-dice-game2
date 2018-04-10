console.log("roll dice console");

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

console.log(dice);

document.querySelector("img").src="dice-"+6+".png";
document.querySelector(".player-0-panel").className += " active"; 


$(".btn-roll").click(function(){
    dice = Math.floor(Math.random()*6)+1;
    document.querySelector("img").src="dice-"+dice+".png";
    if(dice !== 1){
    roundScore+=dice;
    document.querySelector("#current-"+activePlayer).innerHTML=roundScore;
   }
   else{
    document.querySelector("#current-"+activePlayer).innerHTML=0;
    roundScore=0;
    document.querySelector(".player-"+ activePlayer +"-panel").className = "player-"+ activePlayer +"-panel";    
    if(activePlayer){
        activePlayer = 0;
        document.querySelector(".player-0-panel").className += " active";
    }
    else{
        activePlayer = 1;
        document.querySelector(".player-1-panel").className += " active"; 
    }
   }
});
$(".btn-hold").click(function(){
    scores[activePlayer] += roundScore; 
    document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];
    roundScore = 0;
    document.querySelector("#current-"+activePlayer).innerHTML = 0;
    document.querySelector(".player-"+ activePlayer +"-panel").className = "player-"+ activePlayer +"-panel";
    if(activePlayer){
        activePlayer = 0;    
        document.querySelector(".player-0-panel").className += " active";
    }
    else{
        activePlayer = 1;
        document.querySelector(".player-1-panel").className += " active"; 
    }

});

