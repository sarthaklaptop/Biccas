import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between p-4 py-6 text-base'>
      <div className=' text-2xl text-[#54BD95]'>Biccas</div>
      <div>
        <ul className=' flex flex-row gap-x-4 text-[#A6A6A6]'>
          <li>Home</li>
          <li>Porduct</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className=' flex gap-x-2'>
        <button className='text-[#A6A6A6]'>Login</button>
        <button className=' bg-[#54BD95] p-2 rounded-xl text-white text-base'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar