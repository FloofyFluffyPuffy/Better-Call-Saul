import React from 'react'

type CrimeFolderProps = {
  title: string;
  titleBgColor: string;
  tab: string;
  estPrison: string;
  statFine: string;
}

const CrimeFolders: CrimeFolderProps[] = [
  {
    title: 'Assault & Battery',
    tab: '01',
    estPrison: '1 - 5 YRS STATE',
    statFine: '$25,000 + COURT COSTS',
    titleBgColor: '#E23D28',
  },
  {
    title: 'Drug Trafficking',
    tab: '02',
    estPrison: '5 - 20 YRS FED',
    statFine: '$500,000 + ASSETS',
    titleBgColor: '#16A34A',
  },
  {
    title: 'Gun Crimes',
    tab: '03',
    estPrison: '2 - 15 YRS FED',
    statFine: '$250,000 + FORFEITURE',
    titleBgColor: '#2563EB',
  },
  {
    title: 'White Collar',
    tab: '04',
    estPrison: '1 - 10 YRS FED',
    statFine: '$1,000,000 + RESTITUTION',
    titleBgColor: '#FACC15',
  },
  {
    title: 'Criminal Investigation',
    tab: '05',
    estPrison: '0 - 5 YRS STATE',
    statFine: '$50,000 + PROBATION',
    titleBgColor: '#A855F7',
  },
  {
    title: 'Armed Robbery',
    tab: '06',
    estPrison: '5 - 20 YRS FED',
    statFine: '$250,000 + RESTITUTION',
    titleBgColor: '#E23D28',
  },
  {
    title: 'Federal Offenses',
    tab: '07',
    estPrison: '5 - 20 YRS FED',
    statFine: '$500,000 + ASSETS',
    titleBgColor: '#2563EB',
  },
  {
    title: 'Man-slaughter',
    tab: '08',
    estPrison: '4 - 15 YRS STATE',
    statFine: '$100,000 + DAMAGES',
    titleBgColor: '#E23D28',
  },
  {
    title: 'Murder',
    tab: '09',
    estPrison: 'LIFE / DEATH',
    statFine: '$250,000 + RESTITUTION',
    titleBgColor: '#E23D28',
  },
  {
    title: 'Sex Crimes',
    tab: '10',
    estPrison: '10 - 25 YRS STATE',
    statFine: '$100,000 + REGISTRY',
    titleBgColor: '#A855F7',
  },
  {
    title: 'Civil Rights',
    tab: '11',
    estPrison: '1 - 10 YRS FED',
    statFine: '$250,000 + DAMAGES',
    titleBgColor: '#16A34A',
  },
  {
    title: 'Other Matters',
    tab: '12',
    estPrison: '0 - 10 YRS STATE',
    statFine: '$25,000 + COURT COSTS',
    titleBgColor: '#FACC15',
  },
]

const CrimeFolder = () => {
  return (
    <main className='dotBg h-200vh mx-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 p-8 gap-4 gap-y-8'>
        {CrimeFolders.map((item, index) => (
          <article className='relative group' data-purpose='case-card' key={item.tab}>
            <div className='CrimeTab absolute rounded-t-md z-1 border-b-0 left-6 -top-5 border-4 border-black bg-[#F6E6B4] w-24 h-6 text-center font-black leading-5'>
              {item.tab}
            </div>
            <div className='ContentCon bg-[#F6E6B4] border-4 border-black shadow-[5px_5px_0_#000] p-3 relative pt-5 flex flex-col h-[250px]'>
              <div className='ImageCon absolute -top-5 -right-5 w-24 h-24 bg-white border-2 border-black shadow-brutal-sm p-1.5 rotate-6 z-20'>
                  <img src="/assets/SaulOfficeBG.png" className='border-2 w-full h-full' alt="" />
              </div>

              <div>
                <h1 className='text-[15px] mt-4 border-t-3 border-b-3 text-start font-black uppercase leading-tight max-w-[110px]'>
                  {item.title}
                </h1>
              </div>

              <div className='Confidential border-[#E23D28] text-[#E23D28] tracking-[0.20em] border-dotted border-2 mt-3 text-center -rotate-3 text-[10px] font-black uppercase'>
                CONFIDENTIAL
              </div>

              <div className='PenaltyCon mt-3 border-2 border-dotted border-black px-2 py-1'>
                <div className='flex items-center justify-between gap-2 text-black font-black uppercase leading-none tracking-tight'>
                  <span className='text-[9px] sm:text-[10px]'>EST. PRISON:</span>
                  <span className='text-[9px] sm:text-[10px] text-right'>{item.estPrison}</span>
                </div>
                <div className='DotDivider my-1 border-t-2 border-dotted border-black'></div>
                <div className='flex items-center justify-between gap-2 text-black font-black uppercase leading-none tracking-tight'>
                  <span className='text-[9px] sm:text-[10px]'>STAT. FINE:</span>
                  <span className='text-[9px] sm:text-[10px] text-[#E23D28] text-right'>{item.statFine}</span>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default CrimeFolder