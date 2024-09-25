//bind is used to bind another object function to another object

//it create a method for later use

const person ={
    name:'abc',
    age:30,
    getDetail:function (){
        return this.name + " " + this.age;
    }
}

function print(){
    return this.name + " " + this.age;  
}


const woman ={
    name:'Alexa',
    age:25
}

const womanDetail = person.getDetail.bind(woman); // binded func from obj

const printDetail = print.bind(woman); // bind A FUNCTION for a obj

//console.log(womanDetail())

console.log(printDetail());



//Bind is also used for perserving this reference as it might get lost

console.log(person.getDetail())

function print(){
    console.log(person.getDetail());
    
    return this.name + " " + this.age;  
}


//We can also fix parameter using bind
function add(a,b){
    return a+b;
}

const fixedTwo = add.bind(null,2);
console.log(fixedTwo(5));


