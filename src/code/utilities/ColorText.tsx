'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ColorText = () => {
  const letterRefs = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    const colors = ['#E23D28', '#FACC15', '#2563EB', '#16A34A', '#A855F7']
    const letters = letterRefs.current

    const colorTween = gsap.to(letters, {
      color: () => colors[Math.floor(Math.random() * colors.length)],
      duration: 0.5,
      repeat: -1,
      repeatDelay: 1.5,
      repeatRefresh: true,
      stagger: 0.04,
      ease: 'power1.inOut',
    })

    return () => {
      colorTween.kill()
    }
  }, [])

  return (
    <h1 className="font-black uppercase text-3xl md:text-4xl tracking-wider leading-none italic rotate-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] mt-1">
      <span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-red-600">N</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-yellow-400">o</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-blue-600">w</span>{' '}
      <span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-green-600">O</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-red-600">n</span>{' '}
      <span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-yellow-400">Y</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-blue-600">o</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-purple-500">u</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-red-600">r</span>{' '}
      <span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-blue-600">S</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-purple-500">i</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-red-600">d</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-yellow-400">e</span><span ref={(element) => { if (element) letterRefs.current.push(element) }} className="text-blue-600">!</span>
    </h1>
  )
}

export default ColorText
