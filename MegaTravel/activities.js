var FormSelectedDestination = document.getElementById("selectedDestination");

//var OptionNewZealand = document.getElementById("newzealand");
//var OptionMaldives = document.getElementById("maldives");
//var OptionVenice = document.getElementById("venice");
//var OptionCancun = document.getElementById("cancun");

var NZActivities = document.getElementById("newZealandActivities");
var MActivities = document.getElementById("maldivesActivities");
var VActivities = document.getElementById("veniceActivities");
var CActivities = document.getElementById("cancunActivities");




function activitiesFunction(){
    if (FormSelectedDestination.value == "newzealand"){
        NZActivities.style.display = "block";
        MActivities.style.display = "none";
        clearMaldivesActivities(null);
        VActivities.style.display = "none";
        clearVenicesActivities(null);
        CActivities.style.display = "none";
        clearCancunActivities(null);
        
    }
    if (FormSelectedDestination.value == "maldives"){
        MActivities.style.display = "block";
        NZActivities.style.display = "none";
        clearNewZealandActivities(null);
        VActivities.style.display = "none";
        clearVenicesActivities(null);
        CActivities.style.display = "none";
        clearCancunActivities(null);
    }
    if (FormSelectedDestination.value == "venice"){
        MActivities.style.display = "none";
        clearMaldivesActivities(null);
        NZActivities.style.display = "none";
        clearNewZealandActivities(null);
        VActivities.style.display = "block";
        CActivities.style.display = "none";
        clearCancunActivities(null);
    }
    if (FormSelectedDestination.value == "cancun"){
        MActivities.style.display = "none";
        clearMaldivesActivities(null);
        NZActivities.style.display = "none";
        clearNewZealandActivities(null);
        VActivities.style.display = "none";
        clearVenicesActivities(null);
        CActivities.style.display = "block";
    }
}

function clearNewZealandActivities() {
    document.getElementById("nzCityTours").checked = false;
    document.getElementById("nzSports").checked = false;
    document.getElementById("nzCycling").checked = false;
    document.getElementById("nzMuseums").checked = false;
    document.getElementById("nzBoating").checked = false;
}

function clearMaldivesActivities() {
    document.getElementById("mMuseums").checked = false;
    document.getElementById("mSailing").checked = false;
    document.getElementById("mBeach").checked = false;
    document.getElementById("mHiking").checked = false;
    document.getElementById("mBoating").checked = false;
}

function clearVenicesActivities() {
    document.getElementById("vMuseums").checked = false;
    document.getElementById("vTheatre").checked = false;
    document.getElementById("vParks").checked = false;
    document.getElementById("vCityTours").checked = false;
}

function clearCancunActivities() {
    document.getElementById("cParks").checked = false;
    document.getElementById("cBeaches").checked = false;
    document.getElementById("cBoating").checked = false;
    document.getElementById("cSnorkeling").checked = false;
}






