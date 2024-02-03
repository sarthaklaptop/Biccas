import React from 'react'
import image1 from "../assets/gt1.png"
import image2 from "../assets/gt2.png"
import image3 from "../assets/gt3.png"
import image4 from "../assets/gt4.png"
import image5 from "../assets/gt5.png"
import vector from "../assets/vector.png"

const GetStarted = () => {
  return (
    <div className=' bg-[#161C28] text-white flex p-10'>
      {/* left */}
      <div className=' w-[50%] flex flex-col m-10 p-10'>
        <p className=' font-semibold text-4xl mb-4'>People are Saying About DoWhith</p>
        <p className=' text-[#A6A6A6]'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
        <p className=' text-[#A6A6A6] mb-4'>
          <span className=' text-6xl'>"</span>
          <p>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
          <span className='flex my-6'>_ Aria Zinanrio</span>
        </p>

        <div className=' flex gap-2'>
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img color='' src={image5} alt="" />
        </div>
      </div>
      {/* right */}
      <div className=' flex flex-col bg-[#222938] rounded-lg items-center justify-center px-20'>

        <div className=' flex flex-col items-center justify-center'>
          <img width={60} src={vector} alt="" />
          <p className=' text-2xl'>Get Started</p>
        </div>

        <div className=' flex flex-col gap-4'>
          <form action="" className=' flex flex-col gap-4 text-[#A6A6A6]'>
            <label htmlFor="">Email</label>
            <input type="text" className=' p-2 rounded-lg' placeholder='Enter your email'/>

            <label htmlFor="">Message</label>
            <textarea name="" id="" className=' p-2 rounded-lg' cols="30" rows="5" placeholder='What are you say ? '></textarea>
          </form>

          <button className=' bg-[#54BD95] p-2 rounded-lg'>Request Demo</button>

        </div>
          <p className=' text-sm mt-2'><span className='text-[#A6A6A6]'>or</span> Start Free Trial</p>

      </div>
    </div>
  )
}

export default GetStarted