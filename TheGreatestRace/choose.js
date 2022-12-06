// Players
var elemPlayer1 = document.getElementById("p1img");
var elemPlayer2 = document.getElementById("p2img");

// Initial Position
var posPlayer1 = 0;
var posPlayer2 = 0;

// Finish line
var width = (window.innerWidth - (window.innerWidth * 0.20));

// var winnerSelected = false;

// Generates a random number between a min value and a max value
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// function to move the player at a random speed
function movePlayer() {
    // Generates random number for move
    move1 = getRandomArbitrary(100,300);
    move2 = getRandomArbitrary(100,300);
    // Adds move to players distance
    posPlayer1.distance += move1;
    posPlayer2.distance += move2;
    // Actually moves the player
    elemPlayer1.style.left = posPlayer1.distance + "px";
    elemPlayer2.style.left = posPlayer2.distance + "px";
}


function startRace() {
    document.getElementById("redStoplight").src = "images/greenlight.png";
    if (posPlayer1.distance >= finishLine) {
        console.log("Player 1 Wins!");
        //document.getElementById('background_img').src='deku_winning.png';
        //document.getElementById("mainText").innerHTML = "Deku Wins! Click on his image to play again!";
    } else if (playerBakugou.distance >= finishLine) {
        console.log("Player 2 Wins!");
        //document.getElementById('background_img').src='bakugo_winning.png';
        //document.getElementById("mainText").innerHTML = "Bakugo Wins! Click on his image to play again!";
    } else {
        setTimeout(startGame, 500);
        movePlayer();
    }
}

function resetGame() {
    //document.getElementById('background_img').src='mha_background.jfif';
    document.getElementById('redStoplight').src='redlight.png';
    posPlayer1.distance = 0;
    posPlayer2.distance = 0;
    elemPlayer1.style.left = 0 + "px";
    elemPlayer2.style.left = 0 + "px";
    //document.getElementById("mainText").innerHTML = "Click on the stoplight to begin the game!";
}

