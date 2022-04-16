
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
        return `You Lose ! Paper beats Rock`;
    }
    else if(playerSelection==="paper" && computerSelection==="Rock"){
        return `You Win ! Paper beats Rock`;
    }

    else if(playerSelection==="paper" && computerSelection==="Scissors"){
        return `You Lose ! Scissors beats Paper`;
    }

    else if(playerSelection==="scissors" && computerSelection==="Paper"){
        return `You Win ! Scissors beats Paper`;
    }
    else if(playerSelection==="scissors" && computerSelection==="Rock"){
        return `You Lose ! Rock beats Scissors`;
    }
    else if(playerSelection==="rock" && computerSelection==="Scissors"){
        return `You Win ! Rock beats Scissors`;
    }
}

/* Game function will call playRound function and simulate the game 5 times */
function game(){
    let playerPoints = computerPoints = 0;
    for(let i =0 ; i<5; i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt("rock or paper or scissors ?").toLowerCase();
        if(playerSelection==="rock" || playerSelection==="scissors" || playerSelection==="paper"){
            console.log(`You choose ${playerSelection} and Computer choose ${computerSelection}`);
            let res = playRound(playerSelection,computerSelection);
            console.log(res);

            if(res.includes("Win"))playerPoints++ ;
            else if(res.includes("Lose")) computerPoints++;
            

        }
        else{
        console.log("Please make a valid choice");
        }
        
    }
    console.log("player points ", playerPoints, "computer points " ,computerPoints);
    (computerPoints>playerPoints)?console.log("Computer win the Game :( "):
    (playerPoints>computerPoints)?console.log("You win the Game :) "):
    console.log("Its a draw.");

}

game();