

function calculateCalories(){
    console.log("enter");
    var caloriesAmount = 0;
    var activityValue = 1;
    var age = parseFloat(document.getElementById("age-inp").value);
    var gender = document.getElementById("gender-inp").value;
    var height = parseFloat(document.getElementById("height-inp").value);
    var weight = parseFloat(document.getElementById("weight-inp").value);
    var activity = document.getElementById("activity-inp").value;

    if (activity == "bmr"){
        activityValue = 1;
    }else if(activity == "sedentary"){
        activityValue = 1.2;
    }else if(activity == "light"){
        activityValue = 1.375;
    }else if(activity == "moderate"){
        activityValue = 1.465;
    }else if(activity == "active"){
        activityValue = 1.55;
    }else if(activity == "very-active"){
        activityValue = 1.725;
    }else if(activity == "extra-active"){
        activityValue = 1.9;
    }

    if (gender == "male"){
        caloriesAmount = ((10*weight) + (6.25*height) - (5*age) + 5) * activityValue;
    }else{
        caloriesAmount = ((10*weight) + (6.25*height) - (5*age) - 161) * activityValue;
    }
    localStorage["0"] = caloriesAmount.toFixed(2);
    document.location.href = 'CalorieTracker.html'; 
}

function pageLoad(){
    document.getElementById("caloriesValue").innerHTML = "Calories Remaining for the day: " + localStorage["0"];
}

function addFood(){
    var table = document.getElementById("food-table-id");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    localStorage["0"] = (localStorage["0"] - parseFloat(document.getElementById("calories-inp").value)).toFixed(2);
    cell1.innerHTML = document.getElementById("food-inp").value;
    cell2.innerHTML = document.getElementById("calories-inp").value;

    document.getElementById("caloriesValue").innerHTML = "Calories Remaining for the day: " + localStorage["0"];
}



