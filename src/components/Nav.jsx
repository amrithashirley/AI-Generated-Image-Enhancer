import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className="w-full h-20 flex justify-between align-middle p-6">
    <h1 className="text-xl sm:text-5xl">Pixie Fixie</h1>
    <button className="text-base sm:text-lg md:text-xl lg:text-2xl h-8 w-25 md:w-40 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8 rounded-full bg-[#FD61A2] cursor-pointer hover:bg-[#FF9E5B] transition-colors duration-300">
  Try now!
</button>
    </nav>
    </>
  )
}

export default Nav