import React from 'react'

const Plans = () => {
  return (
    <div className='bg-gradient-to-tr from-slate-50 to-green-100 pt-10'>
      <div className=' flex flex-col items-center justify-center'>
        <div className=' flex flex-col gap-4 mb-4'>
          <p  className=' font-semibold text-4xl text-center'>Choose Plan <br /> That’s Right For You</p>
          <p className='text-[#A6A6A6] font-bold'>Choose plan that works best for you, feel free to contact us</p>
        </div>

        <div className=' flex gap-4'>
          <button className=' bg-[#54BD95] p-3 rounded-lg text-sm text-white'>Billed Monthly</button>
          <button className=' bg-[#54BD95] p-3 rounded-lg text-sm text-white'>Billed Yearly</button>
        </div>
      </div>

      <div>
        <section className="py-20 ">
        <div className="container px-4 mx-auto">
          {/* <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracki uppercase dark:text-violet-400">Pricing</span>
            <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
          </div> */}
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 ">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-bold">Free  </h4>
                  <p className="mt-3 leadi text-[#A6A6A6] flex justify-center">Have a go  and test your  superpowers</p>
                  <p className=' flex justify-start text-[#A6A6A6]'>$<span className="text-6xl font-bold text-black">0</span></p>
                  
                </div>
                <ul className="flex-1 mb-6 bg-[#F9FAFB] p-6 rounded-lg font-medium flex flex-col gap-y-2">
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>2 Users</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>2 Files</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Public Share & Comments</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Chat Support </span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>New income apps</span>
                  </li>
                  
                  <button type="button" className=" bg-white items-center justify-center  flex rounded-lg px-5 py-3 font-semibold tracki text-center  mx-auto text-[#54BD95]">Signup for free</button>
                </ul>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#54BD95] dark:text-gray-900">
              <div className="space-y-2 flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-bold">Free  </h4>
                  <p className="mt-3 leadi text-white flex justify-center">Have a go  and test your  superpowers</p>
                  <p className=' flex justify-start text-white'>$<span className="text-6xl font-bold ">0</span></p>
                  
                </div>
                <p className="leadi bg-[#85DAB9] mx-auto p-2 rounded-lg text-white">Save $50 a year</p>
                <ul className="flex-1 mb-6 bg-[#F9FAFB] p-6 rounded-lg font-medium flex flex-col gap-y-2">
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>4 Users</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>All apps</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Unlimited editable exports</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Folders and collaboration </span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>All incoming apps</span>
                  </li>
                  
                  <button type="button" className=" bg-[#54BD95] text-white items-center justify-center  flex rounded-lg px-5 py-3 font-semibold tracki text-center  mx-auto ">Signup for free</button>
                </ul>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 ">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <h4 className="text-2xl font-bold">Business</h4>
                  <p className="mt-3 leadi text-[#A6A6A6] flex justify-center">Unveil new superpowers and join the Design Leaque</p>
                  <p className=' flex justify-start text-[#A6A6A6]'>$<span className="text-6xl font-bold text-black">16</span></p>
                  
                </div>
                <ul className="flex-1 mb-6 bg-[#F9FAFB] p-6 rounded-lg font-medium flex flex-col gap-y-2">
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>All the features of pro plan</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Account success Manager</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Single Sign-On (SSO)</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Co-conception pogram</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#54BD95]">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Collaboration-Soon</span>
                  </li>
                  
                  <button type="button" className=" bg-white items-center justify-center  flex rounded-lg px-5 py-3 font-semibold tracki text-center  mx-auto text-[#54BD95]">Signup for free</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Plans