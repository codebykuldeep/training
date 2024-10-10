const productData =[
    {
        productId: "p1",
        name: "Medicine",
        brand: "cipla",
        price: 4999,
        discount: 10, 
        image: "glucometer.jpg"
    },
    {
        productId: "p2",
        name: "Tablet",
        brand: "Mankind",
        price: 4999,
        discount: 10, 
        image: "steam-machine.jpg"
    },
    {
        productId: "p3",
        name: "Syrup",
        brand: "GK pharma",
        price: 4999,
        discount: 10, 
        image: "vitamin-k2.jpg"
    },
    {
        productId: "p4",
        name: "Inhaler",
        brand: "Pharma indus",
        price: 4999,
        discount: 10,
        image: "yellow.jpg"
    },
    {
        productId: "p5",
        name: "Sanitizer",
        brand: "Clean Pharma",
        price: 4999,
        discount: 10,
        image: "vitamin.jpg"
    }
];




const users = [
    {
        firstName:'John',
        lastName : 'Doe',
        email:'johndoe@email.com',
        password:'1111',
    },
    {
        firstName:'Zack',
        lastName : 'Dan',
        email:'zackdan@email.com',
        password:'1111',
    }
];

function newUser(firstName,lastName,email,password){
    this.firstName =firstName;
    this.lastName =lastName;
    this.email =email;
    this.password = password;
}

const cart ={};

let currentUser;