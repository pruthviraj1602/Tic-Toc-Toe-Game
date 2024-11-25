let boxes=document.querySelectorAll(".box");
let resetBtn=document.getElementById("Reseat-btn");
let message = document.querySelector(".message");
let msg=document.querySelector("#msg");

let turnO=true;  // PlayerO PlayerX

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true; 
        
        checkWinner();
    });
});

const checkWinner=()=>{

     for( let pattern of winPatterns){  

      let val1=boxes[pattern[0]].innerText;
      let val2=boxes[pattern[1]].innerText;
      let val3=boxes[pattern[2]].innerText;

      if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 && val2===val3){
         showWinner(val1);
        //  resetGame();
        disabledBoxes();
        
      }}
               
}}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    message.classList.remove("hide");
}



const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    message.classList.add("hide");
    msg.innerText = ""; 
}


resetBtn.addEventListener("click", () => {
    resetGame();
});

