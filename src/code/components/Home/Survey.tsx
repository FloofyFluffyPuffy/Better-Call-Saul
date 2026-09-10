import React from 'react'
import Link from 'next/link'
import CrimeCard from '@/code/utilities/CrimeCard'
import { SurveyDetails } from '@/code/types/types'

const Survey = ({ surveyDetails, labelTilt, featured = false }: { surveyDetails: SurveyDetails; labelTilt: string; featured?: boolean }) => {
  return (
    <div className={`OuterCon mt-14 flex h-160 w-full min-w-0 flex-col border-4 border-black p-2 shadow-[8px_8px_0_0_#000] ${surveyDetails.formColor} ${featured ? 'scale-[1.08] -translate-y-3 shadow-[10px_10px_0_0_#000]' : 'opacity-95'}`}>
      <div className='Clipper relative z-2 self-center -translate-y-6 flex h-[6%] w-[30%] items-center justify-center'>
        <div className='ClipperCircle absolute -top-7 left-1/2 z-0 h-11 w-11 -translate-x-1/2 translate-y-2 rounded-full border-[6px] border-black bg-[#d4d4d4]'>
        <div className='ClipplerCircleCircle flex justify-self-center translate-y-1 self-center bg-black rounded-full w-[50%] h-[50%]'></div>
        </div>
        <div className='relative z-1 flex h-full w-full items-center justify-center rounded-t-xl border-[6px] border-black bg-[#a3a3a3] '>
          <div className='ClipperCenter h-[25%] w-[54%] rounded-full bg-[#404040]' />
        </div>
      </div>


      <div className='ContentCon self-center h-[88%] w-[94%] overflow-hidden border-4 border-black bg-white p-3'>
        <div className='mb-3 border-b-3 border-black bg-white px-2 py-2'>
          <h2 className={`inline-block ${surveyDetails.formColor} ${labelTilt} px-3 py-2 font-display-xl text-xl uppercase leading-none text-white ${featured ? 'text-2xl' : ''}`}>
            {surveyDetails.law}
          </h2>
        </div>
        <div className='flex flex-col gap-3'>
          {surveyDetails.details.map((detail) => (
            <CrimeCard key={detail.crime} {...detail} />
          ))}
        </div>
        <Link href={surveyDetails.page} className={`mt-3 block border-4 border-black ${surveyDetails.formColor} px-4 py-3 text-center font-black uppercase text-black shadow-[4px_4px_0_0_#000] transition-transform duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}>
          Find Out More
        </Link>
      </div>
    </div>
  )
}

export default Survey