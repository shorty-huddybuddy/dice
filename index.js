function myfunction() {

    let one1=document.querySelector('.one');
    let two1=document.querySelector('.two');
    let three1=document.querySelector('.three');
    let four1=document.querySelector('.four');
    let five1=document.querySelector('.five');
    let six1=document.querySelector('.six');


    
    let one2=document.querySelector('.one');
    let two2=document.querySelector('.two');
    let three2=document.querySelector('.three');
    let four2=document.querySelector('.four');
    let five2=document.querySelector('.five');
    let six2=document.querySelector('.six');
    
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
    
    one1.style.visibility='visible'
    two1.style.visibility='hidden'
    three1.style.visibility='hidden'
    four1.style.visibility='hidden'
    five1.style.visibility='hidden'
    six1.style.visibility='hidden'
}
else if(x==2){
    
    one1.style.visibility='hidden'
    two1.style.visibility='visible'
    three1.style.visibility='hidden'
    four1.style.visibility='hidden'
    five1.style.visibility='hidden'
    six1.style.visibility='hidden'
}
else if(x==3){
    
    three1.style.visibility='visible'
    one1.style.visibility='hidden'
    two1.style.visibility='hidden'
   
    four1.style.visibility='hidden'
    five1.style.visibility='hidden'
    six1.style.visibility='hidden'
}
else if(x==4){
    
    four1.style.visibility='visible'
    one1.style.visibility='hidden'
    two1.style.visibility='hidden'
    three1.style.visibility='hidden'
    five1.style.visibility='hidden'
    six1.style.visibility='hidden'
}
else if(x==5){
    
    five1.style.visibility='visible'
    one1.style.visibility='hidden'
    two1.style.visibility='hidden'
    three1.style.visibility='hidden'
    four1.style.visibility='hidden'
    six1.style.visibility='hidden'
}
else if(x==6){
    
    one1.style.visibility='hidden'
    two1.style.visibility='hidden'
    three1.style.visibility='hidden'
    four1.style.visibility='hidden'
    five1.style.visibility='hidden'
    six1.style.visibility='visible'
}


// for 2nd player 
if(y==1){
    one2.style.visibility='visible'
    two2.style.visibility='hidden'
    three2.style.visibility='hidden'
    four2.style.visibility='hidden'
    five2.style.visibility='hidden'
    six2.style.visibility='hidden'
}
else if(y==2){
    one2.style.visibility='hidden'
    two2.style.visibility='visible'
    three2.style.visibility='hidden'
    four2.style.visibility='hidden'
    five2.style.visibility='hidden'
    six2.style.visibility='hidden'
}
else if(y==3){
    one2.style.visibility='hidden'
    two2.style.visibility='hidden'
    three2.style.visibility='visible'
    four2.style.visibility='hidden'
    five2.style.visibility='hidden'
    six2.style.visibility='hidden'
}
else if(y==4){
    one2.style.visibility='hidden'
    two2.style.visibility='hidden'
    three2.style.visibility='hidden'
    four2.style.visibility='visible'
    five2.style.visibility='hidden'
    six2.style.visibility='hidden'
}
else if(y==5){
    one2.style.visibility='hidden'
    two2.style.visibility='hidden'
    three2.style.visibility='hidden'
    four2.style.visibility='hidden'
    five2.style.visibility='visible'
    six2.style.visibility='hidden'
}
else if(y==6){
    one2.style.visibility='hidden'
    two2.style.visibility='hidden'
    three2.style.visibility='hidden'
    four2.style.visibility='hidden'
    five2.style.visibility='hidden'
    six2.style.visibility='visible'
}
}

