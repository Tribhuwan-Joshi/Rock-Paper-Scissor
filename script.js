
/* Return a random choice */
function computerPlay(){
    let res = ["Rock" , "Paper" , "Scissors"];
    let indx = Math.floor(Math.random()*3);
    return res[indx];
}


/* Simulate a single round of Rock Paper Scissors */

function playRound(playerSelection , computerSelection){
    if(playerSelection===computerSelection.toLowerCase()){
        return `Draw !`;
    }
    else if(playerSelection==="rock" && computerSelection==="Paper"){
        return "Computer Win !";
    }
    else if(playerSelection==="paper" && computerSelection==="Rock"){
        return `You Win !`;
    }

    else if(playerSelection==="paper" && computerSelection==="Scissors"){
        return "Computer Win !";
    }

    else if(playerSelection==="scissors" && computerSelection==="Paper"){
        return `You Win !`;
    }
    else if(playerSelection==="scissors" && computerSelection==="Rock"){
        return `Computer Win !`;
    }
    else if(playerSelection==="rock" && computerSelection==="Scissors"){
        return `You Win !`;
    }
}




let yourPoints = 0;
let computerPoints = 0;


const buttons = document.querySelectorAll('button');
const youChoose = document.querySelector('.you');
const compChoose = document.querySelector(".computer");
const win = document.querySelector(".win");

const compPoint = document.querySelector(".computer-points");
const yourPoint = document.querySelector(".your-points");

const winner = document.querySelector(".winner");


function gameEnd(){
    let whoWin = (computerPoints>yourPoints)?"Computer":
    (yourPoints>computerPoints)?"You":"It's a Draw !";
    
   
    winner.textContent+=whoWin;

    
    

   
    computerPoints = yourPoints = 0;
    
    

}

/* Add script to manipulate DOM */

function addText(e){

      
    youChoose.textContent = "You Choose - ";
    compChoose.textContent = "Computer Choose - ";
    compChoice = computerPlay();
    
    youChoose.textContent+=e.target.textContent;
    compChoose.textContent+=compChoice;
    let result = playRound(e.target.className,compChoice);

    if(result.includes("You")) yourPoints++;
    else if (result.includes("Computer")) computerPoints++;


    
winner.textContent = "Round Winner - "
    compPoint.textContent = "Computer Points - ";
    yourPoint.textContent = "Your Points - ";
    compPoint.textContent+=computerPoints;
    yourPoint.textContent +=yourPoints;

 

    win.textContent = result;
    if(computerPoints===5 || yourPoints===5) gameEnd();

     
   

}






/* add event listener to every button */

buttons.forEach(button => button.addEventListener('click',addText));

