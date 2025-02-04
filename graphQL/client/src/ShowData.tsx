import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_TODO_WITH_USER } from './query';

function ShowData() {
    const { loading, error, data } = useQuery(GET_TODO_WITH_USER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);
    const {getTodos} = data
    return getTodos.map(({ id, title, userId,user }:{id:string,title:string,userId:string,user:{id:string,email:string}}) => (
      <div key={id}>
        <h3>{title}</h3>
        <b>About this User:</b>
        <p>{userId}</p>
        <p>{user.email}</p>
        <p>{user.id}</p>
        <br />
      </div>
    ));
    
}

export default ShowData