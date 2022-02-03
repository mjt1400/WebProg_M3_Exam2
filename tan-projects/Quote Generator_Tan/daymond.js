function getRandomNumber(min,max){
    let first= max-min+1;
    let second= Math.random()*first;
    let quote= Math.floor(second)+min;
    return quote;
}
function Main(){
    location.replace("main.html")
}
let bttnquote = document.querySelector('button');
let quote= document.querySelector('p');

let quotes=['"Never give up what you believe."','"Do not focus on you, focus on what you can give others."','"Entrepreneurship brings us hope."','"Good grooming is integral and impeccable style is a must."','"Success is waking up every day and doing what you want."'];

bttnquote.addEventListener('click',()=> {
    let index= getRandomNumber(0, quotes.length-1);
    quote.innerText= quotes[index];
});

