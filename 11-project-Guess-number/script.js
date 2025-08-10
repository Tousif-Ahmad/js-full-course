let randomNumber = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert("please enter a valid number")
    }
    else if (guess < 1){
        alert("please enter a number more than 1")
    }
    else if (guess > 100){
        alert("please enter a number less than 100")
    }
    else{
        prevGuess.push(guess);
    }
    if (numGuess === 10){
        displayGuess(guess);
        displayMsg(`Game over. Random number was ${randomNumber}`);
        endGame()
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMsg("You guessed it right.");
        endGame()
    } else if (guess < randomNumber){
        displayMsg(`Number is too low`)
    } else if (guess > randomNumber){
        displayMsg(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;

}

function displayMsg(messsage){
    lowOrHigh.innerHTML = `<h3>${messsage}</h3>`
}


function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", function(){
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p)
        
        playGame = true;

    })
}