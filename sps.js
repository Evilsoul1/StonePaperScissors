let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let choice = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let message = document.querySelector("#msg");

let Uscore=0;
let Cscore=0;

resetBtn.addEventListener("click",() => {
    message.innerText = "Play your move";
    userScore.innerText="0";
    compScore.innerText="0";
    Uscore=0;
    Cscore=0;
});

const playGame = (userChoice) => {
    let pos=["rock","paper","scissors"];
    let posIndex=Math.floor(Math.random()*3);
    let compChoice=pos[posIndex];
    console.log("USER CHOICE ",userChoice," COMP CHOICE ",compChoice);
    if(userChoice === compChoice){
        message.innerText="Draw";
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice=="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        message.innerText = userWin===true ? "You Win!" : "You Lose!";
        userWin===true ? Uscore++ : Cscore++;
        userScore.innerText=Uscore;
        compScore.innerText=Cscore;
    }
}

choice.forEach((a) => {
    a.addEventListener("click",()=>{
        let c = a.getAttribute("id");
        playGame(c);
    })
});