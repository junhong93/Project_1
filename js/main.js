
// constant
let gameCnt = 0; //Counts of what number were inputed
let outCount = 0; //Numbers of outs
// let gameIsOver = false; //Game is not over at the beginning





// function to create a random number of three digit
function getRandomNumber () {
    return Math.floor(Math.random() * 9);
}

function getThreeRandom () {
    let x = getRandomNumber();
    let y = getRandomNumber();

    while (x == y) {
        y = getRandomNumber()
    }
    let z = getRandomNumber();
    while (z == y || z == x) {
        z = getRandomNumber();
    }
    let answer = '' + x + y + z;
    return answer;

}


// show answer when clicked the button
document.getElementById('showAnswer').addEventListener('click', answer);
// let randNum = `Answer is ${getThreeRandom()}`;
let randNum = getThreeRandom();

// console.log(randNum);

function answer() {
    alert(randNum);
}


// function for strike, ball, and out.
function setGame(a,b) {
    let stCount = 0; //strike
    let ballCount = 0; //ball

    for (let i= 0; i<3; i++) {
        if (a[i] == b[i]) {
            stCount++; //same number and same spot makes strike
        } else {
            for (let k = 0; k < 3; k++) {
                if(a[k] == b[k]){
                    ballCount++; //same number but different spot makes ball
                }
            }
        }
    }   gameCnt++;

    if (stCount == 0 && ballCount == 0) {
        outCount++; //there are not any same numbers
    }
    if (stCount == 3) {
        alert("Congratulation! You have got the right number:  " + randNum)
    }
}



// addEventListener when clicked the button
document.getElementById('btn0').addEventListener('click', display);
document.getElementById('btn1').addEventListener('click', display);
document.getElementById('btn2').addEventListener('click', display);
document.getElementById('btn3').addEventListener('click', display);
document.getElementById('btn4').addEventListener('click', display);
document.getElementById('btn5').addEventListener('click', display);
document.getElementById('btn6').addEventListener('click', display);
document.getElementById('btn7').addEventListener('click', display);
document.getElementById('btn8').addEventListener('click', display);
document.getElementById('btn9').addEventListener('click', display);
document.getElementById('guess').addEventListener('click', guessNum);
document.getElementById('del').addEventListener('click', deleteNumer);






// function to create number when clicked.
function display(event) {
    if (event.target.id == 'btn1') {
        populateInnerHTML('1')
        // document.getElementById('first').innerHTML = '1';
    } else if (event.target.id == 'btn2') {
        populateInnerHTML('2')
        // document.getElementById('first').innerHTML = '2';
    } else if (event.target.id == 'btn3') {
        populateInnerHTML('3')
    } else if (event.target.id == 'btn4') {
        populateInnerHTML('4')
    } else if (event.target.id == 'btn5') {
        populateInnerHTML('5')
    } else if (event.target.id == 'btn6') {
        populateInnerHTML('6')
    } else if (event.target.id == 'btn7') {
        populateInnerHTML('7')
    } else if (event.target.id == 'btn8') {
        populateInnerHTML('8')
    } else if (event.target.id == 'btn9') {
        populateInnerHTML('9')
    } else if (event.target.id == 'btn0') {
        populateInnerHTML('0')
    }
};




// function to lable player's guess number in order
function populateInnerHTML(playerClick) {
    if (document.getElementById('first').innerHTML !== '' && document.getElementById('second').innerHTML !== '') {
        document.getElementById('third').innerHTML = playerClick;
    } else if (document.getElementById('first').innerHTML !== '') {
        document.getElementById('second').innerHTML = playerClick;
    } else if (document.getElementById('third').innerHTML !== '') {

    } else {
        document.getElementById('first').innerHTML = playerClick;
    }
};



//function for winning

function guessNum() {
    if (document.getElementById('first').innerHTML == randNum[0] && document.getElementById('second').innerHTML == randNum[1] && document.getElementById('third').innerHTML == randNum[2]) {
        document.getElementById('bat').src = 'baseball_2.jpg'
        alert(`Congratulation! You got the right number: ${randNum}`)
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';

    } else if ((document.getElementById('first').innerHTML == randNum[0] && document.getElementById('second').innerHTML == randNum[1]) || 
    (document.getElementById('first').innerHTML == randNum[0] && document.getElementById('third').innerHTML == randNum[2]) || (document.getElementById('second').innerHTML == randNum[1] && document.getElementById('third').innerHTML == randNum[2])) {
        alert('2 strikes!')
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';   
    } else if((document.getElementById('first').innerHTML !== randNum[0]) && (document.getElementById('first').innerHTML !== randNum[1]) && (document.getElementById('first').innerHTML !== randNum[2])
    && (document.getElementById('second').innerHTML !== randNum[0]) && (document.getElementById('second').innerHTML !== randNum[1]) && (document.getElementById('second').innerHTML !== randNum[2])
    && (document.getElementById('third').innerHTML !== randNum[0]) && (document.getElementById('third').innerHTML !== randNum[1]) && (document.getElementById('third').innerHTML !== randNum[2])) {
        alert('3 Outs! All Wrong!')
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if( ( (document.getElementById('first').innerHTML == randNum[1]) || (document.getElementById('first').innerHTML == randNum[2])) &&
    ((document.getElementById('second').innerHTML == randNum[0]) || (document.getElementById('second').innerHTML == randNum[2])) && (document.getElementById('third').innerHTML == randNum[2]) ) {
      alert('1 strike and 2 balls')

      document.getElementById('third').innerHTML = '';
      document.getElementById('second').innerHTML = '';
      document.getElementById('first').innerHTML = '';
    } else if ( ((document.getElementById('first').innerHTML == randNum[1]) || (document.getElementById('first').innerHTML == randNum[2])) &&
    ((document.getElementById('third').innerHTML == randNum[0]) || (document.getElementById('third').innerHTML == randNum[1])) && (document.getElementById('second').innerHTML == randNum[1])) {
        alert('1 strike and 2 balls')

        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if( ((document.getElementById('second').innerHTML == randNum[0]) || (document.getElementById('second').innerHTML == randNum[2])) &&
    ((document.getElementById('third').innerHTML == randNum[0]) || (document.getElementById('third').innerHTML == randNum[1])) && (document.getElementById('first').innerHTML == randNum[0])) {
        alert('1 strike and 2 balls')

        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if ( ( (document.getElementById('first').innerHTML == randNum[1]) || (document.getElementById('first').innerHTML == randNum[2])) &&
    ((document.getElementById('second').innerHTML == randNum[0]) || (document.getElementById('second').innerHTML == randNum[2]))) {
        alert('2 balls')
  
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if ( ((document.getElementById('first').innerHTML == randNum[1]) || (document.getElementById('first').innerHTML == randNum[2])) &&
    ((document.getElementById('third').innerHTML == randNum[0]) || (document.getElementById('third').innerHTML == randNum[1]))) {
        alert('2 balls')
 
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if ( ((document.getElementById('second').innerHTML == randNum[0]) || (document.getElementById('second').innerHTML == randNum[2])) &&
    ((document.getElementById('third').innerHTML == randNum[0]) || (document.getElementById('third').innerHTML == randNum[1]))) {
        alert('2 balls')

        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if ((document.getElementById('first').innerHTML == randNum[0]) && (document.getElementById('third').innerHTML == randNum[1]) && (document.getElementById('second').innerHTML !== randNum[1])) {
        alert('1 strike, 1 ball, and 1 out') 
 
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if ((document.getElementById('first').innerHTML == randNum[0]) && (document.getElementById('second').innerHTML == randNum[2]) && (document.getElementById('third').innerHTML !== randNum[2])) {
        alert('1 strike, 1 ball, and 1 out')  
    
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('second').innerHTML == randNum[1] && document.getElementById('first').innerHTML == randNum[2] && document.getElementById('third').innerHTML !== randNum[2]) {
        alert('1 strike, 1 ball, and 1 out')
     
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('second').innerHTML == randNum[1] && document.getElementById('third').innerHTML ==  randNum[0] && document.getElementById('first').innerHTML !== randNum[0]) {
        alert('1 strike, 1 ball, and 1 out')
 
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('third').innerHTML == randNum[2] && document.getElementById('first').innerHTML == randNum[1] && document.getElementById('second').innerHTML !== randNum[1]) {
        alert('1 strike, 1 ball, and 1 out')
   
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('third').innerHTML == randNum[2] && document.getElementById('second').innerHTML == randNum[0] && document.getElementById('first').innerHTML !== randNum[0]) {
        alert('1 strike, 1 ball, and 1 out')
   
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('first').innerHTML == randNum[0] && document.getElementById('second').innerHTML !== randNum[1] && document.getElementById('third').innerHTML !== randNum[2]) {
        alert('1 strike 2 outs')
     
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('second').innerHTML == randNum[1] && document.getElementById('first').innerHTML !== randNum[0] && document.getElementById('third').innerHTML !== randNum[2]) {
        alert('1 strike 2 outs')
     
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else if (document.getElementById('third').innerHTML == randNum[2] && document.getElementById('second').innerHTML !== randNum[1] && document.getElementById('first').innerHTML !== randNum[0]) {
        alert('1 strike 2 outs')
  
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    } else {
    
        alert('1 ball and 2 outs')
        document.getElementById('third').innerHTML = '';
        document.getElementById('second').innerHTML = '';
        document.getElementById('first').innerHTML = '';
    }
    




}

        
        
        
        
//         (((document.getElementById('first') == randNum[1]) || (document.getElementById('first') == randNum[2])) && ((document.getElementById('second').innerHTML == randNum[0]) || (document.getElementById('second').innerHTML == randNum[2]))) ||
//     (((document.getElementById('first') == randNum[1]) || (document.getElementById('first') == randNum[2])) && ((document.getElementById('third').innerHTML == randNum[0]) || (document.getElementById('third').innerHTML == randNum[1]))) ||
//     (((document.getElementById('secon') == randNum[0]) || (document.getElementById('secon') == randNum[2])) && ((document.getElementById('third').innerHTML == randNum[0]) || (document.getElementById('third').innerHTML == randNum[1])))) {
//         if((document.getElementById('first') == randNum[0]) || (document.getElementById('second') == randNum[1]) || (document.getElementById('third') == randNum[0])) {
//             alert('1 strike 2 balls')
//         } else {
//             alert('2 balls')
//         }
//     }
// }




// function guessNum() {
//     let createNewElement = document.createElement('div');
//     // let scoreBoard = document.createTextNode(setGame(display()));
//     // createNewElement.appendChild(scoreBoard);
//     document.getElementById('new1').appendChild(createNewElement);
//     }




//function to delete the number
function deleteNumer() {
    if (document.getElementById('third').innerHTML !== '') {
        document.getElementById('third').innerHTML = ''
    } else if (document.getElementById('first').innerHTML !== '' && document.getElementById('second').innerHTML !== '') {
        document.getElementById('second').innerHTML = ''
    } else  {
        document.getElementById('first').innerHTML = ''
    }
}



// function to reset the game
document.getElementById("reBtn1").addEventListener('click', restart)

function restart(re) {
    if (re.target.id == 'reBtn1') {
        window.location.reload()
    }
};