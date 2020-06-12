import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
  let { slug } = useParams()
  
  return (
    <section className="Blog">
      <p>Now showing post {slug}</p>
    </section>
  )
}

export default Blog