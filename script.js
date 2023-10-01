let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('monuments');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',() =>{
    let value = window.screenY
    text.style.top = value * 2.5 + 'px';
    leaf.style.left = value * -1.5 + 'px';
});