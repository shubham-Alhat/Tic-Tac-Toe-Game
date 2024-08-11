let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset");
let msg_v = document.getElementById("msg_v");

let turnX = true;  //playerX, playerO

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

// fuction to check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let numO = 0;
        let numX = 0;

        for (let i of pattern) {
            if(boxes[i].innerText == "X") {
                numX++;
            }
            else if (boxes[i].innerText == "O") {
                numO++;
            }
            else {
               
            }
        }
        if (numX == 3) {
            console.log("x win");
            boxes.forEach((box) => {
                box.disabled = true;
            });
            msg_v.innerText = "PLAYER X WIN";
            msg_v.style.display = "flex";
            return;
        }
        else if (numO == 3) {
            console.log("O win");
            boxes.forEach((box) => {
                box.disabled = true;
            });
            msg_v.innerText = "PLAYER O WIN";
            msg_v.style.display = "flex";
            return;
        } 
    }
}

// adding event listener to each button..
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    }) 
})



reset_button.addEventListener("click",() => {
    boxes.forEach((box) => {
        window.location.reload(); // reload the entire page.
    })
})

// Another function to check WINNER>>..

// let checkWinner = () => {
//     for (pattern of winPatterns) {
//        let [a,b,c] = pattern;
//        if ( boxes[a].innerText !== "" && boxes[a].innerText === boxes[b].innerText 
//            && boxes[a].innerText === boxes[c].innerText) {
//                console.log(`Player ${boxes[a].innerText} is the winner`);
//                return; // Exit the function as we have a winner
//            }
//     }
// }