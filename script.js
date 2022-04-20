
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

/* Game function will call playRound function and simulate the game 5 times */
// function game(){
//     let playerPoints = computerPoints = 0;
//     for(let i =0 ; i<5; i++){
//         const computerSelection = computerPlay();
//         // let playerSelection = prompt("rock or paper or scissors ?");
//         playerSelection=playerSelection.toLowerCase();
//         if(playerSelection==="rock" || playerSelection==="scissors" || playerSelection==="paper"){
//             console.log(`You choose ${playerSelection} and Computer choose ${computerSelection}`);
//             let res = playRound(playerSelection,computerSelection);
//             console.log(res);

//             if(res.includes("Win"))playerPoints++ ;
//             else if(res.includes("Lose")) computerPoints++;
            

//         }
//         else{
//         console.log("Please make a valid choice");
//         }
        
//     }
//     console.log("player points ", playerPoints, "computer points " ,computerPoints);
//     (computerPoints>playerPoints)?console.log("Computer win the Game :( "):
//     (playerPoints>computerPoints)?console.log("You win the Game :) "):
//     console.log("Its a draw.");

// }

// game();


let rounds = 0;
let yourPoints = 0;
let computerPoints = 0;


const buttons = document.querySelectorAll('button');
const youChoose = document.querySelector('.you');
const compChoose = document.querySelector(".computer");
const win = document.querySelector(".win");
console.log(youChoose.textContent)

function addText(e){
    youChoose.textContent = "You Choose - ";
    compChoose.textContent = "Computer Choose - ";
    compChoice = computerPlay();
    
    youChoose.textContent+=e.target.textContent;
    compChoose.textContent+=compChoice;
    let result = playRound(e.target.className,compChoice);
    win.textContent = result;
   

}







buttons.forEach(button => button.addEventListener('click',addText));

