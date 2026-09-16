import React from 'react'
import CrimeFolder from './CrimeFolder'

const HomePractices = () => {
  return (
    <section className='HomePractices flex h-auto flex-col items-center overflow-hidden'>
      <div className='TvHeaderBg relative z-10 w-full max-w-xl'>
        <h1 className='text-center font-display-xl uppercase leading-[0.82] tracking-[0.08em]'>
          <span className='inline-block mt-2 -rotate-1 text-[clamp(2.2rem,4.2vw,4.2rem)] text-[#ffd700] [text-shadow:4px_4px_0_#000]'>Hello Albuquerque!</span>
          <br />
          <span className='mt-2 inline-block text-[clamp(1.8rem,3.5vw,3rem)] text-[#E23D28] [text-shadow:4px_4px_0_#000]'>Troubles With </span>
          <span className='mt-3 inline-block px-3 py-2 text-[clamp(1.8rem,3.5vw,3rem)] text-[#89ACE7] [text-shadow:4px_4px_0_#000]'>THE LAW?</span>
        </h1>
      </div>

      <CrimeFolder />

      <div className='relative -top-4 text-center sm:-top-6'>
        <p className='font-display-xl text-[clamp(2.2rem,4.8vw,4rem)] uppercase leading-none tracking-[0.04em] text-[#FFD700] [text-shadow:4px_4px_0_#000]'>
          "Better Call <span className='text-[#E23D28]'>Saul!"</span>
        </p>
        <a
          href='tel:+15055034455'
          className='mt-2 inline-block rotate-1 bg-[#3A5F94] px-3 py-1 font-headline-lg text-[clamp(1rem,2.2vw,1.5rem)] uppercase leading-none text-white '
        >
          Dial <span className='text-[#FFD700]'>(505)-503-4455</span> For Free Consultation!
        </a>
      </div>
    </section>
  )
}

export default HomePractices