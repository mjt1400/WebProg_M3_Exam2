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

let quotes=['"You need to pave your own way in the world."','"You have to believe in your product and what you are doing and other people will follow."','"A brilliant idea does not guarantee a successful invention."','"You are wise when you listen, especially to people with experience."','"As an entrepreneur, you can always find a solution if you try hard enough."'];

bttnquote.addEventListener('click',()=> {
    let index= getRandomNumber(0, quotes.length-1);
    quote.innerText= quotes[index];
});

