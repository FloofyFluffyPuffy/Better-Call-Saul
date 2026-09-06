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
    <section className="HomeHero dotBg bg-white h-screen flex items-center flex-col overflow-hidden">
      <div className='Container mt-[2%] bg-white w-[96%] border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] '>
        <h1 className=' py-8 text-center font-display-xl text-[clamp(2.75rem,9vw,5rem)] uppercase leading-[0.82]'>
          <span className='text-black'>DO YOU HAVE</span> <br />
          <span className='inline-block mt-[1%] bg-[#E23D28] p-4 rotate-2 text-white'>A CASE?</span>
        </h1>
      </div>
    </section>
  )
}

export default GotACase