import React from 'react'
import blank from "../assets/publishing.png"
import fivestart from "../assets/5star.png"
import fourstart from "../assets/4star.png"
import ratingImg1 from "../assets/ratingImg1.png"
import ratingImg2 from "../assets/ratingImg2.png"
import ratingImg3 from "../assets/ratingImg3.png"

const Rating = () => {
  return (
    <div className=' flex items-center justify-center bg-[#F9F8FE] p-10'>

      {/* left */}
      <div className=' w-[50%] flex flex-col gap-8 p-4'>
        <p className=' font-semibold text-4xl'>How we support our pratner all over the world</p>
        <p className=' font-medium text-xs text-[#A6A6A6]'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>

        <div className='p-4 flex gap-10'>
          <div>
            <img width={100} src={fivestart} alt="" />
            <div>
              <p><span className=' font-bold'>4.9</span>/5 rating</p>
              <p className='text-[#A6A6A6]'>databricks</p>
            </div>
          </div>
          <div>
          <img width={100} src={fourstart} alt=""  />
            <div>
              <p><span>4.8</span>/5 rating</p>
              <p className='text-[#A6A6A6]'>Chainalysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className=' w-[50%] flex flex-col gap-10 items-start justify-center'>
        <div className=' flex gap-4'>

          <div className='relative'>
            <img className='' width={100} src={blank} alt="" />
            <img className='absolute top-8 left-8' src={ratingImg1} alt="" />
          </div>

          <div>
            <p className=' font-bold'>Publishing</p>
            <p className='text-[#A6A6A6] w-[80%]'>Plan, collaborate, and publishing your contetn <br /> that drivees meaningful engagement and growth for your barnd</p>
          </div>

        </div>
        <div className=' flex gap-4'>
          <div className='relative'>
            <img className='' width={100} src={blank} alt="" />
            <img className='absolute top-8 left-8' src={ratingImg2} alt="" />
          </div>
          <div>
            <p className=' font-bold'>Analytics</p>
            <p className='text-[#A6A6A6]'>Analyze your performance and create goegeous report</p>
          </div>
        </div>
        <div className=' flex gap-4'>
          <div className='relative'>
            <img className='' width={100} src={blank} alt="" />
            <img className='absolute top-8 left-8' src={ratingImg3} alt="" />
          </div>
          <div>
            <p className=' font-bold'>Engagement</p>
            <p  className='text-[#A6A6A6]'>Quiuckly navigate you anda engage with your adience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rating