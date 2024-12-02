import React from 'react'

function page({params}) {
  return (
    <div>
        <h1>BLOG PAGE</h1>
        <p>{params.slug}</p>
    </div>
  )
}

export default page