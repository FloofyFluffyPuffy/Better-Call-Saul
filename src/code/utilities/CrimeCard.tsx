import React from 'react'
import { CrimeProps } from '@/code/types/types'
const CrimeCard = ({ crime, description, outerColor, bgColor, titleColor, tiltClass }: CrimeProps & { tiltClass?: string }) => {
  return (
    <div className={`CrimeCardOuter w-full border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${outerColor} p-1 transition-transform duration-300 hover:rotate-0 ${tiltClass || ''}`}>
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
      </article>
    </div>
  )
}

export default CrimeCard