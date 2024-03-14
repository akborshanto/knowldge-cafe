import React from 'react'


  const BookMark = ({book,mark}) => {
 const {title}=book;
  return (
    <div className='  bg-gray-200'>
      <h1>{mark}</h1>
<h1 className='mb-5 p-4 rounded-lg'>{title}</h1>


    </div>
  )
}

export default BookMark
