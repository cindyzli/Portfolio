'use client'

import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import { PhoneFrame } from '@/components/PhoneFrame'
import { Button } from '@/components/Button'
import { phoneHome, projectsById, type Project, type PhoneHomeItem } from '@/data/projects'

type PhoneView =
  | { kind: 'home' }
  | { kind: 'folder'; folderId: string }
  | { kind: 'project'; projectId: string; backTo: PhoneView }

function gradientStyle(project: Project) {
  return {
    backgroundImage: `linear-gradient(135deg, ${project.iconGradient[0]}, ${project.iconGradient[1]})`,
  } as const
}

function AppTile({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (projectId: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className="group flex flex-col items-center gap-1 rounded-2xl p-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
    >
      <div
        className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl shadow ring-1 ring-white/15 transition-transform group-active:scale-95"
        style={project.iconImage ? undefined : gradientStyle(project)}
      >
        {project.iconImage ? (
          <Image
            src={project.iconImage}
            alt={project.name}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-semibold tracking-wide text-white/95">
            {project.iconText}
          </span>
        )}
      </div>
      <div className="w-16 truncate text-center text-[10px] leading-4 text-white/80">
        {project.appLabel}
      </div>
    </button>
  )
}

function FolderTile({
  name,
  items,
  onOpen,
}: {
  name: string
  items: Project[]
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col items-center gap-1 rounded-2xl p-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
    >
      <div className="grid h-14 w-14 grid-cols-2 gap-1 rounded-2xl bg-white/10 p-2 shadow ring-1 ring-white/15 transition-transform group-active:scale-95">
        {items.slice(0, 4).map((p) => (
          <div
            key={p.id}
            className="rounded-md ring-1 ring-white/10"
            style={gradientStyle(p)}
          />
        ))}
      </div>
      <div className="w-16 truncate text-center text-[10px] leading-4 text-white/80">
        {name}
      </div>
    </button>
  )
}

function TopStatusBar() {
  let time = useMemo(() => {
    let d = new Date()
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }, [])

  return (
    <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-medium text-white/70">
      <div className="tabular-nums">{time}</div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-4 rounded-full bg-white/30" />
        <div className="h-1.5 w-4 rounded-full bg-white/30" />
        <div className="h-2.5 w-6 rounded-full bg-white/15 ring-1 ring-white/20">
          <div className="h-full w-3 rounded-full bg-white/60" />
        </div>
      </div>
    </div>
  )
}

function PhoneHomeScreen({
  items,
  onOpenProject,
  onOpenFolder,
}: {
  items: PhoneHomeItem[]
  onOpenProject: (projectId: string) => void
  onOpenFolder: (folderId: string) => void
}) {
  return (
    <div className="flex h-full flex-col">
      <TopStatusBar />
      <div className="mt-4 px-4">
        <div className="text-xs font-semibold text-white/80">Projects</div>
        <div className="text-[11px] text-white/50">
          Tap an app or open the Hackathons folder.
        </div>
      </div>
      <div className="mt-4 grid flex-1 grid-cols-4 gap-2 px-4 pb-4">
        {items.map((item) => {
          if (item.type === 'app') {
            let project = projectsById[item.projectId]
            if (!project) return null
            return (
              <AppTile
                key={project.id}
                project={project}
                onOpen={onOpenProject}
              />
            )
          }

          let folderProjects = item.items
            .map((i) => projectsById[i.projectId])
            .filter((p): p is Project => Boolean(p))
          return (
            <FolderTile
              key={item.id}
              name={item.name}
              items={folderProjects}
              onOpen={() => onOpenFolder(item.id)}
            />
          )
        })}
      </div>
      <div className="px-4 pb-4">
        <div className="grid grid-cols-4 gap-2 rounded-3xl bg-white/10 p-2 ring-1 ring-white/15">
          <div className="h-10 rounded-2xl bg-white/10" />
          <div className="h-10 rounded-2xl bg-white/10" />
          <div className="h-10 rounded-2xl bg-white/10" />
          <div className="h-10 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  )
}

function FolderOverlay({
  title,
  projects,
  onClose,
  onOpenProject,
}: {
  title: string
  projects: Project[]
  onClose: () => void
  onOpenProject: (projectId: string) => void
}) {
  return (
    <motion.div
      className="absolute inset-0 z-20 grid place-items-center bg-black/40 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full rounded-3xl bg-gray-900/80 p-4 ring-1 ring-white/15"
        initial={{ y: 12, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 12, scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.18 }}
      >
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-white/90">{title}</div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
          >
            Close
          </button>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {projects.map((project) => (
            <AppTile key={project.id} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectDetail({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) {
  return (
    <motion.div
      className="absolute inset-0 z-30 flex h-full flex-col bg-gray-900"
      initial={{ x: '15%', opacity: 0 }}
      animate={{ x: '0%', opacity: 1 }}
      exit={{ x: '15%', opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 px-4 pt-3">
        <button
          type="button"
          onClick={onBack}
          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
        >
          Back
        </button>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white/90">
            {project.name}
          </div>
          <div className="truncate text-[11px] text-white/50">{project.tagline}</div>
        </div>
      </div>

      <div className="mt-4 flex-1 overflow-y-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center gap-3 rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
          <div
            className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl ring-1 ring-white/15"
            style={project.iconImage ? undefined : gradientStyle(project)}
          >
            {project.iconImage ? (
              <Image
                src={project.iconImage}
                alt={project.name}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm font-semibold text-white/95">
                {project.iconText}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white/90">
              {project.name}
            </div>
            <div className="text-[11px] leading-4 text-white/60">
              {project.description}
            </div>
          </div>
        </div>

        {project.award && (
          <div className="mt-3 flex items-center gap-2 rounded-2xl bg-yellow-500/10 px-3 py-2.5 ring-1 ring-yellow-400/20">
            <span className="text-sm">🏆</span>
            <span className="text-[11px] font-semibold text-yellow-300/90">
              {project.award}
            </span>
          </div>
        )}

        {project.advisor && (
          <div className="mt-3 rounded-2xl bg-cyan-500/10 px-3 py-2.5 ring-1 ring-cyan-400/20">
            <span className="text-[11px] font-semibold text-cyan-300/90">
              {project.advisor}
            </span>
          </div>
        )}

        {project.stack.length > 0 && (
        <div className="mt-4">
          <div className="text-xs font-semibold text-white/80">Stack</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium text-white/70 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        )}

        {project.links.length > 0 && (
          <div className="mt-5">
            <div className="text-xs font-semibold text-white/80">Links</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.links.map((l) => (
                <Button
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  className="border-white/20 text-white/80 hover:border-white/30 hover:text-white"
                >
                  {l.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function ProjectsPhone({
  className,
  openProjectId,
  onOpenProjectIdHandled,
  onSelectProject,
}: {
  className?: string
  openProjectId?: string | null
  onOpenProjectIdHandled?: () => void
  onSelectProject?: (projectId: string) => void
}) {
  let [view, setView] = useState<PhoneView>({ kind: 'home' })

  const openProject = (projectId: string, backTo: PhoneView) => {
    setView({ kind: 'project', projectId, backTo })
    onSelectProject?.(projectId)
  }

  useEffect(() => {
    if (!openProjectId) return
    let project = projectsById[openProjectId]
    if (!project) return
    openProject(project.id, view)
    onOpenProjectIdHandled?.()
  }, [openProjectId, onOpenProjectIdHandled])

  let folder =
    view.kind === 'folder'
      ? phoneHome.find(
          (i): i is Extract<PhoneHomeItem, { type: 'folder' }> =>
            i.type === 'folder' && i.id === view.folderId,
        )
      : null

  let folderProjects =
    folder?.items
      .map((i) => projectsById[i.projectId])
      .filter((p): p is Project => Boolean(p)) ?? []

  return (
    <PhoneFrame className={clsx('mx-auto w-full max-w-[366px]', className)} priority>
      <div className="relative h-full w-full bg-gray-900">
        <PhoneHomeScreen
          items={phoneHome}
          onOpenProject={(projectId) =>
            openProject(projectId, view)
          }
          onOpenFolder={(folderId) => setView({ kind: 'folder', folderId })}
        />

        <AnimatePresence>
          {view.kind === 'folder' && folder && (
            <FolderOverlay
              title={folder.name}
              projects={folderProjects}
              onClose={() => setView({ kind: 'home' })}
              onOpenProject={(projectId) =>
                openProject(projectId, view)
              }
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {view.kind === 'project' && projectsById[view.projectId] && (
            <ProjectDetail
              project={projectsById[view.projectId]}
              onBack={() => setView(view.backTo)}
            />
          )}
        </AnimatePresence>
      </div>
    </PhoneFrame>
  )
}

