import React from 'react'
import cover from "../assets/benefitRectangle.png"

const Benefit = () => {
  return (
    <div className=' flex items-center justify-between p-20 '>

      {/* Left */}
      <div className=' w-[40%] flex flex-col gap-4'>
        <p className=' font-bold text-4xl'>What Benifit Will <br /> You Get</p>
        <div className=' flex flex-col gap-2'>
          <div>
            <img src="" alt="" />
            <p className=' text-lg font-normal leading-7'>Free Consulting With Experet Saving Money</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className=' text-lg font-normal leading-7'>Online Banking</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className=' text-lg font-normal leading-7'>Investment Report Every Month</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className=' text-lg font-normal leading-7'>Saving Money For The Future</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className=' text-lg font-normal leading-7'>Online Transection</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div>
        <img width={300} src={cover} alt="" />
      </div>
    </div>
  )
}

export default Benefit