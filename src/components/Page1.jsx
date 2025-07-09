import React, { useRef, useEffect } from 'react';
import Nav from './nav';

const Page1 = () => {
  return (
    <>
    <Nav/>
    <div id="img-out" className=' w-full flex justify-between align-middle items-center'>
      <img className="w-3xl" src="/before-after.png" alt="img" />
    </div>
    </>
  )
}

export default Page1;