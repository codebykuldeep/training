// In this call ,it works on 'this' reference

//it call function immediately


const obj1 = {
    name:'name1',
    last:'last1'
}


const obj2 = {
    name:'name2',
    last:'last2'
}

const personDetail ={
    fullname:function(name,last){
        return this.name + " " + this.last;
    }
}



const methods ={
    fullname:function(name,last){
        return name + " " + last;
    }
}



//Here we are using personDetail obj this reference for calling function fullname for obj1
console.log(personDetail.fullname.call(obj1));



//here are are passing arguments to call fullname method of methods for obj2

console.log(methods.fullname.call(null,'kuldeep','kumar'));

//if we define methods fullname method with this reference it will point out to obj2 property while calling method for it
