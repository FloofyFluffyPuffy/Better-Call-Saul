import React from 'react'
import Navigation from './Navigation'


const Header = () => {
  return (
    <header className='flex justify-between border-b-4 border-black items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-red-500'>
        <img className='w-20 h-12' src="/assets/saul_logo_black.png" alt="Logo" />
        <Navigation/>
        <a href="tel:+15551234567">
        Call Now: (555) 123-4567
        </a>
    </header>
  )
}

export default Header