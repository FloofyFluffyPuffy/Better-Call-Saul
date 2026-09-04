import React from 'react'
import { Stars } from './Testimonials'
const TestimonialsHero = () => {
  return (
          <section className="border-b-[3px] border-black px-4 pb-14 pt-36 sm:px-8 sm:pt-40" >
        <div className="mx-auto py-4 dotBg bg-white border-black border-[3px] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] max-w-6xl text-center">
          <p className="mb-4 inline-block rotate-[-2deg] border-[3px] border-black bg-[#FFE16D] px-3 py-2 font-label-bold text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000]">
            Saul Goodman & Associates / Case File 505
          </p>
          <h1 className="font-display-xl text-[clamp(3.4rem,11vw,8rem)] uppercase leading-[0.82] text-[#89ACE7] [text-shadow:5px_5px_0_#000]">
            Real Clients.<br /><span className="text-[#E23D28]">Real Results.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl [text-shadow:_1px_1px_0px_#FFD700] font-body-lg text-lg font-bold leading-tight sm:text-2xl">
            Don&apos;t just take our word for it. Hear from the Americans who chose the lawyer who always gets results.
          </p>
        </div>
      </section>
  )
}

export default TestimonialsHero