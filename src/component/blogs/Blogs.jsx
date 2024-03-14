import React, { useEffect, useState } from 'react'
import BLog from './blog/BLog'

const Blogs = ({handleBookMark,handleMark}) => {

const [blogs,setBlogs]=useState([])

useEffect(()=>{

fetch('../../../public/blogs.json')
.then(res => res.json())
.then(data=> setBlogs(data))

},[])


  return (
    <div>
   
{
  blogs.map(blog=>   <BLog blog={blog} key={Math.random()} handleBookMark={handleBookMark} handleMark={handleMark}></BLog>)
}


    </div>
  )
}

export default Blogs
