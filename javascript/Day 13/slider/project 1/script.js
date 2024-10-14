const container = document.querySelector('.gallery-wrapper');
const left = document.getElementById('left');
const right = document.getElementById('right');

console.log('Script');

console.log(right);


left.addEventListener('click',()=>{
    console.log(container);
    
    container.scrollLeft-=100;
})

right.addEventListener('click',()=>{
    console.log(container.scrollLeft);
    
    container.scroll+=100;
})