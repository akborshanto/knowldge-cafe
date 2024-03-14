import React, { useState } from 'react'
import Header from './component/header/Header'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'

const App = () => {
const [bookmark,setBookmark]=useState([]);
const [mark,setMark]=useState(0)

/* handle book mark */
const handleBookMark=(blog)=>{
  

const newBooksMark=[...bookmark,blog]
setBookmark(newBooksMark)

}
/* mark */
const handleMark=(marks,id)=>{
//  console.log( typeof marks)
const newMark= mark + marks
setMark(newMark)

const remainingBookMark=bookmark.filter(bookmark => bookmark.id !== id)
setBookmark(remainingBookMark)
}

  return (
    <div className='bg-info text-center container mx-auto'>

<Header></Header>
<div className='flex justify-between gap-12 border-b-2 flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between'>
<Blogs handleBookMark={handleBookMark} handleMark={handleMark} ></Blogs>
<Bookmarks bookmarks={bookmark}   mark={mark}></Bookmarks>
</div>

    </div>
  )
}

export default App
