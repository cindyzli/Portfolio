'use client'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

import pic1 from '@/images/logos/pic1.jpg'
import pic2 from '@/images/logos/pic2.jpg'
import pic3 from '@/images/logos/pic3.jpg'
import pic4 from '@/images/logos/pic4.jpg'

const photos: StaticImageData[] = [pic1, pic2, pic3, pic4]

const languages = [
  'Python',
  'Java',
  'C++',
  'Julia',
  'OCaml',
  'TypeScript',
  'JavaScript',
]

export function About() {
  const [flipped, setFlipped] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % photos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-950 py-20 sm:py-28"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <CircleBackground color="#f09d90" className="animate-spin-slower" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl" style={{ perspective: '1200px' }}>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="group relative w-full cursor-pointer focus:outline-none"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s cubic-bezier(.4,.2,.2,1)',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* ---- FRONT ---- */}
            <div
              className="relative w-full rounded-3xl border border-white/[0.08] bg-gray-900/80 px-8 py-10 text-left shadow-[0_0_80px_-20px_rgba(236,72,153,0.15)] ring-1 ring-white/10 backdrop-blur-md sm:px-12 sm:py-12"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
                <div className="relative h-[290px] w-[220px] shrink-0">
                  <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-pink-400/30 via-purple-400/10 to-transparent blur-xl" />
                  {photos.map((photo, i) => (
                    <Image
                      key={i}
                      src={photo}
                      alt="Photo of Cindy"
                      width={220}
                      height={290}
                      className="absolute inset-0 h-full w-full rounded-[20px] object-cover ring-1 ring-white/10 shadow-2xl transition-opacity duration-700"
                      style={{ opacity: i === photoIndex ? 1 : 0 }}
                      priority={i === 0}
                    />
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                    Hello World <span className="inline-block animate-[wave_1.8s_ease-in-out_infinite]">👋</span>
                  </h2>
                  <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-300 sm:text-lg">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400/70" />
                      Studying Computer Science @ Cornell University
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400/70" />
                      Interests in backend, optimization, machine learning, AI, and quant finance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400/70" />
                      Like building things cool, fast, and for a purpose
                    </li>
                  </ul>
                  <div className="mt-5 text-xs font-semibold text-white/50 transition group-hover:text-white/70">
                    Click to flip &rarr;
                  </div>
                </div>
              </div>
            </div>

            {/* ---- BACK ---- */}
            <div
              className="absolute inset-0 w-full rounded-3xl border border-white/[0.08] bg-gray-900/80 px-8 py-10 text-left shadow-[0_0_80px_-20px_rgba(236,72,153,0.15)] ring-1 ring-white/10 backdrop-blur-md sm:px-12 sm:py-12"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    Languages
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Currently
                  </div>
                  <div className="mt-2 text-base font-medium text-white sm:text-lg">
                    Software Engineering Co-op @{' '}
                    <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text font-semibold text-transparent">
                      Rippling
                    </span>{' '}
                    in NYC
                  </div>
                </div>

                <div className="mt-5 text-xs font-semibold text-white/50 transition group-hover:text-white/70">
                  &larr; Click to flip back
                </div>
              </div>
            </div>
          </button>
        </div>
      </Container>
    </section>
  )
}
