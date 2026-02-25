'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { assetPath } from '@/data/projects'

type TimelineItem = {
  id: number
  date: string
  title: string
  role: string
  team?: string
  logoText: string
  logoSrc?: string
  accent: [string, string]
  highlights: string[]
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: 'Aug 2026 – Dec 2026',
    title: 'Google',
    role: 'Software Engineering Intern',
    logoText: 'G',
    logoSrc: '/logos/Google__G__logo.svg.png',
    accent: ['#34a853', '#4285f4'],
    team: 'Gmail Backend',
    highlights: [],
  },
  {
    id: 2,
    date: 'Jun 2026 – Aug 2026',
    title: 'IMC Trading',
    role: 'Software Engineering Intern',
    logoText: 'IMC',
    logoSrc: '/logos/imclogo.jpg',
    accent: ['#60a5fa', '#3b82f6'],
    highlights: [],
  },
  {
    id: 3,
    date: 'Feb 2025 – May 2026',
    title: 'Rippling',
    role: 'Software Engineering Intern',
    logoText: 'R',
    logoSrc: '/logos/ripplinglogo.png',
    team: 'AI Platform Team',
    accent: ['#fbbf24', '#f59e0b'],
    highlights: [
      'Designed and implemented diagnostic evaluation metrics for a multi-stage ML search pipeline serving Rippling\'s Data Answers product',
      'Deployed and evaluated an LLM auto-tuning agent for semantic field clustering on Databricks, identifying gaps that reduced retrieval call'   ],
  },
  {
    id: 4,
    date: 'May 2025 – Aug 2025',
    title: 'Adobe',
    role: 'Software Engineering Intern',
    logoText: 'A',
    logoSrc: '/logos/adobe.jpg',
    accent: ['#fb7185', '#a855f7'],
    team: 'Rich Media Effects Team',
    highlights: [
      'Developed composable node-graph architecture for Adobe Express, focusing on scalable rendering infrastructure',
      'Engineered RME-to-ECS conversion pipeline with worker-thread communication architecture, enabling real-time graph processing for visual effects authoring',
    ],
  },
  {
    id: 5,
    date: 'Jun 2024 – Aug 2024',
    title: 'M&T Bank',
    role: 'Software Engineering Intern',
    logoText: 'M&T',
    logoSrc: '/logos/mt_bank_logo.jpeg',
    accent: ['#f472b6', '#fb7185'],
    highlights: [
      'Developed ETL data pipeline in Python pulling raw Microsoft SQL Server data for loan risk visualization and analytics.',
      'Replaced legacy SAS system ($2M/year valuation) for all loan data, enhancing scalability and reliability',
    ],
  },
  {
    id: 6,
    date: 'Aug 2023 – Aug 2024',
    title: 'YC – Page One Lab',
    role: 'Full‑Stack Developer',
    logoText: 'YC',
    logoSrc: '/logos/Y_Combinator_logo.svg.png',
    accent: ['#a78bfa', '#22d3ee'],
    highlights: [
      'Designed and implemented end-to-end architecture for a multi-tenant form-building platform, from frontend React interface to backend data pipelines (Node.js, MongoDB).',
      'Collaborated with a product designer to create user-centric workflows, while designing the backend system architecture and database schema for scalable data storage and retrieval.',
    ],
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
                      src={milestone.logoSrc ? assetPath(milestone.logoSrc) : undefined}
                      alt={`${milestone.title} logo`}
                      accent={milestone.accent}
                    />
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {milestone.title}
                      </h3>
                      <div className="mt-1 text-sm font-medium text-white/70">
                        {milestone.role}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
                    {milestone.date}
                  </div>
                </div>

                {isOpen && milestone.highlights.length > 0 && (
                  <div className="mt-4 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-semibold text-white/85">
                      {milestone.team ?? 'Highlights'}
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-white/75">
                      {milestone.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {milestone.highlights.length > 0 && (
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