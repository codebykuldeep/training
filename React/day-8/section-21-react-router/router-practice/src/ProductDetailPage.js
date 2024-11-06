import React from 'react'
import { useParams } from 'react-router-dom';


function ProductDetailPage() {
  const params =useParams();
  
  
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <h2>Product {params.id}</h2>
    </div>
  )
}

export default ProductDetailPage;