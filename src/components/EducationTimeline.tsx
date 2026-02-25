'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

type TimelineItem = {
  id: number
  school: string
  detail: string
  gpa?: string
  date: string
  logoText: string
  logoSrc?: string
  accent: [string, string]
  ta?: string[]
  coursework?: string[]
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    school: 'Cornell University',
    detail: 'Computer Science • School of Engineering',
    gpa: '3.9 / 4.0',
    date: 'Expected 2026',
    logoText: 'CU',
    logoSrc: '/logos/Cornell_University_Logo.png',
    accent: ['#fb7185', '#a855f7'],
    ta: ['Databases', 'Discrete Mathematics', 'Financial Engineering'],
    coursework: [
      'Algorithms',
      'Data Structures & OOP',
      'Computer Vision',
      'Machine Learning',
      'Computer Systems',
      'Networks',
      'Functional Programming (OCaml)',
      'Linear Algebra',
      'Databases',
      'Discrete Structures',
      'Systems Programming',
    ],
  },
  {
    id: 2,
    school: 'Oakton High School',
    detail: 'Northern Virginia',
    gpa: '4.7 / 4.0',
    date: 'Graduated 2023',
    logoText: 'OH',
    logoSrc: '/logos/ohs.jpg',
    accent: ['#f472b6', '#fb7185'],
  },
]

function LogoSquare({
  text,
  src,
  alt,
  accent,
}: {
  text: string
  src?: string
  alt: string
  accent: [string, string]
}) {
  return (
    <div
      className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15"
      aria-label={alt}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={56}
          height={56}
          className="h-12 w-12 object-contain"
        />
      ) : (
        <span
          className="text-sm font-semibold text-white"
          style={{
            backgroundImage: `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text}
        </span>
      )}
    </div>
  )
}

const Timeline = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="relative overflow-hidden p-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-pink-400/35 via-fuchsia-400/20 to-transparent shadow-[0_0_22px_rgba(236,72,153,0.25)]" />

        {timelineData.map((milestone, index) => {
          let isOpen = openId === milestone.id
          let isRight = index % 2 === 1

          return (
            <div
              key={milestone.id}
              className={clsx(
                'mb-10 flex w-full items-center',
                isRight ? 'justify-end' : 'justify-start',
              )}
            >
              <button
                type="button"
                onClick={() => setOpenId((id) => (id === milestone.id ? null : milestone.id))}
                className={clsx(
                  'relative w-[52%] overflow-hidden rounded-3xl bg-gray-900/60 px-6 py-5 text-left text-white shadow-xl ring-1 ring-white/10 transition duration-300 hover:scale-[1.01] hover:ring-pink-300/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300',
                )}
              >
                <div
                  className={clsx(
                    'absolute inset-y-0 w-1.5',
                    isRight ? 'left-0' : 'right-0',
                  )}
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${milestone.accent[0]}, ${milestone.accent[1]})`,
                  }}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <LogoSquare
                      text={milestone.logoText}
                      src={milestone.logoSrc}
                      alt={`${milestone.school} logo`}
                      accent={milestone.accent}
                    />
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {milestone.school}
                      </h3>
                      <div className="mt-1 text-sm font-medium text-white/70">
                        {milestone.detail}
                      </div>
                      {milestone.gpa && (
                        <div className="mt-0.5 text-xs font-medium text-white/50">
                          GPA: {milestone.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
                    {milestone.date}
                  </div>
                </div>

                {isOpen && (milestone.ta || milestone.coursework) && (
                  <div className="mt-4 space-y-3 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                    {milestone.ta && (
                      <div>
                        <div className="text-xs font-semibold text-white/85">
                          Teaching Assistant
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {milestone.ta.map((course) => (
                            <span
                              key={course}
                              className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/70 ring-1 ring-white/10"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {milestone.coursework && (
                      <div>
                        <div className="text-xs font-semibold text-white/85">
                          Relevant Coursework
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {milestone.coursework.map((course) => (
                            <span
                              key={course}
                              className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/70 ring-1 ring-white/10"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {(milestone.ta || milestone.coursework) && (
                  <div className="mt-3 text-xs font-semibold text-white/70">
                    {isOpen ? 'Click to collapse' : 'Click to expand'}
                  </div>
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline