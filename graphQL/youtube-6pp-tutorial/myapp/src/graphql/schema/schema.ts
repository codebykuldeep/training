
export const schema = `#graphql


type User{
    id:Int!
    name:String!
    email:String!
}

type Todo{
    userId: ID!,
    id: ID!,
    title: String
    completed: Boolean
    user:User
  },

type Query { 
    users:[User]
    user(id:ID!):User
    todos:[Todo]
}


type Mutation{
    addUser(name:String!,age:Int!,gender:String!):String
}

`;