import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <h1>BLOG MAIN PAGE</h1>
        <p><Link href={'/blog/page-1'}>PAGE 1</Link></p>
        <p><Link href={'/blog/page-2'}>PAGE 1</Link></p>
        
    </div>
  )
}
