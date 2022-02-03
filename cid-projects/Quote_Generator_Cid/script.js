

var person = 0;

function Kobe()
{   
    document.getElementById("btnId").style.display = "block";
    person = 1;
}
 
function Walt(){
    document.getElementById("btnId").style.display = "block";
    person = 2;
}


function Steve (){
    document.getElementById("btnId").style.display = "block";
    person = 3;
}

function Bill (){
    document.getElementById("btnId").style.display = "block";
    person = 4;
}

function Robert (){
    document.getElementById("btnId").style.display = "block";
    person = 5;
}

var cpt = 0;
function generateQuote(){
    

    
    var kobe1= "“Heroes come and go, but legends are forever” ― Kobe Bryant";
    var kobe2= "“You can manipulate an opponent’s strength and use it against them.” ― Kobe Bryant";
    var kobe3= "“The only aspect that can’t change, though, is that obsession.” ― Kobe Bryant";
    var kobe4= "“You have to work hard in the dark to shine in the light” ― Kobe Bryant";
    var kobe5= "“Rest at the end, not in the middle” ― Kobe Bryant";

    var walt1= "“The difference between winning and losing is most often not quitting.” ― Walt Disney";
    var walt2= "“You can be happy or you can be unhappy. It's just according to the way you look at things.” -Walt Disney";
    var walt3= "“Some dream it, some do it, some do both.” - Walt Disney";
    var walt4= "“All dreams can come true, if we have the courage to pursue them.” ― Walt Disney";
    var walt5="“Laughter is timeless, imagination has no age, dreams are forever.” ― Walt Disney";

    var steve1= "“Don’t let the noise of others’ opinions drown out your own inner voice.” ― Steve Jobs";
    var steve2= "“Sometimes life's going to hit you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did.”― Steve Jobs";
    var steve3= "“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.” ― Steve Jobs";
    var steve4= "“The heaviness of being successful was replaced by the lightness of being a beginner again.”― Steve Jobs";
    var steve5= "“People who know what they are talking about don't need power Point.”― Steve Jobs";

    var bill1= "“I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.” ― Bill Gates";
    var bill2= "“If you can't make it good, at least make it look good.” ― Bill Gates";
    var bill3= "“Your most unhappy customers are your greatest source of learning.” ― Bill Gates";
    var bill4= "“Success is a lousy teacher. It seduces smart people into thinking they can't lose.” ― Bill Gates";
    var bill5= "“Our success has really been based on partnerships from the very beginning.” ― Bill Gates";

    var rob1="“The lesson is that you can still make mistakes and be forgiven.” - Robert Downey Jr.";
    var rob2="“Worrying is like praying for something that you don’t want to happen.”- Robert Downey Jr.";
    var rob3="“I’m not afraid of total failure because I don’t think that will happen. I’m not afraid of success because that beats the hell out of failure.”- Robert Downey Jr.";
    var rob4="“Look, even bad years are pretty good years, I think.” - Robert Downey Jr.";
    var rob5="“I always think part of success is being able to replicate results.” - Robert Downey Jr.";

    if (person == 1){
        const quotes = [kobe1, kobe2, kobe3, kobe4, kobe5];
        document.querySelector("#par").innerHTML = quotes[cpt]; 
    }

    if (person == 2){
        const quotes = [walt1, walt2, walt3, walt4,walt5];
        document.querySelector("#par").innerHTML = quotes[cpt]; 
    }

    if (person == 3){
        const quotes = [steve1, steve2, steve3, steve4, steve5];
        document.querySelector("#par").innerHTML = quotes[cpt]; 
    }

    if (person == 4){
        const quotes = [bill1, bill2, bill3, bill4,bill5];
        document.querySelector("#par").innerHTML = quotes[cpt]; 
    }

    if (person == 5){
        const quotes = [rob1, rob2, rob3, rob4,rob5];
        document.querySelector("#par").innerHTML = quotes[cpt]; 
    }

    if (cpt < 4){
        cpt++;

    }else{
        cpt = 0;
    }
    
}


