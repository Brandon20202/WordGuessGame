var wordguess=["Jordan", "Ashley", "Leon", "Amanda", "Sharon", "Leslie", "Deon", "Larry", "Abigail", 
"Brandon", "Brooke", "Charles", "Franklin", 
"George", "Henry", "Issac", "Julie", "Manny", "Norman", "Pam"];

var lives=20;
var wins=0;
var answer=[];
var displayword=[];
var chancesRight=[];
var loss=0;
//choose a word at random
function chooseword(){
    var word= Math.floor(Math.random() * wordguess.length);
    var key=word.wordguess;
    return key;
}

//function to make the blanks
function blanks (){
    for (var i=0; i <wordguess.length; i++){
        var result = "_";
        result++;
        
    }

    document.getElementById("current-word-div").innerHTML= result;
}
//function to restart the game
function reset(){
    lives=20;
    wins=0;
    loss=0;
    displayword=[];
    chancesRight=[];
    document.getElementById("letters-guessed-div").innerHTML="";
}
//when the page starts up this will load
window.onload = function(){
    var life = document.getElementById("lives-remaining-div");
    life.innerHTML=lives;

   
    
    blanks();
//if you out of life you lose
    if(life<=0){
        alert("you lose");
    }
    //when the user presses a key and is out of lives, he lose and play again
    document.onkeyup=function(event){
        if (life <=0){

            var newlife= confirm("You lose Play Again?");
            if(newlife !== true){
                return false;
            }
            else{
                loss++
                document.getElementById("loss-div").innerHTML=loss
                reset();
                blanks();
            }
        }
        //stores the user guess
        var userGuess=event.key;
        //checks to see if word is chosen already
        if(chancesRight.includes(userGuess)){
            alert("This letter has already been used");


        }
      
        var letterRight=wordguess.indexOf(userGuess);
        //decrease the lives if you answer wrong and adds it to html
        if(letterRight < 0){
            lives--;
            document.getElementById("letters-guessed-div").innerHTML +=userGuess;
            document.getElementById("lives-remaining-div").innerHTML=lives;

        }
        //if you out of life you lose
        if(life<=0){
            alert("you lose");
            reset();
    }
        if(lives==0){
            alert=("game over!");
            reset();

        }
        // go through a loop , it checks to see if the letter the user guess is in the word that was chosen at random or not
        else{
            chancesRight.push(userGuess);
            wins++;
            for( var i = 0; i<word.length; i++){
                if(word.charAt(i) === userGuess){
                    displayword+=(wordguess);
                    document.getElementById("current-word-div").innerHTML=displayword;
                }
                else if(word.charAt(i) !== userGuess){
                    displayword+="_";
                    document.getElementById("current-word-div").innerHTML=displayword;
                
                

               
                }
            }

        }
    } 
}