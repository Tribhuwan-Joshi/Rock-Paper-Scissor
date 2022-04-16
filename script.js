function computerPlay(){
    let res = ["Rock" , "Paper" , "Scissors"];
    let indx = Math.floor(Math.random()*3);
    return res[indx];
}