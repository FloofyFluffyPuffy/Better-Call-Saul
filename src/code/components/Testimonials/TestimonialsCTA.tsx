import React from 'react'
import Link from 'next/link'
const TestimonialsCTA = () => {
  return (
          <section className="bg-[#f4d35e] px-4 py-14 sm:px-8 sm:py-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 12px, rgba(226,61,40,.22) 12px 15px)" }}>
        <div className="mx-auto max-w-4xl -rotate-1 border-[3px] border-black bg-[#fffdf3] px-5 py-9 text-center shadow-[7px_7px_0_#000] sm:px-10">
          <p className="font-label-bold text-xs uppercase tracking-[0.2em]">Want to be on this wall?</p>
          <h2 className="mt-2 font-display-xl text-5xl uppercase leading-none sm:text-7xl">Call Saul.</h2>
          <p className="mx-auto mt-4 max-w-xl font-body-lg font-bold">A free consultation is only one phone call away. Completely confidential. Probably.</p>
          <Link href="tel:+15551234567" className="mt-7 inline-flex rotate-1 items-center gap-2 border-[3px] border-black bg-[#e23d28] px-5 py-3 font-headline-lg text-2xl text-yellow-300 shadow-[4px_4px_0_#000] transition-transform duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            <span role="img" aria-label="Phone" className="phone-icon-yellow h-6 w-6" />
            DIAL 505-503-4455
          </Link>
        </div>
      </section>
  )
}

export default TestimonialsCTA