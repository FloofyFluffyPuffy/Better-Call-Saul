import { CrimeProps } from '@/code/types/types'
import ColorText from '@/code/utilities/ColorText'
import CrimeCard from '../../utilities/CrimeCard'
const CrimeInfo: CrimeProps[] = [
  {
    crime: 'DUI / DWI',
    description: "Breathalyzer broken? Officer on a power trip?",
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



const GotACase = () => {
  return (
    <section className="HomeHero dotBg w-screen bg-white h-screen flex justify-center items-center flex-col overflow-hidden">
      <div className="HeroCon w-full max-w-6xl h-full flex justify-between items-center gap-6 px-8 py-3">

        <div className="flex flex-col gap-5 w-full max-w-[280px] h-full max-h-[70%] justify-center self-center">
          <CrimeCard {...CrimeInfo[0]} tiltClass="-rotate-2" />
          <CrimeCard {...CrimeInfo[1]} tiltClass="rotate-1" />
        </div>

        <div className="flex translate-y-10 flex-col items-center justify-center gap-3 w-full max-w-[480px]">
          <div className="flex flex-col items-center justify-center w-full py-1">
                    <div className="flex flex-col items-center justify-center w-full py-1">
            <ColorText />
          </div>
          </div>

          <div className="border-3 place-items-center p-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#F4D35E] flex justify-center items-center -rotate-1 transition-transform duration-300 hover:rotate-0">
            <div className='border-black sauloffice bg-18'>
              <img src="/assets/SaulPoint.png" className="w-70 h-70" />
            </div>
          </div>


          <a
            href="tel:+15551234567"
            className="mt-5 flex w-[90%] -rotate-2 duration-300 items-center justify-center gap-3 border-4 border-black bg-[#E23D28] px-4 py-3 text-center font-headline-lg text-2xl leading-none text-white shadow-[4px_4px_0_#000] transition-transform hover:rotate-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:text-3xl"
          >
            <img src="/assets/phone.svg" alt="" className="h-7 w-7 shrink-0 md:h-8 md:w-8" />
            <span>
              Better Call Saul!
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-5 w-full max-w-[280px] h-full max-h-[70%] justify-center self-center">
          <CrimeCard {...CrimeInfo[3]} tiltClass="rotate-2" />
          <CrimeCard {...CrimeInfo[2]} tiltClass="-rotate-1" />
        </div>

      </div>
    </section>
  )
}

export default GotACase