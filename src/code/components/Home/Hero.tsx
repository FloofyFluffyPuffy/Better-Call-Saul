import React from 'react'
import { CrimeProps } from '@/code/types/types'

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
    description: "He insulted your mom first! Don't let that slide!",
    btnText: 'Better Call Saul!',
    bgColor: 'bg-red-100',
    btnColor: 'bg-red-500',
    titleColor: 'text-red-400',
  },
]

const CrimeCard = ({ crime, description, btnText, bgColor, btnColor, titleColor, tiltClass }: CrimeProps & { tiltClass?: string }) => {
  return (
    <div className={`CrimeCardOuter w-full border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white p-1 transition-transform hover:rotate-0 ${tiltClass || ''}`}>
      <article className="CrimeCardCon w-full h-full border-3 border-black flex flex-col">
        <div className="Title bg-black px-2.5 py-1.5 shrink-0">
          <h2 className={`${titleColor} font-black uppercase italic text-base tracking-tight leading-none`}>
            {crime}
          </h2>
        </div>

        <div className={`Description ${bgColor} px-2.5 py-1.5 border-b-3 border-black flex-1 overflow-hidden flex items-center`}>
          <p className="text-black font-black text-sm leading-snug line-clamp-2">
            {description}
          </p>
        </div>

        <div className={`Button ${bgColor} px-2.5 py-1.5 shrink-0`}>
          <button className={`w-full ${btnColor} border-3 border-black hover:text-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-sm text-white py-1.5 cursor-pointer hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all`}>
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
      <div className="HeroCon w-full max-w-6xl h-full flex justify-between items-center gap-6 px-8 py-3">

        <div className="flex flex-col gap-5 w-full max-w-[280px] h-full max-h-[70%] justify-center self-center">
          <CrimeCard {...CrimeInfo[0]} tiltClass="-rotate-2" />
          <CrimeCard {...CrimeInfo[1]} tiltClass="rotate-1" />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-[480px]">
          <div className="flex flex-col items-center justify-center w-full py-1">
            <h1 className="text-yellow-300 font-black uppercase text-xl md:text-2xl leading-none tracking-tight -rotate-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Albuquerque <span className="text-red-600">#1</span> Criminal Attorney
            </h1>

            <h2 className="text-red-600 font-black uppercase text-3xl md:text-4xl tracking-wider leading-none italic rotate-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mt-1">
              Now On Your Side!
            </h2>
          </div>

          <div className="border-3 place-items-center p-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white flex justify-center items-center -rotate-1 transition-transform hover:rotate-0">
            <div className='border-black sauloffice bg-18'>
              <img src="/assets/SaulPoint.png" className="w-100 h-100" />
            </div>
          </div>

          <button className="mt-5 w-full bg-red-600 hover:bg-red-500 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] px-4 py-3 text-center -rotate-2 transition-all hover:rotate-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer flex items-center justify-center gap-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 -960 960 960" 
              className="w-8 h-8 md:w-9 md:h-9 fill-yellow-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] shrink-0"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 23.5l26 140q2 16-1.5 28.5T368-616L279-527q18 33 40.5 64t49.5 59.5q27 27 58 49.5t63 41.5l90-90q13-13 26-16.5t28 1.5l138 28q15 3 24.5 14t9.5 25v162q0 18-12 30t-30 12Z"/>
            </svg>
            <span className="text-yellow-300 font-black uppercase text-2xl md:text-3xl tracking-tight leading-none italic drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Better Call Saul!
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-5 w-full max-w-[280px] h-full max-h-[70%] justify-center self-center">
          <CrimeCard {...CrimeInfo[3]} tiltClass="rotate-2" />
          <CrimeCard {...CrimeInfo[2]} tiltClass="-rotate-1" />
        </div>

      </div>
    </section>
  )
}

export default HomeHero