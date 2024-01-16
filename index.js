function myfunction() {
    
let x=Math.ceil(Math.random()*6)
let y=Math.ceil(Math.random()*6)

console.log(x)
console.log(y)




if(x>y){
    let one=document.querySelector('.first')
    one.innerHTML='Player 1 wins'
}
else if(x<y){
    let one=document.querySelector('.first')
    one.innerHTML='Player 2 wins'
}
else{
    let one=document.querySelector('.first')
    one.innerHTML='draw'
}

let one=document.querySelector('.score1');
one.innerHTML=`Score of player 1: ${x}`
let two=document.querySelector('.score2');
two.innerHTML=`Score of player 2: ${y}`



//for first player 
if(x==1){
    let one=document.querySelector('.one');
    one.style.visibility='visible'
}
else if(x==2){
    let one=document.querySelector('.two');
    one.style.visibility='visible'
}
else if(x==3){
    let one=document.querySelector('.three');
    one.style.visibility='visible'
}
else if(x==4){
    let one=document.querySelector('.four');
    one.style.visibility='visible'
}
else if(x==5){
    let one=document.querySelector('.five');
    one.style.visibility='visible'
}
else if(x==6){
    let one=document.querySelector('.six');
    one.style.visibility='visible'
}


// for 2nd player 
if(y==1){
    let one=document.querySelector('.one');
    one.style.visibility='visible'
}
else if(y==2){
    let one=document.querySelector('.two');
    one.style.visibility='visible'
}
else if(y==3){
    let one=document.querySelector('.three');
    one.style.visibility='visible'
}
else if(y==4){
    let one=document.querySelector('.four');
    one.style.visibility='visible'
}
else if(y==5){
    let one=document.querySelector('.five');
    one.style.visibility='visible'
}
else if(y==6){
    let one=document.querySelector('.six');
    one.style.visibility='visible'
}
}

