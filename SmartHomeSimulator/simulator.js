
var hours = new Date().getHours();
var minutes = new Date().getMinutes();

if (hours != 10 || hours != 11 || hours != 12) {
    hours = "0" + hours;
};
if (minutes < 10) {
    minutes = "0" + minutes;
};
var currentTime =  hours + ":" + minutes;

/////////////////////////////////////////////////


function setItems() {
    eTime = document.getElementById("endTime").value;
    sTime = document.getElementById("startTime").value;  
    deviceType = document.getElementById("smartDevices").value;  

    localStorage.setItem("starttime", sTime);
    localStorage.setItem("endtime", eTime);
    localStorage.setItem("devicetype", deviceType);

    storedSTime = localStorage.getItem("starttime");
    storedETime = localStorage.getItem("endtime");
    storedDeviceType = localStorage.getItem("devicetype");
    
    
    deviceStatus = document.getElementById(storedDeviceType + "_Status").innerHTML = "Status: ON";
    alert(deviceStatus);

    greenOrNot();
};



function greenOrNot() {
    if (currentTime > storedSTime && currentTime < storedETime) {
        document.getElementById(LivingRoomLamp_Status).style.backgroundColor = "#AA0000";
        LivingRoomLamp_Status.innerHTML = "status: ON";
    };

    setInterval(setItems, 1000);
    
};



///////////////////////////////////////////////

function runTime () { 
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var stringHours;
    var stringMin;
    var stringCurrentTime;


    if (hours < 10) {
        stringHours = "0" + hours.toString();
    }
    else {
        stringHours = hours.toString();
    };
    if (minutes < 10) {
        stringMin = "0" + minutes.toString();
    }
    else {
        stringMin = minutes.toString();
    };

    var currentTime = hours + ":" +  minutes;
    stringCurrentTime =  stringHours + ":" + stringMin;
    document.getElementById("currentTimeLabel").innerHTML = stringCurrentTime.toString();

    setTimeout(runTime, 1000); 
};

