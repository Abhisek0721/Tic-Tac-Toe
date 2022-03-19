// if either of the players win, this function will run
let onResult = (player)=>{
    let box = document.getElementById('box');
    box.style.display = 'none';
    let resultSection = document.getElementById('result');
    resultSection.innerText = `${player} won!`;
}

// On clicking into the input box action() will run
let playerTurn = null;
let action = (clickedId) => {

if(playerTurn === null){
document.getElementById(clickedId).value = "X";
playerTurn = "O";
}else if(playerTurn === "X"){
    document.getElementById(clickedId).value = playerTurn;
    playerTurn = "O";
}else{
document.getElementById(clickedId).value = playerTurn;
playerTurn = "X";
};
  

let Boxes = document.getElementsByClassName("input");
let box = [];
for(let i=0; i<Boxes.length; i++){
    box[i] = (Boxes[i].value);
};


if(box[0] === box[1] && box[1] === box[2]){
    switch(box[0]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[3] === box[4] && box[4] === box[5]){
    switch(box[3]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[6] === box[7] && box[7] === box[8]){
    switch(box[6]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[0] === box[3] && box[3] === box[6]){
    switch(box[0]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[1] === box[4] && box[4] === box[7]){
    switch(box[1]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[2] === box[5] && box[5] === box[8]){
    switch(box[2]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[0] === box[4] && box[4] === box[8]){
    switch(box[0]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
}else if(box[2] === box[4] && box[4] === box[6]){
    switch(box[2]){
        case "X":
            onResult("Player-1");
            break;
        case "O":
            onResult("Player-2");
            break;
    };
};

}


// reset game
function reset(){
    let Boxes = document.getElementsByClassName("input");
    let box = document.getElementById('box');
    for(let i=0; i<Boxes.length; i++){
        Boxes[i].value = "";
    };

    box.style.display = 'flex';
}
