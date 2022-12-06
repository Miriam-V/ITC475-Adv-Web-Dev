//var winner img
var winner1Img = "";
var winner2Img = "";

// Players
var elemPlayer1 = "Raph1";
var elemPlayer2 = "Raph2";


function selectedPlayer() {
    if(document.getElementById("player1").value == "Raph") {
        //document.getElementById().src = raphImg;
        document.getElementById("Raph1").style.display = "block";
        document.getElementById("Mikey1").style.display = "none";
        document.getElementById("Leo1").style.display = "none";
        document.getElementById("Donnie1").style.display = "none";
        console.log("Player 1: Raph");
        elemPlayer1 = "Raph1";
        winner1Img = "images/RaphWinner.webp";
    } else if (document.getElementById("player1").value == "Mikey") {
        //document.getElementById(p1img).src = "images/Mikey.webp";
        document.getElementById("Raph1").style.display = "none";
        document.getElementById("Mikey1").style.display = "block";
        document.getElementById("Leo1").style.display = "none";
        document.getElementById("Donnie1").style.display = "none";
        console.log("Player 1: Mikey");
        elemPlayer1 = "Mikey1";
        winner1Img = "images/MikeyWinner.webp";
    } else if (document.getElementById("player1").value == "Leo") {
        //document.getElementById(p1img).src = leoImg;
        document.getElementById("Raph1").style.display = "none";
        document.getElementById("Mikey1").style.display = "none";
        document.getElementById("Leo1").style.display = "block";
        document.getElementById("Donnie1").style.display = "none";
        console.log("Player 1: Leo");
        elemPlayer1 = "Leo1";
        winner1Img = "images/LeoWinner.webp";
    } else {
       // document.getElementById(p1img).src = donnieImg;
       document.getElementById("Raph1").style.display = "none";
       document.getElementById("Mikey1").style.display = "none";
       document.getElementById("Leo1").style.display = "none";
       document.getElementById("Donnie1").style.display = "block";
       console.log("Player 1: Donnie");
       elemPlayer1 = "Donnie1";
       winner1Img = "images/DonnieWinner.webp";
    }
    
    if(document.getElementById("player2").value == "Raph") {
        //document.getElementById(p2img).src = raphImg;
        document.getElementById("Raph2").style.display = "block";
        document.getElementById("Mikey2").style.display = "none";
        document.getElementById("Leo2").style.display = "none";
        document.getElementById("Donnie2").style.display = "none";
        console.log("Player 2: Raph");
        elemPlayer2 = "Raph2";
        winner2Img = "images/RaphWinner.webp";
    } else if (document.getElementById("player2").value == "Mikey") {
        //document.getElementById(p2img).src = "images/Mikey.webp";
        document.getElementById("Raph2").style.display = "none";
        document.getElementById("Mikey2").style.display = "block";
        document.getElementById("Leo2").style.display = "none";
        document.getElementById("Donnie2").style.display = "none";
        console.log("Player 2: Mikey");
        elemPlayer2 = "Mikey2";
        winner2Img = "images/MikeyWinner.webp";
    } else if (document.getElementById("player2").value == "Leo") {
        //document.getElementById(p2img).src = leoImg;
        document.getElementById("Raph2").style.display = "none";
        document.getElementById("Mikey2").style.display = "none";
        document.getElementById("Leo2").style.display = "block";
        document.getElementById("Donnie2").style.display = "none";
        console.log("Player 2: Leo");
        elemPlayer2 = "Leo2";
        winner2Img = "images/LeoWinner.webp";
    } else {
        //document.getElementById(p2img).src = donnieImg;
        document.getElementById("Raph2").style.display = "none";
        document.getElementById("Mikey2").style.display = "none";
        document.getElementById("Leo2").style.display = "none";
        document.getElementById("Donnie2").style.display = "block";
        console.log("Player 2: Donnie");
        elemPlayer2 = "Donnie2";
        winner2Img = "images/DonnieWinner.webp";
    }
}

// PlayersImage
var elemPlayer1Img = document.getElementById(elemPlayer1);
var elemPlayer2Img = document.getElementById(elemPlayer2);
console.log("elemPlayer1Img: " +  elemPlayer1Img);
console.log("elemPlayer2Img: " + elemPlayer2Img);


// Initial 
var posPlayer1 = 0;
var posPlayer2 = 0;
var player1TotalDistance = 0;
var player2TotalDistance = 0;

// Finish line
var finishLine = (window.innerWidth - (window.innerWidth * 0.15));
console.log("Finish Line: " + finishLine);

// var winnerSelected = false;

// Generates a random number between a min value and a max value
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// function to move the player at a random speed
function movePlayer() {
    // Generates random number for move
    move1 = getRandomArbitrary(1,100);
    move2 = getRandomArbitrary(1,100);
    //console.log(move1);
    //console.log(move2);
    // Adds move to players distance
    player1TotalDistance += move1;
    player2TotalDistance += move2;
    console.log("Player 1 Total Distance: " + player1TotalDistance);
    console.log("Player 2 Total Distance: " + player2TotalDistance);
    // Actually moves the player
    document.getElementById(elemPlayer1).style.left = player1TotalDistance+"px";
    document.getElementById(elemPlayer2).style.left = player2TotalDistance+"px";
    //elemPlayer1Img.style.left = player1TotalDistance + "px";
    //elemPlayer2Img.style.left = player2TotalDistance + "px";
}

// Winner
var winnerStr;
var winner = "";

function startRace() {
    document.getElementById("redStoplight").src = "images/greenlight.png";
    console.log("Finish Line: " + finishLine);
    if (player1TotalDistance >= finishLine) {
        document.getElementById("winner1Image").style.display = "block";
        document.getElementById("winner1Image").src = winner1Img;
        console.log("Winner Image: " + winner1Img);
        console.log("Player 1 Wins!");
        document.getElementById('mainText').innerHTML='Player 1 Wins! Click on the Winner Image to Reset the Race!'
        winnerStr = elemPlayer1;
        winner = winnerStr.substring(0, winnerStr.length - 1);
        console.log("Winner: " + winner);
    } else if (player2TotalDistance >= finishLine) {
        document.getElementById("winner2Image").style.display = "block";
        document.getElementById("winner2Image").src = winner2Img;
        console.log("Player 2 Wins!");
        console.log("Winner Image: " + winner2Img);
        document.getElementById('mainText').innerHTML='Player 1 Wins! Click on the Winner Image to Reset the Race!'
        winnerStr = elemPlayer2;
        winner = winnerStr.substring(0, winnerStr.length - 1);
        console.log("Winner: " + winner);
    } else {
        setTimeout(startRace, 300);
        movePlayer();
    }
}

function resetGame() {
    //document.getElementById('background_img').src='mha_background.jfif';
    document.getElementById('redStoplight').src='images/redlight.png';
    document.getElementById("winner1Image").style.display = "none";
    document.getElementById("winner2Image").style.display = "none";
    winnerImg = "";
    winnerStr = "";
    winner = "";
    player1TotalDistance = 0;
    player2TotalDistance = 0;
    document.getElementById(elemPlayer1).style.left = player1TotalDistance+"px";
    document.getElementById(elemPlayer2).style.left = player2TotalDistance+"px";
    document.getElementById("mainText").innerHTML = "CLICK ON THE STOPLIGHT TO START THE RACE!";
}
