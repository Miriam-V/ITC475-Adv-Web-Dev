// Display current time
let currentTime = new Date();
let time = currentTime.toLocaleString();
var displayCurrentTime = document.getElementById("currentTime").innerHTML = time;


var hours = new Date().getHours();
var fullGreeting = document.getElementById("welcomeMessage");
var greeting = "";
var visualIcon = "";

// Javascript Greeting AKA "Good Morning", "Good Afternoon", or "Good Evening"-->
if (hours >= 0 && hours <= 11) {
   greeting = "Good Morning";
} 
if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
 } 
 if (hours > 17 && hours <= 23) {
    greeting = "Good Night"
 } 

 // Visual Icon, Sun or Moon
if (hours >= 6 && hours <= 18) {
    visualIcon = "☀️" 
} 
if (hours > 18 || hours < 6) {
    visualIcon = "🌙" 
} 

// Display full greeting, greeting with visual icon
 fullGreeting.innerHTML = greeting + visualIcon;
