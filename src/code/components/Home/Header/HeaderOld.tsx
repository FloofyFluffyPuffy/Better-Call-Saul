import React from 'react'
import Navigation from './Navigation'


const HeaderOld = () => {
  return (
    <header className='sticky top-0 z-50 mx-[0.5%] h-18 mt-[0.5%] flex justify-between border-3 border-black items-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-[#E23D28]'>
        <img className='w-20 h-12 ml-2' src="/assets/saul_logo_black.png" alt="Logo" />
        <Navigation/>
        <a className='mr-2' href="tel:+15551234567">
        <div className='bg-[#3A5F94] font-headline-lg text-white tracking-tighter px-4 py-2 mb-1 text-center flex items-center justify-center border-3 rotate-[5deg] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 cursor-pointer'>
          CALL NOW!
        </div>
        </a>
    </header>
  )
}

export default HeaderOld