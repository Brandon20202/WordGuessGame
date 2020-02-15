var wordguess=["Jordan", "Ashley", "Leon", "Amanda", "Sharon", "Leslie", "Deon", "Larry", "Abigail", 
"Brandon", "Brooke", "Charles", "Franklin", 
"George", "Henry", "Issac", "Julie", "Manny", "Norman", "Pam"];

var lives=12;
var wins=0;
var answer=[];
var displayword=[];
var chancesRight=[];
var loss=0;
//choose random words from array
function chooseword(){
    var word= wordguess[Math.floor(Math.random() * words.length)];
    return word;
}

//gives blanks for each word
function blanks (word){
    for (var i=0; i <word.length; i++){
        var result = "_";
        result++;
        
    }

    document.getElementById("current-word-div").innerHTML= result;
    return result;
}

function reset(){
    lives=12;
    wins=0;
    loss=0;
    displayword=[];
    chancesRight=[];
    var answer=[];
    document.getElementById("letters-guessed-div").innerHTML="";
}

window.onload = function(){
    var life = document.getElementById("lives-remaining-div");
    life.innerHTML=lives;

    //use the choose word function to save random word
    var solve= this.chooseword();
    //run blanks
    this.blanks(solve);

    if(life<=0){
        alert("you lose");
    }

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
                blanks(word);
            }
        }

        var userGuess=event.key;

        if(attempts.includes(userGuess)){

        }
    } 
}