import React from 'react'
import Uploaded from './Uploaded'
import Enhanced from './Enhanced'

const Page2 = () => {
  return (
    <>
    <div id="top" className='flex justify-center items-center flex-col gap-3'>
      <h2 className='text-center text-6xl '>Begin Your Photo <span className='text-[#DD7AA3]'>Upgrade</span></h2>
      <label htmlFor="fileInput" className="text-center text-2xl bg-[#FF9E5B] rounded-3xl w-52 h-12 cursor-pointer flex items-center justify-center border-3 border-dashed border-[#d9d8d8] hover:border-[#fff]">
          Drop Image Here
      </label>
      <input id="fileInput" type="file" className="hidden " />
    </div>
      
    <div
  id="cards"
  className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 w-full px-4"
>
      <Uploaded/>
      <Enhanced/>
    </div>
   

 
    
    </>
  )
}

export default Page2