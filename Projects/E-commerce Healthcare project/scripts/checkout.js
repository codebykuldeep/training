const cartContainer = document.querySelector('.item-container');
let cartDeleteBtn;
let cartCountBtn;
let cartProduct =[];



const totalAmount = document.getElementById('total-amount');
const billAmount =document.getElementById('bill-amount');
const shipping = document.getElementById('shipping');
const totalProduct = document.getElementById('product-count');



//Delete modal

const deleteModalcloseBtn = document.querySelector('.delete-close-box');
const deleteModal = document.querySelector('.delete-modal');
const deleteYesBtn = document.getElementById('delete-yes');
const deleteNoBtn = document.getElementById('delete-no');

deleteModalcloseBtn.addEventListener('click',()=>{
    handleModal(deleteModal,overlay);
})

deleteNoBtn.addEventListener('click',()=>{
    handleModal(deleteModal,overlay);
})


deleteYesBtn.addEventListener('click',()=>{
    deleteProduct(deleteModal.dataset.productId)
    handleModal(deleteModal,overlay);
})

//deleteProduct(deleteBtn.dataset.productId)



function addHandlerToInsertElement(){
    cartDeleteBtn =document.querySelectorAll('.cart-delete');
    cartCountBtn =document.querySelectorAll('.item-count');
        // Delete event handler
        cartDeleteBtn.forEach(deleteBtn=>{
            deleteBtn.addEventListener('click',()=>{
                deleteModal.dataset.productId = deleteBtn.dataset.productId;
                handleModal(deleteModal,overlay);
            });
        })

        //change quantity handler
        cartCountBtn.forEach(countBtn =>{

            countBtn.addEventListener('input',()=>{
                console.log('changed');
                let count = Number(countBtn.value);
                updateProductCount(countBtn.dataset.productId,count);
                
            });
        })
}


function loadCart(){
    console.log(cart);
    
    const productIdwithCount = Object.entries(cart);
    if(productIdwithCount.length){
        console.log('Loading Cart');
        
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
                            <input type="number" value=${item.quantity} min=0 data-product-id=${item.productId} class='item-count'>
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

        addHandlerToInsertElement();
        
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
    let shipAmt = Number((0.05*totalamt).toFixed(2));
    totalProduct.textContent = count.toFixed() ;
    shipping.textContent = shipAmt;
    billAmount.textContent = totalamt ;
    totalAmount.textContent= totalamt  + shipAmt;
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


function updateProductCount(productId,count){
    if(count === 0){
        deleteProduct(productId);
    }
    else{
        cart[productId]=count;
        localStorage.setItem('cart',JSON.stringify(cart));

        cartProduct.forEach((item)=> {
            if(item.productId === productId){
                item.quantity = count;
            }
        });

        updateCart();
        updateBill();
    }
}







loadCart();









