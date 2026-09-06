import React from 'react'

const HomeHero = () => {
  return (
      <section className="px-4 w-full h-[90vh] overflow-hidden border-b-3 pb-14 pt-36 sm:px-8 sm:pt-40" >
        <div className="mx-auto py-4  max-w-6xl text-center">
          <p className="mb-4 inline-block -translate-x-30 rotate-[-2deg] border-[3px] border-black bg-[#FFE16D] #E23D28 px-3 py-2 font-label-bold text-xs uppercase tracking-[0.40em] shadow-[4px_4px_0_#000]">
            Saul Goodman & Associates
          </p>
          <h1 className="relative font-display-xl text-[clamp(3.4rem,11vw,8rem)] uppercase leading-[0.82] text-[#89ACE7] [text-shadow:5px_5px_0_#000]">
           <span className="relative inline-block z-10 -translate-x-42">Legal Trouble?</span><br />
           <img src="/assets/saulCoffee.png" alt="Saul Goodman holding a coffee" className="pointer-events-none absolute left-1/2 top-[calc(34%+1px)] z-20 h-124 w-124 -translate-y-55 translate-x-30" />
           <span className="relative z-30"><span className="text-[#FFDF20]">"<span>Better Call </span></span><span className="text-[#E23D28]"><span>Saul!</span>"</span></span>
          </h1>
          <a
            href="tel:+15551234567"
            className="mx-auto mt-7 -translate-x-22 inline-flex duration-300 items-center gap-3 border-4 border-black bg-[#E23D28] px-5 py-3 font-headline-lg text-2xl leading-none tracking-[0.40em] text-white shadow-[4px_4px_0_#000] transition-transform hover:translate-x-[calc(-5.5rem+2px)] hover:translate-y-[2px] hover:shadow-none"
          >
            <img src="/assets/phone.svg" alt="" className="h-40 w-7 sm:h-8 sm:w-8" />
            <p>DIAL (505) 503-4455!</p>
          </a>
        </div>
      </section>
  )
}

export default HomeHero