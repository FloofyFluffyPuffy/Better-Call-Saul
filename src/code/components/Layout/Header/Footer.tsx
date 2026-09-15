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

const footerLegalLinks = [
  ['Privacy Policy', '/'],
  ['Disclaimer', '/'],
  ['Accessibility', '/'],
] as const

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='FooterContent h-auto bg-[#3A5F94]'>
        <div className='yellowBlackBg h-8'></div>
        <div className='GridCon grid grid-cols-4'>
          <div className='Logo relative col-span-5 flex items-center justify-center overflow-hidden bg-[#3A5F94] p-3 md:col-span-1'>
            <img src="/assets/SaulPoint2.png" alt="Better Call Saul" className='block h-auto translate-y-4 w-36 md:w-full' />
          </div>
          <div className='TextCon relative col-span-5 grid grid-rows-[auto_auto] gap-3 bg-[#3A5F94] p-3 md:col-span-3 md:p-4'>
            <div className='FlexCon flex w-full items-start'>
              <div className='w-full'>
                <p className='mb-2 inline-block -rotate-2 bg-[#e23d28] px-2 py-1 font-label-bold text-xs uppercase tracking-[0.18em] text-white'>"I WANT MY LAWYER!"</p>
                <div className='flex flex-wrap items-center gap-3'>
                  <h1 className='font-headline-lg text-4xl uppercase leading-[0.9] text-[#E23D28] [text-shadow:3px_3px_0_#000000] sm:text-5xl'>Don&apos;t Talk To The Police!</h1>
                  <a href="tel:+15551234567" className='inline-flex shrink-0 items-center gap-2 border-[3px] border-black bg-[#FFD700] p-2 font-headline-lg text-3xl uppercase leading-[0.9] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-none'>
                    <img src="/assets/phone.svg" alt="" className='h-10 w-10 shrink-0 sm:h-12 sm:w-12' />
                    Better Call Saul!
                  </a>
                  <p className='font-label-bold text-sm uppercase leading-tight text-black'>DIAL SAUL NOW 505-503-4455</p>
                </div>
                <p className='absolute right-5 top-5 z-10 mb-2 inline-block rotate-2 bg-[#e23d28] px-2 py-1 font-label-bold text-xs uppercase tracking-[0.18em] text-white'>Free Consultation!</p>
              </div>
            </div>
            <div className='grid grid-cols-1 content-start gap-x-4 gap-y-1 border-t-[3px] border-black pt-2 sm:grid-cols-2 lg:grid-cols-3'>
              {criminalLinks.map(([name, page]) => (
                <Link key={page} href={page} rel='noopener noreferrer' className='border-2 border-black bg-[#E6C88B] p-2 py-0.5 font-label-bold text-xs uppercase text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD700] hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div className='LegalBar col-span-full grid gap-3 border-t-[3px] border-black bg-[#FFD700] p-3 text-black sm:grid-cols-[1fr_auto] sm:items-center'>
            <div>
              <p className='font-label-bold text-xs uppercase'>Better Call Saul Law Offices</p>
              <p className='mt-1 max-w-3xl font-body-md text-xs leading-tight'>This website is for general information only and does not create an attorney-client relationship. Past results do not guarantee future outcomes. Every case is different. Do not send confidential information through this website.</p>
            </div>
            <div className='flex flex-wrap gap-x-4 gap-y-1 font-label-bold text-xs uppercase sm:justify-end'>
              {footerLegalLinks.map(([name, page]) => (
                <Link key={name} href={page} rel='noopener noreferrer' className='underline decoration-2 underline-offset-2 hover:text-[#e23d28]'>{name}</Link>
              ))}
              <span>© 2026 Saul Law</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer