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

          <div className="border-3 place-items-center p-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#F4D35E] flex justify-center items-center -rotate-1 transition-transform hover:rotate-0">
            <div className='border-black sauloffice bg-18'>
              <img src="/assets/SaulPoint.png" className="w-70 h-70" />
            </div>
          </div>


          <button className="mt-5 w-[90%] bg-red-600 hover:bg-red-500 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] px-4 py-3 text-center -rotate-2 transition-all hover:rotate-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer flex items-center justify-center gap-3">
            <span
              role="img"
              aria-label="Phone"
              className="phone-icon-yellow h-8 w-8 shrink-0 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] md:h-9 md:w-9"
            />
            <span className="text-yellow-300 font-black uppercase text-2xl md:text-3xl tracking-tight leading-none italic drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Better Call Saul!
            </span>
          </button>
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