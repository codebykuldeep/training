import { expressMiddleware } from "@apollo/server/express4";
import express from 'express';
import cors from 'cors';
import { ApolloServer } from "@apollo/server";
import axios from "axios";


async function startServer(){
    const app = express();
    const server = new ApolloServer({
        typeDefs:`
        type Todo {
            id:ID!
            title:String!
            completed:Boolean
            userId:String
            user:User
        }
        type User {
            id:ID!
            name:String!
            username:String!
            email:String!
            phone:String!
        }
        type Query {
            getTodos: [Todo]
            getUsers:[User]
            getUser(id:ID!):User
        }
        `,
        resolvers:{
            Todo:{
                user:async(todo)=>{
                    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
                    console.log(data);
                    return data
                }
            },
            Query:{
                getTodos:async()=>{
                    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
                    return data
                },
                getUsers:async()=>{
                    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`);
                   
                    return data
                },
                getUser:async(parent,{id})=>{
                    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                    
                    return data
                }
                //getTodos:()=>[{id:1,title:'something',completed:false}]
            }
        }
    });

    app.use(cors());
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    await server.start();

    app.use('/graphql',expressMiddleware(server));

    app.listen(8000,()=>{
        console.log('SERVER STARTED AT PORT 8000');
    })
}

startServer()