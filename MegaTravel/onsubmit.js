var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + "-" + dd;

eDateMin = document.getElementById("sDate");

document.getElementById("sDate").setAttribute("min",today);
document.getElementById("eDate").setAttribute("min", eDateMin);



document.getElementById("sDate").onchange = function () {
    document.getElementById("eDate").setAttribute("min", eDateMin);
    if (document.getElementById("sDate").value > document.getElementById("eDate").value){
        alert("Error! Your 'End Date' value cannot be before your 'Start Date' Value. Please try again.");
    };
};


document.getElementById('Submit').onclick = function () {
    //alert(today);
    //alert(document.getElementById('sDate').value);

    if (document.getElementById('fname').value == "") {
        alert("Enter a valid 'First Name' value");
        return false;
    }
    else if (document.getElementById('lname').value == "") {
        alert("Enter a valid 'Last Name' value");
        return false;
    }
    else if (document.getElementById('email').value == "") {
        alert("Enter a valid 'Email' value");
        return false;
    }
    else if (document.getElementById('phone').value == "") {
        alert("Enter a valid 'Phone Number' value");
        return false;
    }
    else if (document.getElementById('quantity').value == "") {
        alert("Enter a valid 'How many children and adults are traveling?' value");
        return false;
    }
    else if (document.getElementById('sDate').value == "") {
        alert("Enter a valid 'Start Date' value");
        return false;
    }
    else if (document.getElementById('eDate').value == "") {
        alert("Enter a vaild 'End Date' value");
        return false;
    }
    else if (document.getElementById('selectDestination').value == "") {
        alert("Enter a valid 'Select a Destination' value");
        return false;
    };
    
};
