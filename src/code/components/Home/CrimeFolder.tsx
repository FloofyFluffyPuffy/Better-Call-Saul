import React from 'react'
import Link from 'next/link'

type CrimeFolderProps = {
  title: string;
  page: string;
  titleBgColor: string;
  tab: string;
  estPrison: string;
  statFine: string;
  imageTilt: number;
}

const CrimeFolders: CrimeFolderProps[] = [
  {
    title: 'Assault & Battery',
    page: '/assault-battery',
    tab: '01',
    estPrison: '1 - 5 YRS STATE',
    statFine: '$25,000 + COURT COSTS',
    titleBgColor: '#E23D28',
    imageTilt: -2,
  },
  {
    title: 'Drug Trafficking',
    page: '/drug-trafficking',
    tab: '02',
    estPrison: '5 - 20 YRS FED',
    statFine: '$500,000 + ASSETS',
    titleBgColor: '#16A34A',
    imageTilt: -1,
  },
  {
    title: 'Gun Crimes',
    page: '/gun-crimes',
    tab: '03',
    estPrison: '2 - 15 YRS FED',
    statFine: '$250,000 + FORFEITURE',
    titleBgColor: '#2563EB',
    imageTilt: 0,
  },
  {
    title: 'White Collar',
    page: '/white-collar-crimes',
    tab: '04',
    estPrison: '1 - 10 YRS FED',
    statFine: '$1,000,000 + RESTITUTION',
    titleBgColor: '#FACC15',
    imageTilt: 1,
  },
  {
    title: 'Criminal Investigation',
    page: '/criminal-investigation',
    tab: '05',
    estPrison: '0 - 5 YRS STATE',
    statFine: '$50,000 + PROBATION',
    titleBgColor: '#A855F7',
    imageTilt: 2,
  },
  {
    title: 'Armed Robbery',
    page: '/armed-robbery',
    tab: '06',
    estPrison: '5 - 20 YRS FED',
    statFine: '$250,000 + RESTITUTION',
    titleBgColor: '#E23D28',
    imageTilt: -1,
  },
  {
    title: 'Federal Offenses',
    page: '/federal-offenses',
    tab: '07',
    estPrison: '5 - 20 YRS FED',
    statFine: '$500,000 + ASSETS',
    titleBgColor: '#2563EB',
    imageTilt: 2,
  },
  {
    title: 'Manslaughter',
    page: '/manslaughter',
    tab: '08',
    estPrison: '4 - 15 YRS STATE',
    statFine: '$100,000 + DAMAGES',
    titleBgColor: '#E23D28',
    imageTilt: -2,
  },
  {
    title: 'Murder',
    page: '/murder',
    tab: '09',
    estPrison: 'LIFE / DEATH',
    statFine: '$250,000 + RESTITUTION',
    titleBgColor: '#E23D28',
    imageTilt: 1,
  },
  {
    title: 'Sex Crimes',
    page: '/sex-crimes',
    tab: '10',
    estPrison: '10 - 25 YRS STATE',
    statFine: '$100,000 + REGISTRY',
    titleBgColor: '#A855F7',
    imageTilt: -2,
  },
  {
    title: 'Civil Rights',
    page: '/civil-rights',
    tab: '11',
    estPrison: '1 - 10 YRS FED',
    statFine: '$250,000 + DAMAGES',
    titleBgColor: '#16A34A',
    imageTilt: 1,
  },
  {
    title: 'Other Matters',
    page: '/other-criminal-matters',
    tab: '12',
    estPrison: '0 - 10 YRS STATE',
    statFine: '$25,000 + COURT COSTS',
    titleBgColor: '#FACC15',
    imageTilt: 2,
  },
]

const CrimeFolder = () => {
  return (
    <main className=' h-screen flex justify-center items-center'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-6 px-8 gap-4 gap-y-10'>
        {CrimeFolders.map((item, index) => (
          <Link href={item.page} rel='noopener noreferrer' className='relative group scale-90 hover:scale-100 transition-all duration-300 cursor-pointer' data-purpose='case-card' key={item.tab}>
            <div className='CrimeTab absolute rounded-t-md z-1 border-b-0 left-4 -top-5 border-4 border-black bg-[#F6E6B4] w-24 h-6 text-center font-black leading-5'>
              {item.tab}
            </div>
            <div className='ContentCon flex justify-center items-center bg-[#F6E6B4] border-4 border-black shadow-[5px_5px_0_#000] p-3 relative pt-5 flex-col h-[260px]'>
              <div className='ImageCon w-24 h-20 bg-white border-2 border-black shadow-brutal-sm p-1.5 z-20' style={{ transform: `rotate(${item.imageTilt}deg)` }}>
                  <img src="/assets/SaulOfficeBG.png" className='border-2 w-full h-full' alt="" />
              </div>

              <div>
                <h1 className='text-[15px] text-center mt-4 border-t-3 border-b-3  font-black uppercase leading-tight'>
                  {item.title}
                </h1>
              </div>

              <div className='Confidential border-[#E23D28] px-1 py-1 text-[#E23D28] tracking-[0.20em] border-dotted border-2 mt-3 text-center -rotate-3 text-[10px] font-black uppercase'>
                CONFIDENTIAL
              </div>

              <div className='PenaltyCon bg-[#E6C88B] mt-3 border-2 border-dotted border-black px-2 py-1'>
                <div className='flex items-center justify-between gap-2 text-black font-black uppercase leading-none tracking-tight'>
                  <span className='text-[9px] sm:text-[10px]'>EST. PRISON:</span>
                  <span className='text-[9px] text-[#E23D28] sm:text-[10px] text-right'>{item.estPrison}</span>
                </div>
                <div className='DotDivider my-1 border-t-2 border-dotted border-black'></div>
                <div className='flex gap-2 text-black font-black uppercase leading-none tracking-tight'>
                  <span className='text-[9px]'>STAT. FINE:</span>
                  <span className='text-[9px]'>{item.statFine}</span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default CrimeFolder