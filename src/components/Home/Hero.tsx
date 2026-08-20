import React from 'react'
import { CrimeProps } from '@/code/types'

const CrimeInfo: CrimeProps[] = [
  {
    crime: 'DUI / DWI',
    description: "Breathalyzer broken? Officer didn't read you your rights?",
    btnText: 'Better Call Saul!',
    bgColor: 'bg-green-200',
    btnColor: 'bg-green-500',
    titleColor: 'text-green-400',
  },
  {
    crime: 'Theft',
    description: "You just happened to pick it up!",
    btnText: 'Better Call Saul!',
    bgColor: 'bg-purple-200',
    btnColor: 'bg-purple-500',
    titleColor: 'text-purple-400',
  },
  {
    crime: 'Drug charges',
    description: "Wrong place, wrong time? Not your pants?",
    btnText: 'Better Call Saul!',
    bgColor: 'bg-blue-200',
    btnColor: 'bg-blue-500',
    titleColor: 'text-blue-400',
  },
  {
    crime: 'Assault',
    description: "He insulted your mom too! Don't let that slide!",
    btnText: 'Better Call Saul!',
    bgColor: 'bg-red-100',
    btnColor: 'bg-red-500',
    titleColor: 'text-red-400',
  },
]

const CrimeCard = ({ crime, description, btnText, bgColor, btnColor, titleColor }: CrimeProps) => {
  return (
    <div className="CrimeCardOuter w-full h-full border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white p-1">
      <article className="CrimeCardCon w-full h-full border-3 border-black flex flex-col">
        {/* Title bar */}
        <div className="Title bg-black px-2.5 py-1.5 shrink-0">
          <h2 className={`${titleColor} font-black uppercase italic text-base tracking-tight leading-none`}>
            {crime}
          </h2>
        </div>

        {/* Description */}
        <div className={`Description ${bgColor} px-2.5 py-1.5 border-b-3 border-black flex-1 overflow-hidden flex items-center`}>
          <p className="text-black font-black text-sm leading-snug line-clamp-2">
            {description}
          </p>
        </div>

        {/* Button */}
        <div className={`Button ${bgColor} px-2.5 py-1.5 shrink-0`}>
          <button className={`w-full ${btnColor} border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-sm text-white py-1.5 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all`}>
            {btnText}
          </button>
        </div>
      </article>
    </div>
  )
}

const HomeHero = () => {
  return (
    <section className="HomeHero h-screen mx-[0.5%] my-[0.5%] flex justify-center items-center flex-col overflow-hidden">
      <div className="HeroCon w-full h-full grid grid-cols-3 place-items-center gap-3 p-3">
        <div className="col-span-2 h-full max-h-[60%] p-4 grid grid-cols-2 place-items-stretch grid-rows-2 gap-3 w-full self-center">
          {CrimeInfo.map((card) => (
            <CrimeCard key={card.crime} {...card} />
          ))}
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center gap-3 w-full h-full">
          {/* Headline above image */}
          <div className="bg-yellow-300 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-3 py-2 w-full text-center">
            <h1 className="text-black font-black uppercase italic text-lg md:text-xl leading-tight tracking-tight">
              Albuquerque <span className="text-red-600">#1</span> Criminal Attorney
            </h1>
          </div>

          {/* Image — untouched */}
          <div className="col-span-1 border-3 place-items-center p-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white flex justify-center items-center">
            <div className=' border-black sauloffice bg-18'>
              <img src="/assets/SaulPoint.png" className="w-100 h-100" />
            </div>
          </div>

          {/* Subheadline below image */}
          <div className="bg-red-600 border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-3 py-2 w-full text-center">
            <h1 className="text-white font-black uppercase italic text-lg md:text-xl leading-tight tracking-tight">
              Now On Your Side!
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero