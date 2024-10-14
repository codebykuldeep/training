//Loading poduct on startup;
const productList = document.querySelector('.product-list');
const dealList = document.querySelector('.deal-list');


function loadProducts(){
    productList.innerHTML ="";
    productData.forEach((product)=>{
        let html =`<div class="product-container">
                        <img src="assets/products/${product.image}" alt="" draggable="false">
                        <div class="product-info">
                            <div class="category">${product.brand}</div>
                            <div class="pro-name">${product.name}</div>
                            <div><span>$${product.price}</span> <span>$${product.price}</span></div>
                            <button class='add-to-cart' id=${product.productId}><span>ICON</span><span>Add to Cart</span></button>
                        </div>
                     </div>`;

        productList.innerHTML +=html;
    });
    
}

loadProducts();



function loadDealProducts(){
    dealList.innerHTML ="";
   for(let i=0;i<2;i++){
        let x = Math.floor(Math.random()*productData.length);
        console.log(x);
        
        let html =`<article class="deal-product">
                    <div class="deal-img">
                        <img src="assets/products/${productData[x].image}" alt="">
                    </div>

                    <div class="deal-product-info">
                        <div class="category">${productData[x].brand}</div>
                        <div class="pro-name">${productData[x].name}</div>
                        <div><span>$${productData[x].price}</span> <span>$${productData[x].price}</span></div>
                        <button class='add-to-cart' id=${productData[x].productId}><span>ICON</span><span>Add to Cart</span></button>
                    </div>
                </article>`;

        dealList.innerHTML +=html;
    };
    
}

loadDealProducts();