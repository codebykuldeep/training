const obj={
    name:'a',
    obj:{
        name:'b',
        obj:{
            name:'c',
            obj:{
                name:'d',
                obj:{
                    name:'e',
                    obj:{
                        name:'f',
                        obj:{
                            name:'g',
                            obj:{
                                name:'h',
                                obj:{
                                    name:'i',
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};


const arr =[];

function getName(obj){
    for(let i in obj){
        if(typeof obj[i] == 'object'){
            getName(obj[i]);
        }
        else{
            arr.push(obj[i])
        }
        
    }
}

getName(obj)

console.log(arr);
