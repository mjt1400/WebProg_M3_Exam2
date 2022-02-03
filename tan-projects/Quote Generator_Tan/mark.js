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

let quotes=['"Every no gets me closer to a yes."','"It does not matter how many times you have failed. You only have to be right once."','"Work like there is someone working 24 hours a day to take it all away from you."','"Know your core competencies and focus on being great at them."','"There is always a way to get there."'];

bttnquote.addEventListener('click',()=> {
    let index= getRandomNumber(0, quotes.length-1);
    quote.innerText= quotes[index];
});

