import React from 'react'
import HomePractices from './HomePractices'

const Tv = () => {
  return (
    <section className="tv-section relative w-full bg-[#916456] overflow-hidden py-4 sm:py-6">
      <div className="tv-section-texture absolute inset-0" aria-hidden="true" />
      <div className="tv-shell relative z-10 mx-auto w-full max-w-none px-2 sm:px-4">
        <div className="tv-frame relative mx-auto w-full">
          <div className="tv-stand absolute left-1/2 top-[90%] h-14 w-[78%] -translate-x-1/2 rounded-b-[34px] bg-gradient-to-b from-[#513629] via-[#8c654b] to-[#2e1f1a] shadow-[0_28px_30px_rgba(0,0,0,0.35)]" />
          <div className="tv-base absolute left-1/2 top-[94%] h-5 w-[42%] -translate-x-1/2 rounded-full bg-[#d4c2a0] shadow-[inset_0_2px_0_rgba(0,0,0,0.2)]" />

          <div className="tv-body relative rounded-[26px] border-[10px] border-brown bg-gradient-to-b from-[#a9957d] via-[#d7c4a8] to-[#8b7057] p-2 shadow-[0_30px_35px_rgba(0,0,0,0.28)] sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-2">
                <span className="block h-3 w-3 rounded-full border-2 border-black bg-[#f24d4d] shadow-[0_0_8px_rgba(242,77,77,0.8)]" />
                <span className="block h-3 w-3 rounded-full border-2 border-black bg-[#f4d35e]" />
                <span className="block h-3 w-3 rounded-full border-2 border-black bg-[#66c97f]" />
              </div>

            </div>

            <div className="tv-screen-wrap relative overflow-hidden rounded-[18px] border-[8px] border-[#1f1a16] bg-[#b5b6ae] p-2.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.45)]">
              <div
                className="tv-screen defaultBg relative overflow-hidden rounded-[12px] border-[6px] border-[#171513] bg-[#f0efe8]"
              >
                <div className="absolute inset-0 opacity-60"  />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_56%,rgba(0,0,0,0.18)_100%)]" />
                

                <div className="tv-screen-content relative z-10 flex flex-col p-4 sm:p-6">
                  <div className="tv-channel-block flex flex-col items-end">
                    <div className="tv-channel-row flex items-center text-[10px] font-black uppercase tracking-[0.28em] text-[#f7f4e8] drop-shadow-[2px_1px_0_rgba(0,0,0,0.8)] sm:text-[11px]">
                      <span>Channel 4</span>
                    </div>

                    <div className="tv-logo-row -mr-5 flex">
                      <img
                        src="/assets/saul_logo_black.png"
                        alt="Better Call Saul"
                        className="h-20 rotate-12 w-32 object-contain"
                      />
                    </div>
                  </div>

                  <div className="tv-content-slot -mt-24 w-full">
                    <HomePractices/>
                  </div>

                  <div className="tv-footer-row flex items-end justify-between gap-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#f7f4e8] drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] sm:text-[11px]">
                    <span className='text-black'>505-503-4455</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tv-bottom-panel mt-3 flex items-center justify-between gap-4 px-2">
              <div className="tv-speaker-strip hidden h-10 w-[32%] items-center gap-1 sm:flex">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className="block h-full flex-1 rounded-full border border-[#2e241a] bg-gradient-to-b from-[#d9c2a0] via-[#a98d6a] to-[#5b402f]"
                    style={{ opacity: 0.6 + index * 0.03 }}
                  />
                ))}
              </div>

              <div className="tv-control-knobs flex items-center gap-4">
                <div className="tv-knob-pair flex items-center gap-2">
                  <span className="block h-8 w-8 rounded-full border-[4px] border-[#2a2018] bg-gradient-to-br from-[#efe9d9] via-[#d3c19d] to-[#8b6c44] shadow-[inset_0_2px_2px_rgba(255,255,255,0.5)]" />
                  <span className="block h-8 w-8 rounded-full border-[4px] border-[#2a2018] bg-gradient-to-br from-[#efe9d9] via-[#d3c19d] to-[#8b6c44] shadow-[inset_0_2px_2px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="tv-slider-pair flex items-center gap-2">
                  <span className="block h-3 w-12 rounded-full border-2 border-[#2a2018] bg-[#d9c79b]" />
                  <span className="block h-3 w-12 rounded-full border-2 border-[#2a2018] bg-[#d9c79b]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tv