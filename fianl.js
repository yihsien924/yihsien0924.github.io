let ul=document.querySelector('ul');
ul.innerHTML=ul.innerHTML+ul.innerHTML;
let lis=document.querySelectorAll('li');
let btns=document.querySelectorAll('.btn');
let spa=-2;

ul.style.width=lis[0].offsetWidth*lis.length+'px';

function move(){
    if(ul.offsetLeft < -ul.offsetWidth/2){
        u1.style.left='0';
    }
    if(ul.offsetLeft > 0){
        ul.style.left=-ul.offsetWidth/2+'px';
    }
    ul.style.left=ul.offsetLeft+spa+'px';
}

let timer=setInterval(move,30);

ul.addEventListener('mousemove',function(){
    clearInterval(timer);
})
ul.addEventListener('mouseout',function(){
    timer=setInterval(move,30);
})
btns[0].addEventListener('click',function(){
    spa = -2;
})
btns[1].addEventListener('click',function(){
    spa= 2;
})