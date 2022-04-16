
/* Return a random choice */
function computerPlay(){
    let res = ["Rock" , "Paper" , "Scissors"];
    let indx = Math.floor(Math.random()*3);
    return res[indx];
}


/* Simulate a single round of Rock Paper Scissors */

function playRound(playerSelection , computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection().toLowerCase()){
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