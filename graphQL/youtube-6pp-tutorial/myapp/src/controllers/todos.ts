import axios from "axios";

export async function getAllTodos(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return data;
}


export async function getTodo(_:unknown,arg:{id:string}){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${arg.id}`);
    return data;
}