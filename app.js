let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compara=document.querySelector("#comp-score");

const gemCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
   console.log("it's a draw");
   msg.innerText="It's a Draw!";
   
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("winner is user");
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        compara.innerText=compScore;
        console.log("winner is comp");
        
        msg.innerText=`You loose! ${compChoice} beats your ${userChoice}`;
    }
};

const  playGames =(userChoice)=>{
console.log("use choice =",userChoice);
const compChoice=gemCompChoice();
console.log("Comp choice =",compChoice);
if(userChoice==compChoice)
{
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock")
    {
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
        userWin=compChoice==="scissor"?false:true;
    }
    else if(userChoice==="scissor")
    {
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}

};
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
    const choiceID = choice.getAttribute("id");
   playGames(choiceID);
});
});