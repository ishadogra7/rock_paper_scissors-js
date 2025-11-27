let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#computer-score");

 const generate=()=>{
    const options=["rock","paper","scissors"]
    const randomopIx=Math.floor(Math.random()*3);
    return options[randomopIx];
 }
//playgame
const playgame=(userchoice)=>{
console.log(userchoice);
const cmptrchoice=generate();
console.log(cmptrchoice);
//logic of game
if(userchoice===cmptrchoice){
    console.log("draw");
    msg.innerText=`Game Draw!! Let's play again`;
}
else{
    let userwin =true;
    if(userchoice==="paper"){
      userwin=cmptrchoice==="scissors"?false:true;
    }
    else if(userchoice==="rock"){
     userwin=cmptrchoice==="paper"?false:true;
    }
    else{
    userwin=cmptrchoice==="rock"?false:true;
    }
    showwinnner(userwin);
}
}

const showwinnner=(userwin)=>{
if(userwin===true){
   userscore++;
   userscorePara.innerText=userscore;
    msg.innerText=`You Win!! Let's play again`;
}
else{
    computerscore++;
    compscorePara.innerText=computerscore;
    console.log("Computer Win");
    msg.innerText=`Computer Win!! Let's play again`;
}
}


//userchoice
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
const userchoice=choice.getAttribute("id");
console.log(userchoice);
playgame(userchoice);
    })
});