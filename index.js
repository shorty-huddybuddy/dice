function myfunction() {

    let a=prompt("enter player 1")
    let b=prompt("enter player 2")

    let one1=document.querySelector('.one');




    let one2=document.querySelector('.one2');
    
let x=Math.ceil(Math.random()*6)
let y=Math.ceil(Math.random()*6)

console.log(x)
console.log(y)




if(x>y){
    let one=document.querySelector('.first')
    one.innerHTML=`winner is ${a}`
}
else if(x<y){
    let one=document.querySelector('.first')
    one.innerHTML=`winner is ${b}`
}
else{
    let one=document.querySelector('.first')
    one.innerHTML='draw'
}

let one=document.querySelector('.score1');
one.innerHTML=`Score of ${a}: ${x}`
let two=document.querySelector('.score2');
two.innerHTML=`Score of ${b}: ${y}`



//for first player 
if(x==1){
    
    one1.setAttribute('src','./1.jpg')
}
else if(x==2){
    
    one1.setAttribute('src','./2.jpg')
}
else if(x==3){
    
    one1.setAttribute('src','./3.jpg')
}
else if(x==4){
    
    one1.setAttribute('src','./4.jpg')
}
else if(x==5){
    
    one1.setAttribute('src','./5.jpg')
}
else if(x==6){
    
    one1.setAttribute('src','./6.jpg')


// for 2nd player 
if(y==1){
    one2.setAttribute('src','./1.jpg')
}
else if(y==2){
    one2.setAttribute('src','./2.jpg')
}
else if(y==3){
    one2.setAttribute('src','./3.jpg')
}
else if(y==4){
    one2.setAttribute('src','./4.jpg')
}
else if(y==5){
    one2.setAttribute('src','./5.jpg')
}
else if(y==6){
    one2.setAttribute('src','./6.jpg')
}
}

}