import React from 'react'

type CrimeFolderProps = {
  title: string

}

const CrimeFolders: CrimeFolderProps[] = [
  {
    title: 'Assault & Battery',
  },
  {
    title: 'Drug Trafficking',
  },
  {
    title: 'Gun Crimes',
  },
  {
    title: 'White Collar',
  },
  {
    title: 'Criminal Investigation',
  },
  {
    title: 'Armed Robbery',
  },
  {
    title: 'Federal Offenses',
  },
  {
    title: 'Man-slaughter',
  },
  {
    title: 'Murder',
  },
  {
    title: 'Sex Crimes',
  },
  {
    title: 'Civil Rights',
  },
  {
    title: 'Other Matters',
  },
]

const CrimeFolder = () => {
  return (
    <main className='max-w-7xl mx-auto p-4 md:p-8 my-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {CrimeFolders.map((item, index) => (
          <article className='relative group' data-purpose='case-card' key={item.tab}>
            <div className='ContentCon bg-[#F6E6B4] border-4 border-black shadow-[5px_5px_0_#000] p-4 relative pt-5 flex flex-col h-[290px]'>
              <div className='ImageCon absolute -top-5 -right-5 w-24 h-24 bg-white border-2 border-black shadow-brutal-sm p-1.5 rotate-6 z-20'>
                  <img src="/assets/SaulOfficeBG.png" className='w-full h-full' alt="" />
              </div>

              <div>

                <h1 className='text-xl mt-5 border-t-3 border-b-3 text-start font-black  uppercase leading-tight text-black max-w-[124px]'>
                  {item.title}
                </h1>
              </div>

              <div className='PenaltyCon mt-6 bg-amber-300'>
                <h2>EST Prison Time: 5 - 20 Years</h2>
                <div className='DotDivider'>-----------</div>
                <h2>EST FINE:</h2>
              </div>

            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default CrimeFolder