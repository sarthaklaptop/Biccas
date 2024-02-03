import React from 'react'
import features1 from "../assets/features1.png"
import features2 from "../assets/features2.png"
import features3 from "../assets/features3.png"

const Features = () => {
  return (
    <div>
      {/* section 1 */}
      <div className=' flex gap-10 p-8 items-center justify-between'>
        <p className=' font-semibold text-4xl'>Our Features <br />you cab get</p>
        <p className=' w-[40%] text-[#A6A6A6]'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
        <button className=' bg-[#54BD95] p-3 rounded-full text-sm text-white '>Get Started</button>
      </div>

      {/* section 2 */}
      <div className=' flex flex-row gap-6 items-center justify-center mx-auto'>
        {/* feature 1 */}
        <div className=' flex gap-4 flex-col items-center justify-center'>
          <img width={350} src={features1} alt="" />
          <div>
            <p className=' font-bold'>Collboration Teams </p>
            <p className='text-[#A6A6A6] w-[80%]'>Here you can handle projects together with team virtually</p>
          </div>
        </div>
        {/* feature 2 */}
        <div className=' flex gap-4 flex-col items-center justify-center'>
          <img width={350} src={features2} alt="" />
          <div>
            <p className=' font-bold'>Cloud Storage </p>
            <p className='text-[#A6A6A6] w-[80%]'>No nedd to worry about storage because we provide storage up to 2 TB</p>
          </div>
        </div>
        {/* feature 3 */}
        <div className=' flex gap-4 flex-col items-center justify-center'>
          <img width={350} src={features3} alt="" />
          <div>
            <p className=' font-bold'>Daily Analytics </p>
            <p className='text-[#A6A6A6] w-[80%]'>We always provide useful informatin to make it easier for you every day</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features