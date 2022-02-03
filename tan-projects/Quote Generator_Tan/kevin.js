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

let quotes=['"Nobody has a monopoly on good ideas."','"A salary is a drug they give you to forget your dreams."','"The pursuit of wealth is a wonderful thing, but the thing is you have to be honest about it, you have to tell the truth."','"Life is hard, money does not care, your tears do not ad value."','"I like to take risks. That is how I make money. But they are calculated risks."'];

bttnquote.addEventListener('click',()=> {
    let index= getRandomNumber(0, quotes.length-1);
    quote.innerText= quotes[index];
});

