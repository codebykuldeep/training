import axios from "axios";

export async function getAllUser(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}


export async function getUser(_:unknown,arg:{id:string}){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${arg.id}`);
    return data;
}

export async function getUserByUserId(id:string){
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
}