import React from 'react'
import CrimeFolder from './CrimeFolder'

const HomePractices = () => {
  return (
    <section className='HomePractices h-auto flex items-center flex-col overflow-hidden'>
      <div className='Container bg-white dotBg mt-[2%] w-[96%] border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] '>
        <h1 className=' py-8 text-center font-display-xl text-[clamp(2.75rem,9vw,5rem)] uppercase leading-[0.82]'>
          <span className='text-black'>WHAT KIND OF </span> <br />
          <span className='inline-block mt-[1%] bg-[#E23D28] p-4 rotate-2 text-white'>LEGAL TROUBLE?</span>
        </h1>

        {/* bg-[#E6C88B] */}
      </div>
      <CrimeFolder />
    </section>
  )
}

export default HomePractices