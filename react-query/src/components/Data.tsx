import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchUsers } from '../utils/api'
import { USER } from '../types'

function Data() {
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:['users'],
        queryFn:fetchUsers,
        
    })
    
  return (
    <div>
        <br/><br/>
        <div>USERS DATA</div>
        <button onClick={()=>refetch()}>RELOAD DATA</button>
        <div>
            {data && data.map(({id,email,name}:USER,index:number)=>(
                <div key={index}>
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Data