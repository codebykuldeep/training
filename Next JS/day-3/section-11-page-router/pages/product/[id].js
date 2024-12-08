import { useRouter } from 'next/router';
import React, { useState } from 'react'

function ProductDetail() {
    const router =useRouter();
    console.log(router.pathname);
    console.log(router.query);
    const [data,setData] =useState('')
    
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail