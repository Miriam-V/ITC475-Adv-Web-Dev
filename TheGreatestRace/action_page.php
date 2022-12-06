<!DOCTYPE html>
<html lang="en">
    <head>
        <title>The Greatest Race</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Miriam Vera">
        <link rel="stylesheet" type="text/css" href="styles.css"/> 
    </head>
    <body>
    <h1><a href="index.html">The Greatest Race</a></h1>
    <h3 id='mainText'>CLICK ON THE STOPLIGHT TO START THE RACE!</h3>
    <img src="images/redlight.png" alt="red stoplight" id="redStoplight" onclick="startRace()">
    <img src="data:," alt id='p1img'>
    <img src="data:," alt id='p2img'>
    <br>
    <br>
    <?php
        
        $Racer1 = $_POST['player1'];
        $Racer2 = $_POST['player2'];
        echo "Player 1: ".$_POST['player1']." vs. "."Player 2: ".$_POST['player2'];
        echo "<br>";
        /*
        if ($Racer1 == "Raph") {
            echo "<img src='images/Raph.webp' alt='Image of Player 1' width='115em' height='115em' id='p1img'>";
        } elseif ($Racer1 == "Mikey") {
            echo "<img src='images/Mikey.webp' alt='Image of Player 1' width='100em' height='125em' id='p1img'>";
        } elseif ($Racer1 == "Leo") {
            echo "<img src='images/Leo.webp' alt='Image of Player 1' width='125em' height='125em' id='p1img'>";
        } else {
            echo "<img src='images/Donnie.webp' alt='Image of Player 1' width='100em' height='125em' id='p1img'>";
        } 
        echo "<br>";
        if ($Racer2 == "Raph") {
            echo "<img src='images/Raph.webp' alt='Image of Player 2' width='115em' height='115em' id='p2img'>";
        } elseif ($Racer2 == "Mikey") {
            echo "<img src='images/Mikey.webp' alt='Image of Player 2' width='100em' height='115em' id='p2img'>";
        } elseif ($Racer2 == "Leo") {
            echo "<img src='images/Leo.webp' alt='Image of Player 2' width='125em' height='125em' id='p2img'>";
        } else {
            echo "<img src='images/Donnie.webp' alt='Image of Player 2' width='100em' height='125em' id='p2img'>";
        } 
        */
    ?>
    <!--Javascript reference-->
    <script src="game.js">
                // img
        var raphImg = "images/Raph.webp";
        var mikeyImg = "images/Mikey.webp";
        var leoImg = "images/Leo.webp";
        var donnieImg = "images/Donnie.webp";


        // Players
        var elemPlayer1 = document.getElementById("p1img");
        var elemPlayer2 = document.getElementById("p2img");

        // Initial 
        var posPlayer1 = 0;
        var posPlayer2 = 0;
        var player1TotalDistance = 0;
        var player2TotalDistance = 0;

        // Finish line
        var finishLine = (window.innerWidth - (window.innerWidth * 0.20));
        console.log("Finish Line: " + finishLine);

        // var winnerSelected = false;

        // Generates a random number between a min value and a max value
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        // function to move the player at a random speed
        function movePlayer() {
            // Generates random number for move
            move1 = getRandomArbitrary(50,100);
            move2 = getRandomArbitrary(50,100);
            //console.log(move1);
            //console.log(move2);
            // Adds move to players distance
            player1TotalDistance += move1;
            player2TotalDistance += move2;
            console.log("Player 1 Total Distance: " + player1TotalDistance);
            console.log("Player 2 Total Distance: " + player2TotalDistance);
            // Actually moves the player
            document.getElementById("p1img").style.left = player1TotalDistance+"px";
            elemPlayer2.style.left = player2TotalDistance+"px";
        }


        function startRace() {
            document.getElementById("redStoplight").src = "images/greenlight.png";
            console.log("Finish Line: " + finishLine);
            if (player1TotalDistance >= finishLine) {
                console.log("Player 1 Wins!");
                document.getElementById('mainText').innerHTML='Player 1 Wins! Click on the Winner Image to Reset the Race!'
                //document.getElementById('background_img').src='deku_winning.png';
                //document.getElementById("mainText").innerHTML = "Deku Wins! Click on his image to play again!";
            } else if (player2TotalDistance >= finishLine) {
                console.log("Player 2 Wins!");
                document.getElementById('mainText').innerHTML='Player 1 Wins! Click on the Winner Image to Reset the Race!'
                //document.getElementById('background_img').src='bakugo_winning.png';
                //document.getElementById("mainText").innerHTML = "Bakugo Wins! Click on his image to play again!";
            } else {
                setTimeout(startRace, 500);
                movePlayer();
            }
        }

        function resetGame() {
            //document.getElementById('background_img').src='mha_background.jfif';
            document.getElementById('redStoplight').src='redlight.png';
            player1TotalDistance = 0;
            player2TotalDistance = 0;
            elemPlayer1.style.left = 0 + "px";
            elemPlayer2.style.left = 0 + "px";
            //document.getElementById("mainText").innerHTML = "Click on the stoplight to begin the game!";
        }
    </script>
    </body>
</html>