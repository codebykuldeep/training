const addToCartBtn = document.querySelectorAll('.add-to-cart');





addToCartBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        if(cart[button.id] ){
            cart[button.id]++;
        }
        else{
            cart[button.id] = 1;
        }

        console.log(cart);
    
        localStorage.setItem('cart',JSON.stringify(cart));
    })  
})