import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex justify-between items-center py-4 bg-black'>
        <h1 className='uppercase font-bold pl-4 text-4xl text-pink-200'><Link to='/'>Recip<span className='text-blue-200'>EZ</span></Link></h1>
        <ul className="flex">
            <li className='text-pink-200 pr-4 text-2xl'><Link to='/search'>Search</Link></li>
            <li className='text-pink-200 pr-4 text-2xl'><Link to='/favorites'>Favorites</Link></li>
            <li className='text-pink-200 pr-4 text-2xl'><Link to='/categories'>Categories</Link></li>
            <li className='text-pink-200 pr-4 text-2xl'><Link to='/feeling-lucky'>Feeling Lucky</Link></li>
            <li className='text-pink-200 pr-4 text-2xl'><Link to='/user'>User</Link></li>
        </ul>
    </div>
  )
}

export default Navbar