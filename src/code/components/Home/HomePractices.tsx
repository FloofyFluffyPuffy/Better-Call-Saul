import { SurveyDetails } from '@/code/types/types'
import Survey from './Survey'
const SurveyInfo: SurveyDetails[] = [
  {
    law: 'Personal Injury',
    page: '/personalinjury',
    formColor: 'bg-[#50A2FF]',
    details: [
      { crime: 'Car accident', description: 'Someone else caused the crash?', btnText: 'Better Call Saul!', bgColor: 'bg-red-100', btnColor: 'bg-red-500', titleColor: 'text-red-400', outerColor: 'bg-red-400' },
      { crime: 'Work injury', description: 'Hurt while doing your job and they refuse responssibility?', btnText: 'Better Call Saul!', bgColor: 'bg-yellow-100', btnColor: 'bg-yellow-500', titleColor: 'text-yellow-500', outerColor: 'bg-yellow-500' },
      { crime: 'Slip and fall', description: 'An unsafe property left you injured?', btnText: 'Better Call Saul!', bgColor: 'bg-blue-200', btnColor: 'bg-blue-500', titleColor: 'text-blue-400', outerColor: 'bg-blue-400' },
      { crime: 'Medical malpractice', description: 'A medical mistake caused additional harm?', btnText: 'Better Call Saul!', bgColor: 'bg-green-200', btnColor: 'bg-green-500', titleColor: 'text-green-400', outerColor: 'bg-green-400' },
    ],
  },
  {
    law: 'Criminal Defense',
    page: '/criminaldefense',
    formColor: 'bg-[#FF6467]',
    details: [
      { crime: 'DUI / DWI', description: 'Breathalyzer broken? Officer on a power trip?', btnText: 'Better Call Saul!', bgColor: 'bg-green-200', btnColor: 'bg-green-500', titleColor: 'text-green-400', outerColor: 'bg-green-400' },
      { crime: 'Theft', description: 'You just happened to pick it up!', btnText: 'Better Call Saul!', bgColor: 'bg-purple-200', btnColor: 'bg-purple-500', titleColor: 'text-purple-400', outerColor: 'bg-purple-400' },
      { crime: 'Drug charges', description: 'Wrong place, wrong time? Not your pants?', btnText: 'Better Call Saul!', bgColor: 'bg-blue-200', btnColor: 'bg-blue-500', titleColor: 'text-blue-400', outerColor: 'bg-blue-400' },
      { crime: 'Assault', description: "They insulted your mom?", btnText: 'Better Call Saul!', bgColor: 'bg-red-100', btnColor: 'bg-red-500', titleColor: 'text-red-400', outerColor: 'bg-red-400' },
    ],
  },
  {
    law: 'Elder Law',
    page: '/elderlaw',
    formColor: 'bg-yellow-300',
    details: [
      { crime: 'Estate planning', description: 'Need help protecting your future?', btnText: 'Better Call Saul!', bgColor: 'bg-green-200', btnColor: 'bg-green-500', titleColor: 'text-green-400', outerColor: 'bg-green-400' },
      { crime: 'Elder abuse', description: 'Someone took advantage of a loved one?', btnText: 'Better Call Saul!', bgColor: 'bg-red-100', btnColor: 'bg-red-500', titleColor: 'text-red-400', outerColor: 'bg-red-400' },
      { crime: 'Guardianship', description: 'Making important care decisions?', btnText: 'Better Call Saul!', bgColor: 'bg-purple-200', btnColor: 'bg-purple-500', titleColor: 'text-purple-400', outerColor: 'bg-purple-400' },
      { crime: 'Nursing home care', description: 'Concerned about the care a loved one receives?', btnText: 'Better Call Saul!', bgColor: 'bg-blue-200', btnColor: 'bg-blue-500', titleColor: 'text-blue-400', outerColor: 'bg-blue-400' },
    ],
  },
]



const HomePractices = () => {
  return (
    <section className="HomeHero  h-auto flex items-center flex-col overflow-hidden">
      <div className='Container mt-[2%] dotBg bg-white w-[96%] border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] '>
        <h1 className=' py-8 text-center font-display-xl text-[clamp(2.75rem,9vw,5rem)] uppercase leading-[0.82]'>
          <span className='text-black'>READY TO </span> <br />
          <span className='inline-block mt-[1%] bg-[#E23D28] p-4 rotate-2 text-white'>FIGHT BACK?</span>
        </h1>
      </div>
      <div className='grid w-[94%] mt-8 grid-cols-1 gap-12 px-1 pb-12 lg:grid-cols-3 lg:gap-8'>
        {SurveyInfo.map((surveyDetails, index) => {
          const isFeatured = surveyDetails.law === 'Criminal Defense'

          return (
            <Survey
              key={surveyDetails.law}
              surveyDetails={surveyDetails}
              labelTilt={index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
              featured={isFeatured}
            />
          )
        })}
      </div>
    </section>
  )
}

export default HomePractices