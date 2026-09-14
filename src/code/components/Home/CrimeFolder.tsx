import React from 'react'

type Dossier = {
  tab: string
  kind: string
  title: string
  docket: string
  code: string
  details: string
  prison: string
  fine: string
  status: string
  stamp: string
  color: string
}

const DOSSIERS: Dossier[] = [
  {
    tab: 'TAB-01: FEL-3',
    kind: 'NMSA § 30-3-5',
    title: 'Assault & Battery',
    docket: 'DOCKET: APD-8821-CR',
    code: 'ASSAULT &\nBATTERY',
    details: 'Alleged bar altercation with deadly weapon (pool cue). Grievous bodily injury alleged.',
    prison: '3 - 5 YRS',
    fine: '$5,000',
    status: 'STATUS: ACTIVE',
    stamp: 'DISMISSIBLE',
    color: 'bg-brutalRed text-white',
  },
  {
    tab: 'TAB-02: NAR-1',
    kind: '21 U.S.C. § 841',
    title: 'Drug Trafficking',
    docket: 'DOCKET: DEA-ABQ-409',
    code: 'DRUG\nTRAFFICKING',
    details: 'Alleged interstate distribution of 99.1% blue schedule II methamphetamine.',
    prison: '10 - LIFE',
    fine: '$1,000,000',
    status: 'STATUS: INDICTED',
    stamp: 'APD EXHIBIT',
    color: 'bg-brutalBlue text-black',
  },
  {
    tab: 'TAB-03: WEP-2',
    kind: '18 U.S.C. § 924(c)',
    title: 'Gun Crimes',
    docket: 'DOCKET: ATF-904-NM',
    code: 'GUN\nCRIMES',
    details: 'Possession of unregistered suppressed firearm with filed serial markers.',
    prison: '5 - 10 YRS',
    fine: '$250,000',
    status: 'STATUS: PENDING',
    stamp: 'SUPPRESSED',
    color: 'bg-zinc-900 text-white',
  },
  {
    tab: 'TAB-04: FIN-1',
    kind: '18 U.S.C. § 1343',
    title: 'White Collar',
    docket: 'DOCKET: IRS-CID-104',
    code: 'WHITE\nCOLLAR',
    details: 'Wire fraud, structured shell corporations, and cook-book financial skimming.',
    prison: '0 - 20 YRS',
    fine: '$500,000',
    status: 'STATUS: AUDITED',
    stamp: 'SETTLED OUT',
    color: 'bg-brutalYellow text-black',
  },
  {
    tab: 'TAB-05: CID-9',
    kind: 'APD REG-662',
    title: 'Criminal Investigation',
    docket: 'DOCKET: NM-INQ-770',
    code: 'CRIM\nINVESTIGATION',
    details: 'Grand jury investigation ongoing into corporate laser tag facility fronts.',
    prison: 'PRE-CHARGE',
    fine: '$50,000',
    status: 'STATUS: SUBPOENA',
    stamp: 'CONFIDENTIAL',
    color: 'bg-orange-400 text-black',
  },
  {
    tab: 'TAB-06: ROB-1',
    kind: 'NMSA § 30-16-2',
    title: 'Armed Robbery',
    docket: 'DOCKET: APD-6612-FEL',
    code: 'ARMED\nROBBERY',
    details: 'Purported armed stick-up at Los Pollos parking lot using simulated firearm.',
    prison: '9 YRS MAND.',
    fine: '$10,000',
    status: 'STATUS: JAILED',
    stamp: 'PLEA DEAL',
    color: 'bg-brutalRed text-white',
  },
  {
    tab: 'TAB-07: FED-1',
    kind: '18 U.S.C. § 1962 (RICO)',
    title: 'Federal Offenses',
    docket: 'DOCKET: US-DIST-81',
    code: 'FEDERAL\nOFFENSES',
    details: 'Racketeering influenced and corrupt organizations multi-state conspiracy.',
    prison: '20 - LIFE',
    fine: '$2,500,000',
    status: 'STATUS: TRIBUNAL',
    stamp: 'APD EXHIBIT',
    color: 'bg-sky-300 text-black',
  },
  {
    tab: 'TAB-08: HOM-2',
    kind: 'NMSA § 30-2-3',
    title: 'Man-slaughter',
    docket: 'DOCKET: APD-4419-VIO',
    code: 'MANSLAUGHTER',
    details: 'Involuntary vehicular incident near Central Ave crosswalk under negligence.',
    prison: '6 YRS STAT.',
    fine: '$5,000',
    status: 'STATUS: TRIAL SET',
    stamp: 'DISMISSIBLE',
    color: 'bg-brutalRed text-white',
  },
  {
    tab: 'TAB-09: CAP-1',
    kind: 'NMSA § 30-2-1(A)',
    title: 'Murder',
    docket: 'DOCKET: NM-HOMICIDE-01',
    code: 'MURDER',
    details: 'Willful, deliberate, and premeditated capital degree indictment.',
    prison: '30 TO LIFE',
    fine: 'NO BAIL',
    status: 'STATUS: SPECIAL CASE',
    stamp: 'URGENT CALL',
    color: 'bg-red-700 text-white',
  },
  {
    tab: 'TAB-10: SPC-3',
    kind: 'NMSA § 30-9-11',
    title: 'Sex Crimes',
    docket: 'DOCKET: APD-SVU-219',
    code: 'SEX\nCRIMES',
    details: 'Allegations demanding stringent evidentiary exclusion and alibi validation.',
    prison: '3 - 18 YRS',
    fine: '$15,000',
    status: 'STATUS: SEALED',
    stamp: 'EXPUNGABLE',
    color: 'bg-purple-300 text-black',
  },
  {
    tab: 'TAB-11: CIV-1',
    kind: '42 U.S.C. § 1983',
    title: 'Civil Rights',
    docket: 'DOCKET: FED-CIV-502',
    code: 'CIVIL\nRIGHTS',
    details: 'Unlawful search and seizure by municipal authorities under color of state law.',
    prison: 'PUNITIVE',
    fine: '$750,000',
    status: 'STATUS: IN LITIGATION',
    stamp: 'VICTORY',
    color: 'bg-brutalGreen text-black',
  },
  {
    tab: 'TAB-12: MISC',
    kind: 'GENERAL DEFENSE',
    title: 'Other Matters',
    docket: 'DOCKET: S-GOODMAN-LLC',
    code: 'OTHER\nMATTERS',
    details: 'Probation violations, bench warrants, DUI checkpoints, and evidence challenges.',
    prison: 'CONTINGENCY',
    fine: 'FREE 24/7',
    status: 'STATUS: AVAILABLE',
    stamp: 'GUARANTEED',
    color: 'bg-black text-white',
  },
]

const CrimeFolder = () => {
  return (
    <main className='max-w-7xl mx-auto p-4 md:p-8 my-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {DOSSIERS.map((item, index) => (
          <article className='relative group' data-purpose='case-card' key={item.tab}>
            <div className='ContentCon bg-[#F6E6B4] border-4 border-black shadow-[5px_5px_0_#000] p-4 relative pt-5 flex flex-col justify-between h-[290px]'>
              <div className='ImageCon absolute -top-5 -right-10 w-28 bg-white border-2 border-black shadow-brutal-sm p-1.5 rotate-6 z-20'>
                <div className='w-full bg-amber-500 h-20 bg-zinc-800 relative flex items-center justify-center overflow-hidden border border-black'>
                  <div className='w-10 h-10 rounded-full bg-zinc-600 mt-5 border border-zinc-500'></div>
                </div>
              </div>

              <div>

                <h1 className='text-xl mt-5 border-t-3 border-b-3 text-start font-black  uppercase leading-tight text-black max-w-[124px]'>
                  {item.title}
                </h1>
              </div>

              <div className='DescCon bg-amber-300'>
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