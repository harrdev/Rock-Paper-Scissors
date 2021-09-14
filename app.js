const computer = {
    currentPick: null
 };
 const player = {
    currentPick: null
 }; 
 
 // for optional scoreboard
 // let playerScore = 0;
 // let computerScore = 0;
 // let tieScore = 0;
  
 const choices = ["Lapis", "Papyrus", "Scalpellus"];
 
 //Results functions
 function compWins() {
   document.querySelector(".results").innerText = `Computer wins! Computer chose ${computer.currentPick} and you chose ${player.currentPick}.`;
 }
 
 function playerWins() { 
   document.querySelector(".results").innerText = `Player Wins! Computer chose ${computer.currentPick} and you chose ${player.currentPick}.`;
 }
 
 function tie() { 
   document.querySelector(".results").innerText = `It's a tie! Computer chose ${computer.currentPick} and you chose ${player.currentPick}`;
 }
 
 //Function for computerChoice
 function computerChoice() {
   const roll = Math.floor(Math.random() * choices.length);
   computer.currentPick = choices[roll];
 }
 
 //Player choice functions
 const rock = document.getElementById("lapis");
 rock.addEventListener("click", function() {
   player.currentPick = choices[0];
   compareChoices();
 })
 const paper = document.getElementById("papyrus");
 paper.addEventListener("click", function() {
   player.currentPick = choices[1];
   compareChoices();
 })
 const scissors = document.getElementById("scalpellus");
 scissors.addEventListener("click", function() {
   player.currentPick = choices[2];
   compareChoices();
 })
     
 //function for comparing player and computer choices
 function compareChoices() {
   computerChoice();
   
 //Tie
 if (computer.currentPick === player.currentPick) {
   tie();
   }
 //Computer rolls rock
   else if (computer.currentPick === choices[0]) {
     if (player.currentPick === choices[1]) { 
       playerWins();
     }else{
       compWins();
     }
 //Computer rolls paper
   }else if (computer.currentPick === choices[1]) {
      if (player.currentPick === choices[2]) { 
        playerWins();
      }else{
        compWins();
    }
 //Computer rolls scissors
   }else if (computer.currentPick === choices[2]) {
      if (player.currentPick === choices[0]) { 
        playerWins();
      }else{
        compWins();
     }
   }
 }