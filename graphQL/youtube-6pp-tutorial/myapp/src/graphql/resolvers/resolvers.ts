import { getAllTodos } from "../../controllers/todos";
import { getAllUser, getUser, getUserByUserId } from "../../controllers/users";

interface addUserArg{
    name:string;
    age:string;
    gender:string;
}

export const graphQLResolver = {
    Query: {
        users: getAllUser,
        user:getUser,
        todos:getAllTodos,
    },
    Todo:{
        user:async(todo:{userId:string})=>{return await getUserByUserId(todo.userId)}
    },
    Mutation:{
        addUser:(parent:unknown,arg:addUserArg)=>{
            console.log(arg);
            
            return 'add';
        }
    }
};

