import React from 'react'

const marqueeWords = [
  'Free Consultation',
  'Criminal Defense',
  'Personal Injury',
  'Elder Law',
  'Albuquerque #1 Lawyer'
]

const MarqueeTrack = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <section className="overflow-hidden border-y-4 border-black testimonial-cta-bg py-3">
      <div className={reverse ? 'flex w-max animate-marquee-reverse gap-8 whitespace-nowrap' : 'flex w-max animate-marquee gap-8 whitespace-nowrap'}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            {marqueeWords.map((word) => (
              <span key={word} className="flex items-center gap-8 font-black uppercase tracking-[-0.03em] text-[clamp(1.4rem,2vw,2rem)] text-[#171411]">
                <span className="border-2 border-black bg-[#f7f2e8] px-3 py-1 shadow-[3px_3px_0_#171411] transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1">
                  {word}
                </span>
                <span className="text-[#dd7b1a] drop-shadow-[2px_2px_0_#171411]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export const Marquee = () => {
  return <MarqueeTrack />
}

export const MarqueeReverse = () => {
  return <MarqueeTrack reverse />
}

export default Marquee