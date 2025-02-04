import { gql } from "@apollo/client";

export const GET_TODO_WITH_USER = gql`
  query ExampleQuery {
        getTodos {
            id
            title
            userId
            user {
            id
            name
            email
            }
    }
}

`;