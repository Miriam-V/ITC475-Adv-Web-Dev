// Display current time
window.onload = displayLiveTime();
function displayLiveTime(){
   var display = new Date().toLocaleTimeString();
   document.getElementById("currentTime").innerHTML = display;
   setTimeout(displayLiveTime, 1000); 
}

// Variables for the full greeting (greeting and visual icon)
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
