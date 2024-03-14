import React from "react";
/* icon */
import { FaBookmark } from "react-icons/fa";
const BLog = ({ blog,handleBookMark,handleMark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  //console.log(hashtags);
  return (
    <div className=" text-start">
      <img src={cover} alt="BLOG IMG" className=" bg-cover w-full" />

      <div className="author-container flex justify-between my-16 ">
        <div className="author-right">
          <img src={author} alt="" />

          <div className="author-right">
          <div className="author-right-continer flex justify-between  gap-4">
            <img src={author_img} alt="" className=" w-14"/>
            <div className="author-right-title">
              <h3>{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
        </div>
        </div>
      <div className="author-container-left">
<span>
{reading_time}Min read
</span>
<button onClick={()=>handleBookMark(blog)}>
<FaBookmark className="" />
</button>

      <h3>
   
      
      </h3>
      
      </div>


      </div>

<h2 className="text-4xl">{title}</h2>


<p className="my-4">

{hashtags.map(hash=> <span key={Math.random()}>#{hash}</span>)}
</p>
<a href="#" className=" text-blue-500 underline my-8" onClick={()=>handleMark(reading_time)}>Mark as read</a>

    </div>
  );
};

export default BLog;
