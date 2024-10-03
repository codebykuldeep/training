'use strict';



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const showBtn = document.querySelectorAll('.show-modal')

for(let i =0 ;i< showBtn.length;i++){
    showBtn[i].addEventListener('click',()=>{
        console.log('clicked');
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden');
    })
}
const CloseModal =function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeBtn.addEventListener('click',CloseModal);
overlay.addEventListener('click',CloseModal);

document.addEventListener('keydown',(e)=>{
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        console.log('Escape Close');
        
        CloseModal();
    }
    
})

