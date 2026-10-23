let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector(".newbtn");
let resBtn=document.querySelector(".resetbtn");
let msg=document.querySelector("#win");
let msgcontainer=document.querySelector(".msgcontainer");


let turnO=true;
 const Winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];

 const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
 }

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
                
        }
        else{
            box.innerText="X";
            turnO=true;
        }
         box.disabled=true;
         checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner= (winner)=>{
    msg.innerText=`Congrutulation ! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of Winpatterns){
        let posvalue1=boxes[pattern[0]].innerText;
        let posvalue2=boxes[pattern[1]].innerText;
        let posvalue3=boxes[pattern[2]].innerText;
        
      if(posvalue1 != "" && posvalue2 !="" && posvalue3 != ""){
        if(posvalue1 === posvalue2 && posvalue2 === posvalue3){
            console.log("winner",posvalue1);
            showWinner(posvalue1);
        }
      }
    }
};
 newBtn.addEventListener("click",resetgame);
 resBtn.addEventListener("click",resetgame);