import React from 'react'
import Link from 'next/link'

const criminalLinks = [
  ['Assault & Battery', '/assault-battery'],
  ['Drug Trafficking', '/drug-trafficking'],
  ['Gun Crimes', '/gun-crimes'],
  ['White Collar Crimes', '/white-collar-crimes'],
  ['Criminal Investigation', '/criminal-investigation'],
  ['Armed Robbery', '/armed-robbery'],
  ['Federal Offenses', '/federal-offenses'],
  ['Manslaughter', '/manslaughter'],
  ['Murder', '/murder'],
  ['Sex Crimes', '/sex-crimes'],
  ['Civil Rights', '/civil-rights'],
  ['Other Criminal Matters', '/other-criminal-matters'],
] as const

const Footer = () => {
  return (
    <footer className='Footer mb-4'>
      <div className='FooterContent h-auto border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] bg-[#FFD700] mx-auto max-w-7xl '>
        <div className='yellowBlackBg h-8'></div>
        <div className='GridCon grid grid-cols-4'>
          <div className='Logo relative col-span-4 flex items-center justify-center overflow-hidden border-b-[3px] border-black bg-[#003366] p-3 md:col-span-1 md:border-b-0 md:border-r-[3px]'>
            <div className='absolute -right-12 -top-12 h-32 w-32 rotate-12 border-[3px] border-black bg-[#E23D28] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' />
            <div className='relative rotate-[-3deg] border-[3px] border-black bg-[#FFD700] p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-0'>
              <img src="/assets/saul_logo.png" alt="Better Call Saul" className='block h-auto w-36 md:w-full' />
            </div>
          </div>
          <div className='TextCon col-span-4 grid grid-rows-[auto_auto] gap-3 bg-[#f9f9f9] p-3 md:col-span-3 md:p-4'>
            <div className='FlexCon flex w-full flex-col items-start gap-3 md:flex-row md:items-center md:justify-between md:gap-4'>
              <div className='max-w-xl'>
                <p className='mb-2 inline-block -rotate-2 border-[3px] border-black bg-[#e23d28] px-2 py-1 font-label-bold text-xs uppercase tracking-[0.18em] text-[#ffd700] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>I WANT MY LAWYER</p>
                <h1 className='font-headline-lg text-4xl uppercase leading-[0.9] text-black [text-shadow:3px_3px_0_#ffffff] sm:text-5xl'>Don&apos;t Talk To The Police!</h1>
              </div>
              <a href="tel:+15551234567" className='inline-flex shrink-0 rotate-2 border-[3px] border-black bg-[#e23d28] px-4 py-3 font-headline-lg text-xl uppercase leading-none text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:rotate-0 hover:shadow-none'>
                Better Call Saul!
              </a>
            </div>
            <div className='grid grid-cols-1 content-start gap-x-4 gap-y-1 border-t-[3px] border-black pt-2 sm:grid-cols-2 lg:grid-cols-3'>
              {criminalLinks.map(([name, page]) => (
                <Link key={page} href={page} rel='noopener noreferrer' className='border-b-2 border-black py-0.5 font-label-bold text-xs uppercase text-black hover:bg-[#ffd700]'>
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className='TestimonialArea bg-[#f9f9f9] col-span-4'>
            aewae
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer