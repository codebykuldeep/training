class person{
    constructor(name,age){
        this.name;
        this.age;
    }
    static ClassInfo(){                 // we call the static functions using class not with objects
        return "THIS IS CLASS FOR PERSON INFORMATION";
    }


    //private variable
    #personId =Math.floor(Math.random() * 1000);

    //protected variable
    _protectedVar = 'This is a protected variable';

    getPrivate(){
        return this.#personId;
    }
    getProtected(){
        return this._protectedVar;
    }

}

class male extends person{
    constructor(name,age){
        super(name,age);
    }
    // getPrivateUnderChild(){                   this is not possible
    //     return this.#personId;
    // }
    getProtectedUnderChild(){              //this is accessible
        return this._protectedVar;
    }
}

let p1= new person('abc',30);

let m1= new male('dcf',22);


//static function call
console.log(person.ClassInfo());


console.log(p1.getPrivate());
console.log(p1.getProtected());

//console.log(m1.getPrivateUnderChild());

console.log(m1.getProtectedUnderChild());



