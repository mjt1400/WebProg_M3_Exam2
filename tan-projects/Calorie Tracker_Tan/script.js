

function getCalories(){

    var totalCal;
    var gender = document.getElementById("gender").value;
    var age = parseFloat(document.getElementById("age").value);
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var activity = document.getElementById("activity").value;

    if (activity == "1"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1;
        }
    }else if(activity == "2"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1.2;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1.2;
        }
    }else if(activity == "3"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1.3;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1.3;
        }
    }else if(activity == "4"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1.4;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1.4;
        }
    }else if(activity == "5"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1.5;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1.5;
        }
    }else if(activity == "6"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1.6;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1.6;
        }
    }else if(activity == "7"){
        if (gender == "male"){
            totalCal = ((10*weight) + (6.25*height) - (5*age) + 5) * 1.7;
        }else{
            totalCal = ((10*weight) + (6.25*height) - (5*age) - 161) * 1.7;
        }
    }
    
    localStorage["cal"] = totalCal.toFixed(2);
}

function onLoad(){
    document.getElementById("calories-display").innerHTML = "Remaining Calories for this Day: " + localStorage["cal"];
}

function updateCalorie(){
    var table = document.getElementById("record-table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    localStorage["cal"] = (localStorage["cal"] - parseFloat(document.getElementById("calories").value)).toFixed(2);
    cell1.innerHTML = document.getElementById("food").value;
    cell2.innerHTML = document.getElementById("calories").value + " cal";
    document.getElementById("calories-display").innerHTML = "Remaining Calories for this Day: " + localStorage["cal"];
}



