import React from 'react'
import { Stars } from './Testimonials'
const TestimonialsHero = () => {
  return (
          <section className="border-b-[3px] border-black bg-[#e23d28] px-4 pb-14 pt-36 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 inline-block rotate-[-2deg] border-[3px] border-black bg-[#f4d35e] px-3 py-2 font-label-bold text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000]">
            Saul Goodman & Associates / Case File 505
          </p>
          <h1 className="font-display-xl text-[clamp(3.4rem,11vw,8rem)] uppercase leading-[0.82] text-[#f4d35e] [text-shadow:5px_5px_0_#000]">
            Real Clients.<br /><span className="text-white">Real Results.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-body-lg text-lg font-bold leading-tight sm:text-2xl">
            Don&apos;t just take our word for it. Hear from the Americans who chose the lawyer who always gets results.
          </p>
          <div className="mx-auto mt-7 inline-flex -rotate-1 items-center gap-3 border-[3px] border-black bg-[#f4d35e] px-5 py-2 shadow-[4px_4px_0_#000]">
            <Stars />
            <span className="font-label-bold text-xs uppercase">Rated dangerously good</span>
          </div>
        </div>
      </section>
  )
}

export default TestimonialsHero