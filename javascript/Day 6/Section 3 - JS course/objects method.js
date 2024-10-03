const obj ={
    name:'john',
    lastname:'doe',
    age:25,
    friends :['mary','sam','jonas'],
    fullname :function(){                                       //function expression are used
        return this.name + " " + this.lastname;
    },
    getThis :function(){                                       //function expression are used
        console.log(this);
        
    }
}

//calling the functions
console.log(obj.fullname());

console.log(obj['fullname']());


//calling this
obj.getThis();

console.log(obj.has('age'));






