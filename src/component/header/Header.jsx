import React from 'react'
/* img */
import propile from '../../assets/image/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between mt-4 p-4'>

<h1 className=' text-2xl '>Knowledge Cafe</h1>
<img src={propile} alt="" />



    </div>
  )
}

export default Header
