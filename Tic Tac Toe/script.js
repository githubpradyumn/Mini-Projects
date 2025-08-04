let boxes = document.querySelectorAll(".box");
let rest_button = document.querySelector("#rest");
let newgamebuttton = document.querySelector(".new_btn");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector(".msg_w");
let drawbutton = document.querySelector(".drawBtn");
let drawmsg = document.querySelector(".drawMsg");
let drawcontainer = document.querySelector(".drawContainer");
 
let turnO = true;
let Draw = true;
let Click = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true; 

        Click++;

        let iswinner = CheckWinner();

        if (Click===9 && !iswinner){
            showdraw();
        }

    });
});

const CheckWinner = () => {
    for(let pattern of winPatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        } 
    }
};

const showwinner = (winner) => {
        msg.innerText = `Congratulations, Winner is ${winner} `
        msgcontainer.classList.remove("hide");
        disableBoxes();
};


const showdraw = () => {
        drawmsg.innerText = ` It's a Draw, Let's play again. `;
        drawcontainer.classList.remove("hidedraw");
        disableBoxes();
    };
    
const resetGame = () =>  {
        turnO = true;
        Click = 0;
        enableBoxes();
        msgcontainer.classList.add("hide");
        drawcontainer.classList.add("hidedraw");

};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

newgamebuttton.addEventListener("click",resetGame);
rest_button.addEventListener("click",resetGame);
drawbutton.addEventListener("click",resetGame);

