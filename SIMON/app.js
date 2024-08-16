let GameSeq=[];
let UserSeq=[];
let btns= ["yellow","pink","green","blue"];
let h2 = document.querySelector("h2");

let started=false;
let level=0;
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        levelup();
    }

})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
} 

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
} 
5

function levelup(){
    UserSeq=[];

    level++
    h2.innerText=`level ${level}`;

    let btn= ["yellow","pink","green","blue"];
    
    let randomIdx=Math.floor(Math.random()*4);
    // console.log(randomIdx)
    let randomColor = btn[randomIdx];
    // console.log(`Random color selected: ${randomColor}`);
    let randombtn=document.querySelector(`.${randomColor}`)
    GameSeq.push(randomColor)
    console.log(GameSeq)
    // console.log(randombtn)
    btnFlash(randombtn);
    
}

function checkAns(idx){

    if(GameSeq[idx]===UserSeq[idx]){
       if(GameSeq.length==UserSeq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerText=`Game Over!! Your Score is ${level}  Press any key to start again` ;

        reset();
    }
}

function reset(){
    started=false;
    GameSeq=[];
    UserSeq=[];
    level=0;
}

function btnpress(){
    let btn = this;
    console.log(btn)
    userFlash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    UserSeq.push(userColor);
    console.log(UserSeq);

    checkAns(UserSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
} 

