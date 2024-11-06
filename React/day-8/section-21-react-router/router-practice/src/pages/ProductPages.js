import React from 'react'
import { Link } from 'react-router-dom'

function ProductPages() {
  return (
    <>
    <h1>ProductPages</h1>
    <ul>
      {(new Array(5)).fill(0).map((val,index)=>(
        <Link key={index} to={`/products/${index}`}><li>Product {index+1}</li></Link>
      ))}
    </ul>
    </>
  )
}

export default ProductPages