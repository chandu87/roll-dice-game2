console.log("roll dice console");

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

console.log(dice);

// not displaying dice when you open game
document.querySelector("img").style.display = 'none';

//default make player 1 active
document.querySelector(".player-0-panel").className += " active"; 


document.querySelector(".btn-roll").addEventListener('click',function(){
    dice = Math.floor(Math.random()*6)+1;
    document.querySelector("img").style.display = 'block';
    document.querySelector("img").src="dice-"+dice+".png";
    if(dice !== 1){
    roundScore += dice;
    document.querySelector("#current-"+activePlayer).innerHTML =  roundScore;
   }
   else{
    changePlayer();
   } 
});

document.querySelector(".btn-hold").addEventListener('click',function(){
    scores[activePlayer] += roundScore; 
    document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];
    changePlayer();
    document.querySelector("img").style.display = 'none';
});

function changePlayer(){
    roundScore=0;
    document.querySelector("#current-"+activePlayer).innerHTML=0;
    document.querySelector(".player-"+ activePlayer +"-panel").classList.remove("active");    
    activePlayer = activePlayer === 0 ? 1 : 0 ; 
    document.querySelector(".player-"+ activePlayer + "-panel").classList.add("active");

}
