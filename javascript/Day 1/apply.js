// In  apply ,it works on 'this' reference same as call

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
console.log(personDetail.fullname.apply(obj1));



//here are are passing arguments to call fullname method of methods for obj2

console.log(methods.fullname.apply(obj2,['kuldeep','kumar']));
console.log(methods.fullname.apply(null,['abc','def']));


//Here we can pass null in place of object also

//Difference between call and apply is that we pass arguement as array in apply while individually in call