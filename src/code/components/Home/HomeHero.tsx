import React from 'react'

const HomeHero = () => {
  return (
      <section className="px-4 w-full h-[90vh] border-b-3 pb-14 pt-36 sm:px-8 sm:pt-40" >
        <div className="mx-auto py-4  max-w-6xl text-center">
          <p className="mb-4 inline-block rotate-[-2deg] border-[3px] border-black bg-[#FFE16D] #E23D28 px-3 py-2 font-label-bold text-xs uppercase tracking-[0.40em] shadow-[4px_4px_0_#000]">
            Saul Goodman & Associates
          </p>
          <h1 className="font-display-xl text-[clamp(3.4rem,11vw,8rem)] uppercase leading-[0.82] text-[#89ACE7] [text-shadow:5px_5px_0_#000]">
           Legal Trouble?<br /><span className="text-[#E23D28]">"Better Call Saul!"</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl [text-shadow:_1px_1px_0px_#FFD700] font-body-lg text-lg font-bold leading-tight sm:text-2xl">
            Don&apos;t just take our word for it. Hear from the Americans who chose the lawyer who always gets results.
          </p>
        </div>
      </section>
  )
}

export default HomeHero