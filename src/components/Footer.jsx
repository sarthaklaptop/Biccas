import React from 'react'

const Footer = () => {
  return (
    <div className='dark:bg-gray-800 p-4'>
      <footer className="p-6 w-11/12 dark:text-gray-50 flex items-center mx-auto justify-between">
        <div >
          <div className=' flex flex-col gap-4' >
            <div className=' text-4xl font-semibold text-[#54BD95]'>Biccas</div>
            <p className='text-[#A6A6A6]'>Get started noew try our product</p>  

            <input type="text"  className='dark:bg-gray-800 border-white rounded-full border-2 p-2 px-4' placeholder='Enter your email here' />
          </div>
        </div>
        <div className=' flex gap-10'>
          <div className=' px-10'>
            <p className=' font-semibold mb-4'>Support</p>
            <ul className=' text-[#A6A6A6] flex flex-col gap-2'>
              <li>Help center</li>
              <li>Account information</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className=' px-10'>
            <p className=' font-semibold mb-4'>Help and Solution</p>
            <ul className=' text-[#A6A6A6] flex flex-col gap-2'>
              <li>Talk to support</li>
              <li>Support docs</li>
              <li>Systum status</li>
              <li>Covid response</li>
            </ul>
          </div>
          <div className=' px-10'>
            <p className=' font-semibold mb-4'>Product</p>
            <ul className=' text-[#A6A6A6] flex flex-col gap-2'>
              <li>Update</li>
              <li>Security</li>
              <li>Beta test</li>
              <li>Pricing product</li>
            </ul>            
          </div>
        </div>

      </footer>
      <div className=' text-white flex justify-between w-11/12 mx-auto'>
        <div>
            <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          </div>
          <div className=' flex gap-2'>
            <p>Terms and Condtions</p>
            <span className=' -mt-1'>.</span>
            <p>Privacy Policy</p>
          </div>
      </div>
    </div>
  )
}

export default Footer