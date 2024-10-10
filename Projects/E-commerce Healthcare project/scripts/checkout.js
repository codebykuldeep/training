const cartContainer = document.querySelector('.item-container');
let cartDeleteBtn;
let cartProduct =[];



const totalAmount = document.getElementById('total-amount');
const shipping = document.getElementById('shipping');
const totalProduct = document.getElementById('product-count');




function loadCart(){
    console.log(cart);
    
    if(cart){
        const productIdwithCount = Object.entries(cart);
        
        console.log(productIdwithCount);
        
        for(let i =0;i<productIdwithCount.length;i++){
            let product = productData.find((item)=>{
                
               return item.productId === productIdwithCount[i][0];
            })
            cartProduct.push({quantity:productIdwithCount[i][1],...product});
            
        }

        console.log(cartProduct);

        
        
        updateCart();
        updateBill();

    }
}

function updateCart(){
    cartContainer.innerHTML="";

    if(cartProduct){
        cartProduct.forEach(item =>{
            let html =` <article class="cart-item">
                        <div class="item-img">
                            <img src="assets/products/${item.image}" alt="" srcset="">
                        </div>
                        <div>
                            <h3>${item.name}</h3>
                        </div>
                        <div>
                            <input type="number" value=${item.quantity}>
                        </div>
                        <div class="item-price">
                            $${item.price * item.quantity};
                        </div>
                        <div class="cart-delete btn" data-product-id=${item.productId}>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </article>`;


            cartContainer.innerHTML+=html;
        })


        cartDeleteBtn =document.querySelectorAll('.cart-delete');

        // Delete event handler
        cartDeleteBtn.forEach(deleteBtn=>{
            deleteBtn.addEventListener('click',()=>{
                deleteProduct(deleteBtn.dataset.productId)
            });
        })
    }
    if(cartProduct.length === 0){
        cartContainer.innerHTML="<h1>No items in cart<h1>";
    }
}





function updateBill(){
    let count =0;
    let totalamt =0;
    cartProduct.forEach(item=>{
        count +=item.quantity;
        totalamt +=item.quantity *item.price;
    })
    totalProduct.textContent = count.toFixed(2) ;
    shipping.textContent = (0.1*totalamt).toFixed(2);
    totalAmount.textContent= totalamt  + Number((0.1*totalamt).toFixed(2));
}






function deleteProduct(productId){
    console.log('Delete action');
    
    cartProduct = cartProduct.filter((item)=> item.productId !== productId);
    delete cart[productId];

    if(cart){
        localStorage.setItem('cart',JSON.stringify(cart));
    }

    updateCart();
    updateBill();
}








loadCart();
console.log(cartDeleteBtn);



