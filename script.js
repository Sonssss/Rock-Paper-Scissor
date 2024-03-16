let userScore= 0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userPara=document.querySelector("#user-score");
const compPara=document.querySelector("#comp-score");


const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw!");
    msg.innerText="Draw. Play again";
    msg.style.backgroundColor=" #081b31";

}

/*const paperGame=()=>{
    console.log("Paper Wins!!");
}
const scissorsGame=()=>{
    console.log("Scissor Wins!!");
}
const rockGame=()=>{
    console.log("Rock Wins!!")
}*/

let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userPara.innerHTML=userScore;
        console.log("You Win!");
        msg.innerText=`You Win!! Your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPara.innerHTML=compScore;
        console.log("You Loose!");
        msg.innerText=`You Loose!! ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    const compChoice=generateCompChoice();
    console.log("computer choice= ",compChoice);
    
    if(userChoice===compChoice)
    {
        //draw condition
        drawGame();

    }
    else{
    let userWin=true;

        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"? false :true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"? false : true;
        }
        else 
        {
         userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
        /*if(userChoice==="paper" && compChoice==="rock"){
            paperGame();
        }
        else if(userChoice==="paper" && compChoice==="scissors"){
            scissorsGame();
        }
        else if(userChoice==="rock" && compChoice==="paper"){
            paperGame();
        }
        else if(userChoice==="rock" && compChoice==="scissors"){
            rockGame();
        }
        else if(userChoice==="scissors" && compChoice==="paper"){
            scissorsGame();
        }
        else if(userChoice==="scissors" && compChoice==="rock"){
            rockGame();
        }
    }*/
    
    
}



choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
