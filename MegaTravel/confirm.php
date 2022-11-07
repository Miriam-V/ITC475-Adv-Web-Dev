<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Mega Travel</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Miriam Vera">
        <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
        <!--Header w/the logo-->
        <div class="headerGridContainer">
            <p id="currentTime"></p> <!--Javascript Greeting AKA Good Morning, Good Afternoon, or "Good Evening"-->
            <p id="welcomeMessage"></p>
            <img src="site_files/mega_travel_logo.png" alt="Mega Travel Logo" class="logo"/>
        </div>
        <div id="headerSeparator"></div>
        <!--Navigation Bar-->
        <ul id="mainNavigationBar">
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutUs.html">About Us</a></li>
            <li><a href="contactAgent.html">Contact Agent</a></li>
        </ul>
        <br>
        <!--PHP Code-->
        <div id="introHeadingAndText">
            <h2>Thank you for submitting your travel agent contact request! 
                Here is the information you submitted: </h2>
            <br>
            <?php
            echo "<strong>Client Name: </strong>".$_POST["fname"]." ".$_POST["lname"]."<br>"."<br>";
            echo "<strong>Client Phone Number: </strong>" .$_POST["phone"]."<br>"."<br>";
            echo "<strong>Client Email: </strong>".$_POST["email"]."<br>"."<br>";
            echo "<strong>Number of Adults and Children traveling: </strong>".$_POST["quantity"]."<br>"."<br>";
            echo "<strong>Destination: </strong>".$_POST["selectedDestination"]. "<br>"."<br>";
            echo "<strong>Travel Dates: </strong>".$_POST["sDate"]. " through ". $_POST["eDate"]. "<br>"."<br>";

            if ($_POST["selectedDestination"] == "newzealand") {
                $NZactivity = $_POST['checkboxNZ'];
                echo "<strong>Interested Activities: </strong>"."<br>";
                foreach ($NZactivity as $value) {
                    echo "$value <br>";
                }
                /*
                // This works as well(ish)
                if (isset($_POST['checkboxNZ'])) 
                {
                    echo "Interested Activities: "; 
                    print_r($_POST['checkboxNZ']);
                }
                */
            } elseif ($_POST["selectedDestination"] == "maldives") {
                $Mactivity = $_POST['checkboxM'];
                echo "<strong>Interested Activities: </strong>"."<br>";
                foreach ($Mactivity as $value) {
                    echo "$value <br>";
                }
            } elseif ($_POST["selectedDestination"] == "venice") {
                $Vactivity = $_POST['checkboxV'];
                echo "<strong>Interested Activities: </strong>"."<br>";
                foreach ($Vactivity as $value) {
                    echo "$value <br>";
                }
            } elseif ($_POST["selectedDestination"] == "cancun") {
                $Cactivity = $_POST['checkboxC'];
                echo "<strong>Interested Activities: </strong>"."<br>";
                foreach ($Cactivity as $value) {
                    echo "$value <br>";
                }
            }
            echo "<br>";
            ?>
            <p>An agent will be in touch with you soon!</p>
        </div>
        <!--Footer-->
        <footer>
            <p>Copyright Protected. All rights reserved.</p>
            <br>
            <p>MEGA TRAVELS</p>
            <p>mega@travels.com</p>
        </footer>
        <!--Javascript reference-->
        <script src="welcome.js"></script>
        <script src="activities.js"></script>
        <script src="onsubmit.js"></script>
    </body>
</html>


