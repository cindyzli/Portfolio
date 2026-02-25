'use client'

import { useState } from 'react'
import Image from 'next/image'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { ProjectsPhone } from '@/components/ProjectsPhone'
import { projectsById, type Project } from '@/data/projects'

function PreviewScreen({ project }: { project: Project | null }) {
  if (!project) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-medium text-white/30">
            Tap a project on the phone to preview it here
          </div>
        </div>
      </div>
    )
  }

  const hasEmbed = project.previewUrl
  const hasImage = project.previewImage

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 px-4 py-3">
        <div
          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg ring-1 ring-white/15"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.iconGradient[0]}, ${project.iconGradient[1]})`,
          }}
        >
          <span className="text-[10px] font-semibold text-white/95">
            {project.iconText}
          </span>
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white/90">
            {project.name}
          </div>
          <div className="truncate text-xs text-white/50">{project.tagline}</div>
        </div>
        {project.links.length > 0 && (
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
          >
            Open {project.links[0].label} &rarr;
          </a>
        )}
      </div>

      <div className="flex-1 overflow-hidden rounded-b-2xl">
        {hasImage ? (
          <div className="relative flex h-full items-center justify-center bg-black/30 p-6">
            <Image
              src={project.previewImage!}
              alt={`${project.name} preview`}
              width={1200}
              height={675}
              className="max-h-full w-auto rounded-xl object-contain shadow-2xl"
            />
          </div>
        ) : hasEmbed ? (
          <iframe
            src={project.previewUrl}
            title={`${project.name} preview`}
            className="h-full w-full border-0"
            sandbox="allow-scripts allow-same-origin allow-popups"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-white/[0.02]">
            <div className="text-center">
              <div
                className="mx-auto grid h-16 w-16 place-items-center rounded-3xl ring-1 ring-white/15"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${project.iconGradient[0]}, ${project.iconGradient[1]})`,
                }}
              >
                <span className="text-lg font-bold text-white/95">
                  {project.iconText}
                </span>
              </div>
              <div className="mt-4 text-sm font-semibold text-white/70">
                {project.name}
              </div>
              <div className="mt-1 max-w-xs text-xs text-white/40">
                {project.description}
              </div>
              {project.previewNote && (
                <div className="mt-6 inline-block rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/60 ring-1 ring-white/10">
                  {project.previewNote}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  let [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  let [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const selectedProject = selectedProjectId
    ? projectsById[selectedProjectId] ?? null
    : null

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="bg-gray-950 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Some of my recent projects!
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Tap an app on the phone to see the project details and preview.
          </p>
        </div>
      </Container>

      <Container className="mt-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          {/* Phone — left side */}
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircleBackground color="#f09d90" className="animate-spin-slower" />
            </div>
            <ProjectsPhone
              openProjectId={openProjectId}
              onOpenProjectIdHandled={() => setOpenProjectId(null)}
              onSelectProject={(id) => setSelectedProjectId(id)}
            />
          </div>

          {/* Preview screen — right side */}
          <div className="hidden h-[620px] overflow-hidden rounded-2xl bg-gray-900/60 ring-1 ring-white/10 lg:flex lg:flex-col">
            <PreviewScreen project={selectedProject} />
          </div>
        </div>
      </Container>
    </section>
  )
}
