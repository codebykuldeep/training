console.log('Importing Module');

const shoppingcart =10;
const cart =[];

function addToCart(name,price){
    cart.push({name,price});
    console.log(`${name} priced $${price} aaded to cart`);
    
}

//export default addToCart; when we have to export one thing

export { addToCart as add}


//named export
//export deafult 10;
//export default function (a,b){ return a+b}
//we can also export multiple itmes
export default cart;