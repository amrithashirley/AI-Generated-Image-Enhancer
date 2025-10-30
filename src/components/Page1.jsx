import React, { useRef, useEffect } from 'react';
import Nav from './Nav';

const Page1 = () => {
  return (
    <>
    <Nav/>
    <div id="img-out" className="w-full flex justify-center items-center py-10">
  <img src="/before-after.png" alt="Before and After" className="max-w-3xl w-full h-auto shadow-lg"
  />
</div>
    </>
  )
}

export default Page1;