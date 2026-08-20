import React from 'react'
import { CrimeProps } from '@/code/types'

const CrimeInfo: CrimeProps[] = [
  {
    crime: 'DUI / DWI',
    description: "Breathalyzer broken? Officer didn't read you your rights? Let's get that thrown out. Your mistakes shouldn't define your driving record.",
    btnText: 'Settle it now!',
    bgColor: 'bg-red-100',
  },
  {
    crime: 'Public nuisance',
    description: "Just expressing your First Amendment rights a little too loudly? Don't let the man tell you where and when you can be yourself.",
    btnText: 'Settle it now!',
    bgColor: 'bg-yellow-300',
  },
  {
    crime: 'Drug charges',
    description: "Wrong place, wrong time? Not your pants? We know how to introduce reasonable doubt where others see a closed case.",
    btnText: 'Settle it now!',
    bgColor: 'bg-blue-200',
  },
  {
    crime: 'Assault',
    description: "",
    btnText: 'Settle it now!',
    bgColor: 'bg-gray-100',
  },
]

const CrimeCard = ({ crime, description, btnText, bgColor }: CrimeProps) => {
  return (
    <article className="CrimeCardCon w-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
      {/* Title bar */}
      <div className="Title bg-black px-4 py-3">
        <h2 className="text-white font-black uppercase italic text-xl tracking-tight leading-none">
          {crime}
        </h2>
      </div>

      {/* Description */}
      <div className={`Description ${bgColor} px-4 py-4 border-b-3 border-black flex-1`}>
        <p className="text-black font-semibold text-sm leading-snug">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className={`Button ${bgColor} px-4 py-4`}>
        <button className="w-full border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black uppercase text-lg py-3 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
          {btnText}
        </button>
      </div>
    </article>
  )
}

const HomeHero = () => {
  return (
    <section className="HomeHero mx-[0.5%] my-[0.5%] flex justify-center items-center flex-col">
      <h1>Albuquerque #1 Criminal Attorney</h1>
      <h1>NOW ON YOUR SIDE!</h1>

      <div className="HeroCon w-full grid grid-cols-3  place-items-center gap-4 p-4">
        <div className="col-span-2 p-8 grid grid-cols-2 place-items-stretch grid-rows-2 gap-4 w-full">
          {CrimeInfo.map((card) => (
            <CrimeCard key={card.crime} {...card} />
          ))}
        </div>

        <div className="col-span-1 border-3 place-items-center p-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white flex justify-center items-center">
          <div className=' border-black sauloffice bg-18'>
            <img src="/assets/SaulPoint.png" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero