let gameseq=[];
let userseq=[];
let btns=["yellow", "green", "red", "blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started==false){
        console.log("game is started");
        started=true; 
        levelUp();
    }  
});
document.addEventListener("click",function () {
    if(started==false){
        console.log("game is started");
        started=true; 
        levelUp();
    }  
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}
function levelUp(){
    level++;
    userseq=[];
    h2.innerText=`level ${level}`;
    let random=Math.floor(Math.random()*3);
    let randcolor=btns[random];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor),
    btnflash(randbtn);
}
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML=`game over your score is:<b>${level}</b> <br>press any key to start!`;
        document.querySelector('body').style.background="red";
        setTimeout(function(){
            document.querySelector('body').style.background="white";  
        },200);
        reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    let userid=btn.getAttribute("id");
    userseq.push(userid);
    checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}
