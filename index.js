//Task1
function ticTac(board) {
    function isWin(board, plValue) {
        if (
        (board[0][0] === plValue && board[0][1] === plValue && board[0][2] === plValue) ||
        (board[1][0] === plValue && board[1][1] === plValue && board[1][2] === plValue) ||
        (board[2][0] === plValue && board[2][1] === plValue && board[2][2] === plValue) ||
        (board[0][0] === plValue && board[1][0] === plValue && board[2][0] === plValue) ||
        (board[0][1] === plValue && board[1][1] === plValue && board[2][1] === plValue) ||
        (board[0][2] === plValue && board[1][2] === plValue && board[2][2] === plValue) ||
        (board[0][0] === plValue && board[1][1] === plValue && board[2][2] === plValue) ||
        (board[0][2] === plValue && board[1][1] === plValue && board[2][0] === plValue) ||
        (board[0][2] === plValue && board[1][1] === plValue && board[2][0] === plValue)
        ) {
            return true;
        } else {
            return false;
        }
    }
        function findEmptySlots() {
            let emptySlot = false;
            board.forEach(item => {
               item.forEach(item2 => {
                if (item2 === 0) {
                    emptySlot = true;
                }
               });
            });
            return emptySlot;
        }    
    
    if (isWin(board, 1)) {
        return 1;
    } else if(isWin(board, 2)) {
        return 2;
    } else if(findEmptySlots(board)) {
        return -1;
    } else {
        return 0;
    }
}

console.log(ticTac([[0, 0, 1], [0, 1, 2], [2, 1, 0]], 1));


//Task 2
let str = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';
let regForAllStr = /(.*?[?!.])(?=\s*[A-ZА-ЯЁ]|$)/g;
let sortedStr = str.match(regForAllStr);
let reg2 = /(?!\,\.)[A-Za-z(\')?]+/g;

let firstStr = sortedStr[0];

/*let sortedArr = [];

for (let i = 1 ; i < sortedStr.length; i++) {
    sortedStr[i].match(reg2);
}*/

let secondStr = sortedStr[1];
let thirdStr = sortedStr[2];
let fourthStr = sortedStr[3];
let fifthStr = sortedStr[4];
let sixStr = sortedStr[5];
let sortedFirstStr = firstStr.match(reg2);
let sortedSecondStr = secondStr.match(reg2);
let sortedThirdStr = thirdStr.match(reg2);
let sortedFourthStr = fourthStr.match(reg2);
let sortedFifthStr = fifthStr.match(reg2);
let sortedSixStr = sixStr.match(reg2);

let arrOfLength = sortedFirstStr.map(item => {
    return item.length;
});

let arrSecret = "";

arrOfLength.forEach(item => {
    switch(item) {
        case 9:
        let word1 = sortedSecondStr.splice(item - 1, 1);
        arrSecret += word1;
        break;
        case 2:
        let word2 = sortedThirdStr.splice(item - 1, 1);
        arrSecret += " " + word2;
        break;
        case 6:
        let word3 = sortedFourthStr.splice(item - 1, 1);
        arrSecret += " " + word3;
        break;
        case 4:
        let word4 = sortedFifthStr.splice(item - 1, 1);
        arrSecret += " " + word4;
        break;
        case 5:
        let word5 = sortedSixStr.splice(item - 1, 1);
        arrSecret += " " + word5;
        break;   
    }
});

console.log(arrSecret);











