console.log("roll dice console");

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

console.log(dice);

document.getElementById("score-0").innerHTML = scores[0];
document.querySelector("#score-1").innerHTML= scores[1];
document.querySelector("img").src="dice-"+6+".png";

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
    if(activePlayer){
        activePlayer = 0;
    }
    else{
        activePlayer = 1;
    }
   }
});
