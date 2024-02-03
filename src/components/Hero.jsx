import React from 'react'
import main from "../assets/main.png"
import line from "../assets/line.png"
import play from "../assets/Playplay.png"

import descript from "../assets/descript.png"
import grammarly from "../assets/grammarly.png"
import notion from "../assets/notion.png"
import unsplash from "../assets/unsplash.png"
import intercom from "../assets/intercom.png"

import mainBg from "../assets/mainBg.png"

const Hero = () => {
  return (
    <div className="" >

      {/* Main */}
      <div className=' flex flex-row items-center justify-center p-10'>
        <div className=' flex flex-col w-[50%] gap-2'>
          <p className=' text-6xl font-semibold'>We’re here to Increase your Productivity</p>
          <img width={250} src={line} alt="" />
          <p className=' text-lg font-normal leading-7'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
          <div className=' flex gap-x-4'>
            <button className=' bg-[#54BD95] p-2 rounded-full text-sm text-white '>Try free trial</button>
            <button className=' flex flex-row items-center text-sm text-[#191A15] font-medium'> <span className=''><img src={play} alt="" /></span> View Demo</button>
          </div>
        </div>
        <div className=' w-[50%]'>
          <img className=' -pr-10' src={main} alt="" />
        </div>

        
      </div>

      {/* Company */}
      <div className=' flex flex-col items-center justify-center gap-y-8 pb-10'>
        <p className=' text-3xl font-semibold'>More than 25,000 teams use Collabs</p>
        <div className=' flex flex-row gap-4'>
          <img width={145} src={descript} alt="" />
          <img width={145} src={grammarly} alt="" />
          <img width={145} src={notion} alt="" />
          <img width={145} src={unsplash} alt="" />
          <img width={145} src={intercom} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero