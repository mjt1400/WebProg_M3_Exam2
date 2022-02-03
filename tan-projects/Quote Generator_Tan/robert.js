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

let quotes=['"Thinking too much leads to paralysis by analysis."','"Tough times never last; tough people always do."','"Work hard, have fun, be nice, play fair, and dream big."','"The more you avoid risk, the less likely it is that you will achieve all that is possible within your own capabilities."','"Invest in people you like to hang with."'];

bttnquote.addEventListener('click',()=> {
    let index= getRandomNumber(0, quotes.length-1);
    quote.innerText= quotes[index];
});

