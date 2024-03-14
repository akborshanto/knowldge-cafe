import React from 'react'
import BookMark from '../bookmarks/Bookmark';

const Bookmarks = ({bookmarks,mark}) => {
  return (
    <div>




    
<h2>BOOK MARKS{bookmarks.length}</h2>
{

  bookmarks.map(book=> <BookMark book={book} mark={mark} ></BookMark>)

}



    </div>
  )
}

export default Bookmarks
