//This is implemented using closures
//here shippingcost isprivate and other are accessible


const shopping =(function(){
    const cart =[];
    const shippingCost = 10;

    const addToCart =(product,price)=>{
        cart.push({product,price})
    }
    const orderFromSupplier =(product,price)=>{
        console.log(`${product} order from supplier at price of ${price} and shiiping cost=$${shippingCost}`);
        
    }

    return{
        cart,addToCart,orderFromSupplier
    }
})()

shopping.addToCart('bread',10);
shopping.addToCart('apple',20);

console.log(shopping.cart);

shopping.orderFromSupplier('cake',150)

/*
[ { product: 'bread', price: 10 }, { product: 'apple', price: 20 } ]
cake order from supplier at price of 150 and shiiping 
cost=$10
*/