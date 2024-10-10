const addToCartBtn = document.querySelectorAll('.add-to-cart');





addToCartBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        if(cart.hasOwnProperty(button.id) ){
            cart[button.id]++;
        }
        else{
            cart[button.id] = 0;
        }

        console.log(cart);
    })
})