function myPlay() {
  
  //  placing bet with validation

   var bet = prompt("Please enter your starting bet");
   bet = parseInt(bet);
 
   
        if (isNaN(bet) || bet == null){ 
         console.log("Invalid bet");
         alert("Please enter a number!");
         document.getElementById("bet").innerHTML = "";
         document.getElementById("tableBet").innerHTML = "";
   
   
     } else{
         if(bet <= 0){ 
             console.log("Invalid bet")
             alert("Number must be greater than 0!");
             document.getElementById("bet").innerHTML = "";
             document.getElementById("tableBet").innerHTML = "";
   
   
         } else{
             console.log("Lets Play!")
             document.getElementById("bet").innerHTML = "$" + bet +".00" ;
             document.getElementById("tableBet").innerHTML = "$" + bet + ".00";
         }
     }
                      
  //   dice game intialized

   var rollDice = 0;
   var gameMoney = bet;

   var maxAmount = 0;
   var rollMax= 0;

   
     while (gameMoney > 0)  {
       rollDice++;

       var diceOne = Math.floor(Math.random() * 6) + 1;
       console.log("You rolled " + diceOne);

       var diceTwo = Math.floor(Math.random() * 6) + 1;
       console.log("You also rolled " + diceTwo)
       
       var diceTotal = diceOne + diceTwo;
      
     
       if (diceTotal == 7) {
         gameMoney = gameMoney += 4;
         console.log( rollDice + ":  you rolled a total of " + diceTotal + ", You win $4! you have $" + gameMoney +".00");


       } else {
         gameMoney = gameMoney -= 1;
         console.log( rollDice + ":  you rolled a total of " + diceTotal + ", You lost  $1. you have $" + gameMoney +".00 left");
       } 

// captured max amount won and dice roll

          if(gameMoney > maxAmount){
           maxAmount = gameMoney;
           rollMax = rollDice;
           console.log(maxAmount)
           console.log(rollDice);
         }   
  
  


      }

     
     document.getElementById("highest").innerHTML = "$" + maxAmount + ".00";
     document.getElementById("roll").innerHTML = rollMax;
     document.getElementById("broke").innerHTML = rollDice;

   

   }
           
           
