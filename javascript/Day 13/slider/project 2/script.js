const carousel = document.querySelector('.carousel');

let isDragging = false, startX , startScrollLeft;

const buttons =document.querySelectorAll('button');
const card =370;//carousel.querySelector('.card').offsetWidth || ;

console.log(card);


buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button.id);
        
        carousel.scrollLeft += button.id === 'left' ? -card: card;
    })
})


const dragStart =(e) =>{
    isDragging =true;


    //record the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
     
}

const dragging = (e) =>{
    if(!isDragging) return;
    console.log(e.pageX);
    carousel.scrollLeft = startScrollLeft - (e.pageX -startX);
    
    
}


const dragStop =()=>{
    isDragging= false;

}

carousel.addEventListener('mousemove',dragging);
carousel.addEventListener('mousedown',dragStart);


document.addEventListener('mouseup',dragStop);