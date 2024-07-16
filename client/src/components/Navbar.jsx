import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex justify-between items-center py-4 bg-black'>
        <h1 className='uppercase font-bold pl-4 text-4xl text-pink-200'>Recip<span className='text-blue-200'>EZ</span></h1>
        <ul className="flex">
            <li className='text-pink-200 pr-4 text-2xl'>Search</li>
            <li className='text-pink-200 pr-4 text-2xl'>Favorites</li>
            <li className='text-pink-200 pr-4 text-2xl'>Categories</li>
            <li className='text-pink-200 pr-4 text-2xl'>Feeling Lucky</li>
        </ul>
    </div>
  )
}

export default Navbar