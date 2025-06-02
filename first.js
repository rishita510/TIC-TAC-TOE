let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let message=document.querySelector(".message");
let newbtn=document.querySelector(".newbtn");
turnO="true";
let newgame=newbtn.addEventListener("click",()=>{
  turnO="true";
  enableboxes();
  message.classList.add("hide");
  for(let box of boxes){
    if(box.innerText != ""){
        box.innerText="";
    }
  }

})
let resetgame=resetbtn.addEventListener("click",()=>{
    turnO="true";
    enableboxes();
    message.classList.add("hide");
    for(let box of boxes){
      if(box.innerText != ""){
          box.innerText="";
      }
    }
  
  })
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
         if(turnO=="true"){
            box.innerText="O";
            turnO="false"
         }else{
           box.innerText="X";
           turnO="true";
         }
         box.Disabled=true;
         checkwinner();
    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disable=true;
        
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disable=false;
    }
}
let showwinner=(winner)=>{
  msg.innertext=`winner is ${winner}`;
   message.classList.remove("hide");
}
const checkwinner=() =>{
    for( let pattern of winpattern){
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
           let pos1=boxes[pattern[0]].innerText;
           let pos2=boxes[pattern[1]].innerText;
           let pos3=boxes[pattern[2]].innerText;
           if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                disableBoxes();
                showwinner(pos1);
            }
           }
    }
}
